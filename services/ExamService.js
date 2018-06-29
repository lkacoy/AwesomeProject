let _singleton = Symbol();
const EXAM_API_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/exam';
const EXAM_LESSON_API_URL="https://web2018-lexikacoyannkis.herokuapp.com/api/lesson/{LID}/exam";

export default class ExamService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ExamService(_singleton);
        return this[_singleton]
    }

    findAllExamsForLesson(lessonId) {
        return fetch(
            EXAM_LESSON_API_URL
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    findExamById(examId) {
        return fetch(
            EXAM_API_URL + '/' + examId)
            .then(function (response) {
                return response.json();
            })
    }

    createExam(lessonId, exam) {
        return fetch(EXAM_LESSON_API_URL.replace('LID', lessonId),
            {
                body: JSON.stringify(exam),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteExam(examId) {
        return fetch(EXAM_LESSON_API_URL + '/' + examId,
            {
                method: 'DELETE'
            })
    }

    createEssayQuestion(examId, essay) {
        return fetch(EXAM_LESSON_API_URL + '/' + examId,
            {
                body: JSON.stringify(essay),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    createMultipleChoiceQuestion(examId, multipleChoice) {
        return fetch(EXAM_LESSON_API_URL + '/' + examId,
            {
                body: JSON.stringify(multipleChoice),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    createFillInBlank(examId, fillIn) {
        return fetch(EXAM_LESSON_API_URL + '/' + examId,
            {
                body: JSON.stringify(fillIn),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    createTrueFalseQuestion(examId, trueFalse) {
        return fetch(EXAM_LESSON_API_URL + '/' + examId,
            {
                body: JSON.stringify(trueFalse),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }
}