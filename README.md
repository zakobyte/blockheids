# Blockhieds

## Initial block class.

A new block is given some data when it is made (instantiated):
|               |                                                         |
|---------------|---------------------------------------------------------|
| Timestamp     | Autogenerated time of creation                          |
| Data-object   | What it stores - could be money value, data, programme  |
| Previous hash | Unique identifier of the preceeding version             |
|---------------|---------------------------------------------------------|

| 1  |   |   |   |   |
|----|---|---|---|---|
|  1 |   |   |   |   |
|  1 |   |   |   |   |
|  1 |   |   |   |   |

It has one method - generateHash()

A hash is a unique identifier. It is made by applying a cryptographic algorithm to the data to generate a unique vaue that is converted to string.

When the data is changed a new block with a new hash is created. The new block will reference the original hash as the preceeding hash. Blocks that change are appended to the blockchain. It is different to updating a database record. Each update creates a new entry.