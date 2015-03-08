/*$("body").append("<div id='footprint-map'></div>")

var map = new BMap.Map("footprint-map");

map.centerAndZoom(new BMap.Point(135.19522,36.49336), 11);

map.addControl(new BMap.MapTypeControl());

map.setCurrentCity("上海");

map.enableScrollWheelZoom(true);*/



var companyCoordinates = [];
companyCoordinates["wuxi-iSoftstone"] = "120.279908,31.47891";
companyCoordinates["shanghai-Onewave"] = "121.398294,31.24059";
companyCoordinates["shanghai-Yunling"] = "121.324997,31.099953";
companyCoordinates["shanghai-travelfusion"] = "121.401688,31.167389";
companyCoordinates["shanghai-baozun"] = "121.446519,31.299472";
$(".experience").hover(function(e) {
	var experienceId = $(e.target).attr("id");
	$(".footprint").attr("src", "http://api.map.baidu.com/staticimage?center=" + companyCoordinates[experienceId] + "&width=300&height=200&zoom=15")
});