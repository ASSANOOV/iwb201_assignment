$(document).ready(function() {
    $('.toggle-details').on('change', function() {
        const detailsDiv = $(this).closest('tr').find('.details');
        if ($(this).is(':checked')) {
            detailsDiv.show();
        } else {
            detailsDiv.hide();
        }
    });
   
var modal = document.getElementById('myModal');
var continueButton = document.getElementById('continueButton');
var closeBtn = document.getElementsByClassName('close')[0];

var correctAnswer;

    function generateRandomNumbers() {
        var num1 = Math.floor(Math.random() * 10); 
        var num2 = Math.floor(Math.random() * 10); 
        document.getElementById("equationLabel").textContent = "حل المعادلة: " + num1 + " + " + num2 + " = ";
        correctAnswer = num1 + num2; 
    }

    function validateForm(event) {
        var userInput = document.getElementById("captcha").value;
        if (parseInt(userInput) !== correctAnswer) {
            alert("يرجى حل المعادلة بشكل صحيح.");
            event.preventDefault(); 
        }
    }

    window.onload = function() {
        generateRandomNumbers();
    };

    var modal = document.getElementById('myModal');
    var continueButton = document.getElementById('continueButton');
    var closeBtn = document.getElementsByClassName('close')[0];

    continueButton.onclick = function() {
        if ($('input[name="property"]:checked').length > 0) {
            modal.style.display = 'block';
        } else {
            alert('الرجاء اختيار عقار أولاً.');
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // ربط دالة التحقق بالنموذج
    document.getElementById("customerForm").addEventListener("submit", validateForm);

    
});

