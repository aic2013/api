/**
 * @api {get} /config/connection_types Available Connection Types
 * @apiName GetConnectionTypes
 * @apiGroup Configuration
 * @apiDescription Fetches all available connection types to use in other request.
 *
 * @apiSuccess {Array} connection_types List of connection types with.
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "connection_types": [
 *      {
 *        "key": "follows",
 *        "value": "Follows",
 *      }, {
 *        "key": "retweets",
 *        "value": "Retweets"
 *      }
 *    ]
 *  }
 */

 /**
 * @api {post} /config/ads Ad preferences
 * @apiIgnore Not defined yet
 * @apiName PostAdPreferences
 * @apiGroup Configuration
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */