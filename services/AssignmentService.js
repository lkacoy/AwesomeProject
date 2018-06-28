let _singleton = Symbol();
const ASSIGNMENT_API_URL = 'https://web2018-lexikacoyannakis.herokuapp.com/api/assignment';
const ASSIGNMENT_LESSON_API_URL="https://web2018-lexikacoyannkis.herokuapp.com/api/lesson/{LID}/assignment";

class AssignmentService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AssignmentService(_singleton);
        return this[_singleton]
    }


    findAssignmentById(assignmentId) {
        return fetch(
            ASSIGNMENT_API_URL + '/' + assignmentId)
            .then(function (response) {
                return response.json();
            })
    }

    findAllAssignmentsForLesson(lessonId) {
        return fetch(
            ASSIGNMENT_LESSON_API_URL.replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    createAssignment(lessonId, assignment) {
        return fetch(ASSIGNMENT_LESSON_API_URL.replace('LID', lessonId),
            {
                body: JSON.stringify(assignment),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteAssignment(assignmentId) {
        return fetch(ASSIGNMENT_API_URL + '/' + assignmentId,
            {
                method: 'DELETE'
            })
    }
}