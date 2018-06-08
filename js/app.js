function addDetails() {
    console.log('Add button clicked');
    // Check if user has entered all required data
    // If not show error message
    // Else post it
    if (validateFirstName()) {
        if (validateFullName()) {
            if(validateDesignation()){
            // Do a Post
            postData();
        }
        else{
            displayErrorMessageForDesignation();
        }
        }
        else {
            // Display error message for full Name
            displayErrorMessageForFullName();
        }
    } 
    else {
        // Display error message for first Name
        displayErrorMessageForFirstName();
    }

}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}

function displayErrorMessageForDesignation(){
    $('#errForDesig').show();
}


function validateFirstName() {
    const firstName = $('#firstName').val();
    if (firstName === '') {
        $('span-for-errors').show();
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '') {
       
        return false;
    }
    return true;
}

function validateDesignation() {
    const DesignName = $('#designation').val();
    if (DesignName === '') {
        $('span-for-errors').show();
        return false;
    }
    return true;
}


function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        DesignName: $('#designation').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-application-form.firebaseio.com/applicationIds.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    // Initialize
    $('.span-for-errors').hide();
});







