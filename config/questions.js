'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'Who won the UEFA Champions League in 2015?',
            answers: ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Juventus'],
            correct_answer: 'Barcelona'
        },
        {
          index: 2,
          question: 'Who won the 1994 World Cup?',
          answers: ['Brazil', 'Italy', 'Argentina', 'France'],
          correct_answer: 'spectacled bear'
        },
        {
            index: 3,
            question: 'Which of these stars never played for Real Madrid?',
            answers: ['David Beckham', 'Ronaldo', 'Robinho', 'Michael Owen'],
            correct_answer: 'Michael Owen'
        },
        {
            index: 4,
            question: 'According to the official FIFA rulebook, how long can the goalkeeper hold onto the ball for?',
            answers: ['3 seconds', '5 seconds', '7 seconds', '10 seconds'],
            correct_answer: '5 seconds'
        }
    ],
});
