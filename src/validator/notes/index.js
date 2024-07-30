// membuat objek validator untuk melakukan validasi dan mengevaluasi apakah validasi itu berhasil atau tidak.
const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validate(payload);

        if (validationResult.error){
            throw new InvariantError(validationResult.error.message);
        }
    }
}

module.exports = NotesValidator;