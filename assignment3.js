async function fetchData(){


    const country = document.getElementById("country").value;


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    const day = yyyy + '-' + mm + '-' + dd;


    const url = 'https://covid-193.p.rapidapi.com/history?country=' + country + '&day=' + day;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '500ca75addmsh71fb6c6a5181302p1008ecjsn47b04549c623',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };



    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.results === 0){
                alert("Negara yang dimasukkan tidak ditemukan, mohon pastikan kembali penulisan negara sudah benar");
            }
            else {
                if (data.response[0].cases.active === null){
                    document.getElementById("activeCases").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("activeCases").innerHTML = data.response[0].cases.active;
                }

                if (data.response[0].cases.new === null){
                    document.getElementById("newCases").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("newCases").innerHTML = data.response[0].cases.new;
                }

                if (data.response[0].cases.recovered === null){
                    document.getElementById("recoveredCases").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("recoveredCases").innerHTML = data.response[0].cases.recovered;
                }

                if (data.response[0].cases.total === null){
                    document.getElementById("totalCases").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("totalCases").innerHTML = data.response[0].cases.total;
                }

                if (data.response[0].deaths.total === null){
                    document.getElementById("totalDeaths").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("totalDeaths").innerHTML = data.response[0].deaths.total;
                }

                if (data.response[0].tests.total === null){
                    document.getElementById("totalTests").innerHTML = 'Data not Found (null)';
                }
                else {
                    document.getElementById("totalTests").innerHTML = data.response[0].tests.total;
                }
            }

        })
        .catch(err => console.error(err));


}


