## Component Hierarchy

**SplashPageContainer**
  - Header
  - Splash Page

**AuthFormContainer**
  - Header
  - AuthForm

**Header**
  - Logo
  - Signin/Login OR Signout

**HomeContainer**
  - Header
  + Sidebar
  - Dashboard
    + Expenses Index

**ExpensesContainer**
  + Expense Index
    + Expense Index Item
      - Date Issued
      - Friend Name
      - Amount Owed
      - Description

**FriendContainer**
  + Friend Detail
    - Header
    - Friend Header
      - Friend Name
      + Settle Up
      + Add Expense
    + Sidebar
    - Balance

**Transactions Index Item**
  - Date Issued
  - Description
  - You Paid
  - Amount Owed
  + Delete Expense

**Sidebar**
  - Dashboard Header
  + FriendContainer
    - Friend Search
    + Friends Index
      - Friend Name
    + Search Users
    + Invite Friends Form
      - Email
      - Send

**Balance**
  - Total balance
  + Transaction Index
    - Transaction Index Item

**Settle Up**
  - Title
  - Description
  - Amount Owed
  - Cancel
  - Settle Up / Venmo

**Add Expense**
  - Title
  + Add Expense Form
    - Description
    - You Paid
    - Friend Owes
    - Add Expense

**Delete Expense**
  - Title
  - Description
  - Delete

## Routes
|Path    | Component    |
|--------|--------------|
| "/"    | "SplashPageContainer" |
| "/signup" | "AuthFormContainer" |
| "/home"    | "HomeContainer" |
| "/friend/:id"  | "FriendContainer" |
