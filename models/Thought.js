const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => value.toDateString()
    },
  },
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => value.toDateString()
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
});
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
