const { Schema, model } = require('mongoose');
const userSchema = require('/Users');

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
    createdAt: {
      type: Date,
      default: Date.now,
      // getter goes here
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
      default: Date.now(),
// getter goes here
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    reactions: [reactionsSchema]
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

module.exports = Course;
