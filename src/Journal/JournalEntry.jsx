import React from 'react'
import Container from '../components/SubComponents/Container'
import JournalSubtitle from './JournalSubtitle'
import JournalParagraph from './JournalParagraph'

const JournalEntry = () => {
  return (
    <>
    <Container className={'journal-container flex-col'}>
        <JournalSubtitle>
        How I stay committed to learning
        </JournalSubtitle>
        <JournalParagraph>
        I used to rely on being motivated by my desire to learn. However, I felt quite overwhelmed by the sheer volume. 
        I had been advised to break things down into chunks, however, the sheer scope was often too much to bear. 
        </JournalParagraph>
        <JournalParagraph>
        I then switched my focus to identify my use cases which would help me set more meaningful deadlines.
         This way I am only learning the bear minimum I need to achieve whatever I set out to do. 
         A stretch goal is learn what I need to help other people. If I identify a situation that can be solved through code for another person I feel alot better than had it been for myself.
        
        </JournalParagraph>

    </Container>
    <Container className={'journal-container flex-col'}>
        <JournalSubtitle>
        How I got started
        </JournalSubtitle>
        <JournalParagraph>
        I started simple because I wanted to build an iron calculator.
        </JournalParagraph>
        <JournalParagraph>
        After my iron calculator I learnt react and then increased my focus on UI . I then realised I needed to learn Python and the python pandas library.
         I have solved countless problems at work through code.
        </JournalParagraph>

    </Container>
    </>
  )
}

export default JournalEntry