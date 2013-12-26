/**
 * @api {get} /users/suggestions Topic Suggestions
 * @apiName GetUserSuggestions
 * @apiGroup Users
 * @apiDescription Fetches all users matching different filter parameters. This is for filtering by variety and influence (sorted by most influential users first)
 *
 * @apiParam {Array} [connection_types=all]   List of types to consider
 * @apiParam {Float} [min_range=0.0]          Minimum topic variety
 * @apiParam {Float} [max_range=1.0]          Maximum topic variety
 * @apiParam {Integer} [page=0]               Page for pagination
 *
 * @apiSuccess {Array} users List of users matching criteria.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      X-Total: 42
 *      X-Total-Pages: 5
 *      X-Page: 3
 *      X-Per-Page: 10
 *      {
 *        "users": [
 *          {
 *            "id": "12345",
 *            "favorite_count": 12,
 *            "friend_count": 32,
 *            "follower_count": 18,
 *            "status_count": 10,
 *            "listed_count": 20,
 *            "name": "Max Mustermann",
 *            "screenName": "maxm",
 *            "language": "de"
 *          }
 *        ]
 *      }
 */

/**
 * @api {get} /users/topics Topic Interests
 * @apiName GetUserTopics
 * @apiGroup Users
 * @apiDescription Fetches all users interested in a given topic or set of topics.
 *
 * @apiParam {Array} topics                   List of topic names
 * @apiParam {Integer} [depth=2]              List of nodes between the topic and the user
 * @apiParam {Integer} [page=0]               Page for pagination
 *
 * @apiSuccess {Array} users List of users matching criteria.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      X-Total: 42
 *      X-Total-Pages: 5
 *      X-Page: 3
 *      X-Per-Page: 10
 *      {
 *        "users": [
 *          {
 *            "id": "12345",
 *            "favorite_count": 12,
 *            "friend_count": 32,
 *            "follower_count": 18,
 *            "status_count": 10,
 *            "listed_count": 20,
 *            "name": "Max Mustermann",
 *            "screenName": "maxm",
 *            "language": "de"
 *          }
 *        ]
 *      }
 */