// extracts just the data from the query results

var _ = require('underscore');

var Gist = module.exports = function (_node) {
  _(this).extend(_node.data);
};


Gist.prototype.genres = function (genre) {
    if (genre) {
    if (genre.name) {
      this.genre = genre;
    } else if (genre.data) {
      this.genre = _.extend(genre.data);
    }
  }
  return this.genre;
};

Gist.prototype.author = function (author) {
    if (author) {
    if (author.name) {
      this.author = author;
    } else if (author.data) {
      this.author = _.extend(author.data);
    }
  }
  return this.author;
};

Gist.prototype.writer = function (writer) {
    if (writer) {
    if (writer.name) {
      this.writer = writer;
    } else if (writer.data) {
      this.writer = _.extend(writer.data);
    }
  }
  return this.writer;
};

// Gist.prototype.actors = function (actor) {
//     if (actor) {
//     if (actor.name) {
//       this.actor = actor;
//     } else if (actor.data) {
//       this.actor = _.extend(actor.data);
//     }
//   }
//   return this.actor;
// };
