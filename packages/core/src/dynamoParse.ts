// This DynamoDB table uses single table design:
// with PK(partitionKey) and SK(sortKey)

import { error } from "console"

// This table includes the following: 
// user = user
// note = note

// use like: 
// user#1234 user#1234 === user 1234 table, add user fields
// note#1212 note#1212 === note 1212 table, add note fields
// user#1234 note#1212 === connection between note and user, add connection fields


export function parseKey (Key: string, Value : any) {
    if (!Key) throw new Error('Key is required')
    // if (!Value) throw new Error('Value is required')
    if (Key === "user") {
        return `user#${Value}`
    }
    if (Key === "note") {
        return `note#${Value}`
    }
    else {
        throw Error('Key is not valid')
    }
}
