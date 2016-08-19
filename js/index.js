var quoteText = "";
var quoteAuthor = "";
var colors = ['#F44336', '#B71C1C', '#D50000', '#E91E63', '#880E4F', '#C51162', '#9C27B0', '#4A148C', '#AA00FF', '#673AB7', '#311B92', '#6200EA', '#3F51B5', '#1A237E', '#304FFE', '#2196F3', '#0D47A1', '#2962FF', '#03A9F4', '#01579B', '#0091EA', '#00BCD4', '#006064', '#00B8D4', '#009688', '#004D40', '#00BFA5', '#4CAF50', '#1B5E20', '#00C853', '#8BC34A', '#33691E', '#64DD17', '#827717', '#AEEA00', '#F57F17', '#FFC107', '#FF6F00', '#FFAB00', '#FF9800', '#E65100', '#FF6D00', '#FF5722', '#BF360C', '#DD2C00', '#795548', '#3E2723', '#212121', '#607D8B', '#263238'];
function getQuote(){
     $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(response){
       var newColor = colors[ Math.floor(Math.random()*colors.length)];
       $('body').css("backgroundColor", newColor  );
       quoteText = response.quoteText;
		quoteAuthor = response.quoteAuthor || "Unknown";
       $('#quote').html(quoteText);
        $('#author').html('- '+quoteAuthor);
       $('.btn-twitter').attr('href','http://twitter.com/home/?status=«'+ $.trim(quoteText)+'» '+ quoteAuthor);
     });
  }


$(function() {
  getQuote();
  $('.new-quote').on('click',getQuote);
  });