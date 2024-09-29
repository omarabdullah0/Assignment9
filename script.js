$(document).ready(function () {
    $('#calculate-age').click(function () {
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();

        var isValid = true;

        $('#day-error').text('');
        $('#month-error').text('');
        $('#year-error').text('');


        $('#day-label').css('color', '');
        $('#month-label').css('color', '');
        $('#year-label').css('color', '');

        $('#day').css('border', '1px solid #ccc');
        $('#month').css('border', '1px solid #ccc');
        $('#year').css('border', '1px solid #ccc');


        if (!day || isNaN(day) || day < 1 || day > 31) {
            $('#day-error').text("Must be a valid day");
            $('#day').css('border', '2px solid red');
            $('#day-label').css('color', 'red');
            isValid = false;
        }

        if (!month || isNaN(month) || month < 1 || month > 12) {
            $('#month-error').text("Must be a valid month");
            $('#month').css('border', '2px solid red');
            $('#month-label').css('color', 'red');
            isValid = false;
        }

        if (!year || isNaN(year) || year.length !== 4 || year < 1900 || year > new Date().getFullYear()) {
            $('#year-error').text("Must be in the Past");
            $('#year').css('border', '2px solid red');
            $('#year-label').css('color', 'red');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        var birthDate = new Date(year, month - 1, day);
        var today = new Date();

        var ageYears = today.getFullYear() - birthDate.getFullYear();
        var ageMonths = today.getMonth() - birthDate.getMonth();
        var ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        $('.years .dash').text(ageYears);
        $('.months .dash').text(ageMonths);
        $('.days .dash').text(ageDays);
    });
});