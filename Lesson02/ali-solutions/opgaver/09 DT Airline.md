### Airline discount policy
An airline offers only flights to India and Asia. Under special conditions, a discount is offered on the normal airfare:
- Passengers older than 18 with destinations in India are offered a discount of 20%, as long as the departure is not on a Monday or Friday
- For destinations outside of India, passengers are offered a discount of 25%, if the departure is not on a Monday or Friday
- Passengers who stay at least 6 days at their destination receive an additional discount of 10%
- Passengers older than 2 but younger than 18 years are offered a discount of 40% for all destinations
- Children 2 and under travel for free

Apply black-box test design:
1. Represent this information in a decision table.


- R1: Free travel
- R2-3: 40% discount, kids
- R4-7: Above 18, Travel to India,
- R8-11: Above 18, Travel outside India

| Partition type         | R1  | R2  | R3  | R4  | R5  | R6  | R7  | R8  | R9  | R10 | R11 |
| ---------------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Conditions**         |     |     |     |     |     |     |     |     |     |     |     |
| Age ≤ 2                | T   | -   | -   | -   | -   | -   | -   | -   | -   | -   | -   |
| Age 3-18               | -   | T   | T   | -   | -   | -   | -   | -   | -   | -   | -   |
| Age > 18               | -   | -   | -   | T   | T   | T   | T   | T   | T   | T   | T   |
| Destination in India   | -   | -   | -   | T   | T   | T   | T   | F   | F   | F   | F   |
| Departure on Mon/Fri   | -   | -   | -   | F   | F   | T   | T   | T   | T   | F   | F   |
| Staying atleast 6 days | -   | F   | T   | F   | T   | F   | T   | F   | T   | F   | T   |
| **Actions**            |     |     |     |     |     |     |     |     |     |     |     |
| 10% discount           | N/A | N   | Y   | N   | Y   | N   | Y   | N   | Y   | N   | Y   |
| 20% discount           | N/A | N   | N   | Y   | Y   | N   | N   | N   | N   | N   | N   |
| 25% discount           | N/A | N   | N   | N   | N   | N   | N   | N   | N   | Y   | Y   |
| 40% discount           | N/A | Y   | Y   | N   | N   | N   | N   | N   | N   | N   | N   |
| Free travel            | Y   | N   | N   | N   | N   | N   | N   | N   | N   | N   | N   |




2. Write the corresponding unit tests (one test case per business rule) using the programming language and unit test framework of your choice

<sub>Adapted from FlexRule, ["Preparing a decision table"](https://resource.flexrule.com/knowledge-base/preparing-a-decision-table/)</sub>


