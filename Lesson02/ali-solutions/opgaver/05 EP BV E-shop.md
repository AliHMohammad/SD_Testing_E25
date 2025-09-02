### E-shop
You are testing the payment functionality of an e-shop. The system receives a positive amount of purchases in kroner with an accuracy of 1 øre. Based on this value, a discount is calculated according to the following rules:

|Amount|Discount|
|-|--:|
|Up to 300 kr|0%|
|Over 300 kr, up to 800 kr|5%|
|Over 800 kr|10%|

Use black-box analysis to identify a comprehensive series of test cases:
1. Identify the corresponding equivalence partitions and propose test cases based on them
2. Use 3-value boundary value analysis to identify further test cases
3. Write down the full resulting list of test cases
4. Implement the discount calculation function in code and write the corresponding unit tests in the language and unit test framework of your choice

----


| Partition type | Partitions        | Test case values | Expected output | Boundary values | Test case values   |
|----------------|-------------------|------------------|-----------------|-----------------|--------------------|
| Valid          | 0.01-300          | 150.50           | 0               | 0.01, 300       | 0, 0.01, 0.02, 299.99, 300, 300.01     |
| Valid          | 300.01-800        | 550.50           | 5               | 300.01, 800     | 300, 300.01, 300.02, 799.99, 800, 800.01         |
| Valid          | 800.01-INFINITY   | 1000                | 10              | 800.01       | 800, 800.01, 800.02 |
| Invalid        | MINUS INFINITY-0  | -5               | Error           | 0               | -0.01, 0, 0.01            |
