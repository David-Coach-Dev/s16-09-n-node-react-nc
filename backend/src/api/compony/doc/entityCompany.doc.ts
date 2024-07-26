/**
 * @swagger
 * components:
 *  schemas:
 *    Company Entity:
 *      name: Company Entity
 *      type: object
 *      description: Company entity
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          format: cuid
 *          example: 123e4567-e89b-12d3-a456-426655440000
 *        name:
 *          type: string
 *          example: name
 *        documents:
 *          type: Document
 *          example: []
 *        CompanyToUsers:
 *          type: CompanyToUser
 *          example: []
 *        projects:
 *          type: CompanyToProject
 *          example: []
 *        CompanyToDocument:
 *          type: CompanyToDocument
 *          example: []
 *        isActive:
 *          type: boolean
 *          example: true
 *        createdAt:
 *          type: string
 *          format: dateTime
 *          example: 2021-01-01 00:00:00
 */
