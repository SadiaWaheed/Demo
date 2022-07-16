function display(val){

    document.getElementById('input').value += val
	
    return val

}
function solve(){

    let x = document.getElementById('input').value

    let y = eval(x);

    document.getElementById('input').value = y

    return y

}
window.onload = function () {
	
	const preUrl = document.referrer;
	if (preUrl == null) document.getElementById('input').value ="no pre url"
	else  document.getElementById('input').value= preUrl
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://api.ipify.org?format=jsonp&callback=ShowIp";
        document.getElementsByTagName("head")[0].appendChild(script);
    };
   
function ShowIp(response){
	let Ip = response.ip
	
	$.get('https://ipapi.co/'+Ip+'/json', function(data){
		document.getElementById('result').value = 'IP Address: ' +  Ip + '\nCountry: ' +  data.country_name + '\nCity: ' +  data.city + '\nRegion: ' +  data.region + '\nLocation: ' +  data.latitude+','+data.longitude + '\nOrg: ' +  data.org + '\nPostal: ' +  data.postal + '\nTime Zone: ' +  data.timezone
	})
}
function getReferer(){

	const preUrl = document.referrer;
	if (preUrl == null) console.log("\nThe Previous page URL is empty")
	else  console.log(preUrl)
}
