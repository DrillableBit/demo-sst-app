import Stripe from "stripe";
import handler from "@notes/core/handler";
import { calculateCost } from "@notes/core/cost";
import { CheckGetBase64 } from "@notes/core/src/CheckGetBase64";
import setup from "@notes/core/src/setup";

import { Table } from "sst/node/table";
import dynamoDb from "@notes/core/dynamodb";
import { parseKey } from "@notes/core/dynamoParse";

export const main = handler(async (event) => {
  const userId = event.requestContext.authorizer.jwt.claims.sub;
  const body = JSON.parse(CheckGetBase64(event));
  const { storage, source } = body;
  const amount = calculateCost(storage);
  const description = "Scratch charge";
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const response = await stripe.charges.create({
    source,
    amount,
    description,
    currency: setup.defaultCurrency,
  });

  if (response.paid === true) {
    const params = {
      TableName: Table.dynamo.tableName,
      Key: {
        partitionKey: parseKey("user", userId), // The id of the author
        sortKey: parseKey("user", userId), // The id of the note from the path
      },

      UpdateExpression: "SET #credits =  #credits + :incrementValue",
      ExpressionAttributeNames: {  
        '#credits': 'credits'
    },
      ExpressionAttributeValues: {
        ":incrementValue": parseInt(storage) || null,
       
      },
      ReturnValues: "ALL_NEW",
    };

    const updateCredits_response =  await dynamoDb.update(params);

    return {
      message: `You have succesfully purchased ${storage} credits. You now have ${updateCredits_response.Attributes.credits} credits!`,
      paymentSuccess: true,
      status: 200,
    };
  } else {
    return {
      message: "Your card has been declined. Please try again.",
      paymentSuccess: false,
      status: 200,
    };
  }
});
