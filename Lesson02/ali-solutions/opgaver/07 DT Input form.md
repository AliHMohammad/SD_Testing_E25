### Input form

An input form has two textboxes ("Username" and "Password"). Access to the homepage will be granted only if both fields are correct. Represent the situation in a decision table.

---

| Partition type | R1  | R2  | R3  | R3  |
| -------------- | --- | --- | --- | --- |
| Conditions     | --  | --  | --  | --  |
| Username       | F   | T   | F   | T   |
| password       | F   | F   | T   | T   |
| Actions        | --  | --  | --  | --  |
| Access         | N   | N   | N   | Y   |

Reduced:

| Partition type | R1  | R2  | R3  |
| -------------- | --- | --- | --- |
| Conditions     |
| Username       | F   | -   | F   |
| password       | -   | F   | T   |
| Actions        |
| Access         | N   | N   | Y   |
