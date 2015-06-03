{"filter":false,"title":"posts.js","tooltip":"/app/models/posts.js","undoManager":{"mark":82,"position":82,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["","var mongoose = require('mongoose');","","var PostSchema = new mongoose.Schema({","  title: String,","  link: String,","  upvotes: {type: Number, default: 0},","  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]","});","","PostSchema.methods.upvote = function(cb) {","  this.upvotes += 1;","  this.save(cb);","};","","mongoose.model('Post', PostSchema);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":35},"action":"insert","lines":["var Schema       = mongoose.Schema;"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":2},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":11},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":14},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":16},"action":"remove","lines":["})"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["})"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":16,"column":3},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":35},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":35},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":39},"action":"insert","lines":["var bcrypt \t= require('bcrypt-nodejs');"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"remove","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":9,"column":9},"action":"remove","lines":["upvotes"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["k"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":6},"end":{"row":9,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1426652864433,"hash":"625b0e3a26af7f3685c59aed4963efd1f8d4ccb0"}