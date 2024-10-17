import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Tweet {
  id: string;
  content: string;
  author: string;
}

interface TweetState {
  tweets: Tweet[];
}

const initialState: TweetState = {
  tweets: [],
};

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addTweet(state, action: PayloadAction<Tweet>) {
      state.tweets.push(action.payload);
    },
    removeTweet(state, action: PayloadAction<string>) {
      state.tweets = state.tweets.filter((tweet) => tweet.id !== action.payload);
    },
    setTweets(state, action: PayloadAction<Tweet[]>) {
      state.tweets = action.payload;
    },
  },
});

export const { addTweet, removeTweet, setTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
