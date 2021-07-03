/* tslint:disable */
/* eslint-disable */
/**
 * Vital
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface ClientFacingWorkout
 */
export interface ClientFacingWorkout {
    /**
     * 
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    id: any;
    /**
     * Average heart rate during workout::bpm
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    averageHr?: any;
    /**
     * Max heart rate during workout::bpm
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    maxHr?: any;
    /**
     * Distance travelled during workout::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    distance?: any;
    /**
     * Start time of the workout::time
     * @type {Date}
     * @memberof ClientFacingWorkout
     */
    timeStart: any;
    /**
     * End time of the workout::time
     * @type {Date}
     * @memberof ClientFacingWorkout
     */
    timeEnd: any;
    /**
     * Calories burned during the workout::kCal
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    calories: any;
    /**
     * 
     * @type {ClientFacingSport}
     * @memberof ClientFacingWorkout
     */
    sport: any;
    /**
     * 
     * @type {SourceClientFacing}
     * @memberof ClientFacingWorkout
     */
    source: any;
    /**
     * Time in minutes spent in different heart rate zones <50%, 50-60%, 60-70%, 70-80%, 80-90%, 90%+::seconds
     * @type {Array&lt;number&gt;}
     * @memberof ClientFacingWorkout
     */
    hrZones: any;
    /**
     * User key returned by vital create user key request. This key should be stored in your database against the user and used for all interactions with the vital api.
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    userId: any;
    /**
     * Time spent active during the workout::seconds
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    movingTime?: any;
    /**
     * Elevation gain during the workout::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    totalElevationGain?: any;
    /**
     * Highest point of elevation::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    elevHigh?: any;
    /**
     * Lowest point of elevation::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    elevLow?: any;
    /**
     * Average speed during workout in m/s::meters/sec
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    averageSpeed?: any;
    /**
     * Max speed during workout in m/s::meters/sec
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    maxSpeed?: any;
    /**
     * Average watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    averageWatts?: any;
    /**
     * Watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    deviceWatts?: any;
    /**
     * Max watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    maxWatts?: any;
    /**
     * Weighted average watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    weightedAverageWatts?: any;
    /**
     * Map of workouts encoded as polyline
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    map?: any;
}
