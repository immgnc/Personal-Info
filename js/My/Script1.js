 

$.ajax({

    url: 'https://randomuser.me/api/',

    success: function (data) {
        $('#profilePhoto').html(`<img src=${data.results[0].picture.large} alt="Profile Photo" class="col-12 p-0" style = "border-radius: 50%";  ></img> `);
        $('#name').text(`${data.results[0].name.first} ${data.results[0].name.last}`);
        $('#forName').text(`Hi, My name is`);

        $('#fullName').mouseover(function () {
            $('#name').text(`${data.results[0].name.first} ${data.results[0].name.last}`)
            $('#forName').text(`Hi, My name is`)
        })

        $('#email').mouseover(function () {
            $('#name').text(`${data.results[0].email}`)
            $('#forName').text(`My E-mail is`)
        })

        let d = new Date(data.results[0].dob.date);
        let fullDate = d.getDate() + "/" + d.getMonth() + "/" + +d.getFullYear();

        $('#dob').mouseover(function () {
            $('#name').text(`${fullDate} and I am ${data.results[0].dob.age} year`)
            $('#forName').text(`My birthday is`)
        })

        $('#location').mouseover(function () {
            $('#name').text(`${data.results[0].location.country}, C. ${data.results[0].location.city}, ${data.results[0].location.street.number} ${data.results[0].location.street.name} str.`);
            $('#forName').text(`My address is`)
        })

        $('#cell').mouseover(function () {
            $('#name').text(`${data.results[0].cell}`);
            $('#forName').text(`My phone number is`)
        })

        $('#pass').mouseover(function () {
            $('#name').text(`${data.results[0].login.password}`);
            $('#forName').text(`My password is`)
        })
    },

    error: function () {
        $('#notification-bar').text('An error occurred');
    }
});



