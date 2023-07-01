import { useState } from "react";

const AnecdoteHeading = () => <h1>Anecdote of the day</h1>

const Button = (props) => <button onClick={props.handleclick}>{props.value}</button>

const VoteMessage = (props) => <div>has {props.voteCount[props.selected]} vote(s) </div>

const NextAnecdote = (props) => {
  console.log('fetching next anecdote',props.nextAnecdotes[props.selected] )
  return <div>{props.nextAnecdotes[props.selected]}</div>
}

const HighVotedAnecdote = (props) => {
  let highVoted = props.voteCount[0]
  let index = 0
  for (let i=0; i<=props.voteCount.length;i++){
    if (props.voteCount[i] > highVoted){
      index = i
      highVoted = props.voteCount[i]
    }
  }
  console.log('highvoted count in array',highVoted, 'at position index',index)
  return(
    <>
      <NextAnecdote nextAnecdotes={props.anecdotes} selected={index} />
      <VoteMessage voteCount={props.voteCount} selected={index} />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'A common mistake that people make when trying to design something completely foolproof was to underestimate the ingenuity of complete fools.',
    'Real programmers can write assembly code in any language.',
    'For every complex problem there is an answer that is clear, simple, and wrong.',
    'There is not now, and never will be, a language in which it is the least bit difficult to write bad programs.',
    'It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.',
    'Why do we never have time to do it right, but always have time to do it over?.',
    'There is not now, and never will be, a language in which it is the least bit difficult to write bad programs.'
  ]

  const [selected, setSelected] = useState(0)
  const [voteCount, setVoteCount] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    let x = Math.floor(Math.random() * 7)
    setSelected(x)
  }

  const voteClick = () => {
    const copyVoteCount = [...voteCount]
    copyVoteCount[selected] += 1
    setVoteCount(copyVoteCount)
    console.log(copyVoteCount)
  }

  return(
    <div>
      <AnecdoteHeading />
      <NextAnecdote nextAnecdotes={anecdotes} selected={selected} />
      <VoteMessage voteCount={voteCount} selected={selected} />
      <Button handleclick={voteClick} value='vote' />
      <Button handleclick={nextAnecdote} value='next anecdote' />
      <h1>Anecdote with most Votes</h1>
      <HighVotedAnecdote anecdotes={anecdotes} voteCount={voteCount} selected={selected} />
    </div>
  )
}

export default App;
