### Coverage calculation

#### Algorithm
Define a minimum set of test cases for the following pseudocode to reach
1. 100% statement coverage
2. 100% decision coverage

```
IF q <= 5 THEN
    x = 100
ELSE
    x = 50
ENDIF

IF r >= 22 THEN
    x = 500
    IF s < 13 THEN
        x = 200
    ENDIF
ENDIF
```

##### Solution:

Statement:

1. q = 3, r = 25, s = 10 (all ifs)
2. q = 8, r = 25, s = 10 (first else, then all ifs)

Decision:

1. q = 3, r = 25, s = 10 (all ifs)
2. q = 8, r = 20, s = 10 (first and second elses)
3. q = 8, r = 25, s = 15 (else - if - else)


#### Grading
Define a minimum set of test cases for the following pseudocode to reach
1. 100% statement coverage
2. 100% decision coverage

```
Program Grading
    StudentScore: integer
    Result: string
Begin
    Read StudentScore
    If StudentScore > 79
    Then Result = "Distinction"
    Else
        If StudentScore > 59
        Then Result = "Merit"
        Else
            If StudentScore > 39
            Then Result = "Pass"
            Else Result = "Fail"
            Endif
       Endif
    Endif
    Print ("Your result is", Result)
End
```

##### Solution:

Statement:

1. StudentScore = 80
2. StudentScore = 70
3. StudentScore = 40
4. StudentScore = 20

Decision:

1. StudentScore = 80
2. StudentScore = 70
3. StudentScore = 40
4. StudentScore = 20


#### Interest
Define a minimum set of test cases for the following pseudocode to reach
1. 100% statement coverage
2. 100% decision coverage

```
 1 Program BestInterest
 2 Interest, BaseRate, Balance: Real
 3
 4 Begin
 5 BaseRate = 0.035
 6 Interest = BaseRate
 7
 8 Read (Balance)
 9 If Balance > 1000
10 Then
11     Interest = Interest + 0.005
12     If Balance < 10000
13     Then
14            Interest = Interest + 0.005
15     Else
16            Interest = Interest + 0.01
17     Endif
18 Endif
19
20 Balance = Balance × (1 + Interest)
21
22 End
```

##### Solution:

Statement:

1. Balance = 5000
2. Balance = 15000

Decision:

1. Balance = 100
2. Balance = 5000
3. Balance = 15000

#### Number
Define a minimum set of test cases for the following pseudocode to reach
1. 100% statement coverage
2. 100% decision coverage

```
lContinue = true;

while(lContinue)
  Write "Enter number: ";
  Read nNumber;
  
  if(nNumber = 0) 
    lContinue = false;
  else 
    Write "Choose an option: ";
    Write "0. Quit";
    Write "1. Check if even or odd";
    Write "2. Check if prime";
    Read nOption;

    if(nOption = 0)
      lContinue = false;
    else
      if(nOption = 1)
        if(nNumber MOD 2 = 0)
          Write "Even";
        else
          Write "Odd";
      else
        if(nOption = 2)
          if(IsPrime(nNumber))
            Write "Prime";
          else
            Write "Not prime";
Write "Goodbye";
```

##### Solution:

Statement:

1. nNumber = 1, nOption = 0
2. nNumber = 1, nOption = 1
3. nNumber = 2, nOption = 1
4. nNumber = 4, nOption = 2
5. nNumber = 5, nOption = 2
6. nNumber = 0, nOption = --

Decision:

1. nNumber = 0, nOption = --
2. nNumber = 1, nOption = 0
3. nNumber = 1, nOption = 1
4. nNumber = 2, nOption = 1
5. nNumber = 4, nOption = 2
6. nNumber = 5, nOption = 2
7. nNumber = 1, nOption = 3

#### Employees

Define a minimum set of test cases for the following pseudocode to reach
1. 100% statement coverage
2. 100% decision coverage

```
NumEmployees = 0

Write "Insert country code"
Read CountryCode

Open employees file
If not error
    While not eof
        Read file line
        If employee's country code = CountryCode
            Write "Name: " + employee's name
            NumEmployees++
        Endif
    Endwhile
    Close employees file
    Write "Total employees: " + NumEmployees
Else
    Write "Error opening the file"
Endif
```

##### Solution:

Statement:

1. Employee file error
2. Employee file not error and atleast 1 employee exists with input countryCode


Decision:

1. Employee file error
2. Employee file not error and 1 employee exists with input countryCode
3. Employee file not error and 1 employee that does not have input countryCode


Exercises based on Brian Hambling’s *Software Testing: An ISTQB-BCS Certified Tester Foundation Guide*, 4th ed. (2019)
