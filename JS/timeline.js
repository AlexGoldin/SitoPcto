var app = angular.module('app', []);

app.controller('HomeController', function ($scope) {

  $scope.goal_title = "Investing in real estate";

  $scope.dates = [
    2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
  ];

  $scope.goal_real_estate = false;

  for (x in $scope.dates) {
    if ($scope.dates[x] == 2016) {
      $scope.goal_real_estate_2016 = true;
    } else if ($scope.dates[x] == 2021) {
      $scope.goal_retirement_2021 = true;
    } else if ($scope.dates[x] == 2018) {
      $scope.goal_involve_2018 = true;
    }
  }

});

$(document).ready(function (e) {
  var viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(viewport);


  $('a').click(function (e) {
    e.preventDefault()
  })

  $('.goal_wrap').click(function () {
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');
    $(this).addClass('active bounce');
    console.log(diff);
    console.log((viewport - diff));
    TweenLite.to($('.date').parent(), 1, {
      x: ((viewport * 0.5) - diff), onComplete: function () {
        console.log('success');
        /*TweenLite.to($('.timeline'), 1, {top:"50%"});*/
      }
    });
  });

  $('.goal_real_estate').click(function () {
    console.log('goal click');
    $('body').fadeTo('ease', 0.3, function () {
      $(this).css('background-image', 'url(https://media-cdn.tripadvisor.com/media/photo-s/1a/0b/be/9a/photo0jpg.jpg)');
    }).fadeTo('slow', 1);

  });

  $('.goal_retirement').click(function () {
    console.log('goal click');
    $('body').fadeTo('ease', 0.3, function () {
      $(this).css('background-image', 'url(https://www.visitabanomontegrotto.com/wp-content/uploads/2014/12/Monselice-e1417475783122-637x400.jpg)');
    }).fadeTo('slow', 1);

  });

  $('.goal_involve').click(function () {
    console.log('goal click');
    $('body').fadeTo('ease', 0.3, function () {
      $(this).css('background-image', 'url(https://th.bing.com/th/id/OIP.JcegiNnzRVmg5Ey4VY3QVgHaFE?pid=ImgDet&rs=1)');
    }).fadeTo('slow', 1);

  });


});