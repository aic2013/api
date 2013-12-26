/**
 * @api {get} /ads/:user_id Matching ads
 * @apiName GetAdsForUser
 * @apiGroup Ads
 * @apiIgnore Not defined yet.
 * @apiDescription Fetches all ads, matching the users interest
 *
 * @apiParam {Array} [connection_types=all]   List of types to consider
 * @apiParam {Float} [min_range=0.0]          Minimum topic variety
 * @apiParam {Float} [max_range=1.0]          Maximum topic variety
 * @apiParam {Integer} [page=0]               Page for pagination
 *
 * @apiSuccess {Array} ads List of users matching criteria.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      X-Total: 42
 *      X-Total-Pages: 5
 *      X-Page: 3
 *      X-Per-Page: 10
 *      {
 *        "ads": [
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
 * @api {get} /ads/:user_id/random Topic Interests
 * @apiName GetRandomAd
 * @apiGroup Ads
 * @apiIgnore Not defined yet.
 * @apiDescription Fetches a random ad for a user.
 *
 * @apiSuccess {Object} ad List of users matching criteria.
 *
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "ad": {
 *          "id": "12345",
 *          "favorite_count": 12,
 *          "friend_count": 32,
 *          "follower_count": 18,
 *          "status_count": 10,
 *          "listed_count": 20,
 *          "name": "Max Mustermann",
 *          "screenName": "maxm",
 *          "language": "de"
 *        }
 *      }
 */