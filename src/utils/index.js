const { up } = require("../../migrations/1722464908033_create-table-notes");

const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
    username,
  }) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    updatedAt: updated_at,
    username,
  });

module.exports = { mapDBToModel };