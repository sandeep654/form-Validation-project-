let bankName = document.getElementById('bankName');
let accountNumber = document.getElementById('accountNumber');
let bankHolderName = document.getElementById('bankHolderName');
let mobileNumber = document.getElementById('mobileNumber');


// some validation added and by using the Events 

let Validation = document.getElementById('validation');
        Validation.addEventListener('click', function () {
        
            let isValid = true;

            if (bankName.value.trim() === '') {
                let bankNameError = document.getElementById('bankNameError');
                bankNameError.innerText = 'Please Enter your bank Name ';
                bankNameError.style.display = 'inline';
                isValid = false;
            }

            if (accountNumber.value.trim() === '' || (accountNumber.value.length < 10 || accountNumber.value.length > 15)) {
                let accountNameError = document.getElementById('accountNumberError');
                accountNameError.innerText = 'Please Enter your account number and It should be more than 10 or less than 15 digit';
                accountNameError.style.display = 'inline';
                isValid = false;
            }

            if (bankHolderName.value.trim() === '' || (bankHolderName.value.length < 3 || bankHolderName.value.length > 20)) {
                let bankHolderNameError = document.getElementById('bankHolderNameError');
                bankHolderNameError.innerText = "Bank Holder name more than 3 character and less than 20 characters";
                bankHolderNameError.style.display = 'inline';
                isValid = false;
            }

            if (mobileNumber.value.trim() === '' || mobileNumber.value.length !== 10) {
                let mobileNumberError = document.getElementById('mobileNumberError');
                mobileNumberError.innerText = 'Please Enter a valid 10 digit number';
                mobileNumberError.style.display = 'inline';
                isValid = false;
            }

            if (isValid == true) {

                let message = `
                Confirm the bank details <br>
                Bank Name: ${bankName.value} <br>
                Account Number: ${accountNumber.value} <br>
                User Name: ${bankHolderName.value} <br>
                Mobile Number: ${mobileNumber.value} `;

                let confirmationPage = document.getElementById('confirmationPage');
                confirmationPage.innerHTML = message;

                document.getElementById('confirmDetail').style.display = 'inline';
                document.getElementById('editDetails').style.display = 'inline';

                bankName.value = '';
                accountNumber.value = '';
                bankHolderName.value = '';
                mobileNumber.value = '';
            }

        })

        // Event for error remove while typing on input
    
        bankName.addEventListener('input' , function (){
          document.getElementById('bankNameError').style.display = 'none' ;
        })

        accountNumber.addEventListener('input' , function (){
            document.getElementById('accountNumberError').style.display = 'none' ;
          })
        
          bankHolderName.addEventListener('input' , function (){
            document.getElementById('bankHolderNameError').style.display = 'none' ;
          })

          mobileNumber.addEventListener('input' , function (){
            document.getElementById('mobileNumberError').style.display = 'none' ;
          })             

        // Event for Successfully submission.
        let confirmDetail = document.getElementById('confirmDetail');
        confirmDetail.addEventListener('click', function () {
            let message = `
        Thank you ji, Your form has been Successfully Submitted. ` ;
            let confirmationPage = document.getElementById('confirmationPage');
            confirmationPage.innerHTML = message;

            document.getElementById('confirmDetail').style.display = 'none';
            document.getElementById('editDetails').style.display = 'none';

        })




        // Event for edit details..
        let editDetails = document.getElementById('editDetails');
        editDetails.addEventListener('click', function () {
            alert('Edit the details');
        })
 