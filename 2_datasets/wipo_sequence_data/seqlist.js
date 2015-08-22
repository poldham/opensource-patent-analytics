function loadweek(date) {
    if (date == "") {
        date = $("#weeks option[@selected]").attr("value");
    }
    var yr = date.substring(0,4);
    var mo = date.substring(4,6);
    var da = date.substring(6);
    $.get(
        urlbase.concat(yr,"/",mo,da,"/listing_",lg,".htm"),
        function(data) {
            $("#week").empty().append(data);
        }
    );
    $("#pubdate").empty().append(da.concat(".",mo,".",yr));
};
  
function loadyear(yr) {
    if (yr == "") {
        yr = $("#years option[@selected]").attr("value");
    }
    $.get(
        urlbase.concat(yr,"/weeks_",lg,".htm"),
        function(data) {
            $("#weeks").empty().append(data);
            var last = $("#weeks option")[0];
            loadweek($(last).attr("value"));
            $(last).attr("selected","selected");
        }
    );
};
    
$(document).ready(
    function() {
        $("#seqlistcss").attr("href",urlbase.concat("seqlist.css"));
        $.get(
            urlbase.concat("years.htm"),
            function(data) {
                $("#years").empty().append(data);
                var last = $("#years option")[0];
                loadyear($(last).attr("value"));
                $(last).attr("selected","selected");
            }
        );
        $("#years").change(function() {loadyear("");});
        $("#weeks").change(function() {loadweek("");});
    }
);
