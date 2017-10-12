//https://medium.com/@bkwebster/how-to-get-instagram-api-access-token-and-fix-your-broken-feed-c8ad470e3f02
//https://www.instagram.com/developer/endpoints/users/

$(document).ready(function(){
	var accessToken = /* use top link to get this access token */;

	$.ajax({
		type: 'GET',
		url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&callback=?',
		dataType: 'jsonp',
		success: function(response){

			var picNum = 0;
			var button = $('<button>');
			button.addClass('insta-button btn btn-success');
			button.text('Next Picture');
			$('div').eq(0).append(button).append('<br>');

			nextPicture(picNum);

			$(document).on('click', '.insta-button', function(){
				$('.image-div').empty();
				picNum++;
				nextPicture(picNum);
			})

			function nextPicture(num){
				var imageDiv = $('<div>');
				imageDiv.addClass('image-div');
				var img = $('<img>');
				img.attr('src', response.data[num].images.standard_resolution.url)
				img.height('200').width('auto');
				imageDiv.append(img);
				$('div').eq(0).append(imageDiv);
			}
		}
	});

});