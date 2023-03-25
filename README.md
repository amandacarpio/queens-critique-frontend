# Sweet Treats
### Concept
Sweet Treats is an online site where customer is able to order any customized dessert they want. Customers will be able to extensively describe how they want their dessert made, advise of allergies, and select their budget when submitting.

### Backend Technologies Used

* Django
* Bit.io
* Python
* PostgreSQL
* Render.com


### Model

|Name|Data Type|
|----|----|
|id| Serial |
| Dessert Name | varchar(50)
| Allergies | varchar(50)|
| Dessert Details | varchar(250) |
| Email | varchar(50)|
| Budget | varchar(6)|

### Routes
|Path|Action| Description
|----|----|----|
|'/'| Main | Homepage displays images of previous desserts made and a button that takes user to the create route.
|'/sweettreats/create'| Create| Create page will allow user to create a customized order.
|'/sweettreats/:id' | Show | Show page will display customized order details and will give customers the option to update and/or delete.
|'/sweettreats/update/:id' | Update | Will update the customized order.
|'/sweettreats/delete/:id' | Delete | Will delete the customized order.