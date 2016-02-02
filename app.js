var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('/Users/huangling/wanghao/video'));

function index(req, res, next) {
  //var out = '<div><a href="teletubbies/teletubbies-christmas.mp4"><img src="teletubbies/teletubbies-christmas.jpg" /></a></div>';

  var videos = [
    'teletubbies/teletubbies-christmas',
    'teletubbies/teletubbies-cooking',
    'teletubbies/teletubbies-rocking-chair',

    'in-the-night-garden/in-the-night-garden-igglepiggle-goes-visiting',

    'pocoyo/session-01-01-04',

    'ryan-toys-review/01-giant-balloons-supprise-toys-and-ball-pit-challenge-in-huge-poll-disney-toys',
    'ryan-toys-review/02-surprise-toys-challenge-star-wars-darth-vader-vs-ryan-toysreview-easter-egg-hunt-water-ballon-fight',
    'ryan-toys-review/03-toys-surprise-giant-balloons-pop-challenge-ninja-turtle',
    'ryan-toys-review/04-surprise-toys-giant-ball-pit-challenge-dianey-cars-lighting-mcqueen-thomas-trains',
    'ryan-toys-review/05-drop-pop-frozen-elsa-doll',

    'little-baby-bum/wheels-on-the-bus-plus-lots-more-nursery-rhymes-54-minutes',

    'hulyan-maya/thomas-the-tank-engine-and-friends-trackmaster-trains',
    'hulyan-maya/we-love-trains'
  ];

  var out = '<html>';

  out += '<head><style>div {float: left;padding-bottom: 20px;padding-right: 20px;margin: 1px;}</style></head>';

  videos.forEach(function(e) {
    var src = e + '.mp4';
    var poster = e + '.jpg';
    out += '<div><video src="' + src + '" poster="' + poster + '" width="320" height="180" controls></video></div>';
  });

  //out += '<video src="teletubbies/teletubbies-christmas.mp4" poster="teletubbies/teletubbies-christmas.jpg" width="320" height="180" controls></video>';

  out += '</html>';

  res.send(out);
};

app.get('/', index);

var port = process.env.PORT || 6008;
app.listen(port, function () {
  console.log('App is listening on port', port);
});
