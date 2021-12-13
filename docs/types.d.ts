/**
 * The Architect Scripting class that represents an Architect data type.
 * Instances of this class will be created by Architect Scripting as needed.
 * @param coreExpressionType - the core expression type associated with this ArchDataType wrapper
 * @param baseDataTypeNameToUse - a caller can specify the base name of the data type that
 *                                         should be used for this instance.  Remember that the text
 *                                         Collection will be automatically appended if the data type
 *                                         is a collection and not a singleton.
 */
declare class ArchDataType extends ArchBaseCoreObject {
    // constructor(coreExpressionType: any, baseDataTypeNameToUse: string);
    /**
     * A string suitable for logging that contains information about this data type.
     */
    readonly logStr: string;
    /**
     * Returns the display type name string 'ArchDataType'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns whether or not this data type is considered to be an Architect Any type.  You will see Any types
     * listed in Architect's Expression Help like the implementation of the == operator that takes a valueToCompare
     * and valueToCompareTo parameters whose types are Any types.  Yes, that means that it's possible for some
     * data types to not be an "any" type.  Who would have thunk?  ;-)
     */
    readonly isAnAnyType: boolean;
    /**
     * Returns true indicating that this is an ArchDataType instance.
     */
    readonly isArchDataType: boolean;
    /**
     * Returns whether or not this data type is available for the specified flow type.
     * @param flowType - the flow type to check.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     */
    isAvailableForFlowType(flowType: string): boolean;
    /**
     * Returns whether or not this data type is available for the specific flow. Different than
     * {@link isAvailableForFlowType} because it takes into account common modules and its allowable
     * flow types
     * @param archBaseFlow - the flow instance to check.
     */
    isAvailableForFlow(archBaseFlow: ArchBaseFlow): boolean;
    /**
     * Returns whether or not this data type is available as a flow input for the specified flow type.
     * @param flowType - the flow type to check.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     */
    isAvailableAsInputForFlowType(flowType: string): boolean;
    /**
     * Returns whether or not this data type is available as a flow output for the specified flow type.
     * @param flowType - the flow type to check.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     */
    isAvailableAsOutputForFlowType(flowType: string): boolean;
    /**
     * Returns whether or not this data type is a collection type.
     */
    readonly isCollection: boolean;
    /**
     * Returns whether or not this data type is a complex type.  A complex type contains properties
     * such as the Email type.  One thing to note is that the currency type, while it has both an amount and code properties,
     * accessing this property getter will return false for that type.
     */
    readonly isComplex: boolean;
    /**
     * Returns whether or not this data type is user / scripting creatable.  For example, data types that
     * are creatable can be used for an update statement in an update data action.  Note that this method
     * is working with a flow type string so it's working at more of a definition level.  If you have an
     * actual flow instance that you would like to check, please use {@link ArchDataType#isScriptCreatableForFlow}
     * instead and have correct behavior for the common module flow type.
     * @param flowType - the flow type to check.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     */
    isScriptCreatableForFlowType(flowType: string): boolean;
    /**
     * Returns whether or not this data type is user / scripting creatable in a specific flow instance. We recommend
     * that if you have an actual flow instance rather than just a flow type string where you're querying this availability
     * that you call this method instead as the boolean result from this method will be more accurate for flow types where
     * instances might have more dynamic behavior such as the common module flow type.
     * @param archBaseFlow - the flow instance to check.
     */
    isScriptCreatableForFlow(archBaseFlow: ArchBaseFlow): boolean;
    /**
     * Returns a localized displayable name string for the data type.
     */
    readonly label: string;
}

/**
 * The ArchDataTypes class holds available data types for a flow.
 * Instances of this class will be created by Architect Scripting as needed.
 */
declare class ArchDataTypes extends ArchBaseObject {
    // constructor();
    /**
     * Returns the display type name string 'ArchDataTypes'.
     */
    static readonly displayTypeName: string;
}

/**
 * The ArchEnums instance / service is available to get string values
 * returned by or passed in to calls.  There are corresponding _ALL properties that contain a string
 * array of each of the supported values for a particular enum in this service.
 */
declare class ArchEnums {
    // constructor();
    /**
     * Returns the display name string of 'ArchEnums'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a JSON object with these properties whose values are valid abort survey invite dispositions:
     * ```
     * {
     * &nbsp;&nbsp;error:  'error',
     * &nbsp;&nbsp;optOut: 'optOut'
     * }
     * ```
     */
    readonly ABORT_SURVEY_INVITE_DISPOSITIONS: any;
    /**
     * Returns a string array that contains all valid abort survey invite dispositions.
     */
    readonly ABORT_SURVEY_INVITE_DISPOSITIONS_ALL: string[];
    /**
     * Returns a JSON object with these properties for whose values are valid auto generated email handling strings:
     * ```
     * {
     * &nbsp;&nbsp;continue:   'continue',
     * &nbsp;&nbsp;disconnect: 'disconnect'
     * }
     * ```
     */
    readonly AUTO_GENERATED_EMAIL_HANDLING: any;
    /**
     * Returns a string array that contains all valid flow auto generated email handling strings.
     */
    readonly AUTO_GENERATED_EMAIL_HANDLING_ALL: string[];
    /**
     * Returns a JSON object with these properties for whose values are valid bot confirmation modes:
     * ```
     * {
     * &nbsp;&nbsp;always: 'always',
     * &nbsp;&nbsp;never: 'never'
     * }
     * ```
     */
    readonly BOT_CONFIRMATION_MODES: any;
    /**
     * Returns a string array that contains all valid bot confirmation modes.
     */
    readonly BOT_CONFIRMATION_MODES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are environment strings:
     * ```
     * {
     * &nbsp;&nbsp;dev:  'dev',   // used internally by Genesys
     * &nbsp;&nbsp;test: 'test',  // used internally by Genesys
     * &nbsp;&nbsp;prod: 'prod'
     * }
     * ```
     */
    readonly ENVIRONMENTS: any;
    /**
     * Returns a string array that contains all valid environment strings.
     */
    readonly ENVIRONMENTS_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid data table lookup errorType failure
     * output string values.
     * ```
     * {
     * &nbsp;&nbsp;internalServerError:    'DataTablesInternalServerError',
     * &nbsp;&nbsp;serverTooBusyException: 'DataTablesServerTooBusyException',
     * &nbsp;&nbsp;syntaxError:            'DataTablesSyntaxError',
     * &nbsp;&nbsp;tableNotFoundException: 'DataTablesTableNotFoundException'
     * }
     * ```
     */
    readonly ERROR_TYPE_DATA_TABLE_VALUES: any;
    /**
     * Returns a string array that contains all possible data table lookup errorType failure output string values.
     */
    readonly ERROR_TYPE_DATA_TABLE_VALUES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid call lex bot errorType failure output
     * string values.
     * ```
     * {
     * &nbsp;&nbsp;featureNotEnabledError: 'FeatureNotEnabledError',
     * &nbsp;&nbsp;internalServerError:    'InternalServerError',
     * &nbsp;&nbsp;noInputError:           'NoInputError',
     * &nbsp;&nbsp;noMatchError:           'NoMatchError',
     * &nbsp;&nbsp;noResourceError:        'NoResourceError',
     * &nbsp;&nbsp;versionMismatchError:   'VersionMismatchError'
     * }
     * ```
     */
    readonly ERROR_TYPE_LEX_BOT_VALUES: any;
    /**
     * Returns a string array that contains all possible call lex bot errorType failure output string values.
     */
    readonly ERROR_TYPE_LEX_BOT_VALUES_ALL: string[];
    /**
     * Returns a JSON object with these properties for whose values are valid error event handling strings:
     * ```
     * {
     * &nbsp;&nbsp;changeState:     'state',
     * &nbsp;&nbsp;disconnect:      'disconnect',
     * &nbsp;&nbsp;endWorkflow:     'endWorkflow',
     * &nbsp;&nbsp;exit:            'exit',
     * &nbsp;&nbsp;jumpToMenu:      'menu',
     * &nbsp;&nbsp;transferToQueue: 'queue',
     * &nbsp;&nbsp;jumpToTask:      'task'
     * }
     * ```
     */
    readonly EVENTS_FLOW_ERROR_HANDLING: any;
    /**
     * Returns a string array that contains all valid flow error event handling strings.
     */
    readonly EVENTS_FLOW_ERROR_HANDLING_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid filter container operators
     * ```
     * {
     * &nbsp;&nbsp;and: 'and',
     * &nbsp;&nbsp;or:  'or'
     * }
     * ```
     */
    readonly FILTER_CONTAINER_OPERATORS: string[];
    /**
     * Returns a string array that contains all valid filter match styles.
     */
    readonly FILTER_CONTAINER_OPERATORS_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid flow outcome values for Set Flow Outcome actions.
     * ```
     * {
     * &nbsp;&nbsp;failure: 'FAILURE',
     * &nbsp;&nbsp;success: 'SUCCESS'
     * }
     * ```
     */
    readonly FLOW_OUTCOMES: string[];
    /**
     * Returns a string array that contains all valid flow outcome values for the Set Flow Outcome actions.
     */
    readonly FLOW_OUTCOMES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid flow type strings:
     * ```
     * {
     * &nbsp;&nbsp;bot:                 'bot',
     * &nbsp;&nbsp;commonModule:        'commonmodule',
     * &nbsp;&nbsp;inboundCall:         'inboundcall',
     * &nbsp;&nbsp;inboundChat:         'inboundchat',
     * &nbsp;&nbsp;inboundEmail:        'inboundemail',
     * &nbsp;&nbsp;inboundShortMessage: 'inboundshortmessage',
     * &nbsp;&nbsp;inqueueCall:         'inqueuecall',
     * &nbsp;&nbsp;outboundCall:        'outboundcall',
     * &nbsp;&nbsp;secureCall:          'securecall',
     * &nbsp;&nbsp;surveyInvite:        'surveyInvite'
     * &nbsp;&nbsp;workflow:            'workflow'
     * }
     * ```
     */
    readonly FLOW_TYPES: any;
    /**
     * Returns a string array that contains all valid flow type strings.
     */
    readonly FLOW_TYPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid for flow versions:
     * ```
     * {
     * &nbsp;&nbsp;debug: 'debug'
     * &nbsp;&nbsp;latest: 'latest'
     * }
     * ```
     */
    readonly FLOW_VERSIONS: any;
    /**
     * Returns a string array that contains all valid versions for flows.
     */
    readonly FLOW_VERSIONS_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid flow format types:
     * ```
     * {
     * &nbsp;&nbsp;architect: 'architect'
     * &nbsp;&nbsp;yaml: 'yaml'
     * }
     * ```
     */
    readonly FLOW_FORMAT_TYPES: any;
    /**
     * Returns a string array that contains all valid flow format types.
     */
    readonly FLOW_FORMAT_TYPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid hold music action play styles:
     * ```
     * {
     * &nbsp;&nbsp;duration: 'duration',
     * &nbsp;&nbsp;prompt:   'prompt'
     * }
     * ```
     */
    readonly HOLD_MUSIC_PLAY_STYLES: any;
    /**
     * Returns a string array that contains all hold music play style strings.
     */
    readonly HOLD_MUSIC_PLAY_STYLES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid collect input verification type strings:
     * ```
     * {
     * &nbsp;&nbsp;individualDigits: 'individualDigits',
     * &nbsp;&nbsp;none:             'none',
     * &nbsp;&nbsp;numeric:          'numeric'
     * }
     * ```
     */
    readonly INPUT_VERIFICATION_TYPES: any;
    /**
     * Returns a string array that contains all valid collect input verification type strings.
     */
    readonly INPUT_VERIFICATION_TYPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid location lookup strings:
     * ```
     * {
     * &nbsp;&nbsp;dev:                 'dev',                 // used internally by Genesys
     * &nbsp;&nbsp;test:                'test',                // used internally by Genesys
     * &nbsp;&nbsp;maximus_us_east_2:   'maximus_us_east_2',
     * &nbsp;&nbsp;prod_ap_northeast_1: 'prod_ap_northeast_1',
     * &nbsp;&nbsp;prod_ap_northeast_2: 'prod_ap_northeast_2',
     * &nbsp;&nbsp;prod_ap_southeast_2: 'prod_ap_southeast_2',
     * &nbsp;&nbsp;prod_ap_south_1:     'prod_ap_south_1',
     * &nbsp;&nbsp;prod_ca_central_1:   'prod_ca_central_1',
     * &nbsp;&nbsp;prod_eu_central_1:   'prod_eu_central_1',
     * &nbsp;&nbsp;prod_eu_west_1:      'prod_eu_west_1',
     * &nbsp;&nbsp;prod_eu_west_2:      'prod_eu_west_2',
     * &nbsp;&nbsp;prod_us_east_1:      'prod_us_east_1',
     * &nbsp;&nbsp;prod_us_east_2:      'prod_us_east_2',
     * &nbsp;&nbsp;prod_us_west_2:      'prod_us_west_2'
     * }
     * ```
     */
    readonly LOCATIONS: any;
    /**
     * Returns a string array that contains all valid location strings.
     */
    readonly LOCATIONS_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid log types used in logging:
     * ```
     * {
     * &nbsp;&nbsp;error:   'error',
     * &nbsp;&nbsp;info:    'info',
     * &nbsp;&nbsp;warning: 'warning'
     * }
     * ```
     */
    readonly LOG_TYPES: any;
    /**
     * Returns a string array that contains all valid log types.
     */
    readonly LOG_TYPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values can be used for natural language
     * understanding response modes.
     * ```
     * {
     * &nbsp;&nbsp;intents: 'intents',
     * &nbsp;&nbsp;knowledge: 'knowledge',
     * &nbsp;&nbsp;neutral: 'neutral'
     * }
     * ```
     */
    readonly NLU_RESPONSE_BIAS_MODES: any;
    /**
     * Returns a string array that contains all valid natural language understanding response
     * bias modes.
     */
    readonly NLU_RESPONSE_BIAS_MODES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid output identifier strings:
     * ```
     * {
     * &nbsp;&nbsp;active:         'active',
     * &nbsp;&nbsp;closed:         'closed',
     * &nbsp;&nbsp;default:        'default',
     * &nbsp;&nbsp;emergency:      'emergency',
     * &nbsp;&nbsp;error:          'error',
     * &nbsp;&nbsp;event:          'event',
     * &nbsp;&nbsp;failure:        'failure',
     * &nbsp;&nbsp;found:          'found',
     * &nbsp;&nbsp;holiday:        'holiday',
     * &nbsp;&nbsp;inactive:       'inactive',
     * &nbsp;&nbsp;knowledge:      'knowledge',
     * &nbsp;&nbsp;loop:           'loop',
     * &nbsp;&nbsp;loopNext:       'loopNext',
     * &nbsp;&nbsp;loopsMax:       'loopsMax',
     * &nbsp;&nbsp;matchExact:     'matchExact',
     * &nbsp;&nbsp;matchMultiple:  'matchMultiple',
     * &nbsp;&nbsp;no:             'no',
     * &nbsp;&nbsp;noInput:        'noInput',
     * &nbsp;&nbsp;noIntent:       'noIntent',
     * &nbsp;&nbsp;notFound:       'notFound',
     * &nbsp;&nbsp;open:           'open',
     * &nbsp;&nbsp;partiallyFound: 'partiallyFound',
     * &nbsp;&nbsp;success:        'success',
     * &nbsp;&nbsp;timeout:        'timeout',
     * &nbsp;&nbsp;yes:            'yes'
     * }
     * ```
     * Remember some actions like {@link ArchActionSwitch} will have dynamic outputs and dynamically
     * added outputs will have identifiers that are not in the enum above.
     */
    readonly OUTPUT_IDS: any;
    /**
     * Returns a string array that contains all valid output identifier strings.
     */
    readonly OUTPUT_IDS_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid play estimated wait time style strings:
     * ```
     * {
     * &nbsp;&nbsp;about:    'about',     // your estimated wait time is about 5 minutes
     * &nbsp;&nbsp;exact:    'exact',     // your estimated wait time is 4 minutes and 30 seconds
     * &nbsp;&nbsp;lessThan: 'lessThan',  // your estimated wait time is less than 5 minutes
     * &nbsp;&nbsp;range:    'range'      // your estimated wait time is about 4 to 6 minutes
     * }
     * ```
     */
    readonly PLAY_ESTIMATED_WAIT_STYLES: any;
    /**
     * Returns a string array that contains all valid play estimated wait time style strings.
     */
    readonly PLAY_ESTIMATED_WAIT_STYLES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid play position in queue style strings:
     * ```
     * {
     * &nbsp;&nbsp;ahead:   'ahead',   // there are four callers in front of you
     * &nbsp;&nbsp;number:  'number',  // your position in queue is five
     * &nbsp;&nbsp;ordinal: 'ordinal'  // you are the fifth caller in the queue
     * }
     * ```
     */
    readonly PLAY_POSITION_STYLES: any;
    /**
     * Returns a string array that contains all valid play position in queue style strings.
     */
    readonly PLAY_POSITION_STYLES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid evaluation types for EvaluateSchedule actions:
     * ```
     * {
     * &nbsp;&nbsp;emergencyGroup: 'emergencyGroup',
     * &nbsp;&nbsp;schedule:       'schedule'
     * }
     * ```
     */
    readonly SCHEDULE_EVALUATION_TYPES: any;
    /**
     * Returns a string array that contains all valid evaluation types for EvaluateSchedule actions.
     */
    readonly SCHEDULE_EVALUATION_TYPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid send auto reply modes:
     * ```
     * {
     * &nbsp;&nbsp;replyToAll:    'replyToAll',
     * &nbsp;&nbsp;replyToSender: 'replyToSender'
     * }
     * ```
     */
    readonly SEND_AUTO_REPLY_MODES: any;
    /**
     * Returns a string array that contains all valid session end mode strings.
     */
    readonly SEND_AUTO_REPLY_MODES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid session end mode strings:
     * ```
     * {
     * &nbsp;&nbsp;end:           'end',
     * &nbsp;&nbsp;endWithLogout: 'endWithLogout'
     * }
     * ```
     */
    readonly SESSION_END_MODES: any;
    /**
     * Returns a string array that contains all valid session end mode strings.
     */
    readonly SESSION_END_MODES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid session status strings:
     * ```
     * {
     * &nbsp;&nbsp;ended:      'ended',
     * &nbsp;&nbsp;notStarted: 'notStarted',
     * &nbsp;&nbsp;running:    'running'
     * }
     * ```
     */
    readonly SESSION_STATUSES: any;
    /**
     * Returns a string array that contains all valid session status strings.
     */
    readonly SESSION_STATUSES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid speech rec company mode strings:
     * ```
     * {
     * &nbsp;&nbsp;entireFlow:    'entireFlow',
     * &nbsp;&nbsp;none:          'none',
     * &nbsp;&nbsp;startUpObject: 'startUpObject'
     * }
     * ```
     */
    readonly SPEECH_REC_COMPANY_MODES: any;
    /**
     * Returns a string array that contains all valid speech rec company mode strings.
     */
    readonly SPEECH_REC_COMPANY_MODES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid message body style strings:
     * ```
     * {
     * &nbsp;&nbsp;notice:   'notice',
     * &nbsp;&nbsp;standard: 'standard'
     * }
     * ```
     */
    readonly MESSAGE_BODY_STYLES: any;
    /**
     * Returns a string array that contains all valid message body style strings.
     */
    readonly MESSAGE_BODY_STYLES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid for a SetUUIData Action
     * ```
     * {
     * &nbsp;&nbsp;transfer:   'transfer',
     * &nbsp;&nbsp;disconnect: 'disconnect'
     * }
     * ```
     */
    readonly SET_UUI_DATA_MODES: any;
    /**
     * Returns a string array that contains all whose values are valid for a SetUUIData Action
     */
    readonly SET_UUI_DATA_MODES_ALL: any;
    /**
     * Returns a JSON object with these properties whose values are valid switch action evaluation style strings:
     * ```
     * {
     * &nbsp;&nbsp;matchExpression: 'matchExpression',
     * &nbsp;&nbsp;matchFirstTrue:  'matchFirstTrue'
     * }
     * ```
     */
    readonly SWITCH_EVALUATION_STYLES: any;
    /**
     * Returns a string array that contains all valid switch evaluation style strings.
     */
    readonly SWITCH_EVALUATION_STYLES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid variable scopes:
     * ```
     * {
     * &nbsp;&nbsp;bot:         'bot',
     * &nbsp;&nbsp;call:        'call',
     * &nbsp;&nbsp;chat:        'chat',
     * &nbsp;&nbsp;common:      'common'
     * &nbsp;&nbsp;email:       'email',
     * &nbsp;&nbsp;flow:        'flow',
     * &nbsp;&nbsp;interaction: 'interaction',
     * &nbsp;&nbsp;interaction: 'message',
     * &nbsp;&nbsp;session:     'session',
     * &nbsp;&nbsp;slot:        'slot',
     * &nbsp;&nbsp;state:       'state',
     * &nbsp;&nbsp;survey:      'survey'
     * &nbsp;&nbsp;task:        'task',
     * &nbsp;&nbsp;workflow:    'workflow'
     * }
     * ```
     */
    readonly VARIABLE_SCOPES: any;
    /**
     * Returns a string array that contains all valid variable scopes.
     */
    readonly VARIABLE_SCOPES_ALL: string[];
    /**
     * Returns a JSON object with these properties whose values are valid voicemail transfer targets:
     * ```
     * {
     * &nbsp;&nbsp;group: 'group',
     * &nbsp;&nbsp;queue: 'queue',
     * &nbsp;&nbsp;user:  'user'
     * }
     * ```
     */
    readonly VOICEMAIL_TRANSFER_TARGET_TYPES: any;
    /**
     * Returns a string array that contains all valid voicemail transfer targets.
     */
    readonly VOICEMAIL_TRANSFER_TARGET_TYPES_ALL: string[];
}

/**
 * This provides organization information for the current [session]{@link ArchSession}.
 * It is accessible from the session's [orgInfo]{@link ArchSession#orgInfo} property.
 */
declare class ArchOrganizationInfo extends ArchBaseObject {
    // constructor();
    /**
     * Returns a string suitable for logging information about this organization info instance.
     */
    readonly logStr: string;
    /**
     * Returns the display type name string 'ArchOrganizationInfo'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns whether or not divisions are available for this organization.
     * If the Architect Scripting session is not [connected]{@link ArchSession#isConnected}, accessing this property will return false.
     */
    readonly areDivisionsAvailable: boolean;
    /**
     * Returns whether or not text to speech engine and voice meta data is available for this organization.
     * If the Architect Scripting session is not [connected]{@link ArchSession#isConnected}, accessing this property will return false.
     */
    readonly areTtsEnginesAndVoicesAvailable: boolean;
    /**
     * This looks up a division by its identifier and returns the matching division.
     * If divisions are not [available]{@link ArchOrganizationInfo#areDivisionsAvailable} for this organization, this method will return nothing.
     * @param divisionId - the identifier of the division to look up.
     * @returns - the division whose id matched the submitted divisionId.  If not found, nothing is returned.
     */
    getDivisionById(divisionId: string): ArchDivision;
    /**
     * This looks up a division by its name in a case insensitive manner and returns the matching division.
     * If divisions are not [available]{@link ArchOrganizationInfo#areDivisionsAvailable} for this organization, this method will return nothing.
     * @param divisionName - the name of the division to look up.
     * @returns - the division whose name matched the submitted divisionName.  If not found, nothing is returned.
     */
    getDivisionByName(divisionName: string): ArchDivision;
    /**
     * Gets the home division for the organization.
     * If divisions are not [available]{@link ArchOrganizationInfo#areDivisionsAvailable} for this organization, this method will return nothing.
     * @returns The home division for the organization.  In the event no home division can be determined,
     *                         which should not happen, nothing is returned.
     */
    getHomeDivision(): ArchDivision;
    /**
     * Gets all divisions for the organization.
     * If divisions are not [available]{@link ArchOrganizationInfo#areDivisionsAvailable} for this organization, this method will return nothing.
     * @returns Returns an array of divisions configured for the organization.
     */
    getAllDivisions(): ArchDivision[];
    /**
     * Returns true indicating that this is an ArchOrganizationInfo instance.
     */
    static readonly isArchOrganizationInfo: boolean;
}

/**
 * This provides information about Architect Scripting itself.
 */
declare class ArchScriptingInfo extends ArchBaseObject {
    /**
     * Returns the version of Architect Scripting as a string.
     */
    static readonly version: string;
    /**
     * Returns true indicating that this is an ArchScriptingInfo instance.
     */
    readonly isArchScriptingInfo: boolean;
    /**
     * Returns the display type name string 'ArchScriptingInfo'.
     */
    readonly displayTypeName: string;
}

/**
 * This callback is invoked by Architect Scripting where the callback function is passed the {@link ArchSession}
 * instance such as {@link ArchSession#startWithClientIdAndSecret} and {@link ArchSession#startWithAuthToken}.
 * @param archSession - the Architect Scripting session associated with the session start.  There is only one instance
 *                                of the Architect session in scripting so this instance is being passed in as a convenience if you
 *                                want to get access to it from this parameter in code.
 */
declare type callbackSessionStart = (archSession: ArchSession) => void;

/**
 * This callback is invoked by Architect Scripting when the session is about to end and is passed the {@link ArchSession}
 * instance such as {@link ArchSession#startWithClientIdAndSecret} and {@link ArchSession#startWithAuthToken}.
 * @param archSession - the Architect Scripting session associated with the session end callback.  You can access
 *                                    properties like the {@link ArchSession#endExitCode} to do additional processing.
 */
declare type callbackSessionEnd = (archSession: ArchSession) => void;

/**
 * A class that provides support for an Architect Scripting session.  Architect Scripting will automatically create
 * a singleton instance of this class that should be used by scripts.  It is from this class instance that you
 * will start the session and specify a runtime function for the session to run.  When the runtime function completes
 * its execution, it will then end the node process.
 *
 * The process for running a script is the following:
 *
 * 1.  Call {@link ArchSession#startWithClientIdAndSecret} or {@link ArchSession#startWithAuthToken} to start a session.
 * 2.  If successful, Architect Scripting will invoke the runtime function you specified in either of the
 *     start calls.  If your script runtime function is called, it means you're successfully logged in.
 * 3.  Do whatever scripting work you wish to do in the runtime function.  If the runtime function returns a promise,
 *     Architect Scripting will wait for the promise to resolve.
 * 4.  Architect Scripting will at that point call the appropriate end method based on the {@link ArchSession#endMode}
 *     that is set on the session.
 * 5.  You can specify the exit code that will be used by setting the or {@link ArchSession#endExitCode} property.
 *     Remember that the exit code of 99 is reserved for use by Architect Scripting.
 *
 * When you start a session, you'll submit the organization location where you want this script to run.  The location will
 * is used to figure out the environment (dev, test, or prod), host uri and region for scripting calls.  The locations
 * of dev and test are reserved for internal use by Genesys.
 */
declare class ArchSession extends ArchBaseObject {
    // constructor();
    /**
     * The organization's identifier.
     * If the session is not connected or Scripting is unable to load organization information, this
     * property will return nothing.
     */
    readonly id: string;
    /**
     * The organization name for the currently connected session.  If the session is not connected
     * or Scripting is unable to load organization information, this property will return
     * nothing.
     */
    readonly name: string;
    /**
     * ID that represents the current script execution session. This ID is sent in all trace messages and can be used
     * by Genesys Cloud Support to investigate specific log traces.
     */
    readonly archSessionId: string;
    /**
     * The authorization token for this session.  This will be available after one of the
     * session start methods succeeds.
     */
    readonly authToken: string;
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * This function will end the current scripting session.  It does not attempt to log the currently authenticated user out.
     * If you wish to log the currently authenticated user out, see {@link ArchSession#endWithLogout}.
     * This method performs the following functionality in this order:
     * ```
     * 1.  If the processPendingAsyncWork parameter is true, it processes any pending asynchronous work.
     * 2.  If a session ending callback function was supplied on either the [startWithClientIdAndSecret]{@link ArchSession#startWithClientIdAndSecret} or [startWithAuthToken]{@link ArchSession#startWithAuthToken}
     *     start methods and the session ending callback function hasn't already been called, it invokes the session
     *     ending callback function.  It is possible that the session ending callback function was already
     *     called if [endWithLogout]{@link ArchSession#endWithLogout} was called and this end method is being called
     *     as the last part of [endWithLogout's]{@link ArchSession#endWithLogout} processing.
     * 3.  Sets the session's status to ArchEnums.SESSION_STATUSES.ended.
     * 4.  Looks to see if ending the session should terminate the process by checking the [endTerminatesProcess]{@link ArchSession#endTerminatesProcess} property.
     *     If so, it exits the process with the exit code value in [endExitCode]{@link ArchSession#endExitCode}.
     *     If not, execution continues and the promise created from either the [startWithClientIdAndSecret]{@link ArchSession#startWithClientIdAndSecret} or [startWithAuthToken]{@link ArchSession#startWithAuthToken}
     *     start methods is resolved.  If you have code that runs when the promise is resolved, remember that code
     *     can check the [endExitCode]{@link ArchSession#endExitCode} property.
     * ```
     * @param [processPendingAsyncWork = false] - whether or not to process all pending async work before ending.
     */
    end(processPendingAsyncWork?: boolean): void;
    /**
     * The end exit code is an integer that will be supplied to the process exit when either {@link ArchSession#end}, {@link ArchSession#endWithLogout}
     * or {@link ArchSession#startWithClientIdAndSecret} or {@link ArchSession#startWithAuthToken} completes execution.  The exit code of 99 is reserved for
     * use by Architect Scripting and will be set if there is an unhandled exception not caught in the runtime function or if there is a problem encountered
     * prior to execution of the runtime function.
     */
    endExitCode: number;
    /**
     * This property specifies how the session should end after starting.  The string values in {@link ArchEnums#SESSION_END_MODES}
     * lists valid values.  The default is 'end'.  This mode determines whether Scripting will call {@link ArchSession#end} or {@link ArchSession#endWithLogout}
     * when {@link ArchSession#startWithClientIdAndSecret} or {@link ArchSession#startWithAuthToken} completes.
     */
    endMode: string;
    /**
     * This property specifies whether or not the session ending will try and terminate the process in which this is running.
     * If an end callback function is specified, it is called prior to processing this boolean to see if the process should exit.
     * This property defaults to true unless there is no process or process.exit method available to the Architect Scripting
     * runtime and then it will default to false.  It is fine to set this property value prior to calling either the
     * [startWithClientIdAndSecret]{@link ArchSession#startWithClientIdAndSecret} or [startWithAuthToken]{@link ArchSession#startWithAuthToken}
     * methods to control session end behavior for startup failures such as the user or OAuth client associated with the client
     * id and secret or authorization token not having the ui:architect:view permission which is required for Architect Scripting
     * or other startup related issues.
     */
    endTerminatesProcess: boolean;
    /**
     * This method is a wrapper around the {@link ArchSession#end} method that provides the additional functionality
     * of logging out the currently authenticated user.  It performs the following functionality in this order:
     * ```
     * 1.  If the processPendingAsyncWork parameter is true, it processes any pending asynchronous work.
     * 2.  If a session ending callback function was supplied on either the [startWithClientIdAndSecret]{@link ArchSession#startWithClientIdAndSecret} or [startWithAuthToken]{@link ArchSession#startWithAuthToken}
     *     start methods, it invokes the session ending callback function.
     * 3.  Logs out the currently authenticated user.
     * 4.  Calls {@link ArchSession#end}.
     * ```
     * @param [processPendingAsyncWork = false] - whether or not to process all pending async work before ending.
     */
    endWithLogout(processPendingAsyncWork?: boolean): void;
    /**
     * The environment obtained from the session start location.  The string values in {@link ArchEnums#ENVIRONMENTS}
     * lists valid values.
     */
    readonly environment: string;
    /**
     * The host uri obtained from the session start location.
     */
    readonly host: string;
    /**
     * Returns true indicating that this is an ArchSession instance.
     */
    static readonly isArchSession: boolean;
    /**
     * Returns whether or not the session is connected / authenticated.
     */
    readonly isConnected: boolean;
    /**
     * Returns a string suitable for logging.
     */
    readonly logStr: string;
    /**
     * The organization identifier for the currently connected session.  If the session is not connected
     * or Scripting is unable to load organization information, this property will return nothing.
     * Please replace calls to this property by accessing the [orgInfo]{@link ArchSession#orgInfo} property and then access the id property off of the returned organization information instance.
     */
    readonly orgId: string;
    /**
     * The organization name for the currently connected session.  If the session is not connected
     * or Scripting is unable to load organization information, this property will return
     * nothing.
     * Please replace calls to this property by accessing the [orgInfo]{@link ArchSession#orgInfo} property and then access the name property off of the returned organization information instance.
     */
    readonly orgName: string;
    /**
     * Organization information for this session.
     */
    readonly orgInfo: ArchOrganizationInfo;
    /**
     * The region obtained from the session start location.
     */
    readonly region: string;
    /**
     * This function starts an Architect Scripting session.  You will need to specify the runtime location in which
     * scripting session should run as well as an authorization token to use for authentication for the session.
     * It is invalid to call this method when the session status is 'running'.
     * @param orgLocation - the organization location to use for this session.  The string
     * values in {@link ArchEnums#LOCATIONS} lists valid location values.
     * @param callbackFunctionStart - the function to call once authorized / logged in where you write
     *                                                       code that does work.  If a promise is returned from the callback
     *                                                       function, the session will wait for the promise to resolve before
     *                                                       ending.
     * @param authToken - the authorization token to use for authentication.
     * @param [callbackFunctionEnd] - if specified, this function will be called when the session is
     *                                                     about to end.  If the session is configured to end and log out
     *                                                     the currently logged in user, this method will be called prior
     *                                                     to logging out the user.  Any unhandled exceptions encountered
     *                                                     during execution of the callback function will not change the
     *                                                     exit code set on this session instance.  We do not recommend
     *                                                     returning a promise from this callback as the session's status
     *                                                     will be set to [ended]{@link ArchEnums#SESSION_STATUSES} at this time.
     * @param [isClientCredentialsOAuthClient = false] - if specified, whether or not the auth token should be
     *                                                             treated as authorization for an OAuth client with a Client Credentials grant. If you
     *                                                             attempt to use a Client Credentials OAuth client and do not specify
     *                                                             true for this parameter, the start call will fail with an authentication
     *                                                             error.
     * @returns - returns a promise that will resolve when the session's end processing is complete.  If the {@link ArchSession#endTerminatesProcess} property is true, this promise will not resolve since the process will be terminated by Architect Scripting during session end processing.
     */
    startWithAuthToken(orgLocation: string, callbackFunctionStart: callbackSessionStart, authToken: string, callbackFunctionEnd?: callbackSessionEnd, isClientCredentialsOAuthClient?: boolean): Promise<any>;
    /**
     * This function starts an Architect Scripting session.  You will need to specify the runtime location in which
     * scripting session should run as well as a clientId and clientSecret for your scripting client.  The client id and
     * secret are something you create on a per-client basis.  The creation of a client id and secret are discussed on the
     * Architect Scripting documentation's main page.  If an authorization token is found, it will be used to authenticate
     * this start call.  If valid, execution will continue.  If an authorization token is not found or it is no longer
     * valid, a login page will be displayed.  It is invalid to call this method when the session status is 'running'.
     * @param orgLocation - the organization location to use for this session.  The string values in
     * {@link ArchEnums#LOCATIONS} lists valid location values.
     * @param callbackFunctionStart - the function to call once authorized / logged in where you write
     *                                                       code that does work.  If a promise is returned from the callback
     *                                                       function, the session will wait for the promise to resolve before
     *                                                       ending.
     * @param clientId - the client id to use for authentication.
     * @param clientSecret - the client secret to use for authentication.
     * @param [callbackFunctionEnd] - if specified, this function will be called when the session is
     *                                                     about to end.  If the session is configured to end and log out
     *                                                     the currently logged in user, this method will be called prior
     *                                                     to logging out the user.  Any unhandled exceptions encountered
     *                                                     during execution of the callback function will not change the
     *                                                     exit code set on this session instance.  We do not recommend
     *                                                     returning a promise from this callback as the session's status
     *                                                     will be set to [ended]{@link ArchEnums#SESSION_STATUSES} at this time.
     * @param [isClientCredentialsOAuthClient = false] - if specified, whether or not the OAuth client id and secret should be
     *                                                             treated as an OAuth client with a Client Credentials grant.  If you
     *                                                             attempt to use a Client Credentials OAuth client and do not specify
     *                                                             true for this parameter, the start call will fail with an authentication
     *                                                             error.
     * @returns - returns a promise that will resolve when the session's end processing is complete.  If the {@link ArchSession#endTerminatesProcess} property is true, this promise will not resolve since the process will be terminated by Architect Scripting during session end processing.
     */
    startWithClientIdAndSecret(orgLocation: string, callbackFunctionStart: callbackSessionStart, clientId: string, clientSecret: string, callbackFunctionEnd?: callbackSessionEnd, isClientCredentialsOAuthClient?: boolean): Promise<any>;
    /**
     * Returns the status of this session.  The string values in {@link ArchEnums#SESSION_STATUSES}
     * lists valid status values.
     */
    readonly status: string;
}

/**
 * The Architect Scripting class for an organization division.  Instances of this class will be created by
 * Architect Scripting as needed.
 * @param coreDivisionViewModel - ( *Internal* ) an Architect core division view model.
 */
declare class ArchDivision extends ArchBaseCoreObjectWithId {
    // constructor(coreDivisionViewModel: any);
    /**
     * Returns whether or not the currently logged in user can add a flow to this division.  In order for a
     * user to be able to add a flow to a division, they must have the architect:flow:add, architect:flow:edit
     * and architect:flow:view permissions in this division.
     */
    readonly canAddFlow: boolean;
    /**
     * Returns the display type name string 'ArchDivision'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchDivision instance.
     */
    static readonly isArchDivision: boolean;
    /**
     * Returns whether or not this division is the home division.
     */
    readonly isHomeDivision: boolean;
    /**
     * Returns a string suitable for logging information about this division.
     */
    readonly logStr: string;
    /**
     * Returns the name of the division.
     */
    readonly name: string;
}

/**
 * A class that provides internal support for Architect factory instances.  All factory singleton instances inherit
 * from this class.
 */
declare class ArchBaseFactory extends ArchBaseObject {
    // constructor();
    /**
     * Returns the display type name string 'ArchBaseFactory'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchBaseFactory instance.
     */
    static readonly isArchBaseFactory: boolean;
}

/**
 * A factory instance that lets you add Architect actions to flows.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryActions extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryActions'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Actions instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryActions instance.
     */
    static readonly isArchFactoryActions: boolean;
    /**
     * Adds an Add Flow Milestone action to a task, state, bot or action output.
     * @param archMultiActionContainer - the Architect task, state, bot or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state, bot or action output.
     */
    addActionAddFlowMilestone(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionAddFlowMilestone;
    /**
     * Adds a bridge server action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * Usage of this function is not encouraged.  Use {@link ArchFactoryActions#addActionCallData} or {@link ArchFactoryActions#addActionCallDataSecure} instead.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallBridge(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallBridge;
    /**
     * Adds a non-secure data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallData;
    /**
     * Adds a data table lookup action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionDataTableLookup(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionDataTableLookup;
    /**
     * Adds a secure data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallDataSecure(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallDataSecure;
    /**
     * Adds a Call Dialog Engine Bot action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallDialogEngineBot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallDialogEngineBot;
    /**
     * Adds a Call Dialogflow Bot action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallDialogflowBot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallDialogflowBot;
    /**
     * Adds a Call Dialogflow CX Bot action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallDialogflowCxBot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallDialogflowCxBot;
    /**
     * Adds a Call Lex Bot action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallLexBot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallLexBot;
    /**
     * Adds a Call Lex V2 Bot action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCallLexV2Bot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallLexV2Bot;
    /**
     * Adds a Clear Active Intent action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionClearActiveIntent(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionClearActiveIntent;
    /**
     * Adds a Clear Slot action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionClearSlot(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionClearSlot;
    /**
     * Adds a collect input action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [inputAudioTTS] - default audio case text to speech to use for the input audio.
     * @param [inputVariable] - the variable to use to hold the input data.
     * @param [interDigitTimeoutMS] - the inter-digit timeout in milliseconds.  If specified, this value should be a non-negative integer.
     * @param [noEntryTimeoutMS] - the no-entry timeout duration length in milliseconds.  If specified, this value should be a non-negative integer.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCollectInput(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, inputAudioTTS?: string, inputVariable?: string | ArchBaseVariable, interDigitTimeoutMS?: number, noEntryTimeoutMS?: number, previousArchAction?: ArchBaseAction): ArchActionCollectInput;
    /**
     * Adds a Communication action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [communicationExpression] - the communication expression text to use for the Communication setting on the communicate action.
     * @param [previousArchAction] - the previous Architect action.  If undefined, the action will be appended to the container.
     */
    addActionCommunicate(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, communicationExpression?: string, previousArchAction?: ArchBaseAction): ArchActionCommunicate;
    /**
     * Adds a Create Callback action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCreateCallback(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCreateCallback;
    /**
     * Adds a decision action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [conditionExpression] - the boolean expression text to use for the condition on the decision action.
     * @param [previousArchAction] - the previous Architect action.  If undefined, the action will be appended to the container.
     */
    addActionDecision(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, conditionExpression?: string, previousArchAction?: ArchBaseAction): ArchActionDecision;
    /**
     * Adds a dial by extension action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [extensionVariable] - the Architect string variable to hold the entered extension.
     * @param [repromptTTS] - the text to speech to use for reprompting.
     * @param [repromptCount] - the number of times to reprompt.  If specified, this value should be a non-negative integer.
     * @param [interDigitTimeoutMS] - the inter-digit timeout duration in milliseconds.  If specified, this value should be a non-negative integer.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionDialByExtension(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, extensionVariable?: string | ArchVariableString, repromptTTS?: string, repromptCount?: number, interDigitTimeoutMS?: number, previousArchAction?: ArchBaseAction): ArchActionDialByExtension;
    /**
     * Adds a disconnect action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionDisconnect(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionDisconnect;
    /**
     * Adds an enable Participant Record action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionEnableParticipantRecord(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionEnableParticipantRecord;
    /**
     * Adds an End Workflow action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState} in a workflow flow type.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionEndWorkflow(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionEndWorkflow;
    /**
     * Adds an Return To Agent action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionReturnToAgent(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionReturnToAgent;
    /**
     * Adds an evaluate schedule action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionEvaluateSchedule(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionEvaluateSchedule;
    /**
     * Adds an evaluate schedule group action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionEvaluateScheduleGroup(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionEvaluateScheduleGroup;
    /**
     * Adds an abort survey invite action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionAbortSurveyInvite(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionAbortSurveyInvite;
    /**
     * Adds a complete survey invite action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionCompleteSurveyInvite(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionCompleteSurveyInvite;
    /**
     * Adds a detect silence action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionDetectSilence(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionDetectSilence;
    /**
     * Adds an extract secure data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionExtractSecureData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionExtractSecureData;
    /**
     * Adds an exit bot flow action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionExitBotFlow(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionExitBotFlow;
    /**
     * Adds a Find Group action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindGroup(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindGroup;
    /**
     * Adds a Find Language Skill action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindLanguageSkill(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindLanguageSkill;
    /**
     * Adds a Find Queue action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindQueue(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindQueue;
    /**
     * Adds a Find Queue by Id action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindQueueById(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindQueueById;
    /**
     * Adds a Find Skill action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindSkill(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindSkill;
    /**
     * Adds a Find System Prompt action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindSystemPrompt(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindSystemPrompt;
    /**
     * Adds a Find User Prompt action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindUserPrompt(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindUserPrompt;
    /**
     * Adds a Find User action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindUser(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindUser;
    /**
     * Adds a Find User by Id action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindUserById(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindUserById;
    /**
     * Adds a Find Users by Id action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFindUsersById(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFindUsersById;
    /**
     * Adds a flush Audio action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFlushAudio(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionFlushAudio;
    /**
     * Adds a Get External Contact action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetExternalContact(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetExternalContact;
    /**
     * Adds a Get External Organization action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetExternalOrganization(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetExternalOrganization;
    /**
     * Adds a Get Journey Outcome action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneyOutcome(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneyOutcome;
    /**
     * Adds a Get Journey Outcome Scores by Session action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneyOutcomeScoresBySession(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneyOutcomeScoresBySession;
    /**
     * Adds a Get Journey Segment action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneySegment(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneySegment;
    /**
     * Adds a Get Journey Session action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneySession(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneySession;
    /**
     * Adds a Get Journey Sessions by External Contact action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneySessionsByCustomer(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneySessionsByCustomer;
    /**
     * Adds a Get Journey Sessions by External Contact action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetJourneySessionsByExternalContact(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetJourneySessionsByExternalContact;
    /**
     * Adds a get participant data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetParticipantData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetParticipantData;
    /**
     * Adds a get response action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionGetResponse(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionGetResponse;
    /**
     * Adds a loop action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [currentIndexVariable] - the current index variable to set on the loop.
     * @param [loopCountExpression] - the loop count integer expression text that specifies the number of times the loop should run.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionLoop(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, currentIndexVariable?: string | ArchVariableInteger, loopCountExpression?: string, previousArchAction?: ArchBaseAction): ArchActionLoop;
    /**
     * Adds an "Anything Else?" Loop action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionLoopAnythingElse(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionLoopAnythingElse;
    /**
     * Adds a loop until action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * When adding a loop until action using this method there will be no until cases automatically added to the returned Loop Until action like the success until case that is
     * automatically added when a Loop Until action is added to a flow in the Architect UI.  It's important to remember that when you add a Loop Until action that if you do not
     * configure any until cases with exit criteria, do not set a maximum loop count on the action and there is no loop terminating action like {@link ArchActionLoopExit} or flow
     * terminating action in the loop output or next loop output that at runtime execution could get stuck in an infinite loop until the flow runtime engine would terminate flow
     * execution due to a maximum number of actions being run.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [currentIndexVariable] - the current index variable to set on the loop.
     * @param [maxLoopCountExpression] - the loop count integer expression text that specifies the number of times the loop should run.  If no expression text is specified, no maximum loop count will be configured on the returned action.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionLoopUntil(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, currentIndexVariable?: string | ArchVariableInteger, maxLoopCountExpression?: string, previousArchAction?: ArchBaseAction): ArchActionLoopUntil;
    /**
     * Adds a loop exit action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.  Remember that a loop exit has to be contained somewhere within
     * a loop to be valid.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionLoopExit(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionLoopExit;
    /**
     * Adds a loop next action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.  Remember that a loop next has to be contained somewhere within
     * a loop to be valid.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionLoopNext(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionLoopNext;
    /**
     * Adds a jump to menu action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [archTargetMenu] - the Architect menu or sub menu to transfer to.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionJumpToMenu(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, archTargetMenu?: ArchMenu | ArchMenuSubMenu, previousArchAction?: ArchBaseAction): ArchActionJumpToMenu;
    /**
     * Adds a previous menu action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionPreviousMenu(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionPreviousMenu;
    /**
     * Adds a jump to task action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [targetTask] - the task to transfer to.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionJumpToTask(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, targetTask?: ArchTask, previousArchAction?: ArchBaseAction): ArchActionJumpToTask;
    /**
     * Adds a play audio action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [defaultAudioTTS] - default audio text to speech to use for the Play Audio action.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionPlayAudio(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, defaultAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionPlayAudio;
    /**
     * Adds a hold music action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * The prompt to play will be set to Flow.HoldPrompt on the returned new action instance.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [playStyle] - whether to play the whole prompt or for a certain duration. The string values in {@link ArchEnums#PLAY_POSITION_STYLES} lists valid values.  This defaults to 'prompt' if not specified.
     * @param [durationExpression] - the duration expression to use that supplies the duration of the play style when playStyle is 'duration'.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionHoldMusic(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, playStyle?: string, durationExpression?: string, previousArchAction?: ArchBaseAction): ArchActionHoldMusic;
    /**
     * Adds a play estimated wait time action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [playbackMode = 'lessThan'] - the estimated wait time playback mode.  The string values in {@link ArchEnums#PLAY_ESTIMATED_WAIT_STYLES} lists valid values.
     * @param [estimatedWaitTimeExpression = 'Call.EstimatedWaitTime'] - the expression to use that supplies the estimated wait time duration value.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionPlayEstimatedWaitTime(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, playbackMode?: string, estimatedWaitTimeExpression?: string, previousArchAction?: ArchBaseAction): ArchActionPlayEstimatedWaitTime;
    /**
     * Adds a play audio on silence action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionPlayAudioOnSilence(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionPlayAudioOnSilence;
    /**
     * Adds a play position in queue action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [playbackMode = 'number'] - the position in queue playback mode.  The string values in {@link ArchEnums#PLAY_POSITION_STYLES} lists valid values.
     * @param [positionExpression = 'Call.PositionInQueue'] - the expression to use that supplies the position in queue integer value.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionPlayPositionInQueue(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, playbackMode?: string, positionExpression?: string, previousArchAction?: ArchBaseAction): ArchActionPlayPositionInQueue;
    /**
     * Adds a Search External Contacts action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSearchExternalContacts(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSearchExternalContacts;
    /**
     * Adds a send auto reply action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [fromExpression] - the from EmailAddress expression text.
     * @param [replyToExpression] - the replyTo EmailAddress expression text.
     * @param [ccExpression] - the cc EmailAddress collection expression text.
     * @param [bccExpression] - the bcc EmailAddress collection expression text.
     * @param [messageBodyVariable] - the variable to use to hold the message body.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSendAutoReply(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, fromExpression?: string, replyToExpression?: string, ccExpression?: string, bccExpression?: string, messageBodyVariable?: string | ArchBaseVariable, previousArchAction?: ArchBaseAction): ArchActionSendAutoReply;
    /**
     * Adds a send reply action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [messageBodyExpression] - the message body expression text.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSendResponse(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, messageBodyExpression?: string, previousArchAction?: ArchBaseAction): ArchActionSendResponse;
    /**
     * Adds a Set External Tag action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [externalTagExpression] - the expression text to set on the {@link ArchActionSetExternalTag#externalTag} value if a string is supplied.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetExternalTag(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, externalTagExpression?: string, previousArchAction?: ArchBaseAction): ArchActionSetExternalTag;
    /**
     * Adds a Set Active Intent action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetIntent(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetIntent;
    /**
     * Adds a screen pop action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetScreenPop(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetScreenPop;
    /**
     * Adds a set language action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [language] - the language to have the action set at runtime.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetLanguage(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, language?: ArchLanguage, previousArchAction?: ArchBaseAction): ArchActionSetLanguage;
    /**
     * Adds a set participant data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetParticipantData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetParticipantData;
    /**
     * Adds a Set UUI Data action {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetUUIData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetUUIData;
    /**
     * Adds a set wrapup code action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetWrapupCode(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetWrapupCode;
    /**
     * Adds a switch action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * If switchExpression is a non-blank string, the {@link ArchActionSwitch#setExpressionSwitch} method is called with the switchExpression and caseExpression string / string array.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [switchExpression] - the expression that supplies the value to switch on at runtime.  If a non-blank string, this parameter along with
     *                                      the caseExpressionOrExpressions parameter is passed in to {@link ArchActionSwitch#setExpressionSwitch}.
     * @param [caseExpressionOrExpressions] - this parameter is passed in to {@link ArchActionSwitch#setExpressionSwitch} if the switchExpression parameter is
     *                                                            a non-blank string.
     */
    addActionSwitch(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, switchExpression?: string, caseExpressionOrExpressions?: string | string[]): ArchActionSwitch;
    /**
     * Adds a set whisper audio action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [audioExpression] - the audio expression text that will be played for the agent.
     * @param [previousArchAction] - the previous Architect action.  If undefined, the action will be appended to the container.
     */
    addActionSetWhisperAudio(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, audioExpression?: string, previousArchAction?: ArchBaseAction): ArchActionSetWhisperAudio;
    /**
     * Adds a transcription action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput} or [task]{@link ArchTask}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTranscription(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionTranscription;
    /**
     * Adds a transfer to acd action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToAcd(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToAcd;
    /**
     * Adds a transfer to flow action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToFlow(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToFlow;
    /**
     * Adds a transfer to secure flow action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToFlowSecure(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToFlowSecure;
    /**
     * Adds a transfer to acd action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToGroup(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToGroup;
    /**
     * Adds a transfer to number action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [number] - the literal number to which to transfer.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToNumber(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, number?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToNumber;
    /**
     * Adds a transfer to user action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToUser(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToUser;
    /**
     * Adds a transfer to voicemail action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * Note that when adding a transfer to voicemail action in Architect Scripting, the voicemail_greeting prompt will not be set on the newly created action instance.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [preTransferAudioTTS] - the pre-transfer text to speech to use for the default audio case.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionTransferToVoicemail(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, preTransferAudioTTS?: string, previousArchAction?: ArchBaseAction): ArchActionTransferToVoicemail;
    /**
     * Adds an update data action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionUpdateData(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionUpdateData;
    /**
     * Adds an Ask for Boolean action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionAskForBoolean(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionAskForBoolean;
    /**
     * Adds an Ask for Intent action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionAskForIntent(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionAskForIntent;
    /**
     * Adds an Ask for Slot action to a task, bot or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionAskForSlot(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionAskForSlot;
    /**
     * Adds a Call Bot Flow action to a task, state or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionCallBotFlow(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallBotFlow;
    /**
     * Adds a change state action to a state or action output.
     * @param archMultiActionContainer - the Architect state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [targetState] - the state to change to.
     * @param [previousArchAction] - the previous Architect action in the state or action output where the new action should be added.  If undefined, the new action will be appended to the state or action output.
     */
    addActionChangeState(archMultiActionContainer: ArchState | ArchActionOutput, name?: string, targetState?: ArchState, previousArchAction?: ArchBaseAction): ArchActionChangeState;
    /**
     * Adds a call common module action to a task, state or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionCallCommonModule(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, previousArchAction?: ArchBaseAction): ArchActionCallCommonModule;
    /**
     * Adds a call task action to a task, state or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [targetTask] - the task to call.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionCallTask(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, targetTask?: ArchTask, previousArchAction?: ArchBaseAction): ArchActionCallTask;
    /**
     * Adds an end task action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [targetBranch] - the branch to use.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionEndTask(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, targetBranch?: ArchBranch, previousArchAction?: ArchBaseAction): ArchActionEndTask;
    /**
     * Adds a wait action to a task, state or action output.
     * @param archMultiActionContainer - the Architect task, state or action output where the new action should be added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [durationExpression] - the wait duration expression text.
     * @param [previousArchAction] - the previous Architect action in the task, state or action output where the new action should be added.  If undefined, the new action will be appended to the task, state or action output.
     */
    addActionWait(archMultiActionContainer: ArchTask | ArchState | ArchActionOutput, name?: string, durationExpression?: string, previousArchAction?: ArchBaseAction): ArchActionWait;
    /**
     * Adds an Initialize Flow Outcome action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionInitializeFlowOutcome(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionInitializeFlowOutcome;
    /**
     * Adds an Set Flow Outcome action to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionSetFlowOutcome(archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchActionSetFlowOutcome;
    /**
     * Adds an action instance from an action definition to an {@link ArchBaseMultiActionContainer} such as an [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * @param archDefinitionAction - the action definition that specifies what type of action to create.
     * @param archMultiActionContainer - the Architect multi-action container where the new action should be added.  For example, an Architect Scripting state, task or action output where you want the action added.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.  If not specified, the new action will be appended to the end of the action container.
     */
    addActionFromDefinition(archDefinitionAction: ArchDefinitionAction, archMultiActionContainer: ArchBaseMultiActionContainer, name?: string, previousArchAction?: ArchBaseAction): ArchBaseAction;
}

/**
 * A factory instance that lets you create filters.  Filters are used for filtering
 * and matching purposes such as when you want to traverse a flow looking for
 * an object.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryFilters extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryFilters'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Filters instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryFilters instance.
     */
    static readonly isArchFactoryFilters: boolean;
    /**
     * This method creates a new filter object.
     * @param [matchStyle] - this specifies whether the new filter object should use logical and'ing or logical or'ing
     *                                when processing [match results]{@link ArchBaseObjectFilterCommon#isMatch} of individual filter
     *                                clauses or filter clause containers contained in this filter.
     *                                If not specified, the default value is ArchEnums.FILTER_CONTAINER_OPERATORS.and.
     *                                The string values in {@link ArchEnums#FILTER_CONTAINER_OPERATORS} lists valid operator values.
     */
    createFilterObject(matchStyle?: string): ArchFilterObject;
    /**
     * This helper method will create a default filter that is configured to match objects that
     * have an isArchBaseAction, isArchBaseFlow, isArchBaseMenu, isArchBaseMenuChoice, isArchBaseMultiActionContainer,
     * isArchBaseVariable or optionally an isArchBaseValue property with a value of true.  Loosely
     * translated that means this filter will match any flow, action, menu, menu choice,
     * variable, multi-action container ( i.e. action output, state, task ) and optionally value objects.
     * This is done by creating a new filter, adding {@link ArchFilterClausePropertyValueEquals} filter clauses via. the {@link ArchFilterClauseContainer#addClausePropertyValueEquals}
     * method for each of the "is" properties where the filter is set up to or the match results of the
     * contained clauses.  This method is called by the {@link ArchBaseCoreObject#traverse}
     * method with the wantArchBaseValues parameter value set to true to supply a default filter to use if no
     * filter is specified when calling traverse.
     * @param [wantArchBaseValues = false] - whether or not to include ArchBaseValue objects in the filter.
     */
    createFilterTraverseDefault(wantArchBaseValues?: boolean): ArchFilterObject;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * bot flow such as {@link ArchFactoryFlows#createFlowBotAsync}
 * @param archFlowBot - the Architect bot flow.
 */
declare type callbackArchFlowBot = (archFlowBot: ArchFlowBot) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * common module flow such as {@link ArchFactoryFlows#createFlowCommonModuleAsync}
 * @param archFlowCommonModule - the Architect common module flow.
 */
declare type callbackArchFlowCommonModule = (archFlowCommonModule: ArchFlowCommonModule) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * inbound call flow such as {@link ArchFactoryFlows#createFlowInboundCallAsync}
 * @param archFlowInboundCall - the Architect inbound call flow.
 */
declare type callbackArchFlowInboundCall = (archFlowInboundCall: ArchFlowInboundCall) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * inbound chat flow such as {@link ArchFactoryFlows#createFlowInboundChatAsync}
 * @param archFlowInboundChat - the Architect inbound chat flow.
 */
declare type callbackArchFlowInboundChat = (archFlowInboundChat: ArchFlowInboundChat) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * inbound email flow such as {@link ArchFactoryFlows#createFlowInboundEmailAsync}
 * @param archFlowInboundEmail - the Architect inbound email flow.
 */
declare type callbackArchFlowInboundEmail = (archFlowInboundEmail: ArchFlowInboundEmail) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * inbound short message flow such as {@link ArchFactoryFlows#createFlowInboundShortMessageAsync}
 * @param archFlowInboundShortMessage - the Architect inbound short message flow.
 */
declare type callbackArchFlowInboundShortMessage = (archFlowInboundShortMessage: ArchFlowInboundShortMessage) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * outbound call flow such as {@link ArchFactoryFlows#createFlowOutboundCallAsync}
 * @param archFlowOutboundCall - the Architect outbound call flow.
 */
declare type callbackArchFlowOutboundCall = (archFlowOutboundCall: ArchFlowOutboundCall) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * in-queue call flow such as {@link ArchFactoryFlows#createFlowInQueueCallAsync}
 * or {@link ArchFactoryFlows#loadFlowDefaultInQueueCallAsync}.
 * @param archFlowInQueueCall - the Architect in-queue call flow.
 */
declare type callbackArchFlowInQueueCall = (archFlowInQueueCall: ArchFlowInQueueCall) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * secure call flow such as {@link ArchFactoryFlows#createFlowSecureCallAsync}
 * @param archFlowSecureCall - the Architect secure call flow.
 */
declare type callbackArchFlowSecureCall = (archFlowSecureCall: ArchFlowSecureCall) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * survey invite flow such as {@link ArchFactoryFlows#createFlowSurveyInviteAsync}
 * @param archFlowSurveyInvite - the Architect survey invite flow.
 */
declare type callbackArchFlowSurveyInvite = (archFlowSurveyInvite: ArchFlowSurveyInvite) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * workflow flow such as {@link ArchFactoryFlows#createFlowWorkflowAsync}
 * @param archFlowWorkflow - the Architect workflow flow.
 */
declare type callbackArchFlowWorkflow = (archFlowWorkflow: ArchFlowWorkflow) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * flow info basic instance such as {@link ArchFactoryFlows#getFlowInfoByFlowNameAsync}
 * @param archFlowInfoBasic - the Architect flow information object.
 */
declare type callbackArchFlowInfoBasic = (archFlowInfoBasic: ArchFlowInfoBasic) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect base flow
 * instance such as {@link ArchFactoryFlows#loadFlowByFlowNameAsync}
 * @param archBaseFlow - the Architect flow object.
 */
declare type callbackArchBaseFlow = (archBaseFlow: ArchBaseFlow) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is not given any parameters.
 * This is the case where the function manipulates itself such as {@link ArchBaseFlow#loadAsync}
 */
declare type callbackVoid = () => void;

/**
 * A factory instance that lets you create Architect flows or get information about existing flows.  When creating a flow,
 * the factory will create an Architect flow scripting instance which is a local in-memory object that you can then use and
 * configure the flow contents.  The flow itself will have methods to save, check-in, validate or publish.  You must
 * check-in or publish a flow to make it available in the Architect UI.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryFlows extends ArchBaseFactory {
    // constructor();
    /**
     * The default division to use for flow creation calls like {@link ArchFactoryFlows#createFlowInboundCallAsync} if no division
     * is specified in the flowDivision parameter.
     * Attempting to get the default flow creation division when the Architect Scripting [session]{@link ArchSession} is not
     * [connected]{@link ArchSession#isConnected} or for an organization that does not [support divisions]{@link ArchOrganizationInfo#areDivisionsAvailable} will return nothing.
     * Attempting to set the default flow creation division when the Architect Scripting [session]{@link ArchSession} is not
     * [connected]{@link ArchSession#isConnected} or an organization that does not [support divisions]{@link ArchOrganizationInfo#areDivisionsAvailable} will throw an error.
     */
    defaultFlowCreationDivision: ArchDivision;
    /**
     * Returns the display type name string 'ArchFactoryFlows'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Flows instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryFlows instance.
     */
    static readonly isArchFactoryFlows: boolean;
    /**
     * Creates a new [bot flow]{@link ArchFlowBot} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     *
     * The bot flow will have a bot that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow.
     * It's important to note that when you create a bot flow, unlike other flow types, Architect Scripting will have already
     * called {@link ArchBaseFlow#createAsync} on the flow because we require additional setup for bot flows that require
     * creation up front.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage] - = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the bot flow is successfully
     *                                                       created.  The first parameter passed to the callback function will
     *                                                       be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @param [creationData] - if specified, the supplied JSON object will contain a natural language understanding configuration.
     *                                      Similar to exporting the Natural Language Understanding configuration in Architect's UI, the JSON object
     *                                      must have an nluDomainVersion property at the root to be valid and then subsequent natural language
     *                                      configuration meta data underneath it.  Slot names within the JSON object should be compliant with
     *                                      Architect variable naming standards.  If not specified, a default blank Natural Language Understanding
     *                                      configuration will be used by Architect Scripting.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowBot} instance.
     */
    createFlowBotAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowBot, flowDivision?: ArchDivision, creationData?: any): Promise<any>;
    /**
     * Creates a new [common module]{@link ArchFlowCommonModule} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - A callback function to call if the inbound call flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @param [compatibleFlowTypes] - the flow types that can call the common module using a Call Common Module action.
     * @returns - While this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowInboundCall} instance.
     */
    createFlowCommonModuleAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowCommonModule, flowDivision?: ArchDivision, compatibleFlowTypes?: string[]): Promise<any>;
    /**
     * Creates a new [inbound call]{@link ArchFlowInboundCall} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the inbound call flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowInboundCall} instance.
     */
    createFlowInboundCallAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowInboundCall, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [outbound call]{@link ArchFlowOutboundCall} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the outbound call flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowOutboundCall} instance.
     */
    createFlowOutboundCallAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowOutboundCall, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [in-queue call]{@link ArchFlowInQueueCall} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the in-queue call flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowInQueueCall} instance.
     */
    createFlowInQueueCallAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowInQueueCall, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [secure call]{@link ArchFlowSecureCall} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the secure call flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowSecureCall} instance.
     */
    createFlowSecureCallAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowSecureCall, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [inbound email]{@link ArchFlowInboundEmail} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * The inbound email flow will have an initial state that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the inbound email flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowInboundEmail} instance.
     */
    createFlowInboundEmailAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowInboundEmail, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [inbound message]{@link ArchFlowInboundShortMessage} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * The inbound message flow will have an initial state that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow. In Scripting the
     * "Inbound Message" flow type you see in the UI is an inbound short message flow.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the inbound message flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the newly created {@link ArchFlowInboundShortMessage} object instance.
     */
    createFlowInboundShortMessageAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowInboundShortMessage, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [survey invite]{@link ArchFlowSurveyInvite} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * The survey invite flow will have an initial state that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage] - = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the in survey invite flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowSurveyInvite} instance.
     */
    createFlowSurveyInviteAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowSurveyInvite, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [inbound chat]{@link ArchFlowInboundChat} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * The inbound chat flow will have an initial state that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow.
     * In Scripting the "Inbound Chat" flow type you see in the UI is an inbound chat flow.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the inbound chat flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the newly created {@link ArchFlowInboundChat} object instance.
     */
    createFlowInboundChatAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowInboundChat, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Creates a new [workflow]{@link ArchFlowWorkflow} flow in memory.
     * Upon successful creation the callback function that's passed in will be called with the newly
     * created Architect flow scripting object. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * The workflow will have an initial state that is already created which you can access via.
     * the [startUpObject]{@link ArchBaseFlowWorkflow#startUpObject} property off of the flow.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage] - = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     * @param [callbackFunction] - a callback function to call if the workflow is successfully
     *                                                       created.  The first parameter passed to the callback function will
     *                                                       be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchFlowWorkflow} instance.
     */
    createFlowWorkflowAsync(flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchFlowWorkflow, flowDivision?: ArchDivision): Promise<any>;
    /**
     * Searches for a flow with a given id and type.  If found, this returns a [flow information]{@link ArchFlowInfo} instance for it to the supplied callback function.
     * @param flowId - the identifier of the flow to find.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by id.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    getFlowInfoByFlowIdAsync(flowId: string, flowType: string, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Searches for a flow with a given name and if found returns a [flow information]{@link ArchFlowInfo} instance for it to the supplied callback function.
     * @param flowName - name of the flow.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    getFlowInfoByFlowNameAsync(flowName: string, flowType: string, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Loads a flow with a given name and if found returns an ArchBaseFlow instance for it to the supplied callback function.
     * @param flowName - name of the flow.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name and type.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchBaseFlow} instance.
     */
    loadFlowByFlowNameAsync(flowName: string, flowType: string, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Loads a flow with a given id and if found returns an ArchBaseFlow instance for it to the supplied callback function.
     * @param flowId - the flow identifier.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by id and type.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the ArchBaseFlow instance.
     */
    loadFlowByFlowIdAsync(flowId: string, flowType: string, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Loads the default in-queue call flow and if successful returns an ArchFlowInQueueCall instance for it to the supplied callback function.
     * @param [flowVersion = "latest"] - the version of the default in-queue flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be loaded.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the ArchFlowInQueueCall instance.
     */
    loadFlowDefaultInQueueCallAsync(flowVersion?: string, callbackFunction?: callbackArchFlowInQueueCall): Promise<any>;
    /**
     * Loads a flow given an ArchFlowInfo and returns an ArchBaseFlow instance for it to the supplied callback function.
     * @param archFlowInfo - flow information for the flow which you wish to load.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by flow info.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchBaseFlow} instance.
     */
    loadFlowByFlowInfoAsync(archFlowInfo: ArchFlowInfo, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Check out a flow with a given name to the current user.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param flowName - name of the flow.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    checkoutFlowByFlowNameAsync(flowName: string, flowType: string, forceUnlock?: boolean, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Check out the flow for the given flow id to the current user.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param flowId - the flow identifier.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by id and type.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    checkoutFlowByFlowIdAsync(flowId: string, flowType: string, forceUnlock?: boolean, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Check out a flow for the supplied flow info to the current user.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param archFlowInfo - flow information for the flow which you wish to edit.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by flow info.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    checkoutFlowByFlowInfoAsync(archFlowInfo: ArchFlowInfo, forceUnlock?: boolean, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Unlock a flow for the given flow name.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param flowName - name of the flow.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    unlockFlowByFlowNameAsync(flowName: string, flowType: string, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Unlock a flow with a given id.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param flowId - the flow identifier.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by id and type.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    unlockFlowByFlowIdAsync(flowId: string, flowType: string, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Unlock the flow for a given [flow info basic]{@link ArchFlowInfoBasic} object.
     * This function passes an {@link ArchFlowInfoBasic} instance for it to the supplied callback function.
     * @param archFlowInfo - flow information for the flow which you wish to edit.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by flow info.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     [flow basic information]{@link ArchFlowInfoBasic} instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchFlowInfoBasic} instance.
     */
    unlockFlowByFlowInfoAsync(archFlowInfo: ArchFlowInfo, callbackFunction?: callbackArchFlowInfoBasic): Promise<any>;
    /**
     * Checkout and load a flow for the given flow name and type to the current user.
     * @param flowName - name of the flow.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the {@link ArchBaseFlow} instance.
     */
    checkoutAndLoadFlowByFlowNameAsync(flowName: string, flowType: string, forceUnlock?: boolean, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Check out and load the flow for the given flow id to the current user.
     * @param flowId - the flow identifier.
     * @param flowType - the flow type.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by id and type.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because that callback will be passed the ArchBaseFlow instance.
     */
    checkoutAndLoadFlowByFlowIdAsync(flowId: string, flowType: string, forceUnlock?: boolean, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Check out and load the flow for a given [flow info]{@link ArchFlowInfo} object to the current user.
     * @param archFlowInfo - flow information for the flow which you wish to load and edit.
     * @param [forceUnlock = false] - whether to force an unlock of the flow.  Remember, the architect:flow:unlock permission is needed to unlock a flow locked to another user.
     * @param [flowVersion = "latest"] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow can be found on the server by name.
     *                                                     The first parameter passed to the callback function will be the Architect Scripting
     *                                                     flow instance.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the {@link ArchBaseFlow} instance.
     */
    checkoutAndLoadFlowByFlowInfoAsync(archFlowInfo: ArchFlowInfo, forceUnlock?: boolean, flowVersion?: string, callbackFunction?: callbackArchBaseFlow): Promise<any>;
    /**
     * Creates a new flow instance in memory from the specified flow definition. Calling operations such as {@link ArchBaseFlow#saveAsync} and
     * {@link ArchBaseFlow#publishAsync} will create these flows in the cloud. Use the {@link ArchBaseFlow#isCreated}
     * property to see if the flow is created within Genesys Cloud.
     * @param archDefinitionFlow - the flow definition that specifies the flow type you wish to create.
     * @param flowName - the name for the new flow.
     * @param [flowDescription] - the description for the new flow.
     * @param [defaultSupportedLanguage = {@link ArchLanguages#englishUnitedStates}] - the default language to use for the flow.
     *                                                   If the flow type specified does not have supported languages, you do not need to supply a value for
     *                                                   this parameter.
     * @param [callbackFunction] - a callback function to call if the flow is successfully
     *                                                            created.  The first parameter passed to the callback function will
     *                                                            be the created in-memory flow.
     * @param [flowDivision] - if specified, the division in which to create the flow.  This must be a division where
     *                                        the division's {@link ArchDivision#canAddFlow} property returns true.  If not specified,
     *                                        the division stored in the {@link ArchFactoryFlows#defaultFlowCreationDivision} will be used.
     * @param [creationData] - if specified, this is additional data used for the creation of the flow from its definition.
     *                                  To see what you can specify in creation data, look at the specific flow type creation call
     *                                  and what is documented for the expected data on the creationData parameter ( if applicable ).
     *                                  You can see if a flow supports creation data by accessing the {@link ArchDefinitionFlow#supportsFlowCreationData}
     *                                  property.  If you specify creation data to a flow type that does not support creation data, this
     *                                  method will error.
     * @param [compatibleFlowTypes] - the flow types that can call the common module using a Call Common Module action.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing because the callback will be passed the newly created {@link ArchBaseFlow} instance.
     */
    createFlowFromDefinitionAsync(archDefinitionFlow: ArchDefinitionFlow, flowName: string, flowDescription?: string, defaultSupportedLanguage?: ArchLanguage, callbackFunction?: callbackArchBaseFlow, flowDivision?: ArchDivision, creationData?: any, compatibleFlowTypes?: string[]): Promise<any>;
}

/**
 * A factory instance that lets you add Architect menus to flows.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryMenus extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryMenus'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Menus instance.
     */
    readonly logStr: string;
    static readonly isArchFactoryMenus: boolean;
    /**
     * Adds a menu to an inbound or outbound call flow.
     * @param archBaseFlow - the flow where the menu will be added.  The flow type must support menus.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [menuAudioTTS] - the text to speech to set on the menu.
     * @param [setAsStartingMenu = false] - whether or not the newly created menu should be set as the [startup object]{@link ArchBaseFlow#startUpObject} on the flow.
     */
    addMenu(archBaseFlow: ArchBaseFlow, name?: string, menuAudioTTS?: string, setAsStartingMenu?: boolean): ArchMenu;
    /**
     * Adds a dial by extension menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the jump to menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [extensionVariable] - the extension data string variable to use.
     * @param [repromptTTS] - the reprompting text to speech text.
     * @param [repromptCount] - the number of times to reprompt.  This value should be a non-negative integer.
     * @param [interDigitTimeoutExpression] - inter digit timeout duration expression text.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuDialByExtension(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, extensionVariable?: ArchVariableString | string, repromptTTS?: string, repromptCount?: number, interDigitTimeoutExpression?: string, dtmfIsGlobal?: boolean): ArchMenuDialByExtension;
    /**
     * Adds a disconnect menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the disconnect should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuDisconnect(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, dtmfIsGlobal?: boolean): ArchMenuDisconnect;
    /**
     * Adds a jump to menu menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the jump to menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [archTargetMenu] - the Architect menu to jump to.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuJumpToMenu(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, archTargetMenu?: ArchMenu | ArchMenuSubMenu, dtmfIsGlobal?: boolean): ArchMenuJumpToMenu;
    /**
     * Adds a jump to task menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the jump to menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [archTargetTask] - the task to transfer to.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuJumpToTask(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, archTargetTask?: ArchTask, dtmfIsGlobal?: boolean): ArchMenuJumpToMenu;
    /**
     * Adds a previous menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the new menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuPreviousMenu(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, dtmfIsGlobal?: boolean): ArchMenuPreviousMenu;
    /**
     * Adds a repeat menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the new menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuRepeatMenu(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, dtmfIsGlobal?: boolean): ArchMenuRepeatMenu;
    /**
     * Adds a return to agent menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the return to agent should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuReturnToAgent(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, dtmfIsGlobal?: boolean): ArchMenuReturnToAgent;
    /**
     * Adds a sub menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the sub menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [subMenuTTS] - text to speech to use on the sub menu prompting.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuSubMenu(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, subMenuTTS?: string, dtmfIsGlobal?: boolean): ArchMenuSubMenu;
    /**
     * Adds a task menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the sub menu should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [subMenuTTS] - text to speech to use on the sub menu prompting.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTask(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, subMenuTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTask;
    /**
     * Adds a transfer to ACD menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to ACD should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToAcd(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToAcd;
    /**
     * Adds a transfer to flow menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to group should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToFlow(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToFlow;
    /**
     * Adds a transfer to secure flow menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to group should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToFlowSecure(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToFlow;
    /**
     * Adds a transfer to group menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to group should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToGroup(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToGroup;
    /**
     * Adds a transfer to number menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to number should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToNumber(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToNumber;
    /**
     * Adds a transfer to user menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to user should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToUser(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToUser;
    /**
     * Adds a transfer to voicemail menu choice to a parent menu or sub menu.
     * @param archParentMenuOrSubMenu - the parent menu or submenu where the transfer to user should be added.
     * @param [name] - the name for the new menu.  If undefined or null, a default name will be assigned.
     * @param [dtmf] - the dtmf for the new menu.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [preTransferTTS] - the pre-transfer text to speech to use.
     * @param [dtmfIsGlobal = false] - whether or not the dtmf on this menu, if specified, should be treated as global.
     */
    addMenuTransferToVoicemail(archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, dtmf?: string | number, preTransferTTS?: string, dtmfIsGlobal?: boolean): ArchMenuTransferToVoicemail;
    /**
     * Adds an menu choice instance from a menu definition to an {@link ArchBaseMultiActionContainer} such as a [action output]{@link ArchActionOutput}, [task]{@link ArchTask} or [state]{@link ArchState}.
     * Note that if you're looking to add an {@link ArchMenu} instance, just use the [addMenu]{@link ArchFactoryMenus#addMenu} method directly since this method
     * expects to have a parent menu or parent sub-menu which is not the case for {@link ArchMenu} instances.
     * @param archDefinitionMenuChoice - An Architect Scripting menu definition that is a menu choice such as an ArchMenuDisconnect choice and not the definition for ArchMenu or ArchMenuSubMenu.
     * @param archParentMenuOrSubMenu - the menu or sub-menu that you want to be the parent of the newly created menu choice.
     * @param [name] - the name for the new action.  If not specified, a name will be auto-generated by Architect Scripting based on the action type being created.
     * @param [previousArchAction] - the previous Architect action in the archBaseMultiActionContainer after which the new action should be added.
     */
    addMenuChoiceFromDefinition(archDefinitionMenuChoice: ArchDefinitionMenu, archParentMenuOrSubMenu: ArchMenu | ArchMenuSubMenu, name?: string, previousArchAction?: ArchBaseAction): ArchBaseMenuChoice;
}

/**
 * Creates an ArchFactoryPromise object that is responsible for the generation of ArchPromise instances.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryPromise extends ArchBaseFactory {
    // constructor();
    /**
     * Creates an Architect Scripting promise that wraps a Promise or an array of Promises.
     * @param promiseOrPromiseArray - a promise or an array or promises to wrap in a returned Architect Promise.
     */
    createPromise(promiseOrPromiseArray: Promise<any> | Promise<any>[]): Promise<any>;
    /**
     * Returns the display type name string 'ArchFactoryPromise'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFactoryPromise instance.
     */
    static readonly isArchFactoryPromise: boolean;
    /**
     * A logging string for the Architect Factory Promise instance.
     */
    readonly logStr: string;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * base prompt instance such as {@link ArchFactoryPrompts#getPromptByPromptNameAsync}
 * @param archBasePrompt - the Architect prompt instance which will be either an ArchPromptUser or ArchPromptSystem instance.
 */
declare type callbackArchBasePrompt = (archBasePrompt: ArchBasePrompt) => void;

/**
 * A factory instance that currently provides the ability to query Architect prompts by name.
 * If you wish to add, delete or edit prompts, we currently recommend that you use the Genesys
 * Cloud Platform SDK to do this.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryPrompts extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryPrompts'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Task instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryPrompts instance.
     */
    static readonly isArchFactoryPrompts: boolean;
    /**
     * Returns the prompt for the supplied prefixed prompt name.  A prefixed prompt name has either 'Prompt.'
     * or 'PromptSystem.' in front of the name.  If the prompt cannot be found, nothing is returned;
     * The prompt name lookup is case insensitive.
     * @param prefixedPromptName - the prompt name prefixed by either 'Prompt.' or 'PromptSystem.' such as
     *                                      'Prompt.Welcome'.
     * @param callbackFunction - the function that will be called back when the prompt lookup successfully completes.
     */
    getPromptByPromptNameAsync(prefixedPromptName: string, callbackFunction: callbackArchBasePrompt): Promise<any>;
}

/**
 * A factory instance that lets you add Architect states to flows.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryStates extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryStates'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory State instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryStates instance.
     */
    static readonly isArchFactoryStates: boolean;
    /**
     * This method will create and add a state to a flow.
     * @param archBaseFlow - the flow where the state will be added.
     * @param [name] - the name of the new state.  If undefined, null or a blank string, a default name will be assigned
     *                          by Architect Scripting to the new state.
     * @param [setAsStartingState = false] - whether or not the newly created state should be set as the [startup object]{@link ArchBaseFlow#startUpObject} on the flow.
     */
    addState(archBaseFlow: ArchBaseFlowWorkflow, name?: string, setAsStartingState?: boolean): ArchState;
}

/**
 * A factory instance that lets you add Architect tasks to flows.
 * Do not attempt to create an instance of this class.  Architect Scripting will
 * create the factory instance as needed.
 */
declare class ArchFactoryTasks extends ArchBaseFactory {
    // constructor();
    /**
     * Returns the display type name string 'ArchFactoryTasks'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Architect Factory Task instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFactoryTasks instance.
     */
    static readonly isArchFactoryTasks: boolean;
    /**
     * This method will create and add a reusable task to a flow.
     * @param archBaseFlow - the flow where the task will be added.
     * @param [name] - the name of the new task.  If undefined, null or a blank string, a default name will be assigned
     *                          by Architect Scripting to the new task.
     * @param [setAsStartingTask = false] - whether or not the newly created task should be set as the [startup object]{@link ArchBaseFlow#startUpObject} on the flow.
     */
    addTask(archBaseFlow: ArchBaseFlowInboundOutboundSecureCall | ArchBaseFlowWorkflow, name?: string, setAsStartingTask?: boolean): ArchTask;
}

/**
 * The Architect Scripting class for an Architect language.
 * Instances of this class will be created as needed by Architect Scripting.
 * @param coreIsoLanguageViewModel - ( *Internal* ) an Architect core ISO language view model.
 */
declare class ArchLanguage extends ArchBaseCoreObject {
    // constructor(coreIsoLanguageViewModel: any);
    /**
     * Returns the display type name string 'ArchLanguage'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns an array of text to speech engines that are valid for this language and the supplied flow type.
     * If the supplied flow type is not available for the organization, an empty array will be returned.
     * @param flowType - the flow type to check.  {@link ArchEnums#FLOW_TYPES} lists valid flow type strings.
     */
    getTtsEnginesForFlowType(flowType: string): ArchTtsEngine[];
    /**
     * Returns the default text to speech engine that is available for this language. If this language does not have a default
     * text to speech engine, nothing is returned.
     */
    getDefaultTtsEngine(): ArchTtsEngine;
    /**
     * This is a helper function that calls {@link ArchLanguage#getDefaultTtsEngine} to get the default text to speech engine for this language.
     * If there is one returned, execution then calls {@link ArchTtsEngine#getDefaultVoiceForLanguage} on that engine and passes in this
     * language to get the default voice if there is one configured on the default engine.
     */
    getDefaultTtsEngineVoice(): ArchTtsVoice;
    /**
     * Returns whether or not the language has flow creation default text to speech text.
     */
    readonly hasFlowCreationTTS: boolean;
    /**
     * Returns true indicating that this is an ArchLanguage instance.
     */
    static readonly isArchLanguage: boolean;
    /**
     * Returns whether or not the language has runtime data playback support.
     * @param flowType - the flow type to check.  {@link ArchEnums#FLOW_TYPES} lists valid flow type strings.
     */
    isRuntimeDataPlaybackSupported(flowType: string): boolean;
    /**
     * Returns whether or not the language has speech recognition support.
     * @param flowType - the flow type to check.  {@link ArchEnums#FLOW_TYPES} lists valid flow type strings.
     */
    isSpeechRecSupported(flowType: string): boolean;
    /**
     * Returns whether or not the language has text to speech support.
     * @param flowType - the flow type to check.  {@link ArchEnums#FLOW_TYPES} lists valid flow type strings.
     */
    isTextToSpeechSupported(flowType: string): boolean;
    /**
     * A localized display label for the language such as "English (United States)"
     */
    readonly label: string;
    /**
     * Returns a string suitable for logging information about this language.
     */
    readonly logStr: string;
    /**
     * Returns whether or not the language supports case which means it supports at least one of the following case properties:
     * * [caseArticle]{@link ArchLanguage#supportsCaseArticle}
     * * [caseAccusative]{@link ArchLanguage#supportsCaseAccusative}
     * * [caseDative]{@link ArchLanguage#supportsCaseDative}
     * * [caseGenitive]{@link ArchLanguage#supportsCaseGenitive}
     * * [caseNominative]{@link ArchLanguage#supportsCaseNominative}
     */
    readonly supportsCase: boolean;
    /**
     * Returns whether or not the language supports the concept of article case.
     */
    readonly supportsCaseArticle: boolean;
    /**
     * Returns whether or not the language supports the concept of accusative case.
     */
    readonly supportsCaseAccusative: boolean;
    /**
     * Returns whether or not the language supports the concept of dative case.
     */
    readonly supportsCaseDative: boolean;
    /**
     * Returns whether or not the language supports the concept of genitive case.
     */
    readonly supportsCaseGenitive: boolean;
    /**
     * Returns whether or not the language supports the concept of nominative case.
     */
    readonly supportsCaseNominative: boolean;
    /**
     * Returns whether or not the language supports gender which means it supports at least one of the following gender properties:
     * * [genderCommon]{@link ArchLanguage#supportsGenderCommon}
     * * [genderFeminine]{@link ArchLanguage#supportsGenderFeminine}
     * * [genderNeuter]{@link ArchLanguage#supportsGenderNeuter}
     * * [genderMasculine]{@link ArchLanguage#supportsGenderMasculine}
     */
    readonly supportsGender: boolean;
    /**
     * Returns whether or not the language supports the concept of common gender.
     */
    readonly supportsGenderCommon: boolean;
    /**
     * Returns whether or not the language supports the concept of feminine gender.
     */
    readonly supportsGenderFeminine: boolean;
    /**
     * Returns whether or not the language supports the concept of masculine gender.
     */
    readonly supportsGenderMasculine: boolean;
    /**
     * Returns whether or not the language supports the concept of neuter gender.
     */
    readonly supportsGenderNeuter: boolean;
    /**
     * The IETF language tag for this language.  Remember when dealing with language tag strings that your code
     * should treat them case insensitively.
     */
    readonly tag: string;
    /**
     * Returns the text to speech engines that support this language.
     * If the [areTtsEnginesAndVoicesAvailable]{@link ArchOrganizationInfo#areTtsEnginesAndVoicesAvailable}
     * property returns false, nothing will be returned.
     * Accessing this property when the Architect Scripting session is not [connected]{@link ArchSession#isConnected} or if the organization
     * does not support text to speech engine / voice information available will throw.
     * You can access [areTtsEnginesAndVoicesAvailable]{@link ArchOrganizationInfo#areTtsEnginesAndVoicesAvailable} to
     * see if text to speech engine and voice information is available on an organization.
     */
    readonly ttsEngines: ArchTtsEngine[];
}

/**
 * Represents the collection of Architect supported languages.  This service will return {@link ArchLanguage} instances
 * from various methods as they'll represent actual language instances.
 */
declare class ArchLanguages extends ArchBaseObject {
    // constructor();
    /**
     * Returns the display type name string 'ArchLanguages'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * Gets an Architect language by its language tag.  The tag is evaluated in a case insensitive manner.
     * @param ietfLanguageTag - the language tag of the language to look up.
     * @returns The Architect language with the specified tag.
     */
    getByLanguageTag(ietfLanguageTag: string): ArchLanguage;
    /**
     * The Bulgarian (Bulgaria) language. (tag: bg-bg)
     */
    bulgarianBulgaria: ArchLanguage;
    /**
     * The Chinese Simplified (People's Republic of China) language. (tag: zh-cn)
     */
    chineseSimplified: ArchLanguage;
    /**
     * The Chinese Traditional (Hong Kong S.A.R.) language. (tag: zh-hk)
     */
    chineseTraditional: ArchLanguage;
    /**
     * The Czech (Check Republic) language. (tag: cs-cz)
     */
    czechCzechRepublic: ArchLanguage;
    /**
     * The Dutch (Netherlands) language. (tag: nl-nl)
     */
    dutchNetherlands: ArchLanguage;
    /**
     * The English (Australia) language. (tag: en-au)
     */
    englishAustralia: ArchLanguage;
    /**
     * The English Great Britain language. (tag: en-gb)
     */
    englishGreatBritain: ArchLanguage;
    /**
     * The English (United States) language. (tag: en-us)
     */
    englishUnitedStates: ArchLanguage;
    /**
     * The Finnish (Finland) language. (tag: fi-fi)
     */
    finnishFinland: ArchLanguage;
    /**
     * The French (Canada) language. (tag: fr-ca)
     */
    frenchCanada: ArchLanguage;
    /**
     * The French (France) language. (tag: fr-fr)
     */
    frenchFrance: ArchLanguage;
    /**
     * The German (Germany) language. (tag: de-de)
     */
    germanGermany: ArchLanguage;
    /**
     * The Italian (Italy) language. (tag: it-it)
     */
    italianItaly: ArchLanguage;
    /**
     * The Japanese (Japan) language. (tag: ja-jp)
     */
    japaneseJapan: ArchLanguage;
    /**
     * The Norwegian (Norway) language. (tag: nb-no)
     */
    norwegianNorway: ArchLanguage;
    /**
     * The Polish (Poland) language. (tag: pl-pl)
     */
    polishPoland: ArchLanguage;
    /**
     * The Portuguese (Brazil) language. (tag: pt-br)
     */
    portugueseBrazil: ArchLanguage;
    /**
     * The Portuguese (Portugal) language. (tag: pt-pt)
     */
    portuguesePortugal: ArchLanguage;
    /**
     * The Romanian (Romania) language. (tag: ro-ro)
     */
    romanianRomania: ArchLanguage;
    /**
     * The Slovak (Slovakia) language. (tag: so-so)
     */
    slovakSlovakia: ArchLanguage;
    /**
     * The Spanish (United States) language. (tag: es-us)
     */
    spanishUnitedStates: ArchLanguage;
    /**
     * The Spanish (Spain) language. (tag: es-es)
     */
    spanishSpain: ArchLanguage;
    /**
     * The Thai (Thailand) language. (tag: th-th)
     */
    thaiThailand: ArchLanguage;
}

/**
 * This class provides support for an asynchronous polling mechanism that will resolve a polling
 * promise when a callback function completes successfully.  The normal use case is for the polling callback
 * function to return a promise that when it resolves will resolve the polling promise.
 */
declare class ArchAsyncPolling extends ArchBaseObject {
    // constructor();
    /**
     * Call this method to begin asynchronous polling.  It will return a promise that will either resolve or be rejected
     * based on the callback function's return value.  The total time allowed for an operation is 40 seconds so when you
     * multiply the maxTries * intervalMs parameters, the value cannot exceed 40000 ms.  Each instance of this class can
     * only have one polling operation going on at a time.  Attempting to call this function with an polling promise that's
     * already been started will result in a failure.
     * @param maxTries - the maximum number of times to call the callback function before failing the promise
     *                            returned by this function.  This value should be an integer.  The supported value range is >=1 and <=100.
     * @param intervalMs - the number of milliseconds to wait in between invoking the callback function.
     *                              This value should be an integer.  The supported value range is >= 0 and <=15000.
     * @param callbackFunction - the function that should be called back that does work.  If this function returns
     *                                      a promise, the callback will wait for the promise to resolve.  If the promise
     *                                      is rejected or throws, then a subsequent polling attempt will be made assuming
     *                                      that the polling count maximum in the maxTries parameter has not been exceeded.
     *                                      If the promise returned by the callback function resolved, then the promise
     *                                      returned by this function will resolve.  If the the callback
     *                                      function does not return a promise, the promise returned by this method will
     *                                      resolve.  Lastly, if the invocation of the callback function throws, this is
     *                                      treated as an error and the promise returned by this function will be rejected.
     *                                      Make sure that if you want the callback function to be bound to an object
     *                                      that when calling it you do it with callbackFunction.bind(this) or whatever
     *                                      but the idea is the caller needs to specify the correct binding.
     * @param [callbackFunctionParm] - a parameter to pass to the callback function.
     */
    beginAsyncPolling(maxTries: number, intervalMs: number, callbackFunction: (...params: any[]) => any, callbackFunctionParm?: any): Promise<any>;
    /**
     * Returns whether or not this polling class instance is actively polling.
     */
    readonly amPolling: boolean;
    /**
     * Returns the display type name string 'ArchAsyncPolling'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for this ArchAsyncPolling instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchAsyncPolling instance.
     */
    readonly isArchAsyncPolling: boolean;
}

/**
 * The Architect Scripting class that is used to track promises during scripting
 * execution.  Promises need to be resolved prior to creating, saving, checking
 * in or publishing flows.
 * Instances of this class will be created automatically by Architect Scripting
 * as needed.
 */
declare class ArchAsyncTracker extends ArchBaseObject {
    // constructor();
    /**
     * Returns the display type name string 'ArchAsyncTracker'.
     */
    static readonly displayTypeName: string;
    /**
     * A logging string for the Async Tracker instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchAsyncTracker instance.
     */
    static readonly isArchAsyncTracker: boolean;
    /**
     * Adds a promise to be tracked to prevent operations like save from starting till its resolved.
     * @param promise - the JavaScript promise to track.  Promises are returned from async
     * Architect Scripting operations.
     */
    addPromise(promise: Promise<any>): Promise<any>;
    /**
     * Returns a promise for all asynchronous operations currently being tracked.
     */
    allSettled(): Promise<any>;
}

/**
 * This callback function type is invoked by Architect Scripting for logging calls when the
 * {@link ArchLogging#setLoggingCallback} method is called.
 * @param logInfo - logging information about the trace.  More to come on this later.
 */
declare type callbackArchLoggingHook = (logInfo: any) => boolean;

/**
 * The singleton ArchLogging instance that is used for logging with Architect Scripting.
 */
declare class ArchLogging {
    // constructor();
    /**
     * Holds the last error that was written out.
     */
    lastError: string;
    /**
     * Holds the last note that was written out.
     */
    lastNote: string;
    /**
     * Holds the last warning that was written out.
     */
    lastWarning: string;
    /**
     * Controls logging of errors, defaults to true
     */
    logErrors: boolean;
    /**
     * Controls logging of notes, defaults to true
     */
    logNotes: boolean;
    /**
     * Controls logging of verbose notes, defaults to false
     */
    logNotesVerbose: boolean;
    /**
     * Controls logging of warnings, defaults to true
     */
    logWarnings: boolean;
    /**
     * Returns the display type name string 'ArchLogging'.
     */
    static readonly displayTypeName: string;
    /**
     * Logs an error.  This accepts parameters similar to how you would call console.log.
     */
    logError(): void;
    /**
     * Logs an error and then throws an exception with the supplied
     * error message text.
     * @param message - the error message to log.
     */
    logErrorAndThrow(message: string): void;
    /**
     * Logs a note.  This accepts parameters similar to how you would call console.log.
     */
    logNote(): void;
    /**
     * Logs a verbose note.  This accepts parameters similar to how you would call console.log.
     */
    logNoteVerbose(): void;
    /**
     * Logs a warning.  This accepts parameters similar to how you would call console.log.
     */
    logWarning(): void;
    /**
     * A method where you can pass in a callback function that will get called when Architect logging is going
     * to log a message.  This will let you intercept the message, perform your own logging and conditionally
     * suppress the normal Architect console logging.  See the callback definition for what will be passed on
     * the callback function.
     * @param loggingCallback - a callback method to receive information about what is going to be logged.
     */
    setLoggingCallback(loggingCallback: callbackArchLoggingHook): void;
}

/**
 * The Architect Scripting class that represents the Abort Survey Invite action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionAbortSurveyInvite}
 * @param coreAbortSurveyInviteViewModel - ( *Internal* ) an Architect core AbortSurveyInvite action view model.
 */
declare class ArchActionAbortSurveyInvite extends ArchBaseAction {
    // constructor(coreAbortSurveyInviteViewModel: AbortSurveyInviteAction);
    /**
     * Returns the display type name string 'ArchActionAbortSurveyInvite'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionAbortSurveyInvite instance.
     */
    readonly isArchActionAbortSurveyInvite: boolean;
    /**
     * The disposition of the survey invite.
     */
    readonly disposition: ArchValueString;
    /**
     * Set the disposition of the Abort Survey Invite action.
     * @param newDisposition - the disposition value to set.  The string
     * values in {@link ArchEnums#ABORT_SURVEY_INVITE_DISPOSITIONS} lists valid disposition values.
     */
    setLiteralDisposition(newDisposition: string): void;
}

/**
 * Creates a new Architect Add Flow Milestone action instance.
 * Instances of this class should not be created directly.
 * @param coreAddFlowMilestoneViewModel - ( *Internal* ) an Architect core AddFlowMilestone view model.
 */
declare class ArchActionAddFlowMilestone extends ArchBaseActionFlowOutcome {
    // constructor(coreAddFlowMilestoneViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionAddFlowMilestone instance.
     */
    readonly isArchActionAddFlowMilestone: boolean;
    /**
     * Returns the flow milestone identifier if there is one set on this ArchActionAddFlowMilestone instance. If there is not one set,
     * nothing is returned.
     */
    readonly flowMilestoneId: string;
    /**
     * Returns the flow milestone name if there is one set on this ArchActionAddFlowMilestone instance. If there is not one set,
     * nothing is returned.
     */
    readonly flowMilestoneName: string;
    /**
     * This sets the flow milestone to use at runtime by its identifier.
     * @param flowMilestoneId - the identifier of the flow milestone.
     * @param callbackFunction - a callback function to call if the flow milestone
     *                                      is successfully looked up and configured on this action.
     *                                      The first parameter passed to the callback function will be this
     *                                      action instance.
     */
    setFlowMilestoneByIdAsync(flowMilestoneId: string, callbackFunction: (...params: any[]) => any): void;
    /**
     * This sets the flow milestone that will be used for use at runtime by the flow milestone name.
     * @param flowMilestoneName - the name of the Flow Milestone to set. Flow milestone names are looked up case insensitively.
     * @param [callbackFunction] - a callback function to call if the Flow Milestone is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect flow milestone action instance.
     */
    setFlowMilestoneByNameAsync(flowMilestoneName: string, callbackFunction?: (...params: any[]) => any): void;
}

/**
 * The Architect Scripting class for Ask For Boolean action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionAskForBoolean}
 * @param coreAskForBooleanActionViewModel - ( *Internal* ) an Architect core Ask For Boolean action view model.
 */
declare class ArchActionAskForBoolean extends ArchBaseActionAsk {
    // constructor(coreAskForBooleanActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionAskForBoolean'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionAskForBoolean instance.
     */
    readonly isArchActionAskForBoolean: boolean;
}

/**
 * The Architect Scripting class for Ask For Intent action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionAskForIntent}
 * @param coreAskForNLUIntentAction - ( *Internal* ) an Architect core Ask For Natural Language Understanding (NLU) Intent action.
 */
declare class ArchActionAskForIntent extends ArchBaseActionAsk {
    // constructor(coreAskForNLUIntentAction: any);
    /**
     * Returns the display type name string 'ArchActionAskForIntent'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionAskForIntent instance.
     */
    readonly isArchActionAskForIntent: boolean;
    /**
     * The Knowledge output for this action which will be taken at runtime if the bot
     * flow has a knowledge base configured on it and participant input to the action
     * resulted in a knowledge base answer at runtime.  Please remember that the Knowledge
     * output itself is not available to all Genesys Cloud organizations and requires that
     * you have the ability to configure knowledge bases.
     */
    readonly outputKnowledge: ArchActionOutput;
    /**
     * The No Intent output for this Ask for Intent action which will be taken at runtime
     * if no intent is determined from participant input.
     */
    readonly outputNoIntent: ArchActionOutput;
}

/**
 * The Architect Scripting class for Ask For Slot action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionAskForSlot}
 * @param coreAskForSlotAction - ( *Internal* ) an Architect core Ask For Slot action.
 */
declare class ArchActionAskForSlot extends ArchBaseActionNoInputNoMatch {
    // constructor(coreAskForSlotAction: any);
    /**
     * Returns the action type identifier string from actionTypes.js
     */
    static readonly _actionTypeId: string;
    /**
     * Returns the display type name string 'ArchActionAskForSlot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionAskForSlot instance.
     */
    readonly isArchActionAskForSlot: boolean;
    /**
     * The slot variable that will hold the input the user provides for the slot.
     */
    readonly askResult: ArchBaseValue;
    /**
     * This controls when the bot will confirm the slot value supplied by the participant is correct.
     * If this setting evaluates to "always" at runtime and the participant supplied value is valid
     * then the bot will use the {@link ArchActionAskForSlot#confirmationQuestion} communication
     * to confirm the value with the participant.  The default value for this setting when new instances
     * of this action is the string literal "never".
     */
    readonly confirmationMode: ArchValueString;
    /**
     * Wording the bot will use to confirm the value supplied by the participant is correct.  To access the
     * value supplied by the participant in an expression, use the Slot. variable associated with the slot
     * configured on this action.  Remember that the {@link ArchActionAskForSlot#confirmationMode} value
     * determines if this communication will be used for confirmation purposes or not.  Additionally remember
     * that if the {@link ArchActionAskForSlot#confirmationMode} is set to the string literal 'never' or
     * the expression text "never" that this property cannot be set as it is not writable at that time.
     */
    readonly confirmationQuestion: ArchValueCommunication;
    /**
     * An optional expression that can be configured to specify custom slot
     * data validation logic on this Ask for Slot action.  What you'll do
     * with this boolean setting is provide additional validation logic
     * to apply when validating a value in the slot variable associated with
     * the slot configured on this action.  If the custom validation setting
     * returns false or a NOT_SET boolean, this means the value is invalid
     * from a validation perspective.  If there is no custom validation
     * logic set ( i.e. the ArchValueBoolean's {@link ArchBaseValue#isNoValue} property
     * is true ), then there is nothing to process here and it will not fail
     * the value validation at runtime.  Remember that custom validation
     * can return to the flow runtime if a value is invalid but there will
     * be other restriction properties that will be involved with validation
     * in addition to this in the future.
     */
    readonly customValidation: ArchValueBoolean;
    /**
     * Helper method to set the confirmation mode to a literal string value.  This method will check that
     * the string value passed in the newConfirmationMode parameter is a valid confirmation mode.
     * @param newConfirmationMode - the confirmation mode to set.  The string
     * values in {@link ArchEnums#BOT_CONFIRMATION_MODES} lists valid confirmation mode values.
     */
    setLiteralConfirmationMode(newConfirmationMode: string): void;
    /**
     * Sets the selected slot on the Ask for Slot action. This will also update the {@link ArchActionAskForSlot#askResult}
     * property to reference the slot variable that matches the slot provided to this function.
     * @param slotName - the slot name to set.  This will be handled in a case-sensitive manner.
     */
    setSlot(slotName: string): void;
}

/**
 * The Architect Scripting class for Call Bot Flow action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallBotFlow}
 * @param coreCallBotFlowAction - ( *Internal* ) an Architect core call Bot Flow action.
 */
declare class ArchActionCallBotFlow extends ArchBaseAction {
    // constructor(coreCallBotFlowAction: any);
    /**
     * Returns the display type name string 'ArchActionCallBotFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallBotFlow instance.
     */
    readonly isArchActionCallBotFlow: boolean;
    /**
     * Inputs for the call Bot Flow action
     */
    readonly inputs: ArchNamedValueList;
    /**
     * Outputs for the call Bot Flow action
     */
    readonly outputs: ArchNamedValueList;
    /**
     * The output value where you can set a string variable that will hold the exit reason returned
     * from the bot flow instance invoked by this action.
     */
    readonly exitReason: ArchValueString;
    /**
     * The input text for the bot flow. Supplies an initial utterance to the bot that will be processed
     * by the first Ask action executed in the bot flow.
     */
    readonly inputText: ArchValueString;
    /**
     * The output value where you can set a string variable that will hold the intent string returned
     * from the bot flow instance invoked by this action.  Remember that when invoking a bot flow
     * that the flow does not have to return an intent so the bound variable could be set to a NOT_SET
     * string by this action indicating that no intent was returned.
     */
    readonly intent: ArchValueString;
    /**
     * The target bot flow for this ArchActionCallBotFlow instance that specifies the bot flow to call at runtime.
     */
    targetFlowInfo: ArchFlowInfoBasic;
    /**
     * The target bot flow to call for this ArchActionCallBotFlow instance. Note that this function accepts either an {@link ArchFlowInfo} or an {@link ArchFlowInfoBasic}
     * instance. If the flow information supplied to the setter does not specify a bot flow, it will throw an exception.
     * @param newValue - the {@link ArchFlowInfoBasic} instance of the flow to call for the ArchActionCallBotFlow instance.
     * @param [callbackFunction] - a callback function to call if the bot flow is successfully
     *                                        configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect call bot flow action instance.
     */
    setTargetFlowInfoAsync(newValue: ArchFlowInfoBasic, callbackFunction?: (...params: any[]) => any): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect call
 * bridge action instance such as {@link ArchActionCallBridge#setBridgeActionByNameAsync}
 * @param archActionCallBridge - the Architect call bridge action instance.
 */
declare type callbackArchActionCallBridge = (archActionCallBridge: ArchActionCallBridge) => void;

/**
 * The Architect Scripting class for the Bridge Server action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallBridge}
 *
 * Note:  Please use {@link ArchFactoryActions#addActionCallData} or {@link ArchFactoryActions#addActionCallData} instead
 * as this action will be deprecated in a future release.
 * @param coreBridgeServerActionViewModel - ( *Internal* ) an Architect core bridge server action view model.
 */
declare class ArchActionCallBridge extends ArchBaseActionWithOutputsSuccessFailureTimeout {
    // constructor(coreBridgeServerActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallBridge'.
     */
    static readonly displayTypeName: string;
    /**
     * Inputs for the bridge server action, only accessible after the bridge action name has been set successfully. Otherwise, undefined.
     */
    readonly bridgeActionInputs: ArchNamedValueList;
    /**
     * Outputs for the bridge server action, only accessible after the bridge action name has been set successfully. Otherwise, undefined.
     */
    readonly bridgeActionOutputsSuccess: ArchNamedValueList;
    /**
     * Returns true indicating that this is an ArchActionCallBridge instance.
     */
    readonly isArchActionCallBridge: boolean;
    /**
     * This sets the bridge action to call at runtime by its name.
     * @param bridgeActionName - the name of the Bridge Server action.
     * @param [callbackFunction] - a callback function to call if the bridge action is successfully
     *                                                            looked up and configured on this action.  The first parameter passed
     *                                                            to the callback function will be this call bridge action instance.
     */
    setBridgeActionByNameAsync(bridgeActionName: string, callbackFunction?: callbackArchActionCallBridge): void;
    /**
     * This sets the bridge action to call at runtime by its identifier.
     * @param bridgeActionId - the identifier of the Bridge Server action.
     * @param [callbackFunction] - a callback function to call if the bridge action is successfully
     *                                                            looked up and configured on this action.  The first parameter passed
     *                                                            to the callback function will be this call bridge action instance.
     */
    setBridgeActionByIdAsync(bridgeActionId: string, callbackFunction?: callbackArchActionCallBridge): void;
    /**
     * Specifies the amount of time to wait for the bridge action invocation to complete execution at runtime.  Note that
     * this value only applies if {@link ArchActionCallBridge#useSuggestedTimeout} is true.
     */
    readonly timeout: ArchValueDuration;
    /**
     * Returns the processing prompt value where you can set the prompt to play
     * on the call when the system is busy processing the bridge action configured
     * on this action.
     */
    readonly processingPrompt: ArchValuePrompt;
    /**
     * Indicates whether or not to use the action provided suggested timeout at runtime.
     */
    useSuggestedTimeout: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect call
 * common module instance such as {@link ArchActionCallCommonModule#setCommonModuleFlowByIdAsync}
 * @param ArchActionCallCommonModule - the Architect call common module instance.
 */
declare type callbackArchActionCallCommonModule = (ArchActionCallCommonModule: ArchActionCallCommonModule) => void;

/**
 * The Architect Scripting class for Call Common Module action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallCommonModule}
 * @param coreCallCommonModuleAction - ( *Internal* ) an Architect core call common module action.
 */
declare class ArchActionCallCommonModule extends ArchBaseAction {
    // constructor(coreCallCommonModuleAction: any);
    /**
     * Returns the display type name string 'ArchActionCallCommonModule'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallCommonModule instance.
     */
    readonly isArchActionCallCommonModule: boolean;
    /**
     * The contents of this named value list come from the flow inputs defined on the common module
     * flow configured on this action.  Remember that the flow input names in the named value list will
     * match up with variables defined as inputs on the common module flow.
     */
    readonly inputs: ArchNamedValueList;
    /**
     * The contents of this named value list come from the flow outputs defined on the common module
     * flow configured on this action.  Remember that the flow output names in the named value list will
     * match up with variables defined as outputs on the common module flow.
     */
    readonly outputs: ArchNamedValueList;
    /**
     * The common module flow set on this action.
     */
    readonly commonModuleFlowInfo: ArchFlowInfo;
    /**
     * This sets the common module flow to call at runtime by the flow identifier and flow version.
     * @param commonModuleFlowId - the common module flow identifier.
     * @param [flowVersion = "latest"] - the flow version to call. Valid
     *                                            values are {@link ArchEnums#FLOW_VERSIONS}.latest and
     *                                            {@link ArchEnums#FLOW_VERSIONS}.debug. If no value is
     *                                            supplied, the latest published version will be used.
     * @param [callbackFunction] - a function to call if the common module flow is successfully
     *                                                                  looked up and configured on this action. The first parameter passed
     *                                                                  to the callback function will be this Call Common Module action instance
     */
    setCommonModuleFlowByIdAsync(commonModuleFlowId: string, flowVersion?: string, callbackFunction?: callbackArchActionCallCommonModule): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect call
 * data action instance such as {@link ArchActionCallData#setDataActionByIdAsync}
 * @param ArchActionCallData - the Architect call data action instance.
 */
declare type callbackArchActionCallData = (ArchActionCallData: ArchActionCallData) => void;

/**
 * The Architect Scripting class for the Call Data Action action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallData}
 * @param coreDataActionViewModel - ( *Internal* ) an Architect core call data action view model.
 */
declare class ArchActionCallData extends ArchBaseActionDataAction {
    // constructor(coreDataActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallData'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallData instance.
     */
    readonly isArchActionCallData: boolean;
    /**
     * This sets the data action to call at runtime by its identifier.
     * @param dataActionId - the identifier of the Data Action Service action.
     * @param [callbackFunction] - a callback function to call if the Data Action Service action
     *                                                            action is successfully looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect call data action instance.
     */
    setDataActionByIdAsync(dataActionId: string, callbackFunction?: callbackArchActionCallData): void;
    /**
     * This sets the data action to call at runtime by its name.
     * @param dataActionName - the name of the Data Action Service action.
     * @param [callbackFunction] - a callback function to call if the Data Action is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect call data action instance.
     * @param [categoryName] - if a non-blank string is supplied for the category name,
     *                                         the data action will be set only if it belongs to the specified category.
     *                                         Category name lookups are performed case insensitively.  Additionally
     *                                         if you have a scenario where multiple data actions are named the same
     *                                         but reside in different categories, use this parameter to specify
     *                                         the category to disambiguate the data action you want.
     */
    setDataActionByNameAsync(dataActionName: string, callbackFunction?: (...params: any[]) => any, categoryName?: string): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect call
 * secure action instance such as {@link ArchActionCallDataSecure#setDataSecureActionByIdAsync} or {@link ArchActionCallDataSecure#setDataSecureActionByNameAsync}.
 * @param ArchActionCallDataSecure - the Architect call secure action instance.
 */
declare type callbackArchActionCallDataSecure = (ArchActionCallDataSecure: ArchActionCallDataSecure) => void;

/**
 * The Architect Scripting class that represents the Call Secure Data Action action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallDataSecure}
 * @param coreSecureActionViewModel - ( *Internal* ) an Architect core call secure action view model.
 */
declare class ArchActionCallDataSecure extends ArchBaseActionDataAction {
    // constructor(coreSecureActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallDataSecure'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallDataSecure instance.
     */
    readonly isArchActionCallDataSecure: boolean;
    /**
     * This sets the secure action to call at runtime by its identifier.
     * @param secureActionId - the identifier of the Secure Action Service action.
     * @param [callbackFunction] - a callback function to call if the Secure Action Service action
     *                                                            action is successfully looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect call secure action instance.
     */
    setDataSecureActionByIdAsync(secureActionId: string, callbackFunction?: callbackArchActionCallDataSecure): void;
    /**
     * This sets the secure data action to call at runtime by its name.
     * @param dataSecureActionName - the name of the Secure Data Action Service action. The name is not case sensitive on the lookup.
     * @param [callbackFunction] - a callback function to call if the Secure Data Action is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect call secure action instance.
     * @param [categoryName] - if a non-blank string is supplied for the category name,
     *                                         the secure data action will be set only if it belongs to the specified category.
     *                                         Category name lookups are performed case insensitively.  Additionally
     *                                         if you have a scenario where multiple secure data actions are named the same
     *                                         but reside in different categories, use this parameter to specify
     *                                         the category to disambiguate the secure data action you want.
     */
    setDataSecureActionByNameAsync(dataSecureActionName: string, callbackFunction?: (...params: any[]) => any, categoryName?: string): void;
}

/**
 * The Architect Scripting class that represents the Call Dialog Engine Bot action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallDialogEngineBot}
 * @param coreDialogEngineActionViewModel - ( *Internal* ) an Architect core Call Dialog Engine action view model.
 */
declare class ArchActionCallDialogEngineBot extends ArchBaseActionBot {
    // constructor(coreDialogEngineActionViewModel: any);
    /**
     * Returns the action type identifier string from actionTypes.js
     */
    static readonly _actionTypeId: string;
    /**
     * Returns the display type name string 'ArchActionCallDialogEngineBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallDialogEngineBot instance.
     */
    readonly isArchActionCallDialogEngineBot: boolean;
    /**
     * The collection of intents and their parameters into which variables can be assigned. To access an intent, you can use
     * the getNamedValueByName function on this property and pass in the name of the intent you want to access.
     * That intent will contain its parameters, which you can access also via getNamedValueByName.
     */
    readonly intentParameters: ArchNamedValueList;
    /**
     * The contents of this named value list come from the Failure Outputs schema. It will contain two values: errorType and errorMessage.
     * These values will be returned by the server if the action takes the Failure path.
     */
    readonly dialogEngineOutputsFailure: ArchNamedValueList;
    /**
     * This sets the Dialog Engine bot to call at runtime by its identifier.
     * @param dialogEngineBotId - the identifier of the Dialog Engine bot
     * @param [callbackFunction] - a callback function to call if the Dialog Engine bot is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect Call Dialog Engine Bot action instance.
     */
    setDialogEngineBotByIdAsync(dialogEngineBotId: string, callbackFunction?: (...params: any[]) => any): void;
    /**
     * This sets the Dialog Engine bot to call at runtime by its name.
     * @param botName - the name of the Dialog Engine bot to set.
     * @param [callbackFunction] - a callback function to call if the Dialog Engine bot is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect Call Dialog Engine Bot action instance.
     */
    setDialogEngineBotByNameAsync(botName: string, callbackFunction?: (...params: any[]) => any): void;
}

declare class ArchActionCallDialogflowBot extends ArchBaseActionDialogflow {
    // constructor(coreDialogflowActionViewModel: any);
    /**
     * Returns the action type identifier string from actionTypes.js
     */
    readonly _actionTypeId: string;
    /**
     * Returns the display type name string 'ArchActionCallDialogflowBot'.
     */
    readonly displayTypeName: string;
    /**
     * The collection of intents and their parameters into which variables can be assigned. To access an intent, you can use
     * the getNamedValueByName function on this property and pass in the name of the intent you want to access.
     * That intent will contain its parameters, which you can access also via getNamedValueByName.
     */
    readonly intentParameters: ArchNamedValueList;
    /**
     * Returns the string 'Draft', which is the name for the Draft environment on a Dialogflow agent
     */
    readonly draftEnvironmentName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionDialogflow instance.
     */
    readonly isArchBaseActionDialogflow: boolean;
    /**
     * The contents of this named value list come from the Failure Outputs schema. It will contain two values: errorType and errorMessage.
     * These values will be returned by the server if the action takes the Failure path.
     */
    readonly lexBotOutputsFailure: ArchNamedValueList;
    /**
     * Returns a unique array of names of intents that are configured for the selected bot. This array contains intent
     * names for the bot that will be executed at flow runtime. As such, for some bots like Lex bots, this requires selecting
     * the Lex bot alias since intents are defined on the alias prior to this array being populated.
     */
    readonly intentNames: string[];
    /**
     * This gets an action output for this action that matches an intent name. It will not return the built-in Failure output.
     * @param intentName - the name of the intent whose matching output to find
     */
    getOutputByIntentName(intentName: string): ArchActionOutput;
    /**
     * Specifies the amount of time to wait for a user's response to a bot prompt.
     * A negative or NOT_SET duration will be treated as immediate.
     */
    readonly followupResponseTimeout: ArchValueDuration;
    /**
     * The input text for the bot.  This is usually only set in flows when chaining
     * bot actions together.
     */
    readonly inputText: ArchValueString;
    /**
     * This adds a session variable name value pair to the Base Bot action that can be used to specify
     * the session variable's name and corresponding value that should be assigned to it.  On the returned
     * {@link ArchBaseNameValuePair} pair:
     * * the [name]{@link ArchBaseNameValuePair#name} property specifies the name of the session variable whose value you want to set
     * * the [value]{@link ArchBaseNameValuePair#value} property is the value to set on the session variable at runtime.
     * @param [nameLiteral] - a string that specifies the name of the session variable to set.
     * @param [valueExpression] - a string expression that specifies the value to set on the session variable.
     */
    addSessionVariableNameValuePair(nameLiteral?: string, valueExpression?: string): ArchBaseNameValuePair;
    /**
     * Returns the input Session Variables configured on the action.
     */
    readonly sessionVariables: ArchBaseNameValuePairs;
    /**
     * The failure output for this action
     */
    readonly outputFailure: ArchActionOutput;
    /**
     * Gets an output by its identifier.  If it cannot be found, this method will throw.
     * Normally you won't need to use this method and will use the helper methods available on inheriting classes
     * when accessing pre-defined outputs like success, failure, timeout, etc. etc.  Attempting to
     * get an output by id on a menu choice's action such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return nothing.
     * @param output - identifies output you want to obtain.  If output is an ArchBranch instance,
     *                                         the {@link ArchBranch#outputId} value will be used.  Otherwise valid string
     *                                         identifier values can be found in {@link ArchEnums#OUTPUT_IDS} or can be a guid.
     *                                         Remember that requesting the 'success' output on an action with a
     *                                         [fake success output]{@link ArchBaseActionWithOutputsFakeSuccessFailure#hasFakeSuccessOutput} will return nothing.
     */
    getOutputById(output: string | ArchBranch): ArchActionOutput;
    /**
     * Gets an output by its identifier.  If it cannot be found, this method will throw.
     * Normally you won't need to use this method and will use the helper methods available on inheriting classes
     * when accessing pre-defined outputs like success, failure, timeout, etc. etc.  Attempting to
     * get an output by id on a menu choice's action such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return nothing.
     * @param output - identifies output you want to obtain by name.  If output is an ArchBranch instance,
     *                                         the {@link ArchBranch#name} value will be used.
     *                                         Remember that requesting the 'Success' output on an action with a
     *                                         [fake success output]{@link ArchBaseActionWithOutputsFakeSuccessFailure#hasFakeSuccessOutput} will return nothing.
     *                                         For non-dynamic outputs, the name should be specified in English.
     * @param [wantDynamicOutput = false] - because it is possible for some actions to have both a non-dynamic output
     *                                        and a dynamic output with the same name, this boolean will let you specify
     *                                        which output you want.  An example of this would be the built in Failure
     *                                        output on a call bot action but that bot also has an intent named Failure
     *                                        so the action has two outputs with the same name of 'Failure'.  Only one
     *                                        of those would be a dynamic output and that's the output for the Failure
     *                                        intent, not the built-in Failure action output.
     */
    getOutputByName(output: string | ArchBranch, wantDynamicOutput?: boolean): ArchActionOutput;
    /**
     * Returns the output at the given index.  It's important to note that on actions that have a fake success
     * output if you request the output at the index for the fake success, you will get nothing returned because
     * the fake success output isn't something that you should do anything with.  Attempting to
     * access an output by index on a menu choice's action such as {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * will return nothing.
     * @param index - the index of the output to retrieve.  This value should be a non-negative integer.
     */
    getOutputByIndex(index: number): ArchActionOutput;
    /**
     * Returns the number of outputs on this action.  For actions that have a fake success output like what you
     * see on the various transfer actions, that will be included in the count to be consistent with the Architect UI.
     * Attempting to get the output count on a menu choice's action such as such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return 0.
     */
    readonly outputCount: number;
    /**
     * Returns an array of action outputs for this action.  Remember that it is possible to have an
     * undefined item in the returned ArchActionOutput array.  This is true when the output is "fake".
     * Accessing the outputs on a menu choice's action such as {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * will return an empty array.
     */
    readonly outputs: ArchActionOutput[];
    /**
     * A string suitable for logging that contains information about this action.  This will contain the action
     * tracking id, name and scripting type name.
     */
    readonly logStr: string;
    /**
     * The Architect action type label
     */
    readonly displayTypeNameArchitect: string;
    /**
     * Returns whether or not this action is the action property for a [menu choice]{@link ArchBaseMenuChoice}.
     * For example, the {@link ArchMenuDisconnect#actionDisconnect} property on an {@link ArchMenuDisconnect}
     * instance.
     */
    readonly isMenuChoiceAction: boolean;
    /**
     * Returns whether or not this action is reachable at runtime.
     */
    readonly isReachable: boolean;
    /**
     * Returns whether or not this action is secure which means either the action by its very nature
     * is secure or it consumes secure data.
     */
    readonly isSecure: boolean;
    /**
     * Returns whether or not this action is unreachable at runtime.
     */
    readonly isUnreachable: boolean;
    /**
     * The name of the action
     */
    name: string;
    /**
     * Returns the parent flow for this action.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns the parent menu choice if this action is the action for a [menu choice]{@link ArchBaseMenuChoice}.
     * Otherwise, nothing is returned.
     */
    readonly parentMenuChoice: ArchBaseMenuChoice;
    /**
     * Returns the parent task that contains this action if this action is in a [task]{@link ArchTask} or [looping task]{@link ArchTaskLoop}.
     * Otherwise, nothing is returned.
     */
    readonly parentTask: ArchTask | ArchTaskLoop;
    /**
     * Returns the parent state that contains this action if this action is in a [state]{@link ArchState}.
     * Otherwise, nothing is returned.
     */
    readonly parentState: ArchState;
    /**
     * The integer tracking identifier for this action.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
    /**
     * The identifier string for this object.
     */
    readonly id: string;
    /**
     * Returns whether or not the id property may be blank or undefined for this object.  For example, the returned settings from {@link ArchMenu#settingsMenu}
     * will have a blank identifier along with the settings returned from {@link ArchMenu#settingsSpeechRec}.  Note that this is
     * an extremely rare case.
     */
    readonly idMayBeBlank: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * The Architect Scripting class that represents the Call Dialogflow CX Bot action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallDialogflowCxBot}
 * @param coreDialogflowCxActionViewModel - ( *Internal* ) an Architect core Call Dialogflow Cx Bot action view model.
 */
declare class ArchActionCallDialogflowCxBot extends ArchBaseActionDialogflow {
    // constructor(coreDialogflowCxActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallDialogflowCxBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallDialogflowCxBot instance.
     */
    readonly isArchActionCallDialogflowCxBot: boolean;
}

/**
 * The Architect Scripting class that represents the Call Lex Bot action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallLexBot}
 * @param coreLexActionViewModel - ( *Internal* ) an Architect core Call Lex Bot action view model.
 */
declare class ArchActionCallLexBot extends ArchBaseActionLex {
    // constructor(coreLexActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallLexBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallLexBot instance.
     */
    readonly isArchActionCallLexBot: boolean;
    /**
     * This sets the Lex bot alias to call at runtime by its identifier.
     * @param lexBotAliasId - the identifier of the Lex bot alias.
     * @param [callbackFunction] - a callback function to call if the Lex bot alias
     *                                                            is successfully looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect Call Lex Bot action instance.
     */
    setLexBotAliasByIdAsync(lexBotAliasId: string, callbackFunction?: (...params: any[]) => any): void;
    /**
     * This sets the Lex Bot Alias to call at runtime by its name.
     * @param aliasName - the name of the Lex Alias to set. The name is not case sensitive on the lookup.
     * @param botNameOrId - the name or identifier of the Lex Bot associated with the Lex Bot alias. If a name,
     *                               the name lookup is not case sensitive.
     * @param [searchByBotName = false] - boolean that indicates whether to treat the botNameOrId parameter as a bot
     *                                            name or bot identifier.  True indicates that the botNameOrId value should be
     *                                            treated as a bot name so a name lookup is performed to find the Lex Bot.  False
     *                                            indicates that botNameOrId should be treated as an identifier so the Lex Bot
     *                                            is looked up by the identifier value specified in the botNameOrId parameter.
     * @param [callbackFunction] - a callback function to call if the Lex Bot and Lex Alias is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect Call Lex Bot action instance.
     */
    setLexBotAliasByNameAsync(aliasName: string, botNameOrId: string, searchByBotName?: boolean, callbackFunction?: (...params: any[]) => any): void;
    /**
     * The audio that plays before invoking the bot
     */
    readonly startAudio: ArchAudio;
}

/**
 * The Architect Scripting class that represents the Call Lex V2 Bot action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallLexV2Bot}
 * @param coreLexActionViewModel - ( *Internal* ) an Architect core Call Lex V2 Bot action view model.
 */
declare class ArchActionCallLexV2Bot extends ArchBaseActionLex {
    // constructor(coreLexActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallLexV2Bot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallLexV2Bot instance.
     */
    readonly isArchActionCallLexV2Bot: boolean;
    /**
     * This adds an output session name value pair to the Call Lex V2 Bot action that is used to specify
     * the output session property name to retrieve and the corresponding output variable where the value should be stored at runtime.
     * On the returned {@link ArchBaseNameValuePair}:
     * * the [name]{@link ArchBaseNameValuePair#name} property specifies the name of the output session property whose value you want to retrieve
     * * the [value]{@link ArchBaseNameValuePair#value} property is an output string value property that specifies the string variable
     * where the runtime value of the output session property will be stored.
     * @param [nameLiteral] - a string that specifies the name of the output session property to retrieve.
     * @param [outputVariable] - the variable that should hold the value of the session output variable at runtime.
     * For example -> "Flow.MyStringVar"
     */
    addSessionVariableOutputNameValuePair(nameLiteral?: string, outputVariable?: string | ArchBaseVariable): ArchBaseNameValuePair;
    /**
     * The initial intent to use when invoking the Lex Bot Alias. Set an alias before setting a value on this.
     * This property must be set, and its value must match the name of one of the intents on the action's selected alias.
     */
    readonly aliasInitialIntentName: ArchValueString;
    /**
     * Returns the output Session Variables configured on the action.  If you are looking for
     * the input Session Variables, see {@link ArchBaseActionBot#sessionVariables}.
     */
    static readonly sessionVariableOutputs: ArchBaseNameValuePairs;
    /**
     * This sets the Lex V2 bot alias to call at runtime by its identifier.
     * @param lexBotAliasId - the identifier of the Lex bot alias.
     * @param botName - the name of the Lex bot.
     * @param botRegion - the AWS region in which the bot lives. For example, 'us-east-1'
     * @param [callbackFunction] - a callback function to call if the Lex bot alias
     *                                                            is successfully looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect Call Lex Bot action instance.
     */
    setLexBotAliasByIdAsync(lexBotAliasId: string, botName: string, botRegion: string, callbackFunction?: (...params: any[]) => any): void;
    /**
     * This sets the Lex V2 bot alias to call at runtime by its name. Note that a region and locale for the alias must be
     * supplied, as multiple bots and aliases with the same name could exist across different regions and with different locales.
     * @param aliasName - the name of the Lex Alias to set. The name is not case sensitive on the lookup.
     * @param botNameOrId - the name or identifier of the Lex Bot associated with the Lex Bot alias. If a name,
     *                               the name lookup is not case sensitive.
     * @param botRegion - the AWS region in which the bot lives. For example, 'us-east-1'
     * @param aliasLanguageTag - the locale string for the language the alias supports. For example, 'en-US'.
     *                                    This will match Architect's locale strings, like `archLanguages.englishUnitedStates.tag`
     * @param [searchByBotName = false] - boolean that indicates whether to treat the botNameOrId parameter as a bot
     *                                            name or bot identifier.  True indicates that the botNameOrId value should be
     *                                            treated as a bot name so a name lookup is performed to find the Lex Bot.  False
     *                                            indicates that botNameOrId should be treated as an identifier so the Lex Bot
     *                                            is looked up by the identifier value specified in the botNameOrId parameter.
     * @param [callbackFunction] - a callback function to call if the Lex Bot and Lex Alias is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect Call Lex Bot action instance.
     */
    setLexBotAliasByNameAsync(aliasName: string, botNameOrId: string, botRegion: string, aliasLanguageTag: string, searchByBotName?: boolean, callbackFunction?: (...params: any[]) => any): void;
}

/**
 * The Architect Scripting class for the Call Task action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCallTask}
 * @param coreCallTaskActionViewModel - ( *Internal* ) an Architect core call task action view model.
 */
declare class ArchActionCallTask extends ArchBaseActionWithOutputsDefault {
    // constructor(coreCallTaskActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCallTask'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallTask instance.
     */
    readonly isArchActionCallTask: boolean;
    /**
     * Inputs for the callTask action, only accessible after the callTask action name has been set successfully. Otherwise, undefined.
     */
    readonly taskInputs: ArchNamedValueList;
    /**
     * Outputs for the callTask action, only accessible after the callTask action name has been set successfully. Otherwise, undefined.
     */
    readonly taskOutputs: ArchNamedValueList;
    /**
     * The target task for this call task action.  To clear the task, set the value to either
     * null or undefined.
     */
    targetTask: ArchTask;
}

/**
 * The Architect Scripting class for the Change State action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionChangeState}
 * @param coreChangeStateActionViewModel - ( *Internal* ) an Architect core change state action view model.
 */
declare class ArchActionChangeState extends ArchBaseAction {
    // constructor(coreChangeStateActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionChangeState'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionChangeState instance.
     */
    readonly isArchActionChangeState: boolean;
    /**
     * The target state for this change state action.  To clear the state, set the value to either
     * null or undefined.
     */
    targetState: ArchState;
}

/**
 * The Architect Scripting class that represents the Clear Active Intent action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionClearActiveIntent}
 * @param coreClearActiveIntentActionViewModel - ( *Internal* ) an Architect core clear active intent action view model.
 */
declare class ArchActionClearActiveIntent extends ArchBaseAction {
    // constructor(coreClearActiveIntentActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionClearActiveIntent'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionClearActiveIntent instance.
     */
    readonly isArchActionClearActiveIntent: boolean;
}

/**
 * The Architect Scripting class that represents the Clear Slot action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionClearSlot}
 * @param coreClearSlotActionViewModel - ( *Internal* ) an Architect core clear slot action view model.
 */
declare class ArchActionClearSlot extends ArchBaseAction {
    // constructor(coreClearSlotActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionClearSlot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionClearSlot instance.
     */
    readonly isArchActionClearSlot: boolean;
    /**
     * Adds a slot to the action with the specified slot name.
     * @param slotName - the name of the slot to clear
     */
    addSlot(slotName: string): void;
    /**
     * Deletes a slot from the action at the specified index.
     * @param index - the zero-based index of the slot to delete. This value should be a non-negative integer.
     */
    deleteSlotByIndex(index: number): ArchBaseValue;
    /**
     * Returns the current slot count on the action
     */
    readonly slotCount: number;
}

/**
 * The Architect Scripting class for the Collect Input action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCollectInput}
 * @param coreCollectInputAction - ( *Internal* ) an Architect core collect input action.
 */
declare class ArchActionCollectInput extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreCollectInputAction: any);
    /**
     * Returns the display type name string 'ArchActionCollectInput'.
     */
    static readonly displayTypeName: string;
    /**
     * The input audio for the collect input action.  This is the audio that will be
     * used to prompt the caller for their input.
     */
    readonly inputAudio: ArchAudio;
    /**
     * The inter-digit timeout duration.
     * This property has a flow-level default.
     */
    readonly interDigitTimeout: ArchValueDuration;
    /**
     * Returns true indicating that this is an ArchActionCollectInput instance.
     */
    readonly isArchActionCollectInput: boolean;
    /**
     * The duration associated with the no entry timeout setting on the action.
     * This property has a flow-level default.
     */
    readonly noEntryTimeout: ArchValueDuration;
    /**
     * Helper method to set a variable on the valueVariableInputData property.
     * @param inputDataVariable - the variable to hold the caller entered data
     */
    setInputDataVariable(inputDataVariable: string | ArchVariableString): void;
    /**
     * Sets the exact number of digits to collect on the collect input action.
     * @param digitCount - the digit count which must be an integer that is >=1 and <= 40.
     */
    setDigitsExact(digitCount: number): void;
    /**
     * Sets the range of digits to collect.
     * @param minDigitCount - the minimum number of digits to collect.  It must be an integer that is >=1 and <= 40.
     * @param maxDigitCount - the maximum number of digits to collect.  It must be an integer that is >=1 and <= 40.
     * @param [terminatingDtmf] - the terminating dtmf.  Valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * @param [includeTerminatingDtmfWithInputData = false] - whether or not to include the terminating digit in the result [input data variable]{@link ArchActionCollectInput#valueVariableInputData} if pressed.
     */
    setDigitsRange(minDigitCount: number, maxDigitCount: number, terminatingDtmf?: string | number, includeTerminatingDtmfWithInputData?: boolean): void;
    /**
     * The value that will hold the variable that receives the user entered input at runtime.
     */
    readonly valueVariableInputData: ArchValueString;
    /**
     * The verification audio for the collect input action. This is the audio that will be
     * used to verify the caller's input.
     */
    readonly verificationAudio: ArchAudio;
    /**
     * The verification type set on the collect input action.  The string values in {@link ArchEnums#INPUT_VERIFICATION_TYPES}
     * lists valid values.
     */
    verificationType: string;
    /**
     * Whether or not the input collection will accept a single '*' character as well as numeric digits.
     */
    readonly acceptJustStar: ArchValueBoolean;
    /**
     * Whether or not the input collection will accept a single '*' character as well as numeric digits.
     */
    readonly acceptJustPound: ArchValueBoolean;
}

/**
 * The Architect Scripting class that represents the Communicate action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCommunicate}
 * @param coreCommunicateActionViewModel - ( *Internal* ) an Architect core communicate action view model.
 */
declare class ArchActionCommunicate extends ArchBaseAction {
    // constructor(coreCommunicateActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCommunicate'.
     */
    static readonly displayTypeName: string;
    /**
     * The boolean condition for the Communicate action.  At runtime if the boolean condition evaluates to true, execution
     * will take the Yes output on this action.  Otherwise the No output will be taken.
     */
    readonly communication: ArchValueCommunication;
    /**
     * Returns true indicating that this is an ArchActionCommunicate instance.
     */
    readonly isArchActionCommunicate: boolean;
}

/**
 * The Architect Scripting class that represents the Complete Survey Invite action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCompleteSurveyInvite}
 * @param coreCompleteSurveyInviteViewModel - ( *Internal* ) an Architect core transfer to user action view model.
 */
declare class ArchActionCompleteSurveyInvite extends ArchBaseAction {
    // constructor(coreCompleteSurveyInviteViewModel: TransferVoicemailAction);
    /**
     * The target address to use for the survey invite.
     */
    readonly targetAddress: ArchValueString;
    /**
     * The invite subject to use for the survey invite.
     */
    readonly inviteSubject: ArchValueString;
    /**
     * The invite Body to use for the survey invite.
     */
    readonly inviteBody: ArchValueString;
    /**
     * The reminder subject to use for the survey invite.
     */
    readonly reminderSubject: ArchValueString;
    /**
     * The reminder body to use for the survey invite.
     */
    readonly reminderBody: ArchValueString;
    /**
     * Returns the display type name string 'ArchActionCompleteSurveyInvite'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCompleteSurveyInvite instance.
     */
    readonly isArchActionCompleteSurveyInvite: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect create
 * callback instance such as {@link ArchActionCreateCallback#setScriptByNameAsync} or {@link ArchActionCreateCallback#setScriptByIdAsync}.
 * @param archActionCreateCallback - the Architect create callback action instance.
 */
declare type callbackArchActionCreateCallback = (archActionCreateCallback: ArchActionCreateCallback) => void;

/**
 * The Architect Scripting class for the Create Callback action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionCreateCallback}
 * @param coreCreateCallbackActionViewModel - ( *Internal* ) an Architect core create callback action view model.
 */
declare class ArchActionCreateCallback extends ArchBaseAction {
    // constructor(coreCreateCallbackActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionCreateCallback'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the callback number value for this Create Callback instance.
     */
    readonly callbackNumber: ArchValuePhoneNumber;
    /**
     * The name of the person to call back.
     */
    readonly calleeName: ArchValueString;
    /**
     * Returns true indicating that this is an ArchActionCreateCallback instance.
     */
    readonly isArchActionCreateCallback: boolean;
    /**
     * Input values for the create callback action.  Note that until a script has been set successfully, this will return undefined.
     */
    readonly scriptInputs: ArchNamedValueList;
    /**
     * The queue for this create callback action.
     */
    readonly queue: ArchValueQueue;
    /**
     * This sets the create callback script with the specified name.  Remember this script needs to be a script
     * with the Callback feature set on it to be valid.
     * @param scriptName - the name of the callback script to set.
     * @param [callbackFunction] - a function to call if the callback script is successfully looked up and configured
     *                                        on this action.  The first parameter passed to the callback function will be this
     *                                        create callback action instance.
     */
    setScriptByNameAsync(scriptName: string, callbackFunction?: callbackArchActionCreateCallback): void;
    /**
     * This sets the create callback script with the specified id.  Remember this script needs to be a script
     * with the Callback feature set on it to be valid.
     * @param scriptId - the identifier of the callback script to set.
     * @param [callbackFunction] - a function to call if the callback script is successfully looked up and configured
     *                                        on this action.  The first parameter passed to the callback function will be this
     *                                        create callback action instance.
     */
    setScriptByIdAsync(scriptId: string, callbackFunction?: callbackArchActionCreateCallback): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect data
 * table lookup action instance such as {@link ArchActionDataTableLookup#setDataTableByIdAsync}
 * @param ArchActionDataTableLookup - the Architect base data table instance.
 */
declare type callbackArchActionDataTableLookup = (ArchActionDataTableLookup: ArchActionDataTableLookup) => void;

/**
 * The Architect Scripting class for the Data Table Lookup action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionDataTableLookup}
 * @param coreDataTableLookupActionViewModel - ( *Internal* ) an Architect core call data table view model.
 */
declare class ArchActionDataTableLookup extends ArchBaseActionWithOutputsFoundNotFoundFailure {
    // constructor(coreDataTableLookupActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionDataTableLookup'.
     */
    static readonly displayTypeName: string;
    /**
     * This is the the value you wish to look up at runtime and will be the key field of the data table inputs schema. Please note
     * that this value cannot be assigned a value until the data table is configured on this action using the
     * ArchActionDataTableLookup#setDataTableByIdAsync method.  As such, you will typically assign the value to look up in the
     * callback function passed in to the ArchActionDataTableLookup#setDataTableByIdAsync method.
     */
    readonly lookupValue: ArchValueString;
    /**
     * The contents of this named value list come from the selected data table's reported success output schema.  The
     * name value pair items in this list will let you assign variables that will be populated with output values from
     * the data table if execution is successful.  Note that this named value list may be undefined even if a valid
     * data table is specified on the action.  If no data table is specified on this action, this will return undefined.
     */
    readonly dataTableOutputsFound: ArchNamedValueList;
    /**
     * The contents of this named value list come from the selected data table's reported failure outputs schema.
     */
    readonly dataTableOutputsFailure: ArchNamedValueList;
    /**
     * Returns true indicating that this is an ArchActionDataTableLookup instance.
     */
    readonly isArchActionDataTableLookup: boolean;
    /**
     * This sets the data table that will be used for the lookup by the data table identifier.
     * @param datatableId - the identifier of the Data Table.
     * @param [callbackFunction] - a callback function to call if the data table
     *                                                            is successfully looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect data table lookup action instance.
     */
    setDataTableByIdAsync(datatableId: string, callbackFunction?: callbackArchActionDataTableLookup): void;
    /**
     * This sets the data table that will be used for the lookup by the data table name.
     * @param dataTableName - the name of the Data Table to set.
     * @param [callbackFunction] - a callback function to call if the Data Table is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect data table lookup action instance.
     */
    setDataTableByNameAsync(dataTableName: string, callbackFunction?: (...params: any[]) => any): void;
}

/**
 * The Architect Scripting class that represents the Decision action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionDecision}
 * @param coreDecisionActionViewModel - ( *Internal* ) an Architect core decision action view model.
 */
declare class ArchActionDecision extends ArchBaseActionWithOutputsYesNo {
    // constructor(coreDecisionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionDecision'.
     */
    static readonly displayTypeName: string;
    /**
     * The boolean condition for the decision action.  At runtime if the boolean condition evaluates to true, execution
     * will take the Yes output on this action.  Otherwise the No output will be taken.
     */
    readonly condition: ArchValueBoolean;
    /**
     * Returns true indicating that this is an ArchActionDecision instance.
     */
    readonly isArchActionDecision: boolean;
}

/**
 * The Architect Scripting class that represents the Detect Silence action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionDetectSilence}
 * @param coreDetectSilenceViewModel - ( *Internal* ) an Architect core Detect Silence action view model.
 */
declare class ArchActionDetectSilence extends ArchBaseActionWithSilenceDetection {
    // constructor(coreDetectSilenceViewModel: DetectSilenceActionViewModel);
    /**
     * Returns the display type name string 'ArchActionDetectSilence'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionDetectSilence instance.
     */
    readonly isArchActionDetectSilence: boolean;
}

/**
 * The Architect Scripting class that represents the Dial by Extension action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionDialByExtension}
 * @param coreDialByExtensionAction - ( *Internal* ) an Architect core decision action view model.
 */
declare class ArchActionDialByExtension extends ArchBaseActionWithOutputsFakeSuccessFailureTimeout {
    // constructor(coreDialByExtensionAction: any);
    /**
     * Returns the display type name string 'ArchActionDialByExtension'.
     */
    static readonly displayTypeName: string;
    /**
     * The value that holds the variable for the caller entered extension.
     */
    readonly extensionVariable: ArchValueString;
    /**
     * The duration value for the inter-digit timeout on the action.
     * This property has a flow-level default.
     */
    readonly interDigitTimeout: ArchValueDuration;
    /**
     * Returns true indicating that this is an ArchActionDialByExtension instance.
     */
    readonly isArchActionDialByExtension: boolean;
    /**
     * The audio to use for reprompting the caller.
     */
    readonly repromptAudio: ArchAudio;
    /**
     * The number of times to reprompt the caller for an extension.
     */
    readonly repromptCount: ArchValueInteger;
}

/**
 * The Architect Scripting class that represents the Disconnect action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionDisconnect}
 * @param coreDisconnectActionViewModel - ( *Internal* ) an Architect core disconnect action view model.
 */
declare class ArchActionDisconnect extends ArchBaseAction {
    // constructor(coreDisconnectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionDisconnect'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionDisconnect instance.
     */
    readonly isArchActionDisconnect: boolean;
}

/**
 * The Architect Scripting class that represents the Enable Participant Recording action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionEnableParticipantRecord}
 * @param coreEnableParticipantRecordActionViewModel - ( *Internal* ) an Architect core enable Participant Record action view model.
 */
declare class ArchActionEnableParticipantRecord extends ArchBaseAction {
    // constructor(coreEnableParticipantRecordActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionEnableParticipantRecord'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionEnableParticipantRecord instance.
     */
    readonly isArchActionEnableParticipantRecord: boolean;
}

/**
 * The Architect Scripting class for the End Task action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionEndTask}
 * @param coreEndTaskActionViewModel - ( *Internal* ) an Architect core end task action view model.
 */
declare class ArchActionEndTask extends ArchBaseAction {
    // constructor(coreEndTaskActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionEndTask'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionEndTask instance.
     */
    readonly isArchActionEndTask: boolean;
    /**
     * The branch that should be taken when this end task action is executed.
     */
    targetBranch: ArchBranch;
}

/**
 * The Architect Scripting class that represents the End Workflow action which is a terminating
 * action in the workflow flow type.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionEndWorkflow}
 * @param coreEndWorkflowActionViewModel - ( *Internal* ) an Architect core end workflow action view model.
 */
declare class ArchActionEndWorkflow extends ArchBaseAction {
    // constructor(coreEndWorkflowActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionEndWorkflow'.
     */
    static readonly displayTypeName: string;
    /**
     * This property lets you specify an exit reason string for the workflow at runtime.
     */
    readonly exitReason: ArchValueString;
    /**
     * Returns true indicating that this is an ArchActionEndWorkflow instance.
     */
    readonly isArchActionEndWorkflow: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * schedule instance such as {@link ArchActionEvaluateSchedule#setScheduleByNameAsync}
 * @param ArchActionEvaluateSchedule - the Architect get schedule instance.
 */
declare type callbackArchActionEvaluateSchedule = (ArchActionEvaluateSchedule: ArchActionEvaluateSchedule) => void;

/**
 * The Architect Scripting class that represents the Evaluate Schedule action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionEvaluateSchedule}
 * @param coreEvaluateScheduleViewModel - ( *Internal* ) an Architect core schedule view model.
 */
declare class ArchActionEvaluateSchedule extends ArchBaseActionSchedule {
    // constructor(coreEvaluateScheduleViewModel: any);
    /**
     * Returns the display type name string 'ArchActionEvaluateSchedule'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionEvaluateSchedule instance.
     */
    readonly isArchActionEvaluateSchedule: boolean;
    /**
     * The evaluate emergency group boolean to determine if the action should evaluate a schedule or an emergencyGroup.
     */
    readonly evaluateEmergencyGroup: boolean;
    /**
     * Set the evaluate emergency group evaluation type for the Evaluate Schedule action. The string values in {@link ArchEnums#SCHEDULE_EVALUATION_TYPES}
     * lists valid values.
     * @param newEvaluationType - the disposition value to set
     */
    setEvaluateEmergencyGroup(newEvaluationType: string): void;
    /**
     * This sets the schedule to get at runtime by its identifier.
     * @param scheduleId - the identifier of the schedule.
     * @param [callbackFunction] - a callback function to call if the schedule is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get schedule instance.
     */
    setScheduleByIdAsync(scheduleId: string, callbackFunction?: callbackArchActionEvaluateSchedule): void;
    /**
     * This sets the schedule to get at runtime by its name.
     * @param scheduleName - the name of the schedule.
     * @param [callbackFunction] - a callback function to call if the schedule is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get schedule instance.
     */
    setScheduleByNameAsync(scheduleName: string, callbackFunction?: callbackArchActionEvaluateSchedule): void;
    /**
     * This value must be a valid timezone identifier. The best way to get a list of these strings is to look at what is available
     * in the Architect UI for this action. When specifying a timezone identifier, please note that this does not include the
     * UTC offset. In the Architect UI you can see this when switching from a literal timezone selection to an expression. For example,
     * instead of `Australia/Sydney (+11:00)`, the literal string value you would want to set is `Australia/Sydney`.
     */
    readonly scheduleTimeZone: ArchValueString;
    /**
     * The active output for this action
     */
    readonly outputActive: ArchActionOutput;
    /**
     * The inactive output for this action
     */
    readonly outputInactive: ArchActionOutput;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * schedule instance such as {@link ArchActionEvaluateScheduleGroup#setScheduleGroupByNameAsync}
 * @param ArchActionEvaluateScheduleGroup - the Architect get schedule instance.
 */
declare type callbackArchActionEvaluateScheduleGroup = (ArchActionEvaluateScheduleGroup: ArchActionEvaluateScheduleGroup) => void;

/**
 * The Architect Scripting class for the Evaluate Schedule Group action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionEvaluateSchedule}
 * @param coreEvaluateScheduleGroupViewModel - ( *Internal* ) an Architect core schedule group view model.
 */
declare class ArchActionEvaluateScheduleGroup extends ArchBaseActionSchedule {
    // constructor(coreEvaluateScheduleGroupViewModel: any);
    /**
     * Returns the display type name string 'ArchActionEvaluateScheduleGroup'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionEvaluateScheduleGroup instance.
     */
    readonly isArchActionEvaluateScheduleGroup: boolean;
    /**
     * This sets the schedule group to get at runtime by its identifier.
     * @param scheduleGroupId - the identifier of the schedule group.
     * @param [callbackFunction] - a callback function to call if the schedule group is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get schedule instance.
     */
    setScheduleGroupByIdAsync(scheduleGroupId: string, callbackFunction?: callbackArchActionEvaluateScheduleGroup): void;
    /**
     * This sets the schedule group to get at runtime by its name.
     * @param scheduleGroupName - the name of the schedule group.
     * @param [callbackFunction] - a callback function to call if the schedule group is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get schedule instance.
     */
    setScheduleGroupByNameAsync(scheduleGroupName: string, callbackFunction?: callbackArchActionEvaluateScheduleGroup): void;
    /**
     * The value that will hold the variable that receives the response body fetched at runtime.
     */
    readonly inServiceSchedules: ArchValueStringCollection;
    /**
     * The open output for this action
     */
    readonly outputOpen: ArchActionOutput;
    /**
     * The closed output for this action
     */
    readonly outputClosed: ArchActionOutput;
    /**
     * The holiday output for this action
     */
    readonly outputHoliday: ArchActionOutput;
    /**
     * The emergency output for this action
     */
    readonly outputEmergency: ArchActionOutput;
}

/**
 * The Architect Scripting class that represents the Exit Bot Flow action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionExitBotFlow}
 * @param coreDisconnectActionViewModel - ( *Internal* ) an Architect core exit bot flow action view model.
 */
declare class ArchActionExitBotFlow extends ArchBaseAction {
    // constructor(coreDisconnectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionExitBotFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionExitBotFlow instance.
     */
    readonly isArchActionExitBotFlow: boolean;
}

/**
 * The Architect Scripting class for the Extract Secure Data action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionExtractSecureData}
 * @param coreExtractSecureDataActionViewModel - ( *Internal* ) an Architect core extract secure data action view model.
 */
declare class ArchActionExtractSecureData extends ArchBaseAction {
    // constructor(coreExtractSecureDataActionViewModel: any);
    /**
     * Call this function to acknowledge the insecuring of secure data with the logged in user and current date. This
     * must be called for the extract secure data action to be valid.  If not acknowledged, the action will be in error.
     */
    acknowledgeSecureUsage(): void;
    /**
     * This adds an extract secure data statement to an extract secure data action.
     * @param archDataType - the data type for this extract secure data statement.  The data type must be script creatable.
     * @param variableToAssign - the variable to which the value should be assigned.
     * @param [valueExpressionToAssign] - the expression text for the value to assign in the extract secure data statement.
     */
    addExtractSecureDataStatement(archDataType: ArchDataType, variableToAssign: string | ArchBaseVariable, valueExpressionToAssign?: string): ArchBaseVariableValuePair;
    /**
     * Returns the display type name string 'ArchActionExtractSecureData'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns whether or not the secure data extraction warning has been acknowledged for this action.
     */
    readonly hasSecureDataAcknowledgment: boolean;
    /**
     * Returns true indicating that this is an ArchActionExtractSecureData instance.
     */
    static readonly isArchActionExtractSecureData: boolean;
    /**
     * Returns an array of update statements currently configured on this extract secure data action.  If there are no
     * update statements configured, an empty array will be returned.
     */
    readonly statements: ArchBaseVariableValuePair[];
}

/**
 * The Architect Scripting class that represents the Find Group action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindGroup}
 * @param coreFindGroupActionViewModel - ( *Internal* ) an Architect core Find Group action view model.
 */
declare class ArchActionFindGroup extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindGroupActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindGroup'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindGroup instance.
     */
    readonly isArchActionFindGroup: boolean;
    /**
     * The value that will hold the returned group if found.
     */
    readonly findResult: ArchValueGroup;
}

/**
 * The Architect Scripting class that represents the Find Language Skill action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindLanguageSkill}
 * @param coreFindLanguageSkillActionViewModel - ( *Internal* ) an Architect core Find Language Skill action view model.
 */
declare class ArchActionFindLanguageSkill extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindLanguageSkillActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindLanguageSkill'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindLanguageSkill instance.
     */
    readonly isArchActionFindLanguageSkill: boolean;
    /**
     * The value that will hold the returned languageSkill if found.
     */
    readonly findResult: ArchValueLanguageSkill;
}

/**
 * The Architect Scripting class that represents the Find Queue action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindQueue}
 * @param coreFindQueueActionViewModel - ( *Internal* ) an Architect core Find Queue action view model.
 */
declare class ArchActionFindQueue extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindQueueActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindQueue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindQueue instance.
     */
    readonly isArchActionFindQueue: boolean;
    /**
     * The value that will hold the returned queue if found.
     */
    readonly findResult: ArchValueQueue;
}

/**
 * The Architect Scripting class that represents the Find Queue By Id action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindQueueById}
 * @param coreFindQueueByIdActionViewModel - ( *Internal* ) an Architect core Find Queue By Id action view model.
 */
declare class ArchActionFindQueueById extends ArchBaseActionFindSystemObjectById {
    // constructor(coreFindQueueByIdActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindQueueById'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindQueueById instance.
     */
    readonly isArchActionFindQueueById: boolean;
    /**
     * The value that holds the result of the find queue by identifier lookup at runtime.
     */
    readonly findResult: ArchValueQueue;
}

/**
 * The Architect Scripting class that represents the Find Skill action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindSkill}
 * @param coreFindSkillActionViewModel - ( *Internal* ) an Architect core Find Skill action view model.
 */
declare class ArchActionFindSkill extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindSkillActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindSkill'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindSkill instance.
     */
    readonly isArchActionFindSkill: boolean;
    /**
     * The value that will hold the returned skill if found.
     */
    readonly findResult: ArchValueSkill;
}

/**
 * The Architect Scripting class that represents the Find System Prompt action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindSystemPrompt}
 * @param coreFindSystemPromptActionViewModel - ( *Internal* ) an Architect core Find System Prompt action view model.
 */
declare class ArchActionFindSystemPrompt extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindSystemPromptActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindSystemPrompt'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindSystemPrompt instance.
     */
    readonly isArchActionFindSystemPrompt: boolean;
    /**
     * The value that will hold the returned system prompt if found.
     */
    readonly findResult: ArchValuePrompt;
}

/**
 * The Architect Scripting class that represents the Find User action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindUser}
 * @param coreFindUserActionViewModel - ( *Internal* ) an Architect core Find User action view model.
 */
declare class ArchActionFindUser extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindUserActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindUser'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindUser instance.
     */
    readonly isArchActionFindUser: boolean;
    /**
     * The value that holds the result of the find user by identifier lookup at runtime.
     */
    readonly findResult: ArchValueUser;
}

/**
 * The Architect Scripting class that represents the Find User By Id action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindUserById}
 * @param coreFindUserByIdActionViewModel - ( *Internal* ) an Architect core Find User By Id action view model.
 */
declare class ArchActionFindUserById extends ArchBaseActionFindSystemObjectById {
    // constructor(coreFindUserByIdActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindUserById'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindUserById instance.
     */
    readonly isArchActionFindUserById: boolean;
    /**
     * The value that holds the result of the find user by identifier lookup at runtime.
     */
    readonly findResult: ArchValueUser;
}

/**
 * The Architect Scripting class that represents the Find User Prompt action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindUserPrompt}
 * @param coreFindUserPromptActionViewModel - ( *Internal* ) an Architect core Find User Prompt action view model.
 */
declare class ArchActionFindUserPrompt extends ArchBaseActionFindSystemObjectByName {
    // constructor(coreFindUserPromptActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindUserPrompt'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindUserPrompt instance.
     */
    readonly isArchActionFindUserPrompt: boolean;
    /**
     * The value that will hold the returned user prompt if found.
     */
    readonly findResult: ArchValuePrompt;
}

/**
 * The Architect Scripting class that represents the Find Users By Id action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFindUsersById}
 * @param coreFindUsersByIdActionViewModel - ( *Internal* ) an Architect core Find Users By Id action view model.
 */
declare class ArchActionFindUsersById extends ArchBaseActionFindSystemObjectsById {
    // constructor(coreFindUsersByIdActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFindUsersById'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFindUsersById instance.
     */
    readonly isArchActionFindUsersById: boolean;
    /**
     * The value that holds the result of the find users by identifier lookup at runtime.
     * Remember at runtime the contents of this array will correspond one to one
     * for the user identifier strings that are submitted in the {@link ArchBaseActionFindSystemObjectsById#findIds} property.
     */
    readonly findResult: ArchValueUserCollection;
}

/**
 * The Architect Scripting class that represents the Flush Audio action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionFlushAudio}
 * @param coreFlushAudioActionViewModel - ( *Internal* ) an Architect core flush audio action view model.
 */
declare class ArchActionFlushAudio extends ArchBaseAction {
    // constructor(coreFlushAudioActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionFlushAudio'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionFlushAudio instance.
     */
    readonly isArchActionFlushAudio: boolean;
}

/**
 * The Architect Scripting class that represents the Get External Contact action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetExternalContact}
 * @param coreGetExternalContactActionViewModel - ( *Internal* ) an Architect core Get External Contact action view model.
 */
declare class ArchActionGetExternalContact extends ArchBaseActionWithOutputsFoundNotFound {
    // constructor(coreGetExternalContactActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetExternalContact'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetExternalContact instance.
     */
    readonly isArchActionGetExternalContact: boolean;
    /**
     * An id code to look up
     */
    readonly externalId: ArchValueString;
    /**
     * The returned External Contact.
     */
    readonly externalResult: ArchValueExternalContact;
}

/**
 * The Architect Scripting class that represents the Get External Organization action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetExternalOrganization}
 * @param coreGetExternalOrganizationActionViewModel - ( *Internal* ) an Architect core Get External Organization action view model.
 */
declare class ArchActionGetExternalOrganization extends ArchBaseActionWithOutputsFoundNotFound {
    // constructor(coreGetExternalOrganizationActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetExternalOrganization'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetExternalOrganization instance.
     */
    readonly isArchActionGetExternalOrganization: boolean;
    /**
     * An id code to look up
     */
    readonly externalId: ArchValueString;
    /**
     * The returned External Organization.
     */
    readonly externalResult: ArchValueExternalOrganization;
}

/**
 * The Architect Scripting class that represents the Get Journey Outcome action.  The "findId" property
 * here is the journey session identifier and the "findResult" will be a Journey Session data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneyOutcome}
 * @param coreGetJourneySessionActionViewModel - ( *Internal* ) an Architect core Get Journey Outcome action view model.
 */
declare class ArchActionGetJourneyOutcome extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneyOutcome'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneyOutcome instance.
     */
    readonly isArchActionGetJourneyOutcome: boolean;
    /**
     * The output value that holds the journey outcome result at runtime.
     */
    readonly findResult: ArchValueJourneyOutcome;
}

/**
 * The Architect Scripting class that represents the Get Journey Outcome Scores by Session action.  The "findId" property
 * here is the journey session identifier and the "findResult" will be a Journey Outcome Score collection data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneyOutcomeScoresBySession}
 * @param coreGetJourneySessionsByExternalContactActionViewModel - ( *Internal* ) an Architect core Get Journey Session action view model.
 */
declare class ArchActionGetJourneyOutcomeScoresBySession extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionsByExternalContactActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneyOutcomeScoresBySession'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneyOutcomeScoresBySession instance.
     */
    readonly isArchActionGetJourneyOutcomeScoresBySession: boolean;
    /**
     * The value that holds the journey output score collection result for the supplied external
     * journey session identifier.  If runtime execution of this action takes the Not Found output, the
     * value of the variable set here is left untouched.
     */
    readonly findResult: ArchValueJourneyOutcomeScoreCollection;
}

/**
 * The Architect Scripting class that represents the Get Journey Segment action.  The "findId" property
 * here is the journey session identifier and the "findResult" will be a Journey Session data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneySegment}
 * @param coreGetJourneySessionActionViewModel - ( *Internal* ) an Architect core Get Journey Session action view model.
 */
declare class ArchActionGetJourneySegment extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneySegment'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneySegment instance.
     */
    readonly isArchActionGetJourneySegment: boolean;
    /**
     * The output value that holds the journey segment result at runtime.
     */
    readonly findResult: ArchValueJourneySegment;
}

/**
 * The Architect Scripting class that represents the Get Journey Session action.  The "findId" property
 * here is the journey session identifier and the "findResult" will be a Journey Session data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneySession}
 * @param coreGetJourneySessionActionViewModel - ( *Internal* ) an Architect core Get Journey Session action view model.
 */
declare class ArchActionGetJourneySession extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneySession'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneySession instance.
     */
    readonly isArchActionGetJourneySession: boolean;
    /**
     * The value that holds the journey session result.
     */
    readonly findResult: ArchValueJourneySession;
}

/**
 * The Architect Scripting class that represents the Get Journey Sessions by Customer action.  The "findId" property
 * here is the customer identifier and the "findResult" will be a Journey Session collection data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneySessionsByCustomer}
 * @param coreGetJourneySessionsByCustomerActionViewModel - ( *Internal* ) an Architect core Get Journey Session action view model.
 */
declare class ArchActionGetJourneySessionsByCustomer extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionsByCustomerActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneySessionsByCustomer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneySessionsByCustomer instance.
     */
    readonly isArchActionGetJourneySessionsByCustomer: boolean;
    /**
     * Since the customer identifier is specified by the findId property, the customer identifier
     * type string value is made available here with the findIdType property.  This will be the
     * string value that's used at runtime in conjunction with the customer identifier for the
     * lookup.
     */
    readonly findIdType: ArchValueString;
    /**
     * The value that holds the journey sessions collection result for the supplied customer
     * identifier and identifier type.  If runtime execution of this action takes the Not Found
     * output, the value of the variable set here is left untouched.
     */
    readonly findResult: ArchValueJourneySessionCollection;
}

/**
 * The Architect Scripting class that represents the Get Journey Sessions by External Contact action.  The "findId" property
 * here is the external contact identifier and the "findResult" will be a Journey Session collection data type
 * instance.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetJourneySessionsByExternalContact}
 * @param coreGetJourneySessionsByExternalContactActionViewModel - ( *Internal* ) an Architect core Get Journey Session action view model.
 */
declare class ArchActionGetJourneySessionsByExternalContact extends ArchBaseActionFindSystemObjectById {
    // constructor(coreGetJourneySessionsByExternalContactActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetJourneySessionsByExternalContact'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionGetJourneySessionsByExternalContact instance.
     */
    readonly isArchActionGetJourneySessionsByExternalContact: boolean;
    /**
     * The value that holds the journey sessions collection result for the supplied external
     * contact identifier.  If runtime execution of this action takes the Not Found output, the
     * value of the variable set here is left untouched.
     */
    readonly findResult: ArchValueJourneySessionCollection;
}

/**
 * The Architect Scripting class that represents the Get Participant Data action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetParticipantData}
 * @param coreGetParticipantDataActionViewModel - ( *Internal* ) an Architect core get participant data action view model.
 */
declare class ArchActionGetParticipantData extends ArchBaseAction {
    // constructor(coreGetParticipantDataActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetParticipantData'.
     */
    static readonly displayTypeName: string;
    /**
     * This adds an attribute name value pair to the Get Participant Data action that is used to specify
     * the attribute name to retrieve and the corresponding output variable where the value should be stored at runtime.
     * On the returned {@link ArchBaseNameValuePair}:
     * * the [name]{@link ArchBaseNameValuePair#name} property specifies the name of the attribute whose value you want to retrieve
     * * the [value]{@link ArchBaseNameValuePair#value} property is an output string value property that specifies the string variable
     * where the runtime value of the attribute will be stored.
     * @param [nameExpression] - a string expression that specifies the name of the attribute to retrieve.
     * @param [variableExpression] - a string variable expression that specifies the name of the variable
     * where the value should be stored.  For example -> Flow.MyStringVar
     */
    addAttributeNameOutputValuePair(nameExpression?: string, variableExpression?: string): ArchBaseNameValuePair;
    /**
     * Returns true indicating that this is an ArchActionGetParticipantData instance.
     */
    readonly isArchActionGetParticipantData: boolean;
    /**
     * Returns the name value attribute pairs configured on this Get Participant Data action.
     */
    readonly attributeNameOutputValuePairs: ArchBaseNameValuePairs;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * response instance such as {@link ArchActionGetResponse#setResponseByIdAsync}
 * @param ArchActionGetResponse - the Architect get response instance.
 */
declare type callbackArchActionGetResponse = (ArchActionGetResponse: ArchActionGetResponse) => void;

/**
 * The Architect Scripting class for the Get Response action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionGetResponse}
 * @param coreGetResponseViewModel - ( *Internal* ) an Architect core response view model.
 */
declare class ArchActionGetResponse extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreGetResponseViewModel: any);
    /**
     * Returns the display type name string 'ArchActionGetResponse'.
     */
    static readonly displayTypeName: string;
    /**
     * The contents of this named value list come from the selected response's reported substitution schema.  The
     * name value pair items in this list will let you assign values that will be used as substitutions to the response at runtime.
     * Note that this named value list may be undefined even if a valid response is specified on the action.  If no response is
     * specified on this action, this will return undefined.
     */
    readonly responseSubstitutions: ArchNamedValueList;
    /**
     * Returns true indicating that this is an ArchActionGetResponse instance.
     */
    readonly isArchActionGetResponse: boolean;
    /**
     * Returns whether or not the response set on this action is in the response library set on this action.
     * Both the response and the library have to be valid in order for this to return true.
     */
    readonly isSelectedResponseInSelectedResponseLibrary: boolean;
    /**
     * The perform substitutions boolean to determine if the substitution mappings should be used at execution time.
     */
    performSubstitutions: boolean;
    /**
     * This sets the response to get at runtime by its identifier.
     * @param responseId - the identifier of the response.
     * @param [callbackFunction] - a callback function to call if the response is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get response instance.
     */
    setResponseByIdAsync(responseId: string, callbackFunction?: callbackArchActionGetResponse): void;
    /**
     * This sets the response to get at runtime by its name and optionally a containing response library name.
     * @param responseName - the name of the response. The name is not case sensitive on the lookup.
     * @param [callbackFunction] - a callback function to call if the response is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect Get Response action instance.
     * @param [responseLibraryName] - if a non-blank string is supplied for the response library name,
     *                                         the response will be set only if it belongs to the specified library.
     *                                         Library name lookups are performed case insensitively.  Additionally
     *                                         if you have a scenario where multiple responses are named the same
     *                                         but reside in different libraries, use this parameter to specify
     *                                         the library to disambiguate the response you want.
     */
    setResponseByNameAsync(responseName: string, callbackFunction?: (...params: any[]) => any, responseLibraryName?: string): void;
    /**
     * This sets the response library to get at runtime by its name.
     * @param responseLibraryName - the name of the response library.
     * @param [callbackFunction] - a callback function to call if the response library is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get response instance.
     */
    setResponseLibraryByNameAsync(responseLibraryName: string, callbackFunction?: callbackArchActionGetResponse): void;
    /**
     * Helper method to set a variable on the valueResponseBody property.
     * @param responseBodyVariable - the variable to hold the caller entered data
     */
    setResponseBodyVariable(responseBodyVariable: string | ArchVariableString): void;
    /**
     * The value that will hold the variable that receives the response body fetched at runtime.
     */
    readonly valueResponseBody: ArchValueString;
}

/**
 * The Architect Scripting class that represents the Hold Music action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionHoldMusic}
 * @param coreHoldMusicActionViewModel - ( *Internal* ) an Architect core play hold music action view model.
 */
declare class ArchActionHoldMusic extends ArchBaseAction {
    // constructor(coreHoldMusicActionViewModel: any);
    /**
     * Whether or not the action should accept barge-in input while the hold music is playing.
     */
    readonly bargeInEnabled: ArchValueBoolean;
    /**
     * Returns the display type name string 'ArchActionHoldMusic'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionHoldMusic instance.
     */
    readonly isArchActionHoldMusic: boolean;
    /**
     * The duration for which to play the prompt set on the hold music action.  This only applies at runtime if the
     * play style is set to 'duration'
     */
    readonly playDuration: ArchValueDuration;
    /**
     * The play style set on this hold music action.  The string values in {@link ArchEnums#HOLD_MUSIC_PLAY_STYLES}
     * lists valid hold music play style values.
     */
    playStyle: string;
    /**
     * The prompt to play in the hold music action.
     */
    readonly prompt: ArchValuePrompt;
}

/**
 * Creates a new Architect Initialize Flow Outcome action instance.
 * Instances of this class should not be created directly.
 * @param coreInitializeFlowOutcomeActionViewModel - ( *Internal* ) an Architect core InitializeFlowOutcome view model.
 */
declare class ArchActionInitializeFlowOutcome extends ArchBaseActionFlowOutcome {
    // constructor(coreInitializeFlowOutcomeActionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionInitializeFlowOutcome instance.
     */
    readonly isArchActionInitializeFlowOutcome: boolean;
}

/**
 * The Architect Scripting class for the Jump To Menu action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionJumpToMenu}
 * @param coreDecisionActionViewModel - ( *Internal* ) an Architect core jump to menu action view model.
 */
declare class ArchActionJumpToMenu extends ArchBaseAction {
    // constructor(coreDecisionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionJumpToMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionJumpToMenu instance.
     */
    readonly isArchActionJumpToMenu: boolean;
    /**
     * The target menu for this jump to menu action.  To clear the state, set the value to either
     * null or undefined.
     */
    targetMenu: ArchMenu | ArchMenuSubMenu;
}

/**
 * The Architect Scripting class for the Jump To Task action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionJumpToTask}
 * @param coreDecisionActionViewModel - ( *Internal* ) an Architect core jump to task action view model.
 */
declare class ArchActionJumpToTask extends ArchBaseAction {
    // constructor(coreDecisionActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionJumpToTask'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionJumpToTask instance.
     */
    readonly isArchActionJumpToTask: boolean;
    /**
     * The target task for this jump to task action.
     */
    targetTask: ArchTask;
    /**
     * Inputs for the jump to task action, only accessible after the targetTask has been set successfully. Otherwise, undefined.
     */
    readonly taskInputs: ArchNamedValueList;
}

/**
 * The Architect Scripting class that represents the Loop action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionLoop}
 * @param coreLoopActionViewModel - ( *Internal* ) an Architect core loop action view model.
 */
declare class ArchActionLoop extends ArchBaseActionWithOutputLoop {
    // constructor(coreLoopActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionLoop'.
     */
    static readonly displayTypeName: string;
    /**
     * A value that contains the variable that holds the current loop index.
     */
    readonly currentIndex: ArchValueInteger;
    /**
     * Returns true indicating that this is an ArchActionLoop instance.
     */
    readonly isArchActionLoop: boolean;
    /**
     * The number of times this loop action should loop.
     */
    readonly loopCount: ArchValueInteger;
}

/**
 * The Architect Scripting class for Ask For Next Intent action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionLoopAnythingElse}
 * @param coreAskForNextIntentActionViewModel - ( *Internal* ) an Architect core Ask For Next Intent action view model.
 */
declare class ArchActionLoopAnythingElse extends ArchBaseActionAsk {
    // constructor(coreAskForNextIntentActionViewModel: any);
    /**
     * A value that contains the variable that holds the current loop index.
     */
    readonly currentIndex: ArchValueInteger;
    /**
     * Returns the display type name string 'ArchActionLoopAnythingElse'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionLoopAnythingElse instance.
     */
    readonly isArchActionLoopAnythingElse: boolean;
    /**
     * The loop output for this action where actions to be performed during the loop
     * iteration should be added.  Within the Architect UI, this output is where
     * actions are added between the Begin and End blocks of the Ask For Next
     * Intent action instance.
     */
    readonly outputLoop: ArchActionOutput;
}

/**
 * The Architect Scripting class that represents the Exit Loop action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionLoopExit}
 * @param coreLoopExitActionViewModel - ( *Internal* ) an Architect core loop exit action view model.
 */
declare class ArchActionLoopExit extends ArchBaseAction {
    // constructor(coreLoopExitActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionLoopExit'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionLoopExit instance.
     */
    readonly isArchActionLoopExit: boolean;
}

/**
 * The Architect Scripting class that represents the Next Loop action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionLoopNext}
 * @param coreLoopActionNextViewModel - ( *Internal* ) an Architect core loop next action view model.
 */
declare class ArchActionLoopNext extends ArchBaseAction {
    // constructor(coreLoopActionNextViewModel: any);
    /**
     * Returns the display type name string 'ArchActionLoopNext'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionLoopNext instance.
     */
    readonly isArchActionLoopNext: boolean;
}

/**
 * The Architect Scripting class that represents the Loop Until action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionLoopUntil}
 * @param coreLoopUntilActionViewModel - ( *Internal* ) an Architect core loop until action view model.
 */
declare class ArchActionLoopUntil extends ArchBaseActionWithOutputLoop {
    // constructor(coreLoopUntilActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionLoopUntil'.
     */
    static readonly displayTypeName: string;
    /**
     * Adds an Until Case to a Loop Until action.  You need to specify a name
     * for the until case which will be available as an output on the action
     * after it is successfully added.  If you do not specify an until case
     * expression, the boolean value on the returned until case will be a
     * boolean false literal value.
     */
    addUntilCase: any;
    /**
     * A value that contains the variable that holds the current loop index.
     */
    readonly currentIndex: ArchValueInteger;
    /**
     * Returns true indicating that this is an ArchActionLoopUntil instance.
     */
    readonly isArchActionLoopUntil: boolean;
    /**
     * The number of times this loop action should loop.
     */
    readonly maxLoopCount: ArchValueInteger;
    /**
     * Returns the Until Cases configured on this loop until action as a JavaScript array of {@link ArchNamedValue} instances.
     * The {@link ArchNamedValue#name} property on items in the returned list are the Until Case names.  The {@link ArchNamedValue#value}
     * property on items in the returned list are the {@link ArchValueBoolean} Until Case conditions which determine if
     * the loop until action should exit.  To add an Until Case to this action, call the {@link ArchActionLoopUntil#addUntilCase}
     * method.  Attempting to add items directly to the array returned from this property will not add an until case to the action.
     */
    readonly untilCases: ArchNamedValue[];
}

/**
 * The Architect Scripting class that represents the menu contained in the {@link ArchMenuSubMenu#actionMenu} property.
 * Instances of this action are not directly creatable and will be created by Architect Scripting as needed when the
 * {@link ArchFactoryMenus#addMenuSubMenu} method is called.
 * @param coreMenuActionViewModel - ( *Internal* ) an Architect core menu action view model.
 */
declare class ArchActionMenu extends ArchBaseAction {
    // constructor(coreMenuActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionMenu instance.
     */
    readonly isArchActionMenu: boolean;
}

/**
 * The Architect Scripting class that represents the Play Audio action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionPlayAudio}
 * @param corePlayAudioActionViewModel - ( *Internal* ) an Architect core play audio action view model.
 */
declare class ArchActionPlayAudio extends ArchBaseAction {
    // constructor(corePlayAudioActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionPlayAudio'.
     */
    static readonly displayTypeName: string;
    /**
     * The audio to play
     */
    readonly audio: ArchAudio;
    /**
     * Returns true indicating that this is an ArchActionPlayAudio instance.
     */
    readonly isArchActionPlayAudio: boolean;
}

/**
 * The Architect Scripting class that represents the Play Audio on Silence action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionPlayAudioOnSilence}
 * @param corePlayAudioOnSilenceViewModel - ( *Internal* ) an Architect core Play Audio on Silence action view model.
 */
declare class ArchActionPlayAudioOnSilence extends ArchBaseActionWithSilenceDetection {
    // constructor(corePlayAudioOnSilenceViewModel: PlayAudioOnSilenceActionViewModel);
    /**
     * Returns the display type name string 'archActionPlayAudioOnSilence'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an archActionPlayAudioOnSilence instance.
     */
    readonly isArchActionPlayAudioOnSilence: boolean;
    /**
     * The number of the times the audio had to repeat because it was interrupted.
     */
    readonly actualRepeatCount: ArchValueInteger;
    /**
     * The number of the times the audio can be restarted if it's interrupted while playing
     */
    readonly allowedRepeatCount: ArchValueInteger;
    /**
     * The audio expression for the audio to play after waiting for silence
     */
    readonly audio: ArchAudio;
}

/**
 * The Architect Scripting class for the Play Estimated Wait Time action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionPlayEstimatedWaitTime}
 * @param corePlayEstimatedWaitTimeActionViewModel - ( *Internal* ) an Architect core play estimated wait time action view model.
 */
declare class ArchActionPlayEstimatedWaitTime extends ArchBaseAction {
    // constructor(corePlayEstimatedWaitTimeActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionPlayEstimatedWaitTime'.
     */
    static readonly displayTypeName: string;
    /**
     * The duration value that specifies the estimated wait time for the caller in the queue.
     */
    readonly estimatedWaitTime: ArchValueDuration;
    /**
     * The audio expression for the audio that informs the external participant on the call of
     * their estimated wait time based on the action settings.  You cannot set the audio in this
     * expression directly.
     */
    estimatedWaitTimeAudio: ArchAudio;
    /**
     * Returns true indicating that this is an ArchActionPlayEstimatedWaitTime instance.
     */
    readonly isArchActionPlayEstimatedWaitTime: boolean;
    /**
     * The playback mode for the estimated wait time action.  The string values in {@link ArchEnums#PLAY_ESTIMATED_WAIT_STYLES}
     * lists valid values.
     */
    playbackMode: string;
}

/**
 * The Architect Scripting class that represents the Play Position in Queue action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionPlayPositionInQueue}
 * @param corePlayPositionInQueueActionViewModel - ( *Internal* ) an Architect core play position in queue action view model.
 */
declare class ArchActionPlayPositionInQueue extends ArchBaseAction {
    // constructor(corePlayPositionInQueueActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionPlayPositionInQueue'.
     */
    static readonly displayTypeName: string;
    /**
     * The integer value that specifies the position for the caller in the queue that will be read back.
     * Remember, if this value is a NOT_SET integer then no audio will be played back to the caller.
     */
    readonly positionInQueue: ArchValueInteger;
    /**
     * The audio expression for the audio that informs the external participant on the call of
     * their position in queue based on the action settings.  You cannot set the audio in this
     * expression directly.
     */
    readonly positionInQueueAudio: ArchAudio;
    /**
     * Returns true indicating that this is an ArchActionPlayPositionInQueue instance.
     */
    readonly isArchActionPlayPositionInQueue: boolean;
    /**
     * The playback mode for the position in queue action.  The string values in {@link ArchEnums#PLAY_POSITION_STYLES}
     * lists valid play position values.
     */
    playbackMode: string;
}

/**
 * The Architect Scripting class for the Previous Menu action.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuPreviousMenu}
 * This action will be available from the ArchMenuPreviousMenu actionPreviousMenu property.
 * @param corePreviousMenuActionViewModel - ( *Internal* ) an Architect core previous menu action view model.
 */
declare class ArchActionPreviousMenu extends ArchBaseAction {
    // constructor(corePreviousMenuActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionPreviousMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionPreviousMenu instance.
     */
    readonly isArchActionPreviousMenu: boolean;
}

/**
 * The Architect Scripting class for the Repeat Menu action.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuRepeatMenu}
 * This action will be available from the ArchMenuRepeatMenu actionRepeatMenu property.
 * @param coreRepeatMenuActionViewModel - ( *Internal* ) an Architect core repeat menu action view model.
 */
declare class ArchActionRepeatMenu extends ArchBaseAction {
    // constructor(coreRepeatMenuActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionRepeatMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this object is an ArchActionRepeatMenu instance.
     */
    readonly isArchActionRepeatMenu: boolean;
}

/**
 * The Architect Scripting class that represents the Return To Agent action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionReturnToAgent}
 * @param coreReturnToAgentActionViewModel - ( *Internal* ) an Architect core Return To Agent action view model.
 */
declare class ArchActionReturnToAgent extends ArchBaseAction {
    // constructor(coreReturnToAgentActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionReturnToAgent'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionReturnToAgent instance.
     */
    readonly isArchActionReturnToAgent: boolean;
}

/**
 * The Architect Scripting class that represents the Search External Contacts action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSearchExternalContacts}
 * @param coreSearchExternalContactsActionViewModel - ( *Internal* ) an Architect core Search External Contacts action view model.
 */
declare class ArchActionSearchExternalContacts extends ArchBaseActionWithOutputsMatchExactMatchMultipleNotFound {
    // constructor(coreSearchExternalContactsActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSearchExternalContacts'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSearchExternalContacts instance.
     */
    readonly isArchActionSearchExternalContacts: boolean;
    /**
     * The External Contacts that were found.
     */
    readonly externalResults: ArchValueExternalContactCollection;
    /**
     * A string representation of the phone number, email address or Twitter handle of the contact.
     */
    readonly searchTerm: ArchValueString;
}

/**
 * The Architect Scripting class for the Send Auto Reply action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSendAutoReply}
 * @param coreSendAutoReplyAction - ( *Internal* ) an Architect core collect input action.
 */
declare class ArchActionSendAutoReply extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreSendAutoReplyAction: any);
    /**
     * Returns the display type name string 'ArchActionSendAutoReply'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSendAutoReply instance.
     */
    readonly isArchActionSendAutoReply: boolean;
    /**
     * The from address to use on the reply that is sent.
     */
    readonly from: ArchValueEmailAddress;
    /**
     * The reply mode set on the send auto reply action.  The string values in {@link ArchEnums#SEND_AUTO_REPLY_MODES}
     * lists valid values.
     */
    replyMode: string;
    /**
     * The replyTo address to use.
     */
    readonly replyTo: ArchValueEmailAddress;
    /**
     * The list of cc addresses.
     */
    readonly cc: ArchValueEmailAddressCollection;
    /**
     * The list of bcc addresses.
     */
    readonly bcc: ArchValueEmailAddressCollection;
    /**
     * The message body.
     */
    readonly messageBody: ArchValueString;
    /**
     * Helper method to set a variable on the messageBodyVariable property.
     * @param messageBodyVariable - the variable to hold the subject data
     */
    setMessageBodyVariable(messageBodyVariable: string | ArchVariableString): void;
}

/**
 * The Architect Scripting class for the Send Response action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSendResponse}
 * @param coreSendResponseAction - ( *Internal* ) an Architect core send response action.
 */
declare class ArchActionSendResponse extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreSendResponseAction: any);
    /**
     * Returns the display type name string 'ArchActionSendResponse'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSendResponse instance.
     */
    readonly isArchActionSendResponse: boolean;
    /**
     * The message body.
     */
    readonly messageBody: ArchValueString;
    /**
     * Helper method to set a variable on the messageBodyVariable property.
     * @param messageBodyVariable - the variable to hold the message data
     */
    setMessageBodyVariable(messageBodyVariable: string | ArchVariableString): void;
    /**
     * The message body style of the Send Response action.  The string
     * values in {@link ArchEnums#MESSAGE_BODY_STYLES} lists valid message body style values.
     */
    readonly messageBodyStyle: ArchValueString;
    /**
     * A helper method that sets the messageBodyStyle {@link ArchActionSendResponse#messageBodyStyle} to a literal string value.
     * The string values in {@link ArchEnums#MESSAGE_BODY_STYLES} lists valid message body style values.
     * @param newMessageBodyStyle - the messageBodyStyle value to set
     */
    setLiteralMessageBodyStyle(newMessageBodyStyle: string): void;
}

/**
 * The Architect Scripting class that represents the Set External Tag action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetExternalTag}
 * @param coreSetExternalTagActionViewModel - ( *Internal* ) an Architect core Set External Tag action view model.
 */
declare class ArchActionSetExternalTag extends ArchBaseActionWithOutputsFakeSuccessFailure {
    // constructor(coreSetExternalTagActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetExternalTag'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSetExternalTag instance.
     */
    readonly isArchActionSetExternalTag: boolean;
    /**
     * The external tag setting where you configure the external tag value that you
     * wish to set at runtime.
     */
    readonly externalTag: ArchValueString;
}

/**
 * Creates a new Architect Set Flow Outcome action instance.
 * Instances of this class should not be created directly.
 * @param coreSetFlowOutcomeActionViewModel - ( *Internal* ) an Architect core SetFlowOutcome view model.
 */
declare class ArchActionSetFlowOutcome extends ArchBaseActionFlowOutcome {
    // constructor(coreSetFlowOutcomeActionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSetFlowOutcome instance.
     */
    readonly isArchActionSetFlowOutcome: boolean;
    /**
     * The value to be set as the result of the flow outcome.
     */
    readonly flowOutcomeValue: ArchValueString;
    /**
     * Set the value for the outcome in the Set Flow Outcome action. This is a helper method for doing
     * ```archActionSetFlowOutcome.flowOutcomeValue.setLiteralString(<value>)```
     * The string values in {@link ArchEnums#FLOW_OUTCOMES} are the valid values that can be set.
     * @param newValue - the outcome value to set
     */
    setFlowOutcomeValue(newValue: string): void;
}

/**
 * The Architect Scripting class that represents the Clear Active Intent action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetIntent}
 * @param coreSetIntentActionViewModel - ( *Internal* ) an Architect core set intent action view model.
 */
declare class ArchActionSetIntent extends ArchBaseAction {
    // constructor(coreSetIntentActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetIntent'.
     */
    static readonly displayTypeName: string;
    /**
     * The active intent for the set active intent action.  This should be an string that case sensitively matches the
     * name of an intent for this bot.
     */
    readonly intent: ArchValueString;
    /**
     * Returns true indicating that this is an ArchActionSetIntent instance.
     */
    readonly isArchActionSetIntent: boolean;
}

/**
 * The Architect Scripting class that represents the Set Language action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetLanguage}
 * @param coreSetLocaleActionViewModel - ( *Internal* ) an Architect core set locale action view model.
 */
declare class ArchActionSetLanguage extends ArchBaseAction {
    // constructor(coreSetLocaleActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetLanguage'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSetLanguage instance.
     */
    readonly isArchActionSetLanguage: boolean;
    /**
     * The runtime language to set on the flow.  Note that valid languages to use for this action must be a language
     * with a region sub-tag.
     */
    language: ArchLanguage;
}

/**
 * The Architect Scripting class for the Set Participant Data action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetParticipantData}
 * @param coreSetParticipantDataActionViewModel - ( *Internal* ) an Architect core set participant data action view model.
 */
declare class ArchActionSetParticipantData extends ArchBaseAction {
    // constructor(coreSetParticipantDataActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetParticipantData'.
     */
    static readonly displayTypeName: string;
    /**
     * This adds an attribute name value pair to the Set Participant Data action that can be used to specify
     * the attribute name and corresponding value that should be assigned to it.  On the returned {@link ArchBaseNameValuePair}
     * pair:
     * * the [name]{@link ArchBaseNameValuePair#name} property specifies the name of the attribute whose value you want to set
     * * the [value]{@link ArchBaseNameValuePair#value} property is the value to set on the attribute at runtime.
     * @param [nameExpression] - a string expression that specifies the name of the attribute to set.
     * @param [valueExpression] - a string expression that specifies the value to set on the attribute.
     */
    addAttributeNameValuePair(nameExpression?: string, valueExpression?: string): ArchBaseNameValuePair;
    /**
     * Returns true indicating that this is an ArchActionSetParticipantData instance.
     */
    readonly isArchActionSetParticipantData: boolean;
    /**
     * Returns the name value attribute pairs configured on this Set Participant Data action.
     */
    readonly attributeNameValuePairs: ArchBaseNameValuePairs;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * set screen pop instance such as {@link ArchActionSetScreenPop#setScriptByNameAsync} or {@link ArchActionSetScreenPop#setScriptByIdAsync}.
 * @param archActionSetScreenPop - the Architect set screen pop action instance.
 */
declare type callbackArchActionSetScreenPop = (archActionSetScreenPop: ArchActionSetScreenPop) => void;

/**
 * The Architect Scripting class that represents the Set Screen Pop action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetScreenPop}
 * @param coreScreenPopActionViewModel - ( *Internal* ) an Architect core set screen pop action view model.
 */
declare class ArchActionSetScreenPop extends ArchBaseAction {
    // constructor(coreScreenPopActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetScreenPop'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionSetScreenPop instance.
     */
    readonly isArchActionSetScreenPop: boolean;
    /**
     * Inputs for the screen pop action, only accessible after the script name has been set successfully. Otherwise, undefined.
     */
    readonly scriptInputs: ArchNamedValueList;
    /**
     * This sets the screen pop script with the specified name.  Remember this script needs to be a script
     * with the Screen Pop feature set on it to be valid.
     * @param scriptName - the name of the screen pop script to set.
     * @param [callbackFunction] - a function to call if the screen pop script is successfully
     *                                                              looked up and configured on this action.  The first parameter passed
     *                                                              to the callback function will be this set screen pop action instance.
     */
    setScriptByNameAsync(scriptName: string, callbackFunction?: callbackArchActionSetScreenPop): void;
    /**
     * This sets the screen pop script with the specified id.  Remember this script needs to be a script
     * with the Screen Pop feature set on it to be valid.
     * @param scriptId - the identifier of the screen pop script to set.
     * @param [callbackFunction] - a function to call if the screen pop script is successfully
     *                                                              looked up and configured on this action.  The first parameter passed
     *                                                              to the callback function will be this set screen pop action instance.
     */
    setScriptByIdAsync(scriptId: string, callbackFunction?: callbackArchActionSetScreenPop): void;
}

/**
 * The Architect Scripting class for the Set UUI Data action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetUUIData}
 * @param coreSetUUIDataViewModel - ( *Internal* ) an Architect core set uuidata action view model.
 */
declare class ArchActionSetUUIData extends ArchBaseAction {
    // constructor(coreSetUUIDataViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetUUIData'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionCallData instance.
     */
    readonly isArchActionSetUUIData: boolean;
    /**
     * The outbound UUI data to set on the call.
     */
    readonly uuiData: ArchValueString;
    /**
     * Specifies the when the UUI data should be set.  If the mode is set to transfer, this specifies the outbound UUI data to
     * set if the call is transferred.  If the mode is set to disconnect, this specifies the outbound UUI data to set if the call
     * disconnects.
     */
    mode: string;
}

/**
 * The Architect Scripting class that represents the Set Whisper Audio action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetWhisperAudio}
 * @param coreSetWhisperAudioActionViewModel - ( *Internal* ) an Architect core Set Whisper Audio action view model.
 */
declare class ArchActionSetWhisperAudio extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreSetWhisperAudioActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetWhisperAudio'.
     */
    static readonly displayTypeName: string;
    /**
     * This is a helper function to set no value mode on the {@link ArchActionSetWhisperAudio#whisperAudio} property.
     * If whisper is to be played to an agent, this will use the queue's configured
     * whisper prompt or the default set of beeps if no queue prompt is configured.
     */
    setUseDefaultWhisper(): void;
    /**
     * Whisper audio that will be played to the agent
     */
    readonly whisperAudio: ArchValueAudio;
    /**
     * Returns true indicating that this is an ArchActionSetWhisperAudio instance.
     */
    readonly isArchActionSetWhisperAudio: boolean;
}

/**
 * The Architect Scripting class for the Set Wrapup Code action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSetWrapupCode}
 * @param coreSetWrapupCodeActionViewModel - ( *Internal* ) an Architect core set wrapup code action view model.
 */
declare class ArchActionSetWrapupCode extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreSetWrapupCodeActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionSetWrapupCode'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this object is an ArchActionSetWrapupCode instance.
     */
    readonly isArchActionSetWrapupCode: boolean;
    /**
     * The wrapup code value to set on the participant.
     */
    readonly wrapupCode: ArchValueWrapupCode;
}

/**
 * The Architect Scripting class for the Switch action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionSwitch}
 * @param coreSwitchActionViewModel - ( *Internal* ) an Architect core switch action view model.
 */
declare class ArchActionSwitch extends ArchBaseActionWithOutputsDefault {
    // constructor(coreSwitchActionViewModel: any);
    /**
     * Adds a case to the switch action and returns the value associated with the case.
     */
    addCase(): ArchBaseValue;
    /**
     * Returns the current case count on the switch action not including the Default case.
     */
    readonly caseCount: number;
    /**
     * Returns the maximum number of cases allowed in a switch action not including the Default case.
     * The value is 64.
     */
    readonly caseCountMax: number;
    /**
     * Returns the minimum number of cases allowed in a switch action not including the Default case.
     * The value is 1.
     */
    readonly caseCountMin: number;
    /**
     * Deletes a case from the switch action at the specified index.
     * @param index - the zero based index of the case to delete. This value should be a non-negative integer.  For example: for Case 1, pass in 0.
     */
    deleteCaseByIndex(index: number): ArchBaseValue;
    /**
     * Returns the display type name string 'ArchActionSwitch'.
     */
    static readonly displayTypeName: string;
    /**
     * The evaluation style to use on the switch action.  The string values in {@link ArchEnums#SWITCH_EVALUATION_STYLES}
     * lists valid values.
     */
    readonly evaluationStyle: string;
    /**
     * Returns the Architect value associated with the switch case at the specified index.  The value's
     * type will match the {@link ArchActionSwitch#switchDataType} type.
     * @param index - the zero based index of the case to retrieve. This value should be a non-negative integer.  For example: for Case 1, pass in 0.
     */
    getCaseValue(index: number): ArchBaseValue;
    /**
     * Returns true indicating that this action is an ArchActionSwitch instance.
     */
    readonly isArchActionSwitch: boolean;
    /**
     * Sets the evaluation style to 'matchExpression' and determines the data type to switch on at runtime based on
     * the resulting type of the passed in expression.
     * @param expressionText - the value to switch on at runtime.  For example, if the expression is Flow.MyIntegerVar
     * and Flow.MyIntegerVar is of type integer, then the value to switch on will be of type integer the case values
     * will also be of type integer.  The resulting data type of the expression text must be a script creatable data type.
     * @param [caseExpressionOrExpressions] - if a string, the expression to set on each case in the switch action.  If a string array,
     *                                                 the switch action will be configured to have one case for each string in the string array.
     *                                                 If there are no strings  in the array, one case statement will be present configured to no value.
     *                                                 If an item in the string array is null or undefined, that specific case will be configured
     *                                                 to be no value.  The maximum number of items allowed is available from the {@link ArchActionSwitch#caseCountMax}.
     * @returns - the data type that will be used by the switch action at runtime.
     */
    setExpressionSwitch(expressionText: string, caseExpressionOrExpressions?: string | string[]): ArchDataType;
    /**
     * Sets the evaluation style to 'matchFirstTrue' and sets the data type to switch on to be Boolean with a switch
     * value of true.  The first case value that evaluates to true will be taken at runtime.  If none of the cases
     * evaluate to true, the default output will be taken.  This action will set all of the cases to have a value of
     * false by default.
     * @returns - returns the Boolean Architect data type.
     */
    setFirstTrueSwitch(): ArchDataType;
    /**
     * The data type that will be used to switch on for the action.  This is determined from the expression set on the
     * {@link ArchActionSwitch#setExpressionSwitch} function. Can be null.
     */
    readonly switchDataType: ArchDataType;
}

/**
 * The Architect Scripting class that represents the action contained in the {@link ArchMenuTask#actionTask} property.
 * Instances of this action are not directly creatable and will be created by Architect Scripting as needed when the
 * {@link ArchFactoryMenus#addMenuTask} method is called.
 * @param coreDisconnectActionViewModel - ( *Internal* ) an Architect core task action action view model.
 */
declare class ArchActionTask extends ArchBaseAction {
    // constructor(coreDisconnectActionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTask instance.
     */
    readonly isArchActionTask: boolean;
    /**
     * Returns the task associated with this action.
     */
    readonly task: ArchTask;
}

/**
 * The Architect Scripting class that represents the Transcription action
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTranscription}
 * @param coreTranscriptionViewModel - ( *Internal* ) an Architect core Transcription action view model.
 */
declare class ArchActionTranscription extends ArchBaseAction {
    // constructor(coreTranscriptionViewModel: AbortSurveyInviteAction);
    /**
     * Returns the display type name string 'ArchActionTranscription'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTranscription instance.
     */
    readonly isArchActionTranscription: boolean;
    /**
     * Turns transcription on or off for the current flow. Setting the value to true
     * turns transcription on. Setting the value to false or a NOT_SET will turn
     * transcription off. Remember that not all languages support transcription so
     * when you turn transcription on, that means to transcribe when possible based
     * on the current language of the flow.
     */
    readonly enableTranscription: ArchValueBoolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * transfer to ACD action instance such as {@link ArchActionTransferToAcd#addLiteralBySkillNameAsync} or {@link ArchActionTransferToAcd#setLiteralByQueueNameAsync}
 * @param archArchActionTransferToAcd - the Architect transfer to ACD action instance.
 */
declare type callbackArchActionTransferToAcd = (archArchActionTransferToAcd: ArchActionTransferToAcd) => void;

/**
 * The Architect Scripting class for the Transfer to Acd action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToAcd}
 * @param coreTransferToAcdActionViewModel - ( *Internal* ) an Architect core transfer to acd action view model.
 */
declare class ArchActionTransferToAcd extends ArchBaseActionTransfer {
    // constructor(coreTransferToAcdActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionTransferToAcd'.
     */
    static readonly displayTypeName: string;
    /**
     * This adds a skill by name to this Transfer to Acd action.
     * @param skillName - the name of the skill to add. Skill name lookups are performed case sensitively.
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                            looked up and configured on this action.  The first parameter passed
     *                                                            to the callback function will be this transfer to ACD action instance.
     */
    addLiteralBySkillNameAsync(skillName: string, callbackFunction?: callbackArchActionTransferToAcd): void;
    /**
     * Returns true indicating that this is an ArchActionTransferToAcd instance.
     */
    static readonly isArchActionTransferToAcd: boolean;
    /**
     * The integer priority for this transfer to acd action.  When specifying a literal value, the
     * value should be >= 0 and <= 10.  The available range of priority values is >= -25000000 and
     * <= 25000000 which, if you need to set a value <0 or > 10 then you can do it with an expression
     * where the expression text must call a function or operator so '10 + 5' would let you set a
     * priority of 15 but setting expression text of '15' would be in error since it's specifying
     * just a literal value in the expression text and it would then be validated similarly to the
     * way a literal integer value is.
     */
    readonly priority: ArchValueInteger;
    /**
     * The target queue for this transfer action.
     */
    readonly targetQueue: ArchValueQueue;
    /**
     * This helper method sets the queue to transfer to by accessing the {@link ArchActionTransferToAcd#targetQueue} property
     * and then calls the {@link ArchValueQueue#setLiteralByQueueNameAsync} method passing the submitted queue name through that method.
     * @param queueName - the name of the queue to set
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                            looked up and configured on this action.  The first parameter passed
     *                                                            to the callback function will be this transfer to ACD action instance.
     */
    setLiteralByQueueNameAsync(queueName: string, callbackFunction?: callbackArchActionTransferToAcd): void;
    /**
     * This helper method sets the queue to transfer to by accessing the {@link ArchActionTransferToAcd#targetQueue} property
     * and then calls the {@link ArchValueQueue#setLiteralByQueueIdAsync} method passing the submitted queue identifier through to that method.
     * @param queueId - the identifier of the queue to set
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                            looked up and configured on this action.  The first parameter passed
     *                                                            to the callback function will be this transfer to ACD action instance.
     */
    setLiteralByQueueIdAsync(queueId: string, callbackFunction?: callbackArchActionTransferToAcd): void;
    /**
     * The skills collection for this transfer to acd action.
     */
    readonly skills: ArchBaseSkillValuePairs;
    /**
     * Returns whether or not existing conversation ACD skills should be appended or overwritten.
     * If the runtime value evaluates to true, the skills will be appended.  Any other value,
     * false or a NOT_SET boolean, will result in the skills being overwritten.
     * Setting values on this property is only valid when the Transfer to ACD action
     * is in an Inbound Email flow.
     */
    readonly appendSkills: ArchValueBoolean;
    /**
     * The skills collection for this transfer to acd action.
     */
    readonly languageSkill: ArchValueLanguageSkill;
    /**
     * Returns the agent score pair collection value for this action where you
     * can specify preferred agents on the transfer at runtime.  There is a
     * MakeListAgentScorePair function that will combine User and score information
     * in to an AgentScorePair collection at runtime.  Similarly there is
     * also a MakeAgentScorePair function which creates an individual instance
     * of an AgentScorePair.  Here's example expression text that creates an
     * agent score pair collection from an agent score pair instance created
     * with the User value in the Task.myPreferredAgent variable with a score of 50:
     * ```
     * MakeList(MakeAgentScorePair(Task.myPreferredAgent, 50))
     * ```
     * Or we can use the MakeListAgentScorePair function that will combine two lists
     * together and return an agent score pair collection.  For this example we will
     * have another preferred agent User stored in the Task.myAgent2 variable and a
     * routing score for that agent in a Task.myAgent2Score integer variable:
     * ```
     * MakeListAgentScorePair(MakeList(Task.myPreferredAgent, Task.myPreferredAgent2), MakeList(50, Task.myAgent2Score))
     * ```
     */
    readonly preferredAgents: ArchValueAgentScorePairCollection;
    /**
     * This configures the Transfer to ACD action to use default in-queue handling.
     * When an instance of a Transfer to ACD action is initially created, that is
     * the default state of the action.
     */
    useDefaultInQueueHandling(): void;
    /**
     * The in-queue flow that should be used while the call is in the target queue.
     * Note that the setter will also accept an {ArchFlowInfo} instance as well as
     * an {ArchFlowInfoBasic} instance.  The in-queue flow needs to be the appropriate
     * in-queue type for the parent flow of this action.  For example, if this action
     * was in an inbound call flow, you'd want to use an in-queue call flow info object
     * when calling the setter.
     */
    inQueueHandlingFlowInfo: ArchFlowInfoBasic;
    /**
     * This reflects the [flow type]{@link ArchEnums#FLOW_TYPES} that should be used when specifying the flow info supplied
     * to the {@link ArchActionTransferToAcd#inQueueHandlingFlowInfo} property. If no in-queue override flow type is
     * applicable in this action instance, nothing is returned. An example of when an override flow type is not available
     * is when a Transfer to ACD action is used in an Inbound Chat flow since there isn't any In-Queue Chat flow type.
     */
    readonly inQueueHandlingFlowType: string;
}

/**
 * The Architect Scripting class for the Transfer to Flow action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToFlow}
 * @param coreTransferToFlowActionViewModel - ( *Internal* ) an Architect core transfer to flow action view model.
 */
declare class ArchActionTransferToFlow extends ArchBaseActionTransfer {
    // constructor(coreTransferToFlowActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionTransferToFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTransferToFlow instance.
     */
    static readonly isArchActionTransferToFlow: boolean;
    /**
     * The target flow for the transfer.  Note that the setter will also accept an {@link ArchFlowInfo} instance
     * or an {@link ArchFlowInfoBasic} instance.
     */
    targetFlowInfo: ArchFlowInfoBasic;
}

/**
 * The Architect Scripting class that represents the Transfer To Secure Flow action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToFlowSecure}
 * @param coreTransferToFlowSecureViewModel - ( *Internal* ) an Architect core transfer to secure flow action view model.
 */
declare class ArchActionTransferToFlowSecure extends ArchActionTransferToFlow {
    // constructor(coreTransferToFlowSecureViewModel: any);
    /**
     * The value to use as a timeout when attempting to connect to the transfer target.
     * This property has a flow-level default.
     */
    readonly connectTimeout: ArchValueDuration;
    /**
     * Returns the display type name string 'ArchActionTransferToFlowSecure'.
     */
    static readonly displayTypeName: string;
    /**
     * This is the invocation string data that can be used when launching a secure call flow.  It is not required
     * that you specify a string value.  If you do, it will be available via. the Flow.InvocationData built in variable
     * in the secure call flow at runtime.
     */
    readonly invocationData: ArchValueString;
    /**
     * Returns true indicating that this is an ArchActionTransferToFlowSecure instance.
     */
    readonly isArchActionTransferToFlowSecure: boolean;
}

/**
 * The Architect Scripting class for the Transfer to Group action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToGroup}
 * @param coreTransferToGroupActionViewModel - ( *Internal* ) an Architect core transfer to group action view model.
 */
declare class ArchActionTransferToGroup extends ArchBaseActionTransferWithConnectTimeout {
    // constructor(coreTransferToGroupActionViewModel: any);
    /**
     * Whether or not transfer should allow rollover to voicemail or fail the transfer.
     */
    readonly allowVoicemailRollover: ArchValueBoolean;
    /**
     * Returns the display type name string 'ArchActionTransferToGroup'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTransferToGroup instance.
     */
    static readonly isArchActionTransferToGroup: boolean;
    /**
     * The target group for this transfer action
     */
    readonly targetGroup: ArchValueGroup;
}

/**
 * The Architect Scripting class for the Transfer to Number action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToNumber}
 * @param coreTransferToNumberActionViewModel - ( *Internal* ) an Architect core transfer to number action view model.
 */
declare class ArchActionTransferToNumber extends ArchBaseActionTransferWithConnectTimeout {
    // constructor(coreTransferToNumberActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionTransferToNumber'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this object is an ArchActionTransferToNumber instance.
     */
    static readonly isArchActionTransferToNumber: boolean;
    /**
     * Returns whether or not to perform a release link transfer.  A value of true will perform
     * a release link transfer and a value of false or NOT_SET boolean will not perform
     * a release link transfer at runtime.  This will default false.
     * Until this sentence is removed, please be sure to check this value's settings
     * to ensure it is writable{@link ArchValueSettings#isWritable} prior to attempting to set a value
     * on it since the definition of this property in Architect Scripting precedes general
     * availability of the ability to configure this behavior.
     */
    readonly releaseLinkTransfer: ArchValueBoolean;
    /**
     * The target number for this transfer action
     */
    readonly targetNumber: ArchValueString;
}

/**
 * The Architect Scripting class for the Transfer to User action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToUser}
 * @param coreTransferToUserActionViewModel - ( *Internal* ) an Architect core transfer to user action view model.
 */
declare class ArchActionTransferToUser extends ArchBaseActionTransferWithConnectTimeout {
    // constructor(coreTransferToUserActionViewModel: any);
    /**
     * Whether or not transfer should allow rollover to voicemail or fail the transfer.
     */
    readonly allowVoicemailRollover: ArchValueBoolean;
    /**
     * Returns the display type name string 'ArchActionTransferToUser'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTransferToUser instance.
     */
    static readonly isArchActionTransferToUser: boolean;
    /**
     * The target user for the transfer
     */
    readonly targetUser: ArchValueUser;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * transfer to voicemail action instance such as {@link ArchActionTransferToVoicemail#setTargetUserLiteralByUserIdAsync},
 * {@link ArchActionTransferToVoicemail#setTargetUserLiteralByUserNameAsync}, {@link ArchActionTransferToVoicemail#setTargetQueueLiteralByQueueIdAsync} or
 * {@link ArchActionTransferToVoicemail#setTargetQueueLiteralByQueueNameAsync}
 * @param archActionTransferToVoicemail - the Architect transfer to voicemail action instance.
 */
declare type callbackArchActionTransferToVoicemail = (archActionTransferToVoicemail: ArchActionTransferToVoicemail) => void;

/**
 * The Architect Scripting class for the Transfer to User action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionTransferToVoicemail}
 * In order to work with this action, the easiest thing is to do is set the transfer target type to the desired mode before attempting to
 * set settings on the action as it will enable / disable the properties that can be set appropriately.  See the [transfer target type]{@link ArchActionTransferToVoicemail#transferTargetType}
 * property on how to configure this action to transfer to a user's voicemail or a queue's voicemail.
 * @param coreTransferToVoiceMailViewModel - ( *Internal* ) an Architect core transfer to user action view model.
 */
declare class ArchActionTransferToVoicemail extends ArchBaseActionTransfer {
    // constructor(coreTransferToVoiceMailViewModel: TransferVoicemailAction);
    /**
     * The suggested phone number to use for the voicemail callback.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly calleeName: ArchValueString;
    /**
     * The suggested phone number to use for the voicemail callback.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly callbackNumber: ArchValuePhoneNumber;
    /**
     * Returns the display type name string 'ArchActionTransferToVoicemail'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionTransferToVoicemail instance.
     */
    static readonly isArchActionTransferToVoicemail: boolean;
    /**
     * The inputs for the Composer script configured on this action.  See {@link ArchActionTransferToVoicemail#setScriptByNameAsync} or
     * {@link ArchActionTransferToVoicemail#setScriptByIdAsync} to set the script.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * Note:  Do not attempt to set a value inputs on the selected script the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly scriptInputs: ArchNamedValueList;
    /**
     * This sets the Composer script to associate with the voicemail transfer by the script name.  Remember this script needs to be a script
     * with the Voicemail feature set on it to be valid.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * @param scriptName - the name of the voicemail script to set.
     * @param [callbackFunction] - a function to call if the voicemail script is successfully looked up and configured
     *                                        on this action.  The first parameter passed to the callback function will be this
     *                                        Transfer to Voicemail instance.
     */
    setScriptByNameAsync(scriptName: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * This sets the Composer script to associate with the voicemail transfer by the script id.  Remember this script needs to be a script
     * with the Voicemail feature set on it to be valid.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * 'queue'
     * @param scriptId - the name of the voicemail script to set.
     * @param [callbackFunction] - a function to call if the voicemail script is successfully looked up and configured
     *                                        on this action.  The first parameter passed to the callback function will be this
     *                                        Transfer to Voicemail instance.
     */
    setScriptByIdAsync(scriptId: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified queue by id and if the queue exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'queue'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.  Also, the target queue cannot be set when this action is used within
     * an in-queue call flow.
     * @param queueId - the queue id for the voicemail transfer.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetQueueLiteralByQueueIdAsync(queueId: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified queue by name and if the queue exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'queue'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.  Also, the target queue cannot be set when this action is used within
     * an in-queue call flow.
     * @param queueName - the queue name for the voicemail transfer.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetQueueLiteralByQueueNameAsync(queueName: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified group by id and if the group exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'group'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     * @param groupId - the group id for the voicemail transfer.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetGroupLiteralByGroupIdAsync(groupId: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified group by name and if the group exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'group'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     * @param groupName - the group name for the voicemail transfer.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetGroupLiteralByGroupNameAsync(groupName: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified user by id and if the user exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'user'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     * @param userId - the identifier of the user.
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetUserLiteralByUserIdAsync(userId: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * Sets the voicemail to transfer to the specified user by name and if the user exists then {@link ArchActionTransferToVoicemail#transferTargetType}
     * will be set to 'user'.
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     * @param userName - the username for the user ( i.e. the user's email ).
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                                     looked up and configured on this action.  The first parameter passed
     *                                                                     to the callback function will be this transfer to voicemail instance.
     */
    setTargetUserLiteralByUserNameAsync(userName: string, callbackFunction?: callbackArchActionTransferToVoicemail): void;
    /**
     * The user whose voicemail you want to transfer to at runtime.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'user'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly targetUser: ArchValueUser;
    /**
     * The queue whose voicemail you want to transfer to at runtime.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly targetQueue: ArchValueQueue;
    /**
     * The group whose voicemail you want to transfer to at runtime.
     * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'group'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly targetGroup: ArchValueQueue;
    /**
     * The transfer target type on the Transfer to Voicemail action.  The string values in {@link ArchEnums#VOICEMAIL_TRANSFER_TARGET_TYPES}
     * lists valid transfer target type values.  The default setting will be to transfer to a user's voicemail.
     */
    transferTargetType: string;
    /**
     * Checks to see if the supplied transfer target type is available for either the supported languages configured
     * on the parent flow or for any Architect language.
     * The string values in {@link ArchEnums#VOICEMAIL_TRANSFER_TARGET_TYPES} list valid voicemail
     * target type values.
     * @param transferTargetType - a value from {@link ArchEnums#VOICEMAIL_TRANSFER_TARGET_TYPES}
     * @param [allowAnyLanguage] - if true, the check is made against all Architect languages instead of flow supported languages.
     */
    isTargetTransferTypeAvailable(transferTargetType: string, allowAnyLanguage?: boolean): boolean;
    /**
     * The voicemail audio to play on the call after the [pre-transfer audio]{@link ArchBaseActionTransfer#preTransferAudio} is played.
     * * This will be validated / used at runtime when the {@link ArchActionTransferToVoicemail#transferTargetType} is:
     * * 'queue'
     * Note:  Do not attempt to set a value for this property if the transfer type is not set to a value listed above as as it will
     * not be writable and throw an error if you attempt to do so.
     */
    readonly voicemailGreeting: ArchAudio;
}

/**
 * The Architect Scripting class for the Update Data action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionUpdateData}
 * @param coreUpdateDataActionViewModel - ( *Internal* ) an Architect core update data action view model.
 */
declare class ArchActionUpdateData extends ArchBaseAction {
    // constructor(coreUpdateDataActionViewModel: any);
    /**
     * Returns the display type name string 'ArchActionUpdateData'.
     */
    static readonly displayTypeName: string;
    /**
     * This adds an update data statement to an update data action.
     * @param archDataType - the data type for this update statement.  The data type must be script creatable.
     * @param variableToAssign - the variable to which the value should be assigned.
     * @param [valueExpressionToAssign] - the expression text for the value to assign in the update statement.
     */
    addUpdateDataStatement(archDataType: ArchDataType, variableToAssign: string | ArchBaseVariable, valueExpressionToAssign?: string): ArchBaseVariableValuePair;
    /**
     * Returns true indicating that this is an ArchActionUpdateData instance.
     */
    readonly isArchActionUpdateData: boolean;
    /**
     * Returns an array of update statements currently configured on this update data action.  If there are no
     * update statements configured, an empty array will be returned.
     */
    readonly statements: ArchBaseVariableValuePair[];
}

/**
 * The Architect Scripting class for the Wait action.
 * Instances of this action should be created by calling {@link ArchFactoryActions#addActionWait}
 * @param coreWaitAction - ( *Internal* ) an Architect core wait action.
 */
declare class ArchActionWait extends ArchBaseAction {
    // constructor(coreWaitAction: any);
    /**
     * Returns the display type name string 'ArchActionWait'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchActionWait instance.
     */
    readonly isArchActionWait: boolean;
    /**
     * The wait duration.
     */
    readonly duration: ArchValueDuration;
    /**
     * Returns whether or not the action should trim the wait duration below the max value so as not to
     * throw an error at runtime. If the runtime value evaluates to true, the duration will be
     * trimmed.  Any other value, false or a NOT_SET boolean, will result in the duration not being modified.
     */
    readonly trimDurationNearMaxRunningTime: ArchValueBoolean;
}

/**
 * Creates a new ArchAudio base action instance that represents audio within Architect flows.
 * The default audio case is the audio that will be played for all supported languages set on
 * a flow unless a specific language is overridden.  Audio for a specific language is an audio
 * case on the audio.
 * @param coreAudioViewModel - ( *Internal* ) an Architect core audio view model.
 */
declare class ArchAudio extends ArchBaseCoreObject {
    // constructor(coreAudioViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this audio.  This will contain parent
     * information as well as the audio label which normally represents the property on the parent containing
     * object.
     */
    readonly logStr: string;
    /**
     * The default audio case which specifies the audio that will be played for all
     * supported languages on a flow except any language specific enabled audio cases that
     * override the default audio
     */
    defaultCase: ArchValueAudio;
    /**
     * This method gets an audio case for the specified language.  In order to get an audio case
     * for a language, the language must be a supported language on the flow.  When you request
     * an audio case for a language, it will be created if it does not exist and be enabled.
     * @param archLanguage - the language for which you wish to get the audio case.
     * @returns - the audio case for the specified language.
     */
    getAudioCaseByLanguage(archLanguage: ArchLanguage): ArchAudioCase;
    /**
     * Returns true indicating that this is an ArchAudio instance.
     */
    static isArchAudio: boolean;
    /**
     * Returns whether or not this ArchAudio instance can be written to.
     */
    readonly isWritable: boolean;
    /**
     * The label for this ArchAudio instance which normally maps to the property
     * on the parent that contains this audio.
     */
    label: string;
    /**
     * The parent for this ArchAudio instance.
     */
    parent: ArchBaseObject;
    /**
     * This is a helper method that will set the audio expression text on the default case.
     * @param text - the audio expression text.
     */
    setDefaultCaseExpression(text: string): void;
    /**
     * This is a helper method that will set the text to speech on the default audio case.
     * @param text - the text to speech text to set in a ToAudioTTS expression
     * @param [doNotEscapeText] - if the text is already escaped and should not be escaped for use in
     *                                     an expression.
     */
    setDefaultCaseExpressionToAudioTTS(text: string, doNotEscapeText?: boolean): void;
    /**
     * This is a helper method that will set the text to speech on the default audio case as one sequence item.
     * @param text - the text to speech text
     */
    setDefaultCaseLiteralTTS(text: string): void;
    /**
     * This function will set this ArchAudio value to the same value as another ArchAudio instance
     * @param sourceArchAudio - the ArchAudio from which to copy
     */
    setFromArchAudio(sourceArchAudio: ArchAudio): void;
}

/**
 * Creates an instance of an ArchAudioCase object which is either a language specific audio
 * case on an ArchAudio audio object or the default audio case.  Instances of this class should be
 * retrieved by accessing an audio case off of an ArchAudio object.
 * @param coreAudioCaseViewModel - ( *Internal* ) an Architect core audio case view model.
 */
declare class ArchAudioCase extends ArchBaseCoreObject {
    // constructor(coreAudioCaseViewModel: any);
    /**
     * Returns the display type name string 'ArchAudioCase'.
     */
    static readonly displayTypeName: string;
    /**
     * The audio value for this case.
     */
    readonly audio: ArchValueAudio;
    /**
     * Whether this audio case is enabled or not.
     */
    enabled: boolean;
    /**
     * Returns true indicating that this is an ArchAudioCase instance.
     */
    static readonly isArchAudioCase: boolean;
    /**
     * Returns whether or not this ArchAudioCase instance can be written to.
     */
    readonly isWritable: boolean;
    /**
     * This helper method will set the audio expression text to use for this case.
     * @param text - the audio expression text
     */
    setAudioExpression(text: string): void;
    /**
     * This helper method will set the text to speech on the audio for this case.  It's the
     * equivalent of this.audio.setExpressionToAudioTTS.
     * @param text - the text to speech text to set in a ToAudioTTS expression
     * @param doNotEscapeText - if the text is already escaped and should not be escaped for use in
     *                                    an expression.
     */
    setAudioExpressionToAudioTTS(text: string, doNotEscapeText: boolean): void;
    /**
     * This helper method will set the text to speech on the audio for this case.  It's the
     * equivalent of this.audio.setLiteralTTS(text);
     * @param text - the text to speech text
     */
    setAudioLiteralTTS(text: string): void;
}

/**
 * The Architect Scripting class that is used by actions in Architect Scripting.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action view model.
 */
declare class ArchBaseAction extends ArchBaseCoreObjectWithId {
    // constructor(coreActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseAction'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this action.  This will contain the action
     * tracking id, name and scripting type name.
     */
    readonly logStr: string;
    /**
     * The Architect action type label
     */
    readonly displayTypeNameArchitect: string;
    /**
     * A property that can be checked to verify the scripting object is a type of ArchBaseAction
     */
    static readonly isArchBaseAction: boolean;
    /**
     * Returns whether or not this action is the action property for a [menu choice]{@link ArchBaseMenuChoice}.
     * For example, the {@link ArchMenuDisconnect#actionDisconnect} property on an {@link ArchMenuDisconnect}
     * instance.
     */
    readonly isMenuChoiceAction: boolean;
    /**
     * Returns whether or not this action is reachable at runtime.
     */
    readonly isReachable: boolean;
    /**
     * Returns whether or not this action is secure which means either the action by its very nature
     * is secure or it consumes secure data.
     */
    readonly isSecure: boolean;
    /**
     * Returns whether or not this action is unreachable at runtime.
     */
    readonly isUnreachable: boolean;
    /**
     * The name of the action
     */
    name: string;
    /**
     * Returns the parent flow for this action.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns the parent menu choice if this action is the action for a [menu choice]{@link ArchBaseMenuChoice}.
     * Otherwise, nothing is returned.
     */
    readonly parentMenuChoice: ArchBaseMenuChoice;
    /**
     * Returns the parent task that contains this action if this action is in a [task]{@link ArchTask} or [looping task]{@link ArchTaskLoop}.
     * Otherwise, nothing is returned.
     */
    readonly parentTask: ArchTask | ArchTaskLoop;
    /**
     * Returns the parent state that contains this action if this action is in a [state]{@link ArchState}.
     * Otherwise, nothing is returned.
     */
    readonly parentState: ArchState;
    /**
     * The integer tracking identifier for this action.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
    /**
     * Returns a definition for this action which provides access to information about this action such as {@link ArchDefinitionAction#isAvailableForFlowType}.
     * ```
     * // Example code - remember, only access this when your Scripting session is connected!
     * let archDecisionActionDefinition = scripting.viewModels.actions.ArchActionDecision.definition;
     * // or for a given ArchActionDecision action instance:
     * let archDecisionActionDefinition = archDecisionActionInstance.definition;
     *
     * ```
     */
    static readonly definition: ArchDefinitionAction;
}

/**
 * An Architect Scripting class for a base ask action instance
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action view model
 */
declare class ArchBaseActionAsk extends ArchBaseAction {
    // constructor(coreActionViewModel: NodeInformation);
    /**
     * Returns the display type name string 'ArchBaseActionAsk'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionAsk instance.
     */
    static readonly isArchBaseActionAsk: boolean;
    /**
     * The communication to use when no input is received
     */
    readonly noInput: ArchValueCommunication;
    /**
     * The communication to use when no matching input is received
     */
    readonly noMatch: ArchValueCommunication;
    /**
     * The question to ask the user when this action is executed
     */
    readonly question: ArchValueCommunication;
}

/**
 * The Architect Scripting class for the Base Bot Action instance.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreBaseBotActionViewModel - ( *Internal* ) an Architect core bot action view model.
 */
declare class ArchBaseActionBot extends ArchBaseActionWithOutputFailure {
    // constructor(coreBaseBotActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionBot instance.
     */
    static readonly isArchBaseActionBot: boolean;
    /**
     * Returns a unique array of names of intents that are configured for the selected bot. This array contains intent
     * names for the bot that will be executed at flow runtime. As such, for some bots like Lex bots, this requires selecting
     * the Lex bot alias since intents are defined on the alias prior to this array being populated.
     */
    readonly intentNames: string[];
    /**
     * This gets an action output for this action that matches an intent name. It will not return the built-in Failure output.
     * @param intentName - the name of the intent whose matching output to find
     */
    getOutputByIntentName(intentName: string): ArchActionOutput;
    /**
     * Specifies the amount of time to wait for a user's response to a bot prompt.
     * A negative or NOT_SET duration will be treated as immediate.
     */
    readonly followupResponseTimeout: ArchValueDuration;
    /**
     * The input text for the bot.  This is usually only set in flows when chaining
     * bot actions together.
     */
    readonly inputText: ArchValueString;
    /**
     * This adds a session variable name value pair to the Base Bot action that can be used to specify
     * the session variable's name and corresponding value that should be assigned to it.  On the returned
     * {@link ArchBaseNameValuePair} pair:
     * * the [name]{@link ArchBaseNameValuePair#name} property specifies the name of the session variable whose value you want to set
     * * the [value]{@link ArchBaseNameValuePair#value} property is the value to set on the session variable at runtime.
     * @param [nameLiteral] - a string that specifies the name of the session variable to set.
     * @param [valueExpression] - a string expression that specifies the value to set on the session variable.
     */
    addSessionVariableNameValuePair(nameLiteral?: string, valueExpression?: string): ArchBaseNameValuePair;
    /**
     * Returns the input Session Variables configured on the action.
     */
    readonly sessionVariables: ArchBaseNameValuePairs;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect call
 * data action instance such as {@link ArchActionCallData#setDataActionByIdAsync}
 * @param ArchBaseActionDataAction - the Architect base data action instance.
 */
declare type callbackArchBaseActionDataAction = (ArchBaseActionDataAction: ArchBaseActionDataAction) => void;

/**
 * The Architect Scripting class for the Base Data Action instance.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreBaseIntegrationActionViewModel - ( *Internal* ) an Architect core call data action view model.
 */
declare class ArchBaseActionDataAction extends ArchBaseActionWithOutputsSuccessFailureTimeout {
    // constructor(coreBaseIntegrationActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionDataAction'.
     */
    static readonly displayTypeName: string;
    /**
     * The contents of this named value list come from the selected data action's reported input schema.  The
     * name value pair items in this list will let you assign values that will be used as inputs to the data action at runtime.
     * Note that this named value list may be undefined even if a valid data action is specified on the action.  If no data
     * action is specified on this action, this will return undefined.
     */
    readonly dataActionInputs: ArchNamedValueList;
    /**
     * The contents of this named value list come from the selected data action's reported output failure schema.  The
     * name value pair items in this list will let you assign variables that will be populated with failure information
     * at runtime if execution of the data action fails.  Note that this named value list may be undefined even if a valid
     * data action is specified on the action.  If no data action is specified on this action, this will return undefined.
     */
    readonly dataActionOutputsFailure: ArchNamedValueList;
    /**
     * The contents of this named value list come from the selected data action's reported success output schema.  The
     * name value pair items in this list will let you assign variables that will be populated with output values from
     * the data action if execution is successful.  Note that this named value list may be undefined even if a valid
     * data action is specified on the action.  If no data action is specified on this action, this will return undefined.
     */
    readonly dataActionOutputsSuccess: ArchNamedValueList;
    /**
     * Returns true indicating that this is an ArchBaseActionDataAction instance.
     */
    static readonly isArchBaseActionDataAction: boolean;
    /**
     * Specifies the amount of time to wait for the data action invocation to complete execution at runtime.  Note that
     * this value only applies if {@link ArchBaseActionDataAction#useSuggestedTimeout} is false.
     */
    readonly timeout: ArchValueDuration;
    /**
     * Returns the processing prompt value where you can set the prompt to play
     * on the call when the system is busy processing the data action configured
     * on this action.
     */
    readonly processingPrompt: ArchValuePrompt;
    /**
     * Indicates whether or not to use the action provided suggested timeout at runtime.
     */
    useSuggestedTimeout: boolean;
}

/**
 * The Architect Scripting class for the base Lex Action instance.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreBaseIntegrationActionViewModel - ( *Internal* ) an Architect core Lex action view model.
 */
declare class ArchBaseActionDialogflow extends ArchBaseActionBot {
    // constructor(coreBaseIntegrationActionViewModel: any);
    /**
     * Returns the string 'Draft', which is the name for the Draft environment on a Dialogflow agent
     */
    readonly draftEnvironmentName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionDialogflow instance.
     */
    readonly isArchBaseActionDialogflow: boolean;
    /**
     * The contents of this named value list come from the Failure Outputs schema. It will contain two values: errorType and errorMessage.
     * These values will be returned by the server if the action takes the Failure path.
     */
    readonly lexBotOutputsFailure: ArchNamedValueList;
}

/**
 * The base class for actions that find single a system object.
 * @param coreFindSystemObjectActionViewModel - ( *Internal* ) an Architect core find system object actions
 */
declare class ArchBaseActionFindSystemObject extends ArchBaseActionWithOutputsFoundNotFound {
    // constructor(coreFindSystemObjectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionFindSystemObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFindSystemObject instance.
     */
    static readonly isArchBaseActionFindSystemObject: boolean;
    /**
     * The value that holds the returned system object which was found at runtime.  Inheriting Find action instances will override
     * this property and assign a type to it appropriate to the type of object they're finding.
     * The output result type will inherit from {@link ArchBaseNetworkValueSingleton}.
     * For example, the {@link ArchActionFindUserPrompt#findResult} will have a findResult type of {@link ArchValuePrompt}.
     */
    readonly findResult: ArchBaseValue;
}

/**
 * The base class for actions that find a single system object by identifier.
 * @param coreFindSystemObjectActionViewModel - ( *Internal* ) an Architect core find system object actions
 */
declare class ArchBaseActionFindSystemObjectById extends ArchBaseActionFindSystemObject {
    // constructor(coreFindSystemObjectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionFindSystemObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFindSystemObject instance.
     */
    static readonly isArchBaseActionFindSystemObjectById: boolean;
    /**
     * The identifier of the object to look up.  While it is always a string, inheriting Find action
     * classes will provide the context of the identifier.  For example, in the {@link ArchActionFindUserById} action
     * this would be the identifier of the user that you wish to look up at runtime.
     */
    readonly findId: ArchValueString;
}

/**
 * The base class for actions that find a single system object by name.
 * @param coreFindSystemObjectActionViewModel - ( *Internal* ) an Architect core find system object action view model.
 */
declare class ArchBaseActionFindSystemObjectByName extends ArchBaseActionFindSystemObject {
    // constructor(coreFindSystemObjectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionFindSystemObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFindSystemObject instance.
     */
    static readonly isArchBaseActionFindSystemObjectByName: boolean;
    /**
     * The name of the object to look up.  Inheriting Find action instances will provide the context
     * for the name string.  For example, in the {@link ArchActionFindUserPrompt} action this would be
     * the name of the user prompt that you wish to look up at runtime.
     */
    readonly findName: ArchValueString;
}

/**
 * The base class for actions that find multiple system objects.
 * @param coreFindSystemObjectActionViewModel - ( *Internal* ) an Architect core find system object actions
 */
declare class ArchBaseActionFindSystemObjects extends ArchBaseActionWithOutputsFoundNotFoundPartiallyFound {
    // constructor(coreFindSystemObjectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionFindSystemObjects'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFindSystemObjects instance.
     */
    static readonly isArchBaseActionFindSystemObjects: boolean;
    /**
     * The value that holds the returned system object which was found at runtime.  Inheriting Find action instances will override
     * this property and assign a type to it appropriate to the type of object they're finding.
     * The output result type will inherit from {@link ArchBaseNetworkValueCollection}.
     * For example, the {@link ArchActionFindUsersById#findResult} will have a findResult type of {@link ArchValueUserCollection}.
     */
    readonly findResult: ArchBaseValue;
}

/**
 * The base class for actions that find multiple system objects by identifier.
 * @param coreFindSystemObjectActionViewModel - ( *Internal* ) an Architect core find system object actions
 */
declare class ArchBaseActionFindSystemObjectsById extends ArchBaseActionFindSystemObjects {
    // constructor(coreFindSystemObjectActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionFindSystemObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFindSystemObject instance.
     */
    static readonly isArchBaseActionFindSystemObjectsById: boolean;
    /**
     * The identifiers to look up.  While the identifiers to look up are always in a string collection, inheriting Find action
     * classes will provide the context of the identifiers.  For example, for the {@link ArchActionFindUsersById} this would be
     * a string collection of user identifiers of the users that you wish to look up at runtime.
     */
    readonly findIds: ArchValueStringCollection;
}

/**
 * Creates a new Architect Flow Outcome base action instance.
 * @param coreFlowOutcomeActionViewModel - ( *Internal* ) an Architect core flow outcome action view model.
 */
declare class ArchBaseActionFlowOutcome extends ArchBaseAction {
    // constructor(coreFlowOutcomeActionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionFlowOutcome instance.
     */
    static readonly isArchBaseActionFlowOutcome: boolean;
    /**
     * This sets the flow outcome to use at runtime by its identifier.
     * @param flowOutcomeId - the identifier of the flow outcome.
     * @param callbackFunction - a callback function to call if the flow outcome
     *                                      is successfully looked up and configured on this action.
     *                                      The first parameter passed to the callback function will be this
     *                                      action instance.
     */
    setFlowOutcomeByIdAsync(flowOutcomeId: string, callbackFunction: (...params: any[]) => any): void;
    /**
     * This sets the flow outcome that will be used for use at runtime by the flow outcome name.
     * @param flowOutcomeName - the name of the  Flow Outcome to set. The name is not case sensitive on the lookup.
     * @param [callbackFunction] - a callback function to call if the Flow Outcome is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect flow outcome action instance.
     */
    setFlowOutcomeByNameAsync(flowOutcomeName: string, callbackFunction?: (...params: any[]) => any): void;
}

/**
 * The Architect Scripting class for the base Lex Action instance.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreBaseIntegrationActionViewModel - ( *Internal* ) an Architect core Lex action view model.
 */
declare class ArchBaseActionLex extends ArchBaseActionBot {
    // constructor(coreBaseIntegrationActionViewModel: any);
    /**
     * Returns true indicating that this is an ArchBaseActionLex instance.
     */
    readonly isArchBaseActionLex: boolean;
    /**
     * The contents of this named value list come from the Failure Outputs schema. It will contain two values: errorType and errorMessage.
     * These values will be returned by the server if the action takes the Failure path.
     */
    readonly lexBotOutputsFailure: ArchNamedValueList;
    /**
     * The collection of intents and their slots into which variables can be assigned. To access an intent, you can use
     * the getNamedValueByName function on this property and pass in the name of the intent you want to access.
     * That intent will contain its slots, which you can access also via getNamedValueByName.
     */
    readonly intentSlots: ArchNamedValueList;
}

/**
 * Creates a new ArchBaseActionNoInputNoMatch base action instance.
 * Instances of this action have one or more outputs.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action with NoInput NoMatch view model.
 */
declare class ArchBaseActionNoInputNoMatch extends ArchBaseAction {
    // constructor(coreActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionNoInputNoMatch'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionNoInputNoMatch instance.
     */
    static readonly isArchBaseActionNoInputNoMatch: boolean;
    /**
     * The NoInput text for the action.
     */
    static noInput: ArchValueString;
    /**
     * The NoMatch text for the action.
     */
    noMatch: ArchValueString;
    /**
     * The question text for the action.
     */
    question: ArchValueString;
    /**
     * The end of input timeout specific to voice input for this action.
     */
    voiceEndOfInputTimeout: ArchValueDuration;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * schedule instance such as {@link ArchBaseActionSchedule#setScheduleByNameAsync}
 * @param ArchBaseActionSchedule - the Architect get schedule instance.
 */
declare type callbackArchBaseActionSchedule = (ArchBaseActionSchedule: ArchBaseActionSchedule) => void;

/**
 * Creates a new base class that supports the ArchActionEvaluateSchedule and ArchActionEvaluateScheduleGroup
 * actions.  Instances of this action should be created by calling {@link ArchFactoryActions#addActionEvaluateSchedule}
 * or ArchFactoryActions#addActionEvaluateScheduleGroup.
 * @param coreBaseScheduleViewModel - ( *Internal* ) an Architect core schedule view model.
 */
declare class ArchBaseActionSchedule extends ArchBaseActionWithOutputs {
    // constructor(coreBaseScheduleViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionSchedule'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionSchedule instance.
     */
    static readonly isArchBaseActionSchedule: boolean;
    /**
     * The evaluate now boolean to determine if the base schedule should be evaluated at execution time or a specified datetime.
     */
    evaluateNow: boolean;
    /**
     * The specific date time to use when evaluating the base schedule
     */
    readonly evaluationDateTime: ArchValueDateTime;
    /**
     * Sets the emergency group to use at runtime by its the emergency group id.
     * @param emergencyGroupId - the identifier of the emergency group.
     * @param [callbackFunction] - a callback function to call if the emergency group is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get emergency instance.
     */
    setEmergencyGroupByIdAsync(emergencyGroupId: string, callbackFunction?: callbackArchActionEvaluateScheduleGroup): void;
    /**
     * Sets the emergency group to use at runtime by the emergency group name.
     * @param emergencyGroupName - the name of the emergency group.
     * @param [callbackFunction] - a callback function to call if the emergency group is successfully
     *                                                            looked up and configured on this action.
     *                                                            The first parameter passed to the callback function will be this
     *                                                            Architect get emergency instance.
     */
    setEmergencyGroupByNameAsync(emergencyGroupName: string, callbackFunction?: callbackArchActionEvaluateScheduleGroup): void;
}

/**
 * The base Architect Scripting class to support transfer actions.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreTransferActionViewModel - ( *Internal* ) an Architect core transfer action view model.
 */
declare class ArchBaseActionTransfer extends ArchBaseActionWithOutputsFakeSuccessFailure {
    // constructor(coreTransferActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionTransfer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionTransfer instance.
     */
    static readonly isArchBaseActionTransfer: boolean;
    /**
     * The failure transfer audio to play on the call in the even the transfer fails at runtime.
     */
    readonly failureTransferAudio: ArchAudio;
    /**
     * The pre transfer audio to play on the call.
     */
    readonly preTransferAudio: ArchAudio;
    /**
     * List of properties with error information about failed transfers
     */
    readonly failureOutputs: ArchNamedValueList;
}

/**
 * Creates a new Architect Transfer With Connect Timeout base action instance.
 * @param coreTransferActionViewModel - ( *Internal* ) an Architect core transfer action view model.
 */
declare class ArchBaseActionTransferWithConnectTimeout extends ArchBaseActionTransfer {
    // constructor(coreTransferActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionTransferWithConnectTimeout'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionTransferWithConnectTimeout instance.
     */
    static readonly isArchBaseActionTransferWithConnectTimeout: boolean;
    /**
     * The value to use as a timeout when attempting to connect to the transfer target.
     * This property has a flow-level default.
     */
    readonly connectTimeout: ArchValueDuration;
}

/**
 * Creates a new ArchBaseActionWithOutputFailure base action instance.
 * @param coreActionWithFailOutputViewModel - ( *Internal* ) an Architect core action with failure output view model.
 */
declare class ArchBaseActionWithOutputFailure extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithFailOutputViewModel: any);
    /**
     * Returns the display type name string 'ArchBAseActionWithOutputFailure'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an action with a failure output.
     */
    static readonly isArchBaseActionWithOutputFailure: boolean;
    /**
     * The failure output for this action
     */
    readonly outputFailure: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputLoop base action instance.
 * @param coreLoopActionViewModel - ( *Internal* ) an Architect core loop action view model.
 */
declare class ArchBaseActionWithOutputLoop extends ArchBaseActionWithOutputs {
    // constructor(coreLoopActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputLoop'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an action with a loop output.
     */
    static readonly isArchBaseActionWithOutputLoop: boolean;
    /**
     * The loop output for this action where actions to be performed during the loop
     * iteration should be added.
     */
    readonly outputLoop: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputs base action instance.
 * Instances of this action have one or more outputs.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action with outputs view model.
 */
declare class ArchBaseActionWithOutputs extends ArchBaseAction {
    // constructor(coreActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputs'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputs instance.
     */
    static readonly isArchBaseActionWithOutputs: boolean;
    /**
     * Gets an output by its identifier.  If it cannot be found, this method will throw.
     * Normally you won't need to use this method and will use the helper methods available on inheriting classes
     * when accessing pre-defined outputs like success, failure, timeout, etc. etc.  Attempting to
     * get an output by id on a menu choice's action such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return nothing.
     * @param output - identifies output you want to obtain.  If output is an ArchBranch instance,
     *                                         the {@link ArchBranch#outputId} value will be used.  Otherwise valid string
     *                                         identifier values can be found in {@link ArchEnums#OUTPUT_IDS} or can be a guid.
     *                                         Remember that requesting the 'success' output on an action with a
     *                                         [fake success output]{@link ArchBaseActionWithOutputsFakeSuccessFailure#hasFakeSuccessOutput} will return nothing.
     */
    getOutputById(output: string | ArchBranch): ArchActionOutput;
    /**
     * Gets an output by its identifier.  If it cannot be found, this method will throw.
     * Normally you won't need to use this method and will use the helper methods available on inheriting classes
     * when accessing pre-defined outputs like success, failure, timeout, etc. etc.  Attempting to
     * get an output by id on a menu choice's action such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return nothing.
     * @param output - identifies output you want to obtain by name.  If output is an ArchBranch instance,
     *                                         the {@link ArchBranch#name} value will be used.
     *                                         Remember that requesting the 'Success' output on an action with a
     *                                         [fake success output]{@link ArchBaseActionWithOutputsFakeSuccessFailure#hasFakeSuccessOutput} will return nothing.
     *                                         For non-dynamic outputs, the name should be specified in English.
     * @param [wantDynamicOutput = false] - because it is possible for some actions to have both a non-dynamic output
     *                                        and a dynamic output with the same name, this boolean will let you specify
     *                                        which output you want.  An example of this would be the built in Failure
     *                                        output on a call bot action but that bot also has an intent named Failure
     *                                        so the action has two outputs with the same name of 'Failure'.  Only one
     *                                        of those would be a dynamic output and that's the output for the Failure
     *                                        intent, not the built-in Failure action output.
     */
    getOutputByName(output: string | ArchBranch, wantDynamicOutput?: boolean): ArchActionOutput;
    /**
     * Returns the output at the given index.  It's important to note that on actions that have a fake success
     * output if you request the output at the index for the fake success, you will get nothing returned because
     * the fake success output isn't something that you should do anything with.  Attempting to
     * access an output by index on a menu choice's action such as {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * will return nothing.
     * @param index - the index of the output to retrieve.  This value should be a non-negative integer.
     */
    getOutputByIndex(index: number): ArchActionOutput;
    /**
     * Returns the number of outputs on this action.  For actions that have a fake success output like what you
     * see on the various transfer actions, that will be included in the count to be consistent with the Architect UI.
     * Attempting to get the output count on a menu choice's action such as such as the {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * action on an {@link ArchMenuTransferToAcd} menu will return 0.
     */
    readonly outputCount: number;
    /**
     * Returns an array of action outputs for this action.  Remember that it is possible to have an
     * undefined item in the returned ArchActionOutput array.  This is true when the output is "fake".
     * Accessing the outputs on a menu choice's action such as {@link ArchMenuTransferToAcd#actionTransferToAcd}
     * will return an empty array.
     */
    readonly outputs: ArchActionOutput[];
}

/**
 * Creates a new ArchBaseActionWithOutputsDefault base action instance which is used for actions
 * that have a Default output such as the Switch action.
 * @param coreActionWithDefaultOutputViewModel - ( *Internal* ) an Architect core action with a default output view model.
 */
declare class ArchBaseActionWithOutputsDefault extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithDefaultOutputViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsDefault instance.
     */
    static isArchBaseActionWithOutputsDefault: boolean;
    /**
     * The Default output for this action
     */
    readonly outputDefault: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsFakeDisconnect base action instance.
 * Instances of this action have a fake Disconnect output.  Since disconnect is
 * fake, there is no disconnect output to query on this action.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action with fake disconnect view model.
 */
declare class ArchBaseActionWithOutputsFakeDisconnect extends ArchBaseActionWithOutputs {
    // constructor(coreActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFakeDisconnect'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this action has a fake disconnect output.
     */
    readonly hasFakeDisconnectOutput: boolean;
    /**
     * Returns true indicating that this object is an ArchBaseActionWithOutputsFakeDisconnect instance.
     */
    static readonly isArchBaseActionWithOutputsFakeDisconnect: boolean;
}

/**
 * Creates a new ArchBaseActionWithOutputsFakeSuccessFailure base action instance.
 * Instances of this action have a fake Success output and Failure output.  Since success is
 * fake, there is no success output to query on this action.
 * @param coreActionViewModel - ( *Internal* ) an Architect core action with fake success and failure view model.
 */
declare class ArchBaseActionWithOutputsFakeSuccessFailure extends ArchBaseActionWithOutputFailure {
    // constructor(coreActionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFakeSuccessFailure'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this action has a fake success output.
     */
    readonly hasFakeSuccessOutput: boolean;
    /**
     * Returns true indicating that this object is an ArchBaseActionWithOutputsFakeSuccessFailure instance.
     */
    static readonly isArchBaseActionWithOutputsFakeSuccessFailure: boolean;
}

/**
 * Creates a new ArchBaseActionWithOutputsFakeSuccessFailureTimeout base action instance.
 * Instances of this action have a fake Success, Failure and Timeout outputs.  Since success is
 * fake, there is no success output to query on this action.
 * @param coreActionWithFakeSuccessFailTimeoutViewModel - ( *Internal* ) an Architect core action with fake success, failure and timeout outputs view model.
 */
declare class ArchBaseActionWithOutputsFakeSuccessFailureTimeout extends ArchBaseActionWithOutputsFakeSuccessFailure {
    // constructor(coreActionWithFakeSuccessFailTimeoutViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFakeSuccessFailureTimeout'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsFakeSuccessFailureTimeout instance.
     */
    static readonly isArchBaseActionWithOutputsFakeSuccessFailureTimeout: boolean;
    /**
     * The timeout output for this action
     */
    readonly outputTimeout: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsFoundNotFound base action instance.
 * Instances of this action have Found and Not Found outputs.
 * @param coreActionWithOutputsFoundNotFoundViewModel - ( *Internal* ) an Architect core action with found and not found outputs view model.
 */
declare class ArchBaseActionWithOutputsFoundNotFound extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithOutputsFoundNotFoundViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFoundNotFound'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsFoundNotFound instance.
     */
    static readonly isArchBaseActionWithOutputsFoundNotFound: boolean;
    /**
     * The found output for this action
     */
    readonly outputFound: ArchActionOutput;
    /**
     * The not found output for this action
     */
    readonly outputNotFound: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsFoundNotFoundFailure base action instance.
 * Instances of this action have a Found, Not Found and Failure outputs.
 * @param coreActionWithOutputsFoundNotFoundFailViewModel - ( *Internal* ) an Architect core action with found, not found and failure outputs view model.
 */
declare class ArchBaseActionWithOutputsFoundNotFoundFailure extends ArchBaseActionWithOutputFailure {
    // constructor(coreActionWithOutputsFoundNotFoundFailViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFoundNotFoundFailure'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsFoundNotFoundFailure instance.
     */
    static readonly isArchBaseActionWithOutputsFoundNotFoundFailure: boolean;
    /**
     * The found output for this action
     */
    readonly outputFound: ArchActionOutput;
    /**
     * The not found output for this action
     */
    readonly outputNotFound: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsFoundNotFoundPartiallyFound base action instance.
 * Instances of this action have a Found, Partially Found and Not Found outputs.
 * @param coreActionWithOutputsFoundNotFoundPartiallyFoundViewModel - ( *Internal* ) an Architect core action with found, not found and partially found outputs view model.
 */
declare class ArchBaseActionWithOutputsFoundNotFoundPartiallyFound extends ArchBaseActionWithOutputsFoundNotFound {
    // constructor(coreActionWithOutputsFoundNotFoundPartiallyFoundViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFoundNotFoundPartiallyFound'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsFoundNotFoundPartiallyFound instance.
     */
    static readonly isArchBaseActionWithOutputsFoundNotFoundPartiallyFound: boolean;
    /**
     * The partially found output for this action
     */
    readonly outputPartiallyFound: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputLoopMaxLoopsNextLoop base action instance.
 * Instances of this action have Loop, Max Loops, and Next Loop outputs.
 * @param coreActionWithOutputsLoopMaxLoopsNextLoopViewModel - ( *Internal* ) an Architect core action with fake success, failure and timeout outputs view model.
 */
declare class ArchBaseActionWithOutputLoopMaxLoopsNextLoop extends ArchBaseActionWithOutputLoop {
    // constructor(coreActionWithOutputsLoopMaxLoopsNextLoopViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputLoopMaxLoopsNextLoop'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputLoopMaxLoopsNextLoop instance.
     */
    static readonly isArchBaseActionWithOutputLoopMaxLoopsNextLoop: boolean;
    /**
     * The Next Loop output on this action.  Execution takes this output at runtime after
     * actions in the {@link ArchBaseActionWithOutputLoop#outputLoop} have been run and no
     * conditions have been met that would cause the action to exit such as an until case
     * or maximum number of iterations being exceeded.
     */
    readonly outputLoopNext: ArchActionOutput;
    /**
     * The Max Loop output on this action.  Remember that at runtime the max loops output is
     * only taken if there is a maximum number of loops configured on the Loop Until action.
     * Otherwise, if there is no maximum loop count specified then this output will never
     * be taken.
     */
    readonly outputLoopsMax: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsMatchExactMatchMultipleNotFound base action instance.
 * Instances of this action have Found and Not Found outputs.
 * @param coreActionWithOutputsMatchExactMatchMultipleNotFound - ( *Internal* ) an Architect core action with found and not found outputs view model.
 */
declare class ArchBaseActionWithOutputsMatchExactMatchMultipleNotFound extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithOutputsMatchExactMatchMultipleNotFound: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsFoundNotFound'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsFoundNotFound instance.
     */
    static readonly isArchBaseActionWithOutputsMatchExactMatchMultipleNotFound: boolean;
    /**
     * The exact match output for this action
     */
    readonly outputMatchExact: ArchActionOutput;
    /**
     * The multiple match output for this action which indicates more than one match was found
     */
    readonly outputMatchMultiple: ArchActionOutput;
    /**
     * The not found output for this action
     */
    readonly outputNotFound: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsSuccessFailure base action instance.
 * Instances of this action have Success and Failure outputs.
 * @param coreActionWithSuccessFailOutputsViewModel - ( *Internal* ) an Architect core action with success and failure outputs view model.
 */
declare class ArchBaseActionWithOutputsSuccessFailure extends ArchBaseActionWithOutputFailure {
    // constructor(coreActionWithSuccessFailOutputsViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsSuccessFailure'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsSuccessFailure instance.
     */
    static readonly isArchBaseActionWithOutputsSuccessFailure: boolean;
    /**
     * The success output for this action
     */
    readonly outputSuccess: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsSuccessFailureNoInput base action instance.
 * Instances of this action have a Success, Failure and NoInput outputs.
 * @param coreActionWithSuccessFailNoInputOutputsViewModel - ( *Internal* ) an Architect core action with success, failure and noInput outputs view model.
 */
declare class ArchBaseActionWithOutputsSuccessFailureNoInput extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreActionWithSuccessFailNoInputOutputsViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsSuccessFailureNoInput'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsSuccessFailureNoInput instance.
     */
    static readonly isArchBaseActionWithOutputsSuccessFailureNoInput: boolean;
    /**
     * The noInput output for this action
     */
    readonly outputNoInput: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsSuccessFailureTimeout base action instance.
 * Instances of this action have a Success, Failure and Timeout outputs.
 * @param coreActionWithSuccessFailTimeoutOutputsViewModel - ( *Internal* ) an Architect core action with success, failure and timeout outputs view model.
 */
declare class ArchBaseActionWithOutputsSuccessFailureTimeout extends ArchBaseActionWithOutputsSuccessFailure {
    // constructor(coreActionWithSuccessFailTimeoutOutputsViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsSuccessFailureTimeout'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsSuccessFailureTimeout instance.
     */
    static readonly isArchBaseActionWithOutputsSuccessFailureTimeout: boolean;
    /**
     * The timeout output for this action
     */
    readonly outputTimeout: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsSuccessTimeout base action instance.
 * Instances of this action have Success and Failure outputs.
 * @param coreActionWithSuccessFailOutputsViewModel - ( *Internal* ) an Architect core action with success and failure outputs view model.
 */
declare class ArchBaseActionWithOutputsSuccessTimeout extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithSuccessFailOutputsViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsSuccessTimeout'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsSuccessTimeout instance.
     */
    static readonly isArchBaseActionWithOutputsSuccessTimeout: boolean;
    /**
     * The success output for this action
     */
    readonly outputSuccess: ArchActionOutput;
    /**
     * The timeout output for this action
     */
    readonly outputTimeout: ArchActionOutput;
}

/**
 * Creates a new ArchBaseActionWithOutputsYesNo base action instance.
 * Instances of this action have Yes and No outputs.
 * @param coreActionWithYesNoOutputsViewModel - ( *Internal* ) an Architect core action with success, failure and timeout outputs view model.
 */
declare class ArchBaseActionWithOutputsYesNo extends ArchBaseActionWithOutputs {
    // constructor(coreActionWithYesNoOutputsViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseActionWithOutputsYesNo'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseActionWithOutputsYesNo which means it has yes and no outputs.
     */
    static readonly isArchBaseActionWithOutputsYesNo: boolean;
    /**
     * The no output for this action
     */
    readonly outputNo: ArchActionOutput;
    /**
     * The yes output for this action
     */
    readonly outputYes: ArchActionOutput;
}

/**
 * The Architect Scripting base for Detect Silence actions
 * @param coreDetectSilenceViewModel - ( *Internal* ) an Architect core BaseDetectSilence action view model.
 */
declare class ArchBaseActionWithSilenceDetection extends ArchBaseActionWithOutputsSuccessTimeout {
    // constructor(coreDetectSilenceViewModel: BaseDetectSilenceActionViewModel);
    /**
     * Returns true indicating that this is an ArchBaseActionWithSilenceDetection instance.
     */
    readonly isArchBaseActionWithSilenceDetection: boolean;
    /**
     * The duration for the amount of silence to wait for
     */
    readonly silenceDuration: ArchValueDuration;
    /**
     * The total timeout before the action fails and takes the timeout path.
     */
    readonly timeout: ArchValueDuration;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed a
 * [traverse info]{@link ArchTraverseInfo} object.
 * @param archCallbackTraverseContext - an {@link ArchTraverseContext} object that contains
 *                                                                    a pointer to the object that matched the traverse
 *                                                                    filter as well as other contextual information about it.
 */
declare type callbackTraverseInfo = (archCallbackTraverseContext: ArchTraverseInfo) => void;

/**
 * This class is used by scripting objects that have a core Architect view model associated
 * with them.  It supports Scripting classes internally and does not expose methods or properties
 * available to Architect Scripting.
 */
declare class ArchBaseCoreObject extends ArchBaseObject {
    // constructor();
    /**
     * Returns the display type name string 'ArchBaseCoreObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
}

/**
 * Creates an instance of an ArchBaseCoreObjectWithId which is used for Architect Scripting objects
 * that support an identifier string.  Note:  There are some cases where an ID may be blank.
 * @param coreViewModelWithId - ( *Internal* ) an Architect core object view model.
 */
declare class ArchBaseCoreObjectWithId extends ArchBaseCoreObject {
    // constructor(coreViewModelWithId: any);
    /**
     * Returns the display type name string 'ArchBaseCoreObjectWithId'.
     */
    static readonly displayTypeName: string;
    /**
     * The identifier string for this object.
     */
    readonly id: string;
    /**
     * Returns whether or not the id property may be blank or undefined for this object.  For example, the returned settings from {@link ArchMenu#settingsMenu}
     * will have a blank identifier along with the settings returned from {@link ArchMenu#settingsSpeechRec}.  Note that this is
     * an extremely rare case.
     */
    readonly idMayBeBlank: string;
    /**
     * A property that can be checked to verify the scripting object is of type ArchBaseCoreObjectWithId
     */
    static readonly isArchBaseObjectWithId: boolean;
}

declare class ArchBaseDefinition extends ArchBaseCoreObject {
    // constructor(coreDefinitionInfo: any);
    /**
     * Returns the display type name string 'ArchBaseDefinition'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseDefinition instance.
     */
    readonly isArchBaseDefinition: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * An Architect Scripting class that provides internal support for action and menu definitions.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreDefinitionInformation - ( *Internal* ) an Architect core node information.
 */
declare class ArchBaseDefinitionActionMenu extends ArchBaseDefinition {
    // constructor(coreDefinitionInformation: NodeInformation);
    /**
     * Returns an array of flow type strings in which the action or menu is available.
     */
    readonly displayTypeName: string[];
    /**
     * Returns whether or not instances can be created from this action or menu
     * definition.  Remember that there are other factors that contribute
     * to successful creation of an instance of an action or menu from its definition
     * like whether or not the action or menu is available in the flow type where it is being
     * created.
     */
    readonly canCreateFromDefinition: boolean;
    /**
     * Returns the display type name string 'ArchBaseDefinitionActionMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the display label for this action or menu type.
     */
    static readonly label: string;
    /**
     * Returns true indicating that this is an ArchBaseDefinitionActionMenu instance.
     */
    static readonly isArchBaseDefinitionActionMenu: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Returns whether or not this instances of this action or menu type are valid for use in the specified flow type.
     * If an action or menu is no longer available that used to report it was available, this behavioral change can be
     * explained by changes on an organization itself such as removing a product or by the action or menu being deprecated
     * in Architect itself.
     * @param flowType - the flow type to check.  The string values in {@link ArchEnums#FLOW_TYPES} list valid values.
     */
    isAvailableForFlowType(flowType: string): boolean;
}

/**
 * An Architect Scripting class that serves as a base filter clause class.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 */
declare class ArchBaseFilterClause extends ArchBaseObjectFilterCommon {
    /**
     * Returns the display type name string 'ArchBaseFilterClause'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseFilterClause instance.
     */
    readonly isArchBaseFilterClause: boolean;
}

/**
 * The Architect Scripting class that supplies property name and value pairing
 * information for property / name clauses.  The clauses themselves handle
 * the actual equality, inequality comparisons but this class holds what two
 * things are being compared in the clause.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 */
declare class ArchBaseFilterClauseProperty extends ArchBaseFilterClause {
    /**
     * Returns the display type name string 'ArchBaseFilterClauseProperty'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseFilterClauseProperty instance.
     */
    readonly isArchBaseFilterClauseProperty: boolean;
    /**
     * Returns whether or not when evaluating this clause if the property
     * specified in [propertyName]{@ArchBaseFilterClauseProperty#propertyName} must
     * exist on the object being checked for evaluation to be considered a match.
     */
    readonly propertyMustExist: boolean;
    /**
     * Returns the name of the property that this filter clause will check.
     */
    readonly propertyName: string;
}

/**
 * The Architect Scripting class that supplies property name and value pairing
 * information for property / name clauses.  The clauses themselves handle
 * the actual equality, inequality comparisons but this class holds what two
 * things are being compared in the clause.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param propertyName - the name of the property that contains the value you want to compare
 * @param value - the value to compare against
 * @param propertyMustExist - whether or not the property must exist on the object being checked when evaluating the clause
 */
declare class ArchBaseFilterClausePropertyValue extends ArchBaseFilterClause {
    // constructor(propertyName: string, value: any, propertyMustExist: boolean);
    /**
     * Returns the display type name string 'ArchBaseFilterClausePropertyValue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseFilterClausePropertyValue instance.
     */
    readonly isArchBaseFilterClausePropertyValue: boolean;
    /**
     * Returns the property value that this filter clause will check.
     */
    readonly value: string;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed a JSON object that
 * contains flow export information such as {@link ArchBaseFlow#exportToObjectAsync}
 * @param exportObject - a JSON object with a content property that holds the flow export contents
 *                                and a fileName property that holds the file name that would be used if saved
 *                                from {@link ArchBaseFlow#exportToDirAsync}.
 */
declare type callbackExportObject = (exportObject: any) => void;

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed a string that
 * contains the full path to a saved flow export such as {@link ArchBaseFlow#exportToDirAsync}
 * @param exportFullPath - a string that contains the full path where the flow export was saved.
 */
declare type callbackExportFullPath = (exportFullPath: string) => void;

/**
 * The base Architect Scripting class for flows.
 * Instances of this class will be created by Architect Scripting as needed.  The {@link ArchFactoryFlows} has methods
 * available to create flows.
 * @param coreFlowViewModel - ( *Internal* ) an Architect core flow view model.
 */
declare class ArchBaseFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreFlowViewModel: any);
    /**
     * This adds a new variable to the flow.
     * @param name - the name of the variable to add.  Remember that variable names must
     *                        start with a letter and can then be followed by one ore more letters, numbers
     *                        or underscore characters to be valid.  Submitting the variable scope on the name
     *                        is optional.  If specified, it must be 'Flow.' in order to be valid since you're
     *                        adding the variable to a flow.
     * @param type - the data type for the new variable.  Remember that type must be supported
     *                              in the flow type for which you're looking to add the variable.  If you are
     *                              not sure if a type is creatable, see the {@link ArchDataType#isScriptCreatableForFlowType} or
     *                              {@link ArchDataType#isScriptCreatableForFlow} method.
     * @param [description] - the description for the new variable.
     */
    addVariable(name: string, type: ArchDataType, description?: string): ArchBaseVariable;
    /**
     * Checkout this flow. This function returns an ArchInfo instance for it to the supplied callback function.
     * @param [forceUnlock] - if true, will force an unlock of the flow.
     * @param [callbackFunction] - a callback function to call if the flow was checked out.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing once the flow is checked out.
     */
    checkoutAsync(forceUnlock?: boolean, callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Returns the display type name string 'ArchBaseFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the division associated with this flow.
     * This method first calls {@link ArchOrganizationInfo#areDivisionsAvailable} to ensure that divisions are available.
     * If not available, nothing is returned.
     */
    readonly division: ArchDivision;
    /**
     * Loads a specific version of the flow.  Any previously returned Architect Scripting objects associated with this flow should no
     * longer be considered valid after loading new configuration.
     * @param [flowVersion] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow was loaded.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing when the flow is loaded.
     */
    loadAsync(flowVersion?: string, callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Returns a string suitable for logging that describes the flow
     */
    readonly logStr: string;
    /**
     * Unlocks this flow.
     * @param [callbackFunction] - a callback function to call if the flow can be unlocked.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing once this flow is unlocked.
     */
    unlockAsync(callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Helper method that accesses the flow's [settingsSupportedLanguages]{@link ArchBaseFlow#settingsSupportedLanguages} and then calls
     * the [addSupportedLanguage]{@link ArchSettingsSupportedLanguagesFlow#addSupportedLanguage} function on the returned {@link ArchSettingsSupportedLanguagesFlow}
     * value.
     * @param archLanguage - the language to add to supported languages on the flow.  Note that any language used as a supported
     * language must have at least one region sub-tag.
     * @param [setAsDefaultLanguage] - if true, the language will be set as the default language on the flow.
     */
    addFlowSupportedLanguage(archLanguage: ArchLanguage, setAsDefaultLanguage?: boolean): ArchSettingsSupportedLanguage;
    /**
     * Checks flow to see if a language can be added in its current state. Some flows may have restrictions
     * if any or more than one can be added.
     */
    canAddSupportedLanguage(): boolean;
    /**
     * Checks in and unlocks the flow for the current user, does a save first
     * Assumes the flow has been created, throws if not
     * @param [ensureSearchable] - whether or not to poll after successful checkin to ensure that the flow is available for flow
     *                                       search operations such as {@link ArchFactoryFlows#getFlowInfoByFlowNameAsync} or {@link ArchFactoryFlows#getFlowInfoByFlowIdAsync}
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    checkInAsync(ensureSearchable?: boolean): Promise<any>;
    /**
     * Creates a new flow on the server and saves its configuration
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    createAsync(): Promise<any>;
    /**
     * Accessing this property returns an object with properties whose keys are data type names and values are
     * {@link ArchDataType} instances.
     */
    readonly dataTypes: any;
    /**
     * The description of the flow
     */
    description: string;
    /**
     * Exports the current flow to a file in the specified directory.  This destination directory *must* exist
     * for the export to succeed.  Note that this uses the file system and should not be used when running in a
     * browser.
     * @param [destinationDir] - the directory where the flow export should be saved.
     * @param [callbackFunction] - the function to call back and pass in the full path where the
     *                                                      flow export was saved.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired flow format to use for the export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export formats. If no format is used,
     *                                                                      it will default to the Architect format.
     * @param [fileName] - the file name to use for the exported flow. If a file extension is not added to the file name, it will use the default file extension for the desired export type for
     * the desired export format and flow that you are exporting. If the format is YAML, the extension is always '.yaml' regardless of flow type. However, if it is the Architect format, the extension is unique per flow-type.
     * To find the correct file extension for the Architect format, you can either export a flow from the Architect UI or look at the [flow definition]{@link ArchBaseFlow#definition}
     * for a flow type and access the [fileExtension]{@link ArchDefinitionFlow.fileExtension} property to get the value. If an extension is found on the file name other than what is
     * expected, the correct extension will be appended to the end of the exported file as per the logic described previously.
     */
    exportToDirAsync(destinationDir?: string, callbackFunction?: callbackExportFullPath, flowFormat?: string, fileName?: string): Promise<any>;
    /**
     * Exports the flow to a JSON object.  The object passed back in the callback function
     * will be a JSON object with a content and fileName property where the content holds
     * the flow export contents and the fileName property holds the file name where the
     * export would be written if {@link ArchBaseFlow#exportToDirAsync} is called.
     * @param callbackFunction - the function to call back with the export information contained
     *                                                  in the parameter passed to it.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired export format to use on an export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export formats. If no format is used,
     *                                                                      it will default to the Architect format.
     */
    exportToObjectAsync(callbackFunction: callbackExportObject, flowFormat?: string): Promise<any>;
    /**
     * The type of the flow.  The string
     * values in {@link ArchEnums#FLOW_TYPES} lists valid flow type values.
     */
    readonly flowType: string;
    /**
     * This function will return the file path where a flow export will be written when calling the {@link ArchBaseFlow#exportToDirAsync}
     * method for the supplied destination directory and export flow format.  A typical use case for this function would be
     * to get the export file path prior to calling the {@link ArchBaseFlow#exportToDirAsync} so you could see if the file already exists
     * and decide if you want to perform an export or not since {@link ArchBaseFlow#exportToDirAsync} will attempt to overwrite
     * a file if it already exists. Note that this uses the file system and should not be used when running in a
     * browser.
     * @param [destinationDir] - the directory where the flow export should be written. If no directory path is given, this method uses the
     *                                    current working directory.  If a relative path is supplied, it will be resolved relative to the current
     *                                    working directory.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired flow format to use for the export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export
     *                                                                      formats. If no format is supplied, it will use the Architect format.
     * @param [fileName] - the file name to use for the exported flow. If a file extension is not added to the file name, it will use the default file extension for the desired export type for
     * the desired export format and flow that you are exporting. If the format is YAML, the extension is always '.yaml' regardless of flow type. However, if it is the Architect format, the extension is unique per flow-type.
     * To find the correct file extension for the Architect format, you can either export a flow from the Architect UI or look at the [flow definition]{@link ArchBaseFlow#definition}
     * for a flow type and access the [fileExtension]{@link ArchDefinitionFlow.fileExtension} property to get the value. If an extension is found on the file name other than what is
     * expected, the correct extension will be appended to the end of the exported file as per the logic described previously.
     */
    getExportFilePath(destinationDir?: string, flowFormat?: string, fileName?: string): string;
    /**
     * Returns the flow scoped variable for the supplied variable identifier ( if it exists ).
     * If the variable name cannot be found, nothing is returned.
     * @param variableId - the supllied variable identifier to look up such as __CALL_ANI__.
     */
    getVariableById(variableId: string): ArchBaseVariable;
    /**
     * Returns the flow scoped variable for the supplied fully scoped variable name ( if it exists ).  Remember, looking
     * up variables by name is case insensitive.  If the variable name cannot be found, nothing is returned.
     * @param variableName - the fully scoped variable name to look up such as Flow.MyVar.
     */
    getVariableByName(variableName: string): ArchBaseVariable;
    /**
     * Imports the flow content from the supplied content string.  This content string should be for a flow of the
     * same type as the one you're importing in to.  Upon successful import, the callback function passed in
     * will be called.  Importing flow contents in to a flow is something where you should *not* attempt to
     * do work with the flow on which this is being called until the callback is called.
     * @param exportContent - the contents from a flow export.
     * @param [callbackFunction] - a function to call if the export content successfully loaded and configured
     *                                                    on this flow.  The first parameter passed to the callback function will be this
     *                                                    Architect flow instance.
     */
    importFromContentAsync(exportContent: string, callbackFunction?: (...params: any[]) => any): Promise<any>;
    /**
     * Imports the flow content from the supplied file path.  Upon successful import, the callback function passed in
     * will be called.  Importing flow contents in to a flow is something where you should *not* attempt to
     * do work with the flow on which this is being called until the callback is called.
     * Also note that this method should not be used if running in a browser.
     * @param exportFilePath - the file path to an Architect flow export file that should be imported.
     * @param [callbackFunction] - a function to call if the export content successfully loaded and configured
     *                                        on this flow.  The first parameter passed to the callback function will be this
     *                                        Architect flow instance.
     */
    importFromFileAsync(exportFilePath: string, callbackFunction?: (...params: any[]) => any): Promise<any>;
    /**
     * Returns true indicating that this is an ArchBaseFlow instance.
     */
    static readonly isArchBaseFlow: boolean;
    /**
     * Returns whether or not the flow is created in Genesys Cloud.
     */
    readonly isCreated: boolean;
    /**
     * Returns whether or not the flow is read-only.  Flows that have been created locally in
     * scripting but not saved, checked in or published will report that they are not read-only.
     */
    readonly isReadOnly: boolean;
    /**
     * Returns whether or not the flow is secure.  That means it contains something that is
     * secure like a secure variable or secure action.
     */
    readonly isSecure: boolean;
    /**
     * Returns true indicating the flow acts as a variable container which means you can
     * add variables to it.
     */
    readonly isVariableContainer: boolean;
    /**
     * The language settings for the flow.  This property is now deprecated.
     * Please replace calls to this property with {@link ArchBaseFlow#settingsSupportedLanguages} instead.
     */
    readonly languageSettings: ArchSettingsSupportedLanguagesFlow;
    /**
     * The name of the flow
     */
    name: string;
    /**
     * Publishes the flow. This will do a validate, save, checkin and then publish last. Any of these
     * steps can fail and reject the promise. Operations are not atomic.
     * @param [ensureSearchable] - whether or not to poll after successful publish to ensure that the flow is available for flow
     *                                       search operations such as {@link ArchFactoryFlows#getFlowInfoByFlowNameAsync} or {@link ArchFactoryFlows#getFlowInfoByFlowIdAsync}
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    publishAsync(ensureSearchable?: boolean): Promise<any>;
    /**
     * Save the current flow configuration, creating the flow if needed.
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    saveAsync(): Promise<any>;
    /**
     * Returns the error handling settings for the flow.
     */
    readonly settingsErrorHandling: ArchSettingsEventErrorFlow;
    /**
     * Returns the action default settings for the flow.
     */
    readonly settingsActionDefaults: ArchSettingsActionDefaults;
    /**
     * The supported language settings for the flow.
     * This method will throw if the flow doesn't support languages.  You can check {@link ArchBaseFlow#supportsLanguages} prior
     * to calling this method to see if a flow supports languages or not.
     */
    readonly settingsSupportedLanguages: ArchSettingsSupportedLanguagesFlow;
    /**
     * Returns whether or not this flow type supports error handling.
     */
    readonly supportsErrorHandling: boolean;
    /**
     * Returns whether or not this flow type supports languages.  If false, that means you have to configure the flow
     * when creating it to use English United States.
     * Note:  At this time this functionality is available while we're determining the needs of workflow and
     * inbound email flow types.  This property may go away in a future release of Architect Scripting.
     */
    readonly supportsLanguages: boolean;
    /**
     * Returns whether or not this flow type supports setting a supported language as the default.
     */
    readonly supportsDefaultLanguage: boolean;
    /**
     * Returns a URL for this flow.  If the flow has not been created or there is no startup object set on the flow,
     * the returned URL will be blank.
     */
    readonly url: string;
    /**
     * Validates the flow. Promise returns an {@link ArchValidationResults} instance.
     * @returns - On your promise's then handler, the first parameter passed to the then function will be the
     * validation results.
     */
    validateAsync(): Promise<any>;
    /**
     * Returns an array of variables defined at the flow scope for this flow.
     */
    readonly variables: ArchBaseVariable[];
    /**
     * Returns a definition for this flow type which provides access to information about this flow such as {@link ArchDefinitionFlow#isAvailable}.
     * ```
     * // Example code - remember, only access this when your Scripting session is connected!
     * let archIncomingCallFlowDefinition = scripting.viewModels.flows.ArchFlowInboundCall.definition;
     * // or for a given ArchFlowInboundCall flow instance:
     * let archIncomingCallFlowDefinition = archInboundCallFlowInstance.definition;
     * ```
     */
    static readonly definition: ArchDefinitionFlow;
}

/**
 * Creates an instance of an ArchBaseFlowInboundOutboundSecureCall.  This is the base class for inbound / outbound / secure call flows.
 * @param coreInboundOutboundSecureFlowViewModel - ( *Internal* ) an Architect core inbound, outbound or secure call flow view model.
 */
declare class ArchBaseFlowInboundOutboundSecureCall extends ArchBaseFlowWithMenus {
    // constructor(coreInboundOutboundSecureFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseFlowInboundOutboundSecureCall'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial audio set on the flow.
     */
    readonly initialAudio: ArchAudio;
    /**
     * Returns true indicating that this is an ArchBaseFlowInboundOutboundSecureCall object.
     */
    static readonly isArchBaseFlowInboundOutboundSecureCall: boolean;
    /**
     * Sets the specified menu to be the starting task on the flow.
     * @param archMenu - An Architect Scripting menu object.
     */
    setStartingMenu(archMenu: ArchMenu): void;
    /**
     * Sets the specified task to be the starting task on the flow.
     * @param archTask - An Architect Scripting task object.
     */
    setStartingTask(archTask: ArchTask): void;
    /**
     * The menu settings for the flow.
     */
    readonly settingsMenu: ArchSettingsMenuFlow;
    /**
     * The prompt settings for the flow.
     */
    readonly settingsPrompts: ArchSettingsPromptsFlow;
    /**
     * The speech rec settings for the flow.
     */
    readonly settingsSpeechRec: ArchSettingsSpeechRecFlow;
    /**
     * Returns the starting task or menu for this call flow.
     * If there is no startup object configured, accessing this property returns null.
     */
    readonly startUpObject: ArchTask | ArchMenu;
    /**
     * The outbound settings for the flow such as contact list and default wrapup code.
     */
    readonly settingsOutboundCall: ArchSettingsOutboundCallFlow;
}

/**
 * Creates an instance of an ArchBaseFlowWithMenus.  This is the base class for flows that contain menus.
 * @param coreFlowViewModel - ( *Internal* ) an Architect core flow view model object that contains menus.
 */
declare class ArchBaseFlowWithMenus extends ArchBaseFlowWithTasks {
    // constructor(coreFlowViewModel: any);
    /**
     * This function deletes the specified reusable menu from this flow.
     * @param menuToDelete - the menu to delete.  This must be a reusable menu which means the {@link ArchMenu#isReusableMenu}
     * property on the specified menu instance is true.
     */
    deleteMenu(menuToDelete: ArchMenu): void;
    /**
     * Returns an array of the currently defined reusable menus for this flow.
     */
    readonly menusReusable: ArchBaseMenu[];
}

/**
 * The Architect Scripting class for flows that contain tasks.  Note that a task is not considered to be the same thing
 * as the repeating task in an in-queue call flow.
 * @param coreFlowViewModel - ( *Internal* ) an Architect core flow view model object that contains tasks.
 */
declare class ArchBaseFlowWithTasks extends ArchBaseFlow {
    // constructor(coreFlowViewModel: any);
    /**
     * This function deletes the specified reusable task from this flow.
     * @param taskToDelete - the task to delete.  This must be a reusable task which means the {@link ArchTask#isReusableTask}
     * property on the specified task instance is true.
     */
    deleteTask(taskToDelete: ArchTask): void;
    /**
     * Returns an array of the currently defined reusable tasks for this flow.
     */
    readonly tasksReusable: ArchTask[];
}

/**
 * The Architect Scripting class for the base workflow instance.
 * @param coreBaseWorkflowViewModel - ( *Internal* ) an Architect core base workflow view model.
 */
declare class ArchBaseFlowWorkflow extends ArchBaseFlowWithTasks {
    // constructor(coreBaseWorkflowViewModel: any);
    /**
     * This function deletes the specified state from this flow.
     * @param stateToDelete - the state to delete.
     */
    deleteState(stateToDelete: ArchState): void;
    /**
     * Returns the display type name string 'ArchBaseFlowWorkflow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseFlowWorkflow object.
     */
    static readonly isArchBaseFlowWorkflow: boolean;
    /**
     * Sets the specified state to be the starting state on the flow.
     * @param archState - An Architect Scripting state object.
     */
    setStartingState(archState: ArchState): void;
    /**
     * Returns the starting state for this flow.
     * If there is no startup object configured, accessing this property returns null.
     */
    readonly startUpObject: ArchState;
    /**
     * The states in the flow.
     */
    readonly states: ArchState[];
}

/**
 * The Architect Scripting class that provides internal support for Architect Scripting menu and menu choice objects.
 */
declare class ArchBaseMenu extends ArchBaseCoreObjectWithId {
    // constructor();
    /**
     * Returns the display type name string 'ArchBaseMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseMenu which means it is either a top level menu, reusable menu
     * or menu choice.
     */
    static isArchBaseMenu: boolean;
    /**
     * Returns the parent flow for this ArchBaseMenu instance.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns a definition for this menu which provides access to information about this action such as {@link ArchDefinitionMenu#isAvailableForFlowType}.
     * ```
     * // Example code - remember, only access this when your Scripting session is connected!
     * let archDisconnectMenuDefinition = scripting.viewModels.menus.ArchMenuDisconnect.definition;
     * // or for a given ArchMenuDisconnect menu instance:
     * let archDisconnectMenuDefinition = archDisconnectMenuInstance.definition;
     * ```
     */
    static readonly definition: ArchDefinitionMenu;
}

/**
 * Creates an instance of an ArchBaseMenuChoice.  Menu choices are menus underneath a top level menu.  They have
 * settings which a top level menu does not have like DTMF and speech rec terms.  While menu choices
 * are action containers, you cannot add actions to them directly since they only contain one action
 * and that action will be set when calling methods on ArchFactoryMenus which create menus that are menu
 * choices like ArchFactoryMenus.addMenuDisconnect
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice view model.
 */
declare class ArchBaseMenuChoice extends ArchBaseMenu {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a new speech rec term to a container for a specified language.  This is a helper method that calls
     * [getSpeechRecTermContainer]{@link ArchBaseMenuChoice#getSpeechRecTermContainer} and then on the returned
     * container it then calls [addTerm]{@link ArchSpeechRecTermContainer#addTerm} and returns the boolean
     * result from that add call.
     * @param archLanguage - the language of the speech rec term container you wish to get.  This
     * must be a supported language on the flow.
     * @param newTerm - the new speech rec term to add to the language specific speech rec term container.
     * @returns - returns true if the term was added, otherwise false.
     */
    addSpeechRecTerm(archLanguage: ArchLanguage, newTerm: string): boolean;
    /**
     * Returns a string suitable for logging that describes the menu choice
     */
    readonly logStr: string;
    /**
     * The dual tone multi frequency (dtmf) property on the menu choice.
     * When setting, valid values are integers 0 through 9, strings '0' through '9', '*' or '#'.
     * The getter will return the string value.
     */
    dtmf: string;
    /**
     * Whether or not the specified dtmf on this menu choice is global to the flow.
     */
    dtmfIsGlobal: boolean;
    /**
     * Gets the speech rec term container for the specified language.  This is a helper method that
     * calls this.speechRecTermContainers.getContainer with the specified language.
     * @param archLanguage - the language of the speech rec term container you wish to get.  This
     * must be a supported language on the flow.
     */
    getSpeechRecTermContainer(archLanguage: ArchLanguage): ArchSpeechRecTermContainer;
    /**
     * Returns true indicating that this is an ArchBaseMenuChoice which means it is a menu choice and not a top
     * level menu.
     */
    static readonly isArchBaseMenuChoice: boolean;
    /**
     * The name of the menu choice
     */
    name: string;
    /**
     * The speech rec term containers object that contains individual speech rec term container
     * instances on a per language basis.
     */
    readonly speechRecTermContainers: ArchSpeechRecTermContainers;
    /**
     * Whether or not the speech rec terms in the speech rec containers for this menu choice are global to the flow.
     */
    speechRecTermsAreGlobal: boolean;
    /**
     * The integer tracking identifier for this menu choice.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
}

/**
 * Creates a new ArchBaseMultiActionContainer instance that supplies common functionality
 * for action containers such as Architect Scripting [tasks]{@link ArchTask}, [states]{@link ArchState}
 * or [action outputs]{@link ArchActionOutput}.
 * @param coreActionContainerViewModel - ( *Internal* ) an Architect core action container view model.
 */
declare class ArchBaseMultiActionContainer extends ArchBaseCoreObjectWithId {
    // constructor(coreActionContainerViewModel: any);
    /**
     * Returns the number of actions in this multi action container.
     */
    readonly actionCount: number;
    /**
     * Returns the first / starting action in this container's action list.  For a task or
     * state, this would be the starting action.  If there is no first action, nothing is returned.
     */
    readonly actionFirst: ArchBaseAction;
    /**
     * Returns the last action in this container's action list.  If there is no last
     * action, nothing is returned.  Remember, this does not mean this would be the last action
     * to execute at runtime because the last action may have outputs with actions contained
     * underneath them.
     */
    readonly actionLast: ArchBaseAction;
    /**
     * Returns an ordered array that contains the top level actions contained in this container.
     * By top level this means that actions which are contained in outputs of actions will
     * not be included in this array.  If there are no actions, an empty array is returned.
     * The action at index 0 will be the first action in this container.  For example, if this
     * were actions contained in a task or state, the action at index 0 is the starting / first action.
     */
    readonly actions: ArchBaseAction[];
    /**
     * Returns whether or not the specified action can be added to this container.
     * @param archDefinitionAction - the action definition to check.
     */
    canAddAction(archDefinitionAction: ArchDefinitionAction): boolean;
    /**
     * Deletes the specified action from this container.
     * @param archActionToDelete - the action to delete.
     */
    deleteAction(archActionToDelete: ArchBaseAction): void;
    /**
     * Returns the display type name string 'ArchBaseMultiActionContainer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseMultiActionContainer instance.
     */
    static readonly isArchBaseMultiActionContainer: boolean;
    /**
     * Returns whether or not this action container is in a menu choice.  If so, you cannot
     * add actions to it.  Actions are added to menu choices when menu choices are created by different
     * methods on the ArchFactoryMenus.
     */
    readonly isMenuChoiceContainer: boolean;
    /**
     * Returns whether or not all paths of execution are terminated ( i.e. have terminating actions ).
     */
    readonly isTerminated: boolean;
    /**
     * Returns whether or not this object acts as a variable container which means you can
     * add variables to it.
     */
    readonly isVariableContainer: boolean;
    /**
     * Moves an action in the action container to a different position.
     * @param archActionToMove - the action to move in this container.
     * @param [archActionNewPreviousAction = If not specified, moves the action to the top of this action container.] - the destination action in this container above which the action specified in the archActionToMove parameter should be moved.
     */
    moveAction(archActionToMove: ArchBaseAction, archActionNewPreviousAction?: ArchBaseAction): void;
}

/**
 * The Architect Scripting class that supports name value pairs.  This class is used for attribute name / value
 * pairs in the [Get Participant Data]{@link ArchActionGetParticipantData} and the [Set Participant Data]{@link ArchActionSetParticipantData}
 * actions.
 * @param coreNameValuePair - ( *Internal* ) an Architect core name value pair object.
 */
declare class ArchBaseNameValuePair extends ArchBaseCoreObject {
    // constructor(coreNameValuePair: any);
    /**
     * Returns the display type name string 'ArchBaseNameValuePair'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNameValuePair instance.
     */
    static isArchBaseNameValuePair: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * Returns the name Architect value from this name value pair.
     */
    readonly name: ArchBaseValue;
    /**
     * Returns the value Architect value from this name value pair.
     */
    readonly value: ArchBaseValue;
}

/**
 * Creates a new ArchBaseNameValuePairs instance.
 * @param coreNameValuePairs - ( *Internal* ) an Architect core name value pair object.
 */
declare class ArchBaseNameValuePairs extends ArchBaseValueContainer {
    // constructor(coreNameValuePairs: any);
    /**
     * Returns the display type name string 'ArchBaseNameValuePairs'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNameValuePairs instance.
     */
    static readonly isArchBaseNameValuePairs: boolean;
}

/**
 * This class provides support for singleton network based singleton values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 * @param coreConfigurationListManager - ( *Internal* ) an Architect core configuration list manager used for network lookups.
 */
declare class ArchBaseNetworkValue extends ArchBaseValue {
    // constructor(coreExpressionViewModel: any, coreConfigurationListManager: any);
    /**
     * Returns the display type name string 'ArchBaseNetworkValue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNetworkValue instance.
     */
    static readonly isArchBaseNetworkValue: boolean;
}

/**
 * This class provides support for singleton network based collection values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 * @param coreConfigurationListManager - ( *Internal* ) an Architect core configuration list manager.
 */
declare class ArchBaseNetworkValueCollection extends ArchBaseNetworkValue {
    // constructor(coreExpressionViewModel: any, coreConfigurationListManager: any);
    /**
     * Returns the display type name string 'ArchBaseNetworkValueCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNetworkValueCollection instance.
     */
    static readonly isArchBaseNetworkValueCollection: boolean;
    /**
     * Returns true indicating that this is a collection.
     */
    readonly isCollection: boolean;
    /**
     * Returns the Architect value associated with the collection at the specified index if this value [is a literal]{@link ArchBaseValue#isLiteral}.
     * @param index - the index of the collection item to retrieve.  This value should be a non-negative integer.
     */
    getItemByIndex(index: number): ArchBaseValue;
    /**
     * Returns the number of Architect value items in this collection if this value [is a literal]{@link ArchBaseValue#isLiteral}.
     * Remember that asynchronous calls to add items to literal collection values will not add the item to the collection
     * until the asynchronous processing successfully completes.
     */
    readonly length: number;
    /**
     * Clears all values from this collection.
     */
    clearCollection(): void;
    /**
     * Returns a JavaScript string or string array for this collection value.
     * If this value is an expression, it returns the expression text.  If this value is a variable, it
     * returns the variable text.  If this value is a literal, the return value will be a JavaScript
     * string array where each item's value in the array will be generated by accessing the
     * [valueText]{@link ArchBaseNetworkValue#valueText} property for it.  Please be sure to
     * see {@link ArchBaseNetworkValue#valueText} for more information on the string formatting.
     * Overall this property is meant to be a quick and easy way to look at a "value" string
     * for a collection value but it is not meant to be some kind of fully inclusive description of
     * this ArchBaseValueBasicCollection instance overall.
     */
    readonly valueText: string | string[];
}

/**
 * This class provides support for singleton network based container values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 */
declare class ArchBaseNetworkValueContainer extends ArchBaseNetworkValue {
    // constructor();
    /**
     * Returns the display type name string 'ArchBaseNetworkValueContainer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNetworkValueContainer instance.
     */
    static isArchBaseNetworkValueContainer: boolean;
}

/**
 * Creates an instance of ArchBaseNetworkValueSingleton.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 * @param configListManager - ( *Internal* ) an Architect core configuration list manager to use for this network value.
 */
declare class ArchBaseNetworkValueSingleton extends ArchBaseNetworkValue {
    // constructor(coreExpressionViewModel: any, configListManager: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseNetworkValueSingleton instance.
     */
    static readonly isArchBaseNetworkValueSingleton: boolean;
    /**
     * Returns false indicating that this value is not a collection value.
     */
    readonly isCollection: boolean;
    /**
     * Returns the name of the object referenced on this value if this value is a [literal]{@link ArchBaseValue.isLiteral}.
     * Remember that you should not expect to get an object's name back if you access this property while there is
     * a pending set literal by identifier or name operation pending such as {@link ArchValueQueue#setLiteralByQueueNameAsync}.
     * If this value is not a literal, nothing is returned.
     */
    readonly objectName: string;
    /**
     * This is a helper method that will set the expression NOT_SET on this value.
     */
    setExpressionNotSet(): void;
    /**
     * Returns a JavaScript string representing the value specified on this ArchBaseValueBasic instance.
     * If this value is an expression, it returns the expression text.  If this value is a variable, it
     * returns the variable text.  If this value is a literal, it will return the value of the [name
     * property]{@link ArchBaseNetworkValueSingleton#name}.  Overall this property is meant to be
     * a quick and easy way to look at a "value" string but it is not meant to be some kind of fully
     * inclusive description of this ArchBaseNetworkValueSingleton.
     */
    readonly valueText: string;
}

/**
 * The Architect Scripting class that is the foundation for Architect Scripting objects.  This class provides
 * logging and parameter checking functionality.
 * Architect Scripting will create instances of this class as needed.
 */
declare class ArchBaseObject {
    // constructor();
    /**
     * Returns a display string that reflects the type for this Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * This is a string suitable for logging information about this object which is generated by the Architect Scripting object itself.
     * Usually this contains stuff like the tracking ID, name, type information, etc. etc.  This information will be used as the
     * header for actual logging calls.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Returns true indicating this object is an instance of ArchBaseObject.
     */
    static readonly isArchBaseObject: boolean;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * An Architect Scripting class that provides internal support for Architect filter related
 * classes that support matching capabilities.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 */
declare class ArchBaseObjectFilterCommon extends ArchBaseObject {
    /**
     * Returns the display type name string 'ArchBaseObjectFilterCommon'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseObjectFilterCommon instance.
     */
    readonly isArchBaseFilterMatching: boolean;
    /**
     * This function returns whether or not the supplied ArchBaseObject instance
     * is a match for the inheriting filter object type.  For the {@link ArchFilterClauseContainer}
     * class, which you'll note that {@link ArchFilterObject} inherits from too,
     * if there are no filter clauses in them the isMatch handling will return true.
     * @param archBaseObjectToCheck - the ArchBaseObject instance you wish to check to see if it's a match.
     */
    isMatch(archBaseObjectToCheck: ArchBaseObject): boolean;
}

/**
 * The Architect Scripting class that provides internal support for Architect Scripting prompt objects.
 */
declare class ArchBasePrompt extends ArchBaseCoreObjectWithId {
    // constructor();
    /**
     * Returns the display type name string 'ArchBasePrompt'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBasePrompt which means it is either a top level menu, reusable menu
     * or menu choice.
     */
    static isArchBasePrompt: boolean;
    /**
     * Returns the prompt name.  Note that if you want to get the
     * Prompt.<name> or PromptSystem.<name> string, look at {ArchBasePrompt#nameWithPrefix}
     */
    readonly name: string;
    /**
     * Returns the prefixed prompt name which will have either the
     * Prompt. or PromptSystem. prefix on the prompt name.
     */
    readonly nameWithPrefix: string;
    /**
     * Returns whether or not this prompt is a system prompt.
     */
    readonly isSystemPrompt: boolean;
    /**
     * Returns whether or not this prompt is a user prompt.
     */
    readonly isUserPrompt: boolean;
}

/**
 * The Architect Scripting class that provides support for skill value pairs.
 * This class *only* exposes the ability to set the skill on it.  The value is "under the hood"
 * and not something we deal with in the Architect UI or other places at this time.  Therefore this pair will
 * effectively behave just like an ArchValueSkill.
 * @param coreSkillValuePair - ( *Internal* ) an Architect core skill value pair instance.
 */
declare class ArchBaseSkillValuePair extends ArchBaseNetworkValueSingleton {
    // constructor(coreSkillValuePair: any);
    /**
     * Returns the display type name string 'ArchBaseSkillValuePair'.
     */
    static readonly displayTypeName: string;
    /**
     * The ArchValueSkill associated with this skill value pair.
     */
    readonly skill: ArchValueSkill;
    /**
     * Returns true indicating that this is an ArchBaseSkillValuePair instance.
     */
    static readonly isArchBaseSkillValuePair: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * skill value pairs instance such as {@link ArchBaseSkillValuePairs#addLiteralBySkillIdAsync} or {@link ArchBaseSkillValuePairs#addLiteralBySkillNameAsync}
 * @param archBaseSkillValuePairs - the Architect skill value pairs instance.
 */
declare type callbackArchBaseSkillValuePairs = (archBaseSkillValuePairs: ArchBaseSkillValuePairs) => void;

/**
 * Creates a new ArchBaseSkillValuePairs used to represent update data statements on an update data action.
 * @param coreSkillValuePairs - ( *Internal* ) an Architect core skill value pairs instance.
 */
declare class ArchBaseSkillValuePairs extends ArchBaseNetworkValueContainer {
    // constructor(coreSkillValuePairs: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * This adds a skill value pair to this collection of pairs.  At this time all that is supported is specifying a skill
     * on the pair.
     * @param skillId - the identifier of the skill to add
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and added to this skill value pairs.  The first parameter passed
     *                                                      to the callback function will be this skill value pairs instance.
     */
    addLiteralBySkillIdAsync(skillId: string, callbackFunction?: callbackArchBaseSkillValuePairs): void;
    /**
     * This adds a skill value pair to this collection of pairs.  At this time all that is supported is specifying a skill
     * on the pair.
     * @param skillName - the name of the skill to add
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and added to this skill value pairs.  The first parameter passed
     *                                                      to the callback function will be this skill value pairs instance.
     */
    addLiteralBySkillNameAsync(skillName: string, callbackFunction?: callbackArchBaseSkillValuePairs): void;
    /**
     * This adds a skill value pair to this collection and returns the skill value from the newly added pair.
     * @param [skillExpression] - if specified, the expression text to set on the newly added skill value pair.
     *                                     This is a helper that calls newItem.skill.setExpression with the expression
     *                                     text.
     */
    addSkill(skillExpression?: string): ArchValueSkill;
    /**
     * Returns true indicating that this is an ArchBaseSkillValuePairs instance.
     */
    static readonly isArchBaseSkillValuePairs: boolean;
}

/**
 * This class represents the base Architect value class that contains functionality common to Architect
 * values.  Instances of this class will be automatically created by the scripting framework as necessary.
 * @param coreExpression - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchBaseValue extends ArchBaseCoreObject {
    // constructor(coreExpression: any);
    /**
     * Returns whether or not this value uses secure data.  For this to be the case, the
     * value must use a secure variable either in an expression or as the configured variable.
     */
    readonly consumesSecureData: boolean;
    /**
     * Returns the display type name string 'ArchBaseValue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a logging string that describes this Architect value.
     */
    readonly logStr: string;
    /**
     * The Architect data type associated with this value.
     */
    readonly dataType: ArchDataType;
    /**
     * If this value has a flow-level default setting value available, this method will return the value
     * for that setting.  Otherwise, null will be returned.  To see if a value has a flow level default,
     * you can check the {@link ArchValueSettings#hasFlowLevelDefault} property.
     */
    readonly flowLevelDefault: ArchBaseValue;
    /**
     * If this value is an expression, this method will return the expression text.
     */
    getExpressionText(): string;
    /**
     * If this value is a variable reference, this method will return the variable that is being referenced.
     */
    getVariable(): ArchBaseVariable;
    /**
     * Returns whether or not this value currently has an error.  While this is certainly useful,
     * please note the following:
     * * Any asynchronous methods that have been called on this value that are still pending will not update
     * the error state until the asynchronous method completes.
     * * This property will reflect the value's view of itself and lots of times you'll want to look at
     * validation results themselves in that the errors or warnings there will have informational strings that specify
     * more information on what's wrong within the context of a containing object.  This object can also identify
     * issues between the relationship of multiple values within the object which an individual value cannot.
     * An example of an "object" would be an action within a flow.
     */
    readonly hasError: boolean;
    /**
     * Returns whether or not this value currently has an error or warning.  While this is certainly useful,
     * please note the following:
     * * Any asynchronous methods that have been called on this value that are still pending will not update
     * the error or warning state until the asynchronous method completes.
     * * This property will reflect the value's view of itself and lots of times you'll want to look at
     * validation results themselves in that the errors or warnings there will have informational strings that specify
     * more information on what's wrong within the context of a containing object.  This object can also identify
     * issues between the relationship of multiple values within the object which an individual value cannot.
     * An example of an "object" would be an action within a flow.
     */
    readonly hasErrorOrWarning: boolean;
    /**
     * Returns whether or not this value currently has a warning.  While this is certainly useful,
     * please note the following:
     * * Any asynchronous methods that have been called on this value that are still pending will not update
     * the warning state until the asynchronous method completes.
     * * This property will reflect the value's view of itself and lots of times you'll want to look at
     * validation results themselves in that the warnings there will have informational strings that specify
     * more information on what's wrong within the context of a containing object.  This object can also identify
     * issues between the relationship of multiple values within the object which an individual value cannot.
     * An example of an "object" would be an action within a flow.
     */
    readonly hasWarning: boolean;
    /**
     * Returns true indicating that is an ArchBaseValue instance.
     */
    static readonly isArchBaseValue: boolean;
    /**
     * Returns whether or not this value is set to a builder value. While builders end up generating
     * expression text that specifies how the value should be calculated, they cannot be changed
     * in Architect Scripting. You can call different methods on an {@link ArchBaseValue} instance
     * such as {@link ArchBaseValue#setExpression} to set this to an expression or value type specific
     * literal setter such as {@link ArchValueString#setLiteralString} on a {@link ArchValueString} instance
     * to set this to a literal.
     */
    readonly isBuilder: boolean;
    /**
     * Returns whether or not this value is set to a expression value.
     */
    readonly isExpression: boolean;
    /**
     * Returns whether or not this value is set to [no value]{@link ArchBaseValue#setNoValue}.
     * Note that this does not mean the value is NOT_SET.  It means there is no value specified
     * for this value.
     */
    readonly isNoValue: boolean;
    /**
     * Returns whether or not this value is the initial value for a variable.
     */
    readonly isVariableInitialValue: boolean;
    /**
     * Returns whether or not this value is set to a literal value.
     */
    readonly isLiteral: boolean;
    /**
     * Returns whether or not this value is set to a variable value.  Note that this is true when the value is
     * set by calling {@link ArchBaseValue#setVariable}.  If you set the value with an expression, the return
     * value will be false even if the expression is only a variable reference.
     */
    readonly isVariable: boolean;
    /**
     * Returns whether or not this value is overriding another default value.  For example, this is true when this
     * a value overrides a flow level setting value.
     */
    readonly overridesDefaultValue: boolean;
    /**
     * The parent Architect Scripting object associated with this value.
     */
    readonly parent: ArchBaseObject;
    /**
     * Returns the parent flow for this value.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns the settings associated with this value which provides meta data about this value like
     * whether it is an output, can be set to a literal, can be set to an expression, etc. etc.
     */
    readonly settings: ArchValueSettings;
    /**
     * This sets the expression text on this value.  If the expression cannot be set because the expression
     * text is invalid, you're trying to set an expression on an output, etc. etc. the call will fail.
     * If you wish to have the ability to set syntactically invalid expression text on an {@link ArchBaseValue} object
     * and not have this method throw, you can set the {@link ArchValueSettings.allowInvalidExpressionText} property
     * to true prior to calling the setExpression function and Scripting will not throw an error if the expression
     * text is invalid.
     * Remember, output values are required to be variables so you should use setVariable on those calls
     * instead of passing in expression text that references a variable.
     * @param expressionText - the expression to set on this value.
     */
    setExpression(expressionText: string): void;
    /**
     * This method sets the value to an expression and assigns the variable's name as the expression text.
     * @param variableToAssign - the variable to assign passed in either by a string
     *                                                     like 'Flow.myInteger' or an Architect variable.  If the value
     *                                                     is a string, this function will attempt to look up the variable
     *                                                     and if it doesn't exist then create it.  Next it will assign the
     *                                                     variable name as the expression text.  If you pass in an {@link ArchBaseVariable}
     *                                                     reference, it needs to be in scope for this value.
     */
    setExpressionFromVariable(variableToAssign: string | ArchBaseVariable): void;
    /**
     * This method sets the value to no value.  Note that this is different from setting NOT_SET or something like a
     * blank string.  Setting a value to contain no value is something which is rather internal to Architect but we're
     * exposing it in scripting.  In a nutshell, setting no value means to take advantage of default runtime handling.
     * The default runtime handling can change based on where this is used.  For example, setting no value for a variable
     * initial value means that the runtime will set a non-collection variable to NOT_SET or a collection variable to
     * an empty collection.  On a value that has a flow level default, setting it to no value means that the runtime
     * should pick up the value to use from the flow level default.  And if a flow level default allows no value,
     * that means that the runtime will pick up the value from somewhere else normally defined in Admin.  An example
     * of this is that the connect timeout specified for a Transfer to Number action that it would use the Edge trunk
     * connect timeout.
     */
    setNoValue(): void;
    /**
     * This method sets the value to no value but with no fallback. This is different that setNoValue in that you are
     * explicitly setting the expression to no value and you do not want to use the flows default value for this setting.
     */
    setNoValueNoFallback(): void;
    /**
     * This method sets the value to a variable and assigns the supplied variable to it.  One thing to be aware of
     * is when a value reports that it is an [input]{@link ArchValueSettings#isInput}, the value may not allow you to call this
     * method to configure a variable if the value's [can be variable]{@link ArchValueSettings#canBeVariable} setting reports false.
     * Assuming that the value reports it [can be an expression]{@link ArchValueSettings#canBeExpression}, please look at using
     * the {@link ArchBaseValue#setExpressionFromVariable} method instead.
     * @param variableToAssign - the variable to assign passed in either by a string
     *                                                     like 'Flow.myInteger' or an Architect variable.  If the value
     *                                                     is a string, this function will attempt to look up the variable
     *                                                     and if it doesn't exist then create it.  Next it will assign the
     *                                                     variable name as the expression text.  If you pass in an {@link ArchBaseVariable}
     *                                                     reference, it needs to be in scope for this value.
     */
    setVariable(variableToAssign: string | ArchBaseVariable): void;
    /**
     * Returns a definition for this value which provides access to information about this action such as {@link ArchDefinitionValue#dataType}.
     * It is possible to get a null or undefined definition back for certain values.
     * ```
     * // Example code - remember, only access this when your Scripting session is connected!
     * let archValueStringDefinition = scripting.viewModels.values.ArchValueString.definition;
     * ```
     */
    static readonly definition: ArchDefinitionValue;
}

/**
 * This class provides functionality for basic data types such a boolean, currency, date time,
 * decimal, duration, integer, phone number and string values.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchBaseValueBasic extends ArchBaseValue {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseValueBasic'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that is an ArchBaseValueBasic instance.
     */
    static readonly isArchBaseValueBasic: boolean;
    /**
     * Returns a JavaScript string representing the value specified on this ArchBaseValueBasic instance.
     * If this value is an expression, it returns the expression text.  If this value is a variable, it
     * returns the variable text.  If this value is a literal, it will return a string that represents
     * the value.  Overall this property is meant to be a quick and easy way to look at a "value" string
     * but it is not meant to be some kind of fully inclusive description of this ArchBaseValueBasic instance
     * overall. For most values that inherit from this class, it's pretty obvious what to expect as the returned
     * string but there are a couple worth mentioning:
     *
     * ```
     * ArchValueCurrency - a string formatted with '<amount>|<code>" where code is an ISO 4217 string.
     * ArchValueDate     - a string formatted as 'YYYY-MM-DD' where YYYY is 4 digit year, MM is 2 digit month and DD is two digit day.
     * ArchValueDateTime - an ISO 8601 formatted string.
     * ArchValueDuration - an XSD formatted duration string.
     * ArchValueTime     - a string formatted as 'hh:mm:ss' where hh is 2 digit hour, mm is 2 digit minute and ss is 2 digit second.
     * ```
     * While we don't guarantee it in Scripting because this isn't the same runtime function evaluation
     * engine that flows use, when accessing this property on a singleton value will be very similar to
     * calling the ToString function in expressions at runtime.
     */
    readonly valueText: string;
}

/**
 * This class provides support for collection values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression object.
 */
declare class ArchBaseValueCollection extends ArchBaseValue {
    // constructor(coreExpressionViewModel: any);
    /**
     * This changes the value to a literal, creates a new {@link ArchBaseValue} instance, adds it to the end of the collection
     * and returns it.  The returned value will be the appropriate type for items contained in the collection.  As such,
     * if you added an item to an {@link ArchValueIntegerCollection}, the returned item would be an
     * {@link ArchValueInteger} value.
     * @returns - the newly created ArchBaseValue that was added.
     */
    addItemToCollection(): ArchBaseValue;
    /**
     * Returns whether or not you can modify the contents in this collection.  For example, if you try and call {@link ArchBaseValueCollection#addItemToCollection}
     * and the collection does not allow modification, the function call will fail.  This does not apply to changing the
     * value on an individual {@link ArchBaseValue} item in the collection but rather the collection contents itself.
     */
    readonly canModifyContents: boolean;
    /**
     * Returns the display type name string 'ArchBaseValueCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the number of Architect value items in this collection if this value [is a literal]{@link ArchBaseValue#isLiteral}.
     */
    readonly length: number;
    /**
     * Returns the Architect value associated with the collection at the specified index if this value [is a literal]{@link ArchBaseValue#isLiteral}.
     * @param index - the index of the collection item to retrieve.  This value should be a non-negative integer.
     */
    getItemByIndex(index: number): ArchBaseValue;
    /**
     * Returns true indicating that this object is an ArchBaseValueCollection instance.
     */
    static readonly isArchBaseValueCollection: boolean;
    /**
     * Returns true indicating that this object is a collection.
     */
    readonly isCollection: boolean;
}

/**
 * This class provides functionality for basic data types such a boolean, currency, date time,
 * decimal, duration, integer, phone number and string values.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchBaseValueCollectionBasic extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseValueCollectionBasic'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that is an ArchBaseValueCollectionBasic instance.
     */
    static readonly isArchBaseValueCollectionBasic: boolean;
    /**
     * Returns a JavaScript string or string array for this collection value.
     * If this value is an expression, it returns the expression text.  If this value is a variable, it
     * returns the variable text.  If this value is a literal, the return value will be a JavaScript
     * string array where each item's value in the array will be generated by accessing the
     * [valueText]{@link ArchBaseValueBasic#valueText} property for it.  Please be sure to
     * see {@link ArchBaseValueBasic#valueText} for more information on the string formatting.
     * Overall this property is meant to be a quick and easy way to look at a "value" string
     * for a collection value but it is not meant to be some kind of fully inclusive description of
     * this ArchBaseValueBasicCollection instance overall.
     */
    readonly valueText: string | string[];
}

/**
 * This class provides support for values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionContainerViewModel - ( *Internal* ) an Architect core expression container object.
 */
declare class ArchBaseValueContainer extends ArchBaseValue {
    // constructor(coreExpressionContainerViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseValueContainer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseValueContainer instance.
     */
    readonly isArchBaseValueContainer: boolean;
}

/**
 * This class provides support for singleton non-network based values in Architect Scripting.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchBaseValueSingleton extends ArchBaseValue {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseValueSingleton'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this value is a singleton non-network object based value.
     */
    static readonly isArchBaseValueSingleton: boolean;
    /**
     * Returns false indicating that this value is a singleton value and not a collection value.
     */
    readonly isCollection: boolean;
    /**
     * This method sets the expression of NOT_SET on this value.
     */
    setExpressionNotSet(): void;
}

/**
 * The Architect Scripting base class for variables that provides functionality common
 * to all Architect Scripting variable types.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model
 */
declare class ArchBaseVariable extends ArchBaseCoreObjectWithId {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseVariable'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns whether or not the variable consumed by the flow.
     */
    readonly hasUsages: boolean;
    /**
     * Returns the Architect Scripting data type for this variable.
     */
    readonly dataType: ArchDataType;
    /**
     * The description of the variable. Calling the description setter with "", null or undefined
     * are all treated as if you are setting the description string to undefined so if you were
     * to call the description getter in that case, nothing is returned.
     */
    description: string;
    /**
     * Returns true indicating that this is an ArchBaseVariable instance.
     */
    static readonly isArchBaseVariable: boolean;
    /**
     * Whether or not this variable is an input variable.  Remember that the ability to be an input
     * variable depends on whether the variable is a flow, state or task variable and what type of
     * flow it is in.  You can use the {@link ArchBaseVariable#settings} property to get at a settings
     * object and access the {@link ArchVariableSettings#canSetIsInput} to know whether or not it is valid
     * to configure this property.
     */
    isInput: boolean;
    /**
     * Whether or not this variable is an output variable.  Remember that the ability to be an output
     * variable depends on whether the variable is a flow, state or task variable and what type of
     * flow it is in.  You can use the {@link ArchBaseVariable#settings} property to get at a settings
     * object and access the {@link ArchVariableSettings#canSetIsOutput} to know whether or not it is valid
     * to configure this property.
     */
    isOutput: boolean;
    /**
     * Returns whether or not this variable is read only at flow runtime.  Read only in this context
     * means that thevariable cannot have a value assigned to it by the flow at runtime.  Examples
     * include assigning a value to it using an Update Data action or binding the variable to an output
     * of a Call DataAction.  Please note that some variables that return true for this property do
     * allow for assignment of an initial value at flow startup which can be checked by accessing the
     * [canAssignInitialValue]{@link ArchBaseVariable#canAssignInitialValue} property.
     */
    readonly isReadOnly: boolean;
    /**
     * Whether or not this variable is secure.
     */
    isSecure: boolean;
    /**
     * Returns whether or not this variable is a flow variable.
     */
    readonly isFlowVariable: boolean;
    /**
     * Returns whether or not this variable is a state variable.
     */
    readonly isStateVariable: boolean;
    /**
     * Returns whether or not this variable is a task variable.
     */
    readonly isTaskVariable: boolean;
    /**
     * Returns whether or not the variable is available for use.  Sometimes variables are feature toggled
     * off and are not available for use in a flow.
     */
    readonly isUnavailable: boolean;
    /**
     * A string suitable for logging that contains information about this variable.
     */
    readonly logStr: string;
    /**
     * The name of the variable
     */
    name: string;
    /**
     * Renames the variable to a new name.
     * @param newName - the new name to assign to the variable.  This should be just the new variable name
     *                           with no scope prefix like Flow., Task. or State.  Variable names need to be at least
     *                           one character long and start with a letter.  Subsequent characters must either be a
     *                           letter, underscore or digit.
     */
    rename(newName: string): void;
    /**
     * Returns the parent flow for this variable.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns the scope of the variable.  The string values in {@link ArchEnums#VARIABLE_SCOPES}
     * lists valid values.  The scope is the prefix you will see on variable names.
     */
    readonly scope: string;
    /**
     * Returns whether or not this variable can have an initial value configured for it
     * in the flow.
     */
    readonly canAssignInitialValue: boolean;
    /**
     * The core type for this variable
     */
    readonly type: string;
    /**
     * Returns the settings associated with this variable which provides meta data about this variable like
     * whether it can be configured as an input or output.
     */
    readonly settings: ArchVariableSettings;
    /**
     * Returns a definition for this variable which provides access to information about this action such as {@link ArchDefinitionVariable#dataType}.
     * It is possible to get a null definition back for certain variables.
     * ```
     * // Example code - remember, only access this when your Scripting session is connected!
     * let archVariableStringDefinition = scripting.viewModels.variables.ArchVariableString.definition;
     * ```
     */
    static readonly definition: ArchDefinitionVariable;
}

/**
 * The Architect Scripting class for used by variables whose runtime value is a collection.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchBaseVariableCollection extends ArchBaseVariable {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseVariableCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Sets the initial value of the singleton variable to an empty collection.
     * Note:  This is a wrapper around calling accessing the initialValue
     * property and calling setNoValue() on it.
     */
    setInitialValueEmptyCollection(): void;
}

/**
 * Creates an instance of an ArchBaseVariableSingleton which is a base class for variables that are not collections.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model
 */
declare class ArchBaseVariableSingleton extends ArchBaseVariable {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchBaseVariableSingleton'.
     */
    static readonly displayTypeName: string;
    /**
     * Sets the initial value of the singleton variable to NOT_SET.
     * Note:  This is a wrapper around calling accessing the initialValue
     * property and calling setNoValue() on it.
     */
    setInitialValueNotSet(): void;
}

/**
 * Creates a new ArchBaseVariableValuePair instance.
 * @param coreVariableValuePair - ( *Internal* ) an Architect core variable value pair object.
 */
declare class ArchBaseVariableValuePair extends ArchBaseCoreObject {
    // constructor(coreVariableValuePair: any);
    /**
     * Returns the display type name string 'ArchBaseVariableValuePair'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseVariableValuePair instance.
     */
    static readonly isArchBaseVariableValuePair: boolean;
    /**
     * Returns a string suitable for logging for this base variable value pair instance.
     */
    readonly logStr: string;
    /**
     * Helper function that sets the variable for the variableToAssignTo value.
     * @param variable - the variable being assigned to.
     */
    setVariableToAssignTo(variable: string | ArchBaseVariable): void;
    /**
     * The value that will be where you specify the variable to assign.  There is a helper setVariableToAssignTo method to set the variable.
     */
    readonly valueVariableToAssignTo: ArchBaseValue;
    /**
     * The Architect value that contains the value to assign to the variable.
     */
    readonly valueToAssign: ArchBaseValue;
}

/**
 * The Architect Scripting class that represents a variable value pairs collection.  ArchBaseVariableValuePairs used to
 * represent update data statements on an update data action.
 * Instances of this class will be created as needed by Architect Scripting.
 * @param coreVariableValuePairs - ( *Internal* ) an Architect core variable value pairs object.
 */
declare class ArchBaseVariableValuePairs extends ArchBaseValueContainer {
    // constructor(coreVariableValuePairs: any);
    /**
     * Returns the display type name string 'ArchBaseVariableValuePairs'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBaseVariableValuePairs instance.
     */
    static readonly isArchBaseVariableValuePairs: boolean;
}

/**
 * The Architect Scripting class that supplies action object definition meta data.  For example,
 * you can ask instances of this class if an action is valid for use in a particular flow type.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreNodeInformation - ( *Internal* ) an Architect core node information.
 */
declare class ArchDefinitionAction extends ArchBaseDefinitionActionMenu {
    // constructor(coreNodeInformation: NodeInformation);
    /**
     * Returns the display type name string 'ArchDefinitionAction'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchDefinitionAction instance.
     */
    readonly isArchDefinitionAction: boolean;
    /**
     * Returns an array of flow type strings in which the action or menu is available.
     */
    readonly displayTypeName: string[];
}

/**
 * The Architect Scripting class that supplies flow object definition meta data.  For example,
 * you can ask instances of this class if a flow type is available for the organization for
 * the currently connected Architect Scripting session.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreFlowDefinition - ( *Internal* ) an Architect core flow definition.
 */
declare class ArchDefinitionFlow extends ArchBaseDefinition {
    // constructor(coreFlowDefinition: FlowDefinition);
    /**
     * Returns an array of action *classes* that are available for this flow type.
     * Remember that some action types like {@link ArchActionTask} is an action
     * that is only created as the action within an {@link ArchMenuTask} menu
     * so do not make the assumption that every action returned here is directly
     * creatable as a free standing action.
     */
    readonly availableActions: ArchBaseAction[];
    /**
     * Returns an array of data type *classes* that are available for this flow type.
     */
    readonly availableDataTypes: ArchDataType[];
    /**
     * Returns an array of ArchLanguage instances that are valid for use as a supported language for this flow type.
     * If the flow type does not support languages, nothing is returned.
     */
    readonly availableLanguages: ArchLanguage[];
    /**
     * Returns an array of menu *classes* that are available for this flow type.
     */
    readonly availableMenus: ArchBaseMenu[];
    /**
     * Returns whether or not flow instances can be created in memory using create methods from {@link ArchFactoryFlows} such as
     * {@link ArchFactoryFlows#createFlowFromDefinitionAsync} or {@link ArchFactoryFlows#createFlowInboundCallAsync}.
     */
    readonly canCreateFromDefinition: boolean;
    /**
     * Returns the display type name string 'ArchDefinitionFlow'.
     */
    readonly displayTypeName: string;
    /**
     * Returns the file extension for this flow type that's used when exporting a flow of this type to an [Architect format]{@link ArchEnums#FLOW_FORMAT_TYPES} export file.
     */
    readonly fileExtension: string;
    /**
     * Returns true indicating that this is an ArchDefinitionFlow instance.
     */
    readonly isArchDefinitionFlow: boolean;
    /**
     * Returns whether or not the flow type is available for use.
     */
    readonly isAvailable: boolean;
    /**
     * Returns a boolean indicating whether or not this flow type can be used as a compatible flow type for the
     * [compatible flow types]{@link ArchSettingsCommonModuleFlow#compatibleFlowTypes} configured on a [common module flow]{@link ArchFlowCommonModule}.
     */
    readonly isCommonModuleCompatibleFlowType: boolean;
    /**
     * Returns the display label for this flow type such as 'Inbound Call Flow'.
     */
    readonly label: string;
    /**
     * Returns whether or not flow creation supports passing in creation data.
     */
    readonly supportsFlowCreationData: boolean;
    /**
     * Returns whether or not an {@link ArchMenu} instance can be the startup object for the flow type.
     */
    readonly startUpObjectCanBeMenu: boolean;
    /**
     * Returns whether or not an {@link ArchState} instance can be the startup object for the flow type.
     */
    readonly startUpObjectCanBeState: boolean;
    /**
     * Returns whether or not an {@link ArchTask} instance can be the startup object for the flow type.
     * Remember, while {@link ArchFlowInQueueCall} call flows do not support reusable tasks, the startup
     * object is a repeating task so this will return true for an in-queue call flow definition.
     */
    readonly startUpObjectCanBeTask: boolean;
    /**
     * If a flow type [supports supported languages]{@link ArchDefinitionFlow#supportsSupportedLanguages}, this returns
     * whether or not a default language can be set.  Otherwise, false.
     */
    readonly languagesSupportDefaultLanguage: boolean;
    /**
     * If a flow type [supports supported languages]{@link ArchDefinitionFlow#supportsSupportedLanguages}, this returns
     * whether or not individual supported languages have a default language skill setting available.  Otherwise, false.
     */
    readonly languagesSupportDefaultLanguageSkill: boolean;
    /**
     * If a flow type [supports supported languages]{@link ArchDefinitionFlow#supportsSupportedLanguages}, this returns
     * whether or not individual supported languages have text to speech and speech recognition settings available.  Otherwise, false.
     */
    readonly languagesSupportTtsAndAsr: boolean;
    /**
     * If a flow type [supports supported languages]{@link ArchDefinitionFlow#supportsSupportedLanguages}, this returns
     * whether or not individual supported languages can support TTS or ASR at runtime.  Otherwise, false.
     */
    readonly languagesSupportTtsAndAsrRuntime: boolean;
    /**
     * Returns whether or not audio is supported for this flow type.
     */
    readonly supportsAudio: boolean;
    /**
     * Returns whether or not this flow type supports default languages.
     */
    readonly supportsDefaultLanguage: boolean;
    /**
     * Returns whether or not this flow type supports secure variables.
     */
    readonly supportsSecureVariables: boolean;
    /**
     * Returns whether or not this flow type supports supported languages.
     */
    readonly supportsSupportedLanguages: boolean;
    /**
     * Returns whether or not this flow type supports reusable menus.
     */
    readonly supportsMenusReusable: boolean;
    /**
     * Returns whether or not this flow type supports states.
     */
    readonly supportsStates: boolean;
    /**
     * Returns whether or not the flow type for a given language supports knowledge functionality such as
     * knowledge bases. If you do not pass in a specific language to check, this function will check the
     * flow type in general but remember that it's only specific languages that will support knowledge
     * functionality within a given flow type so you'd need to check a language specifically to see if
     * it's supported in a given flow instance.  And obviously, if a flow doesn't support supported languages
     * then this function returns false.
     * @param [archLanguage] - the language to check to see if knowledge functionality is supported.  If no language
     *                                        is specified, this will perform the check against the flow type itself as an overall
     *                                        check to indicate if one or more supported languages support knowledge.
     */
    getSupportsKnowledge(archLanguage?: ArchLanguage): boolean;
    /**
     * Returns whether or not this flow type supports reusable tasks.
     */
    readonly supportsTasksReusable: boolean;
    /**
     * The flow type string for this flow definition.  It will be a string value from  {@link ArchEnums#FLOW_TYPES}
     * which lists valid flow type strings.
     */
    readonly type: string;
}

/**
 * The Architect Scripting class that supplies menu object definition meta data.  For example,
 * you can ask instances of this class if a menu is valid for use in a particular flow type.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreNodeInformation - ( *Internal* ) an Architect core node information.
 */
declare class ArchDefinitionMenu extends ArchBaseDefinitionActionMenu {
    // constructor(coreNodeInformation: NodeInformation);
    /**
     * Returns the display type name string 'ArchDefinitionMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchDefinitionMenu instance.
     */
    readonly isArchDefinitionMenu: boolean;
    /**
     * Returns an array of flow type strings in which the action or menu is available.
     */
    readonly displayTypeName: string[];
}

/**
 * The Architect Scripting class that supplies value definition meta data.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionType - ( *Internal* ) an Architect core expression type.
 */
declare class ArchDefinitionValue extends ArchBaseDefinition {
    // constructor(coreExpressionType: ExpressionType);
    /**
     * Returns the ArchDataType for the ArchValue type.
     */
    static readonly dataType: ArchDataType;
    /**
     * Returns the display type name string 'ArchDefinitionValue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchDefinitionValue instance.
     */
    readonly isArchDefinitionValue: boolean;
}

/**
 * The Architect Scripting class that supplies variable definition meta data.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionType - ( *Internal* ) an Architect core expression type.
 */
declare class ArchDefinitionVariable extends ArchBaseDefinition {
    // constructor(coreExpressionType: ExpressionType);
    /**
     * Returns the ArchDataType for the ArchVariable type.
     */
    static readonly dataType: ArchDataType;
    /**
     * Returns the display type name string 'ArchDefinitionVariable'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchDefinitionVariable instance.
     */
    readonly isArchDefinitionVariable: boolean;
}

/**
 * Creates a filter clause container class.  This class holds filter
 * clauses or filter clause containers and provides and'ing / or'ing
 * functionality when performing filtering operations.
 * @param clauseOperator - JSON for initial configuration.
 */
declare class ArchFilterClauseContainer extends ArchBaseObjectFilterCommon {
    // constructor(clauseOperator: string);
    /**
     * This method will add a property value callback filter clause to this
     * filter component.  Your [callback function]{@link callbackFilterClauseProperty} will
     * be called with the property value, name and containing object where you can determine
     * if it should be considered a match.  If propertyMustExist is true and the named property
     * does not exist on the object, evaluation of this clause will return false.
     * For example, this is a nice method to use if you wanted to case insensitively check the
     * name on something to see if its string value should be considered a match.
     * @param propertyName - the property name to check on the ArchBaseObject instance.    The named property
     *                                must exist on the object in order for the equals check to be made.
     * @param callbackFunction - the function to call to determine if there is a match.
     * @param [propertyMustExist = true] - whether or not the property must exist on the object for
     *                                               the callback to be made for match processing.  If the
     *                                               named property does not exist and propertyMustExist is
     *                                               true then evaluation of this clause will not be a match.
     */
    addClausePropertyCallback(propertyName: string, callbackFunction: callbackFilterClauseProperty, propertyMustExist?: boolean): ArchFilterClausePropertyCallback;
    /**
     * This method will add a basic property value equality filter clause to this
     * filter container.  It can be used to check to see if a property value
     * on an ArchBaseObject instance is equal to the supplied value for matching.
     * If propertyMustExist is set to true and the named property does not exist on the object,
     * evaluation of this clause will return false.  Equality checking is done using the JavaScript
     * === operator with the supplied value.
     * If you wish to have more control over inequality checking or property checking
     * in general, please use the {@link ArchFilterClauseContainer#addClausePropertyCallback} method where you
     * can specify a callback function to perform your own match logic.
     * @param propertyName - the property name to check on the ArchBaseObject instance.  The named property
     *                                must exist on the object in order for the equals check to be made.
     * @param [value] - the value of the property you wish to check.
     * @param [propertyMustExist = true] - whether or not the property must exist on the object for
     *                                               the equality check to be made when evaluating this clause.
     *                                               If the named property does not exist on the object being
     *                                               and propertyMustExist is true then evaluation of this clause
     *                                               will not be a match.
     */
    addClausePropertyValueEquals(propertyName: string, value?: any, propertyMustExist?: boolean): ArchFilterClausePropertyValueEquals;
    /**
     * This method will add a basic property value inequality filter clause to this
     * filter component.  It can be used to check to see if a property value
     * on an ArchBaseObject instance is not equal to the supplied value for matching.
     * If propertyMustExist is true and the named property does not exist on the object, evaluation
     * of this clause will return false.  Inequality checking is done using the JavaScript
     * !== operator with the supplied value.
     * If you wish to have more control over inequality checking or property checking
     * in general, please use the {@link ArchFilterClauseContainer#addClausePropertyCallback} method where you
     * can specify a callback function to perform your own match logic.
     * @param propertyName - the property name to check on the ArchBaseObject instance.    The named property
     *                                must exist on the object in order for the equals check to be made.
     * @param [value] - the value of the property you wish to check.
     * @param [propertyMustExist = true] - whether or not the property must exist on the object for
     *                                               the inequality check to be made when evaluating this clause.
     *                                               If the named property does not exist on the object being
     *                                               and propertyMustExist is true then evaluation of this clause
     *                                               will not be a match.
     */
    addClausePropertyValueNotEquals(propertyName: string, value?: any, propertyMustExist?: boolean): ArchFilterClausePropertyValueNotEquals;
    /**
     * This method adds a new filter clause container to this container
     * and returns the new clause container.  This is normally done when
     * you want to do nested and'ing and/or or'ing.
     * @param [operator] - when performing match checks, this specifies whether or not to and or or match
     *                                results from contained filter clauses or filter clause containers.  If not specified,
     *                                the default value for this is ArchEnums.FILTER_CONTAINER_OPERATORS.and.  The
     *                                string values in {@link ArchEnums#FILTER_CONTAINER_OPERATORS} lists valid operator values.
     */
    addFilterClauseContainer(operator?: string): ArchFilterClauseContainer;
    /**
     * Returns the display type name string 'ArchFilterClauseContainer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFilterClauseContainer instance.
     */
    readonly isArchFilterClauseContainer: boolean;
    /**
     * The operator that will be used when {@link ArchBaseObjectFilterCommon#isMatch} is called
     * on this container and indicates whether or not to use and'ing or or'ing on the contents
     * of this container for the isMatch processing.
     * The string values in {@link ArchEnums#FILTER_CONTAINER_OPERATORS} list valid values.
     */
    operator: string;
    /**
     * Returns true indicating that this is an ArchBaseObjectFilterCommon instance.
     */
    readonly isArchBaseFilterMatching: boolean;
    /**
     * This function returns whether or not the supplied ArchBaseObject instance
     * is a match for the inheriting filter object type.  For the {@link ArchFilterClauseContainer}
     * class, which you'll note that {@link ArchFilterObject} inherits from too,
     * if there are no filter clauses in them the isMatch handling will return true.
     * @param archBaseObjectToCheck - the ArchBaseObject instance you wish to check to see if it's a match.
     */
    isMatch(archBaseObjectToCheck: ArchBaseObject): boolean;
    /**
     * This is a string suitable for logging information about this object which is generated by the Architect Scripting object itself.
     * Usually this contains stuff like the tracking ID, name, type information, etc. etc.  This information will be used as the
     * header for actual logging calls.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed a property
 * value, property name and the ArchBaseObject instance that contains the property for the purposes of
 * determining if this filter clause should be treated as a match or not.  The function should return
 * true if it should be treated as a match and false or nothing if not.  Returning a non-boolean value will
 * *not* be treated as a match.
 * @param propertyValue - the value of the property to check.
 * @param archBaseCoreObject - the object that contains the property.
 * @param propertyName - the name of the property on the object being checked.
 */
declare type callbackFilterClauseProperty = (propertyValue: any, archBaseCoreObject: ArchBaseCoreObject, propertyName: string) => boolean;

/**
 * The Architect Scripting class that lets you check the value of a property via. a callback
 * function and return a boolean result indicating if the object should be considered a match
 * for this clause or not.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param propertyName - the name of the property that contains the value you want to compare
 * @param value - the value to compare against
 * @param propertyMustExist - whether or not the property must exist on the object being checked when evaluating the clause
 */
declare class ArchFilterClausePropertyCallback extends ArchBaseFilterClausePropertyValue {
    // constructor(propertyName: string, value: any, propertyMustExist: boolean);
    /**
     * Returns the display type name string 'ArchFilterClausePropertyCallback'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFilterClausePropertyCallback instance.
     */
    readonly isArchFilterClausePropertyCallback: boolean;
    /**
     * Returns the callback function that this callback will use to check.
     */
    readonly value: string;
}

/**
 * The Architect Scripting class that checks to see if a property value on an object is equal
 * to a value.  Equality checking is done using the JavaScript === operator when comparing to the value.
 * Instances of this class will be automatically created by Architect Scripting when you call the
 * [addClausePropertyValueEquals]{@link ArchFilterClauseContainer#addClausePropertyValueEquals}
 * method.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param propertyName - the name of the property that contains the value you want to compare
 * @param value - the value to compare against
 * @param propertyMustExist - whether or not the property must exist on the object being checked when evaluating the clause
 */
declare class ArchFilterClausePropertyValueEquals extends ArchBaseFilterClausePropertyValue {
    // constructor(propertyName: string, value: any, propertyMustExist: boolean);
    /**
     * Returns the display type name string 'ArchFilterClausePropertyValueEquals'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFilterClausePropertyValueEquals instance.
     */
    readonly isArchFilterClausePropertyValueEquals: boolean;
}

/**
 * The Architect Scripting class that checks to see if a property value on an object is not equal
 * to a value.  Inequality checking is done using the JavaScript !== operator when comparing to the value.
 * Instances of this class will be automatically created by Architect Scripting when you call the
 * [addClausePropertyValueNotEquals]{@link ArchFilterClauseContainer#addClausePropertyValueNotEquals}
 * method.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param propertyName - the name of the property that contains the value you want to compare
 * @param value - the value to compare against
 * @param propertyMustExist - whether or not the property must exist on the object being checked when evaluating the clause
 */
declare class ArchFilterClausePropertyValueNotEquals extends ArchBaseFilterClausePropertyValue {
    // constructor(propertyName: string, value: any, propertyMustExist: boolean);
    /**
     * Returns the display type name string 'ArchFilterClausePropertyValueNotEquals'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFilterClausePropertyValueNotEquals instance.
     */
    readonly isArchFilterClausePropertyValueNotEquals: boolean;
}

/**
 * The Architect Scripting class that supplies action object definition meta data.  For example,
 * you can ask instances of this class if an action is valid for use in a particular flow type.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreNodeInformation - ( *Internal* ) an Architect core node information.
 */
declare class ArchFilterObject extends ArchFilterClauseContainer {
    // constructor(coreNodeInformation: NodeInformation);
    /**
     * Returns the display type name string 'ArchFilterObject'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFilterObject instance.
     */
    readonly isArchFilterObject: boolean;
    /**
     * The operator that will be used when {@link ArchBaseObjectFilterCommon#isMatch} is called
     * on this container and indicates whether or not to use and'ing or or'ing on the contents
     * of this container for the isMatch processing.
     * The string values in {@link ArchEnums#FILTER_CONTAINER_OPERATORS} list valid values.
     */
    operator: string;
}

/**
 * The Architect Scripting class for the Bot flow class.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowBotAsync}
 * @param coreBotViewModel - ( *Internal* ) an Architect core Bot view model.
 */
declare class ArchFlowBot extends ArchBaseFlowWorkflow {
    // constructor(coreBotViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowBot instance.
     */
    readonly isArchFlowBot: boolean;
    /**
     * Bot-specific settings for the flow.
     */
    readonly botFlowSettings: ArchSettingsBotFlow;
    /**
     * The natural language understanding knowledge settings for the bot flow.
     * Note that if your organization does not have knowledge base support or the
     * flow's supported language does not support knowledge, accessing this property
     * will return null.
     */
    readonly knowledgeSettings: ArchSettingsNluKnowledge;
    /**
     * The user input settings for the flow.
     */
    readonly userInputSettings: ArchSettingsUserInput;
}

declare class ArchFlowCommonModule extends ArchBaseFlow {
    // constructor(coreCommonModuleCallFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowCommonModule'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowCommonModule instance.
     */
    isArchFlowCommonModule: boolean;
    /**
     * The common module settings for the flow where you can set the compatible flow types.
     */
    readonly settingsCommonModule: ArchSettingsCommonModuleFlow;
    /**
     * The prompt settings for the flow. If no destination flow types configured on this Common Module flow support prompt settings,
     * nothing is returned.
     */
    readonly settingsPrompts: ArchSettingsPromptsFlow;
    /**
     * Returns the starting task for this common module flow.
     */
    readonly startUpObject: ArchTask;
    /**
     * This adds a new variable to the flow.
     * @param name - the name of the variable to add.  Remember that variable names must
     *                        start with a letter and can then be followed by one ore more letters, numbers
     *                        or underscore characters to be valid.  Submitting the variable scope on the name
     *                        is optional.  If specified, it must be 'Flow.' in order to be valid since you're
     *                        adding the variable to a flow.
     * @param type - the data type for the new variable.  Remember that type must be supported
     *                              in the flow type for which you're looking to add the variable.  If you are
     *                              not sure if a type is creatable, see the {@link ArchDataType#isScriptCreatableForFlowType} or
     *                              {@link ArchDataType#isScriptCreatableForFlow} method.
     * @param [description] - the description for the new variable.
     */
    addVariable(name: string, type: ArchDataType, description?: string): ArchBaseVariable;
    /**
     * Checkout this flow. This function returns an ArchInfo instance for it to the supplied callback function.
     * @param [forceUnlock] - if true, will force an unlock of the flow.
     * @param [callbackFunction] - a callback function to call if the flow was checked out.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing once the flow is checked out.
     */
    checkoutAsync(forceUnlock?: boolean, callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Returns the division associated with this flow.
     * This method first calls {@link ArchOrganizationInfo#areDivisionsAvailable} to ensure that divisions are available.
     * If not available, nothing is returned.
     */
    readonly division: ArchDivision;
    /**
     * Loads a specific version of the flow.  Any previously returned Architect Scripting objects associated with this flow should no
     * longer be considered valid after loading new configuration.
     * @param [flowVersion] - the version of the flow to get.  Valid values are "latest" to get the latest saved configuration of a flow or
     * a version value such as "2.0" or "2".  If you do not specify a version, then the latest saved configuration will be loaded.
     * @param [callbackFunction] - a callback function to call if the flow was loaded.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing when the flow is loaded.
     */
    loadAsync(flowVersion?: string, callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Returns a string suitable for logging that describes the flow
     */
    readonly logStr: string;
    /**
     * Unlocks this flow.
     * @param [callbackFunction] - a callback function to call if the flow can be unlocked.
     * @returns - while this method returns a promise, you should use the callback function to perform any processing once this flow is unlocked.
     */
    unlockAsync(callbackFunction?: callbackVoid): Promise<any>;
    /**
     * Helper method that accesses the flow's [settingsSupportedLanguages]{@link ArchBaseFlow#settingsSupportedLanguages} and then calls
     * the [addSupportedLanguage]{@link ArchSettingsSupportedLanguagesFlow#addSupportedLanguage} function on the returned {@link ArchSettingsSupportedLanguagesFlow}
     * value.
     * @param archLanguage - the language to add to supported languages on the flow.  Note that any language used as a supported
     * language must have at least one region sub-tag.
     * @param [setAsDefaultLanguage] - if true, the language will be set as the default language on the flow.
     */
    addFlowSupportedLanguage(archLanguage: ArchLanguage, setAsDefaultLanguage?: boolean): ArchSettingsSupportedLanguage;
    /**
     * Checks flow to see if a language can be added in its current state. Some flows may have restrictions
     * if any or more than one can be added.
     */
    canAddSupportedLanguage(): boolean;
    /**
     * Checks in and unlocks the flow for the current user, does a save first
     * Assumes the flow has been created, throws if not
     * @param [ensureSearchable] - whether or not to poll after successful checkin to ensure that the flow is available for flow
     *                                       search operations such as {@link ArchFactoryFlows#getFlowInfoByFlowNameAsync} or {@link ArchFactoryFlows#getFlowInfoByFlowIdAsync}
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    checkInAsync(ensureSearchable?: boolean): Promise<any>;
    /**
     * Creates a new flow on the server and saves its configuration
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    createAsync(): Promise<any>;
    /**
     * Accessing this property returns an object with properties whose keys are data type names and values are
     * {@link ArchDataType} instances.
     */
    readonly dataTypes: any;
    /**
     * The description of the flow
     */
    description: string;
    /**
     * Exports the current flow to a file in the specified directory.  This destination directory *must* exist
     * for the export to succeed.  Note that this uses the file system and should not be used when running in a
     * browser.
     * @param [destinationDir] - the directory where the flow export should be saved.
     * @param [callbackFunction] - the function to call back and pass in the full path where the
     *                                                      flow export was saved.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired flow format to use for the export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export formats. If no format is used,
     *                                                                      it will default to the Architect format.
     * @param [fileName] - the file name to use for the exported flow. If a file extension is not added to the file name, it will use the default file extension for the desired export type for
     * the desired export format and flow that you are exporting. If the format is YAML, the extension is always '.yaml' regardless of flow type. However, if it is the Architect format, the extension is unique per flow-type.
     * To find the correct file extension for the Architect format, you can either export a flow from the Architect UI or look at the [flow definition]{@link ArchBaseFlow#definition}
     * for a flow type and access the [fileExtension]{@link ArchDefinitionFlow.fileExtension} property to get the value. If an extension is found on the file name other than what is
     * expected, the correct extension will be appended to the end of the exported file as per the logic described previously.
     */
    exportToDirAsync(destinationDir?: string, callbackFunction?: callbackExportFullPath, flowFormat?: string, fileName?: string): Promise<any>;
    /**
     * Exports the flow to a JSON object.  The object passed back in the callback function
     * will be a JSON object with a content and fileName property where the content holds
     * the flow export contents and the fileName property holds the file name where the
     * export would be written if {@link ArchBaseFlow#exportToDirAsync} is called.
     * @param callbackFunction - the function to call back with the export information contained
     *                                                  in the parameter passed to it.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired export format to use on an export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export formats. If no format is used,
     *                                                                      it will default to the Architect format.
     */
    exportToObjectAsync(callbackFunction: callbackExportObject, flowFormat?: string): Promise<any>;
    /**
     * The type of the flow.  The string
     * values in {@link ArchEnums#FLOW_TYPES} lists valid flow type values.
     */
    readonly flowType: string;
    /**
     * This function will return the file path where a flow export will be written when calling the {@link ArchBaseFlow#exportToDirAsync}
     * method for the supplied destination directory and export flow format.  A typical use case for this function would be
     * to get the export file path prior to calling the {@link ArchBaseFlow#exportToDirAsync} so you could see if the file already exists
     * and decide if you want to perform an export or not since {@link ArchBaseFlow#exportToDirAsync} will attempt to overwrite
     * a file if it already exists. Note that this uses the file system and should not be used when running in a
     * browser.
     * @param [destinationDir] - the directory where the flow export should be written. If no directory path is given, this method uses the
     *                                    current working directory.  If a relative path is supplied, it will be resolved relative to the current
     *                                    working directory.
     * @param [flowFormat = ArchEnums.FLOW_FORMAT_TYPES.architect] - the desired flow format to use for the export. See {@link ArchEnums.FLOW_FORMAT_TYPES} for allowable export
     *                                                                      formats. If no format is supplied, it will use the Architect format.
     * @param [fileName] - the file name to use for the exported flow. If a file extension is not added to the file name, it will use the default file extension for the desired export type for
     * the desired export format and flow that you are exporting. If the format is YAML, the extension is always '.yaml' regardless of flow type. However, if it is the Architect format, the extension is unique per flow-type.
     * To find the correct file extension for the Architect format, you can either export a flow from the Architect UI or look at the [flow definition]{@link ArchBaseFlow#definition}
     * for a flow type and access the [fileExtension]{@link ArchDefinitionFlow.fileExtension} property to get the value. If an extension is found on the file name other than what is
     * expected, the correct extension will be appended to the end of the exported file as per the logic described previously.
     */
    getExportFilePath(destinationDir?: string, flowFormat?: string, fileName?: string): string;
    /**
     * Returns the flow scoped variable for the supplied variable identifier ( if it exists ).
     * If the variable name cannot be found, nothing is returned.
     * @param variableId - the supllied variable identifier to look up such as __CALL_ANI__.
     */
    getVariableById(variableId: string): ArchBaseVariable;
    /**
     * Returns the flow scoped variable for the supplied fully scoped variable name ( if it exists ).  Remember, looking
     * up variables by name is case insensitive.  If the variable name cannot be found, nothing is returned.
     * @param variableName - the fully scoped variable name to look up such as Flow.MyVar.
     */
    getVariableByName(variableName: string): ArchBaseVariable;
    /**
     * Imports the flow content from the supplied content string.  This content string should be for a flow of the
     * same type as the one you're importing in to.  Upon successful import, the callback function passed in
     * will be called.  Importing flow contents in to a flow is something where you should *not* attempt to
     * do work with the flow on which this is being called until the callback is called.
     * @param exportContent - the contents from a flow export.
     * @param [callbackFunction] - a function to call if the export content successfully loaded and configured
     *                                                    on this flow.  The first parameter passed to the callback function will be this
     *                                                    Architect flow instance.
     */
    importFromContentAsync(exportContent: string, callbackFunction?: (...params: any[]) => any): Promise<any>;
    /**
     * Imports the flow content from the supplied file path.  Upon successful import, the callback function passed in
     * will be called.  Importing flow contents in to a flow is something where you should *not* attempt to
     * do work with the flow on which this is being called until the callback is called.
     * Also note that this method should not be used if running in a browser.
     * @param exportFilePath - the file path to an Architect flow export file that should be imported.
     * @param [callbackFunction] - a function to call if the export content successfully loaded and configured
     *                                        on this flow.  The first parameter passed to the callback function will be this
     *                                        Architect flow instance.
     */
    importFromFileAsync(exportFilePath: string, callbackFunction?: (...params: any[]) => any): Promise<any>;
    /**
     * Returns whether or not the flow is created in Genesys Cloud.
     */
    readonly isCreated: boolean;
    /**
     * Returns whether or not the flow is read-only.  Flows that have been created locally in
     * scripting but not saved, checked in or published will report that they are not read-only.
     */
    readonly isReadOnly: boolean;
    /**
     * Returns whether or not the flow is secure.  That means it contains something that is
     * secure like a secure variable or secure action.
     */
    readonly isSecure: boolean;
    /**
     * Returns true indicating the flow acts as a variable container which means you can
     * add variables to it.
     */
    readonly isVariableContainer: boolean;
    /**
     * The language settings for the flow.  This property is now deprecated.
     * Please replace calls to this property with {@link ArchBaseFlow#settingsSupportedLanguages} instead.
     */
    readonly languageSettings: ArchSettingsSupportedLanguagesFlow;
    /**
     * The name of the flow
     */
    name: string;
    /**
     * Publishes the flow. This will do a validate, save, checkin and then publish last. Any of these
     * steps can fail and reject the promise. Operations are not atomic.
     * @param [ensureSearchable] - whether or not to poll after successful publish to ensure that the flow is available for flow
     *                                       search operations such as {@link ArchFactoryFlows#getFlowInfoByFlowNameAsync} or {@link ArchFactoryFlows#getFlowInfoByFlowIdAsync}
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    publishAsync(ensureSearchable?: boolean): Promise<any>;
    /**
     * Save the current flow configuration, creating the flow if needed.
     * @returns - On your promise's then handler, the first parameter passed to the then function will be this
     * flow instance.
     */
    saveAsync(): Promise<any>;
    /**
     * Returns the error handling settings for the flow.
     */
    readonly settingsErrorHandling: ArchSettingsEventErrorFlow;
    /**
     * Returns the action default settings for the flow.
     */
    readonly settingsActionDefaults: ArchSettingsActionDefaults;
    /**
     * The supported language settings for the flow.
     * This method will throw if the flow doesn't support languages.  You can check {@link ArchBaseFlow#supportsLanguages} prior
     * to calling this method to see if a flow supports languages or not.
     */
    readonly settingsSupportedLanguages: ArchSettingsSupportedLanguagesFlow;
    /**
     * Returns whether or not this flow type supports error handling.
     */
    readonly supportsErrorHandling: boolean;
    /**
     * Returns whether or not this flow type supports languages.  If false, that means you have to configure the flow
     * when creating it to use English United States.
     * Note:  At this time this functionality is available while we're determining the needs of workflow and
     * inbound email flow types.  This property may go away in a future release of Architect Scripting.
     */
    readonly supportsLanguages: boolean;
    /**
     * Returns whether or not this flow type supports setting a supported language as the default.
     */
    readonly supportsDefaultLanguage: boolean;
    /**
     * Returns a URL for this flow.  If the flow has not been created or there is no startup object set on the flow,
     * the returned URL will be blank.
     */
    readonly url: string;
    /**
     * Validates the flow. Promise returns an {@link ArchValidationResults} instance.
     * @returns - On your promise's then handler, the first parameter passed to the then function will be the
     * validation results.
     */
    validateAsync(): Promise<any>;
    /**
     * Returns an array of variables defined at the flow scope for this flow.
     */
    readonly variables: ArchBaseVariable[];
    /**
     * The identifier string for this object.
     */
    readonly id: string;
    /**
     * Returns whether or not the id property may be blank or undefined for this object.  For example, the returned settings from {@link ArchMenu#settingsMenu}
     * will have a blank identifier along with the settings returned from {@link ArchMenu#settingsSpeechRec}.  Note that this is
     * an extremely rare case.
     */
    readonly idMayBeBlank: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * The Architect Scripting class that represents an In-Queue Call flow.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows.createFlowInQueueCallAsync}
 * @param coreInQueueCallFlowViewModel - ( *Internal* ) an Architect core in-queue call view model.
 */
declare class ArchFlowInQueueCall extends ArchBaseFlow {
    // constructor(coreInQueueCallFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInQueueCall'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowInQueueCall instance.
     */
    static isArchFlowInQueueCall: boolean;
    /**
     * The in-queue settings for the flow where you can set the hold music.
     */
    readonly settingsInQueueCall: ArchSettingsInQueueCallFlow;
    /**
     * The prompt settings for the flow.
     */
    readonly settingsPrompts: ArchSettingsPromptsFlow;
    /**
     * Returns the startup looping task for this in-queue call flow.
     */
    readonly startUpObject: ArchTaskLoop;
}

/**
 * The Architect Scripting class for the Inbound Call flow type.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowInboundCallAsync}
 * @param coreInboundCallFlowViewModel - ( *Internal* ) an Architect core inbound call view model.
 */
declare class ArchFlowInboundCall extends ArchBaseFlowInboundOutboundSecureCall {
    // constructor(coreInboundCallFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInboundCall'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowInboundCall instance.
     */
    static isArchFlowInboundCall: boolean;
}

/**
 * The Architect Scripting class for the Inbound Chat flow class which represents the Inbound Chat flow type in
 * the Architect UI.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowInboundChatAsync}
 * @param coreInboundChatViewModel - ( *Internal* ) an Architect core inbound chat view model.
 */
declare class ArchFlowInboundChat extends ArchBaseFlowWorkflow {
    // constructor(coreInboundChatViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInboundChat'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowInboundChat instance.
     */
    readonly isArchFlowInboundChat: boolean;
}

/**
 * The Architect Scripting class that represents an Inbound Email flow.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows.createFlowInboundEmailAsync}
 * @param coreInboundEmailViewModel - ( *Internal* ) an Architect core inbound email view model.
 */
declare class ArchFlowInboundEmail extends ArchBaseFlowWorkflow {
    // constructor(coreInboundEmailViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInboundEmail'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowInboundEmail instance.
     */
    static isArchFlowInboundEmail: boolean;
    /**
     * Loads all currently available response library entries.
     */
    static loadResponseLibraryManager: Promise<any>;
    /**
     * The inbound email settings for the flow.
     */
    readonly settingsInboundEmailHandling: ArchSettingsInboundEmailFlow;
}

/**
 * The Architect Scripting class for the Inbound Short Message flow class which represents the Inbound Message flow type in
 * the Architect UI.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowInboundShortMessageAsync}
 * @param coreInboundShortMessageViewModel - ( *Internal* ) an Architect core inbound short message view model.
 */
declare class ArchFlowInboundShortMessage extends ArchBaseFlowWorkflow {
    // constructor(coreInboundShortMessageViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInboundShortMessage'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowInboundShortMessage instance.
     */
    readonly isArchFlowInboundShortMessage: boolean;
}

/**
 * The Architect Scripting class for the flow information class which contains information about a flow.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#getFlowInfoByFlowIdAsync}
 * or ArchFactoryFlows.getFlowInfoByFlowNameAsync.
 * @param coreFlowInfoViewModel - ( *Internal* ) an Architect core flow info view model.
 */
declare class ArchFlowInfo extends ArchBaseCoreObjectWithId {
    // constructor(coreFlowInfoViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowInfo'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this flow info basic.
     */
    readonly logStr: string;
    /**
     * Returns a boolean indicating if there is a saved version of the flow.
     * We do not expose a versionSaved ArchFlowInfoVersion property as the
     * actual version information there is mainly useful by Architect itself
     * internally.  At a future date we may add a versionSaved property
     * if it is needed.
     */
    readonly hasSavedVersion: boolean;
    /**
     * Returns true indicating that this is an ArchFlowInfo instance.
     */
    static readonly isArchFlowInfo: boolean;
    /**
     * Returns whether or not this flow is checked in.
     */
    readonly isCheckedIn: boolean;
    /**
     * Returns whether or not this flow is locked.
     */
    readonly isLocked: boolean;
    /**
     * Returns whether or not this flow is locked by another user.  Another user
     * means a Genesys Cloud user other than Genesys Cloud user authenticated for the current
     * Architect Scripting session.
     */
    readonly isLockedByAnotherUser: boolean;
    /**
     * Returns whether or not this flow is locked by the current user.  The current user
     * is the Genesys Cloud user authenticated for the current Architect Scripting session.
     */
    readonly isLockedByCurrentUser: boolean;
    /**
     * Returns whether or not this flow is published.
     */
    readonly isPublished: boolean;
    /**
     * Returns whether or not this is a built-in system flow such as
     * the 'Default In-Queue Flow'. A system flow in Architect is
     * one whose version 1.0 logic is pre-configured by Architect
     * and while it can be customized by flow authors, deleting a
     * system flow is different from deleting a non-system flow in
     * that the flow will revert back the default version 1.0 configuration.
     */
    readonly isSystem: boolean;
    /**
     * Gets name for the flow contained in this flow info instance.
     */
    readonly name: string;
    /**
     * Returns the flow type associated with this flow info.  The string values in {@link ArchEnums#FLOW_TYPES}
     * lists valid values.
     */
    readonly type: string;
    /**
     * Returns information about the checked in version of the flow.  If the flow
     * is not checked in, nothing is returned.
     */
    readonly versionCheckedIn: ArchFlowInfoVersion;
    /**
     * Returns information about the published version of the flow.  If the flow
     * is not published, nothing is returned.
     */
    readonly versionPublished: ArchFlowInfoVersion;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * flow info instance such as {@link ArchFlowInfoBasic#getFlowInfoAsync}
 * @param archFlowInfo - the Architect flow information object.
 */
declare type callbackArchFlowInfo = (archFlowInfo: ArchFlowInfo) => void;

/**
 * The Architect Scripting class that is used for target flow information on a Transfer to Flow action
 * and exposes a flow id, name and type.
 * Architect Scripting will create instances of this class by calling the getter for the {@link ArchActionTransferToFlow#targetFlowInfo}
 * property.
 * @param flowIdNameTypeObject - ( *Internal* ) a raw JSON object with an id, name and type property that gets saved off here.
 */
declare class ArchFlowInfoBasic extends ArchBaseObject {
    // constructor(flowIdNameTypeObject: any);
    /**
     * Returns the display type name string 'ArchFlowInfoBasic'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this flow info basic.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFlowInfo instance.
     */
    static readonly isArchFlowInfoBasic: boolean;
    /**
     * Looks up the flow information from this flow info basic instance by the flow identifier.
     * @param [callbackFunction] - the function to call back if successfully converted.  The callback will be passed the looked up ArchFlowInfo instance.
     */
    getFlowInfoAsync(callbackFunction?: callbackArchFlowInfo): void;
    /**
     * The flow identifier
     */
    readonly id: string;
    /**
     * Gets name for the flow contained in this flow info instance.
     */
    readonly name: string;
    /**
     * Returns the flow type associated with this flow info.  The string values in {@link ArchEnums#FLOW_TYPES}
     * lists valid values.
     */
    readonly type: string;
}

/**
 * The Architect Scripting class for a specific piece of flow version information such
 * as the published version of a flow.
 * Instances of this class will be created automatically as needed by Architect Scripting
 * when you access version properties on a flow info versions instance such as the
 * {@link ArchFlowInfoVersion#versionPublished} property.
 * @param coreFlowVersionModel - ( *Internal* ) an Architect core flow version manager view model.
 */
declare class ArchFlowInfoVersion extends ArchBaseObject {
    // constructor(coreFlowVersionModel: any);
    /**
     * Returns the display type name string 'ArchFlowInfoVersion'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this flow info basic.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchFlowInfoVersion instance.
     */
    static readonly isArchFlowInfoVersion: boolean;
    /**
     * Returns the flow version string such as '1.0'.
     */
    readonly versionStr: string;
}

/**
 * The Architect Scripting class that represents an Outbound Call flow.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows.createFlowOutboundCallAsync}
 * @param coreOutboundCallFlowViewModel - ( *Internal* ) an Architect core outbound call view model.
 */
declare class ArchFlowOutboundCall extends ArchBaseFlowInboundOutboundSecureCall {
    // constructor(coreOutboundCallFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowOutboundCall'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowOutboundCall instance.
     */
    static readonly isArchFlowOutboundCall: boolean;
}

/**
 * The Architect Scripting class that represents a Secure Call flow.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows.createFlowSecureCallAsync}
 * @param coreSecureCallFlowViewModel - ( *Internal* ) an Architect core secure call view model.
 */
declare class ArchFlowSecureCall extends ArchBaseFlowInboundOutboundSecureCall {
    // constructor(coreSecureCallFlowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowSecureCall'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowSecureCall instance.
     */
    static readonly isArchFlowSecureCall: boolean;
}

/**
 * The Architect Scripting class for the Survey Invite flow class.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowSurveyInviteAsync}
 * @param coreSurveyInviteViewModel - ( *Internal* ) an Architect core Survey Invite view model.
 */
declare class ArchFlowSurveyInvite extends ArchBaseFlowWorkflow {
    // constructor(coreSurveyInviteViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowSurveyInvite'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowSurveyInvite instance.
     */
    readonly isArchFlowSurveyInvite: boolean;
}

/**
 * The Architect Scripting class for the Workflow flow class.
 * Instances of this Architect Scripting object should be created by calling {@link ArchFactoryFlows#createFlowWorkflowAsync}
 * @param coreWorkflowViewModel - ( *Internal* ) an Architect core workflow view model.
 */
declare class ArchFlowWorkflow extends ArchBaseFlowWorkflow {
    // constructor(coreWorkflowViewModel: any);
    /**
     * Returns the display type name string 'ArchFlowWorkflow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchFlowWorkflow instance.
     */
    readonly isArchFlowWorkflow: boolean;
}

/**
 * The Architect Scripting class that represents a menu whether it be the starting menu for a call flow
 * or a reusable menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenu}
 * @param coreMenuViewModel - the core menu associated with this ArchMenu
 */
declare class ArchMenu extends ArchBaseMenu {
    // constructor(coreMenuViewModel: any);
    /**
     * Returns a array of menus for this menu.
     */
    readonly childMenus: ArchBaseMenu[];
    /**
     * Returns the display type name string 'ArchMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this menu
     */
    readonly logStr: string;
    /**
     * Gets or sets the default menu choice for this menu.  To be a valid default menu choice, the menu choice must be
     * a child of this menu.  To clear the default menu choice, set the value to null or undefined.  If no default menu
     * choice is specified, and the getter is called, nothing is returned.
     */
    menuDefault: ArchBaseMenuChoice;
    /**
     * The audio for the menu.
     */
    readonly audio: ArchAudio;
    /**
     * Returns true indicating this is an ArchMenu instance.
     */
    static readonly isArchMenu: boolean;
    /**
     * Returns whether or not this menu is a reusable menu.  An example of a non-reusable menu is when
     * the menu is in a menu choice directly.
     */
    readonly isReusableMenu: boolean;
    /**
     * The name of the menu
     */
    name: string;
    /**
     * Returns the parent flow for this menu.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * The menu options / settings for this menu.
     */
    readonly settingsMenu: ArchSettingsMenu;
    /**
     * The speech rec settings for this menu.
     */
    readonly settingsSpeechRec: ArchSettingsSpeechRec;
    /**
     * The integer tracking identifier for this menu.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
}

/**
 * The Architect Scripting class that represents the Dial By Extension menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuDialByExtension}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuDialByExtension extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect dial by extension action associated with this menu.
     */
    readonly actionDialByExtension: ArchActionDialByExtension;
    /**
     * Returns true indicating this is an ArchMenuDialByExtension instance.
     */
    static isArchMenuDialByExtension: boolean;
}

/**
 * The Architect Scripting class that represents the Disconnect menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuDisconnect}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuDisconnect extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuDisconnect'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect disconnect action associated with this menu.
     */
    readonly actionDisconnect: ArchActionDisconnect;
    /**
     * Returns true indicating that this is an ArchMenuDisconnect instance.
     */
    static readonly isArchMenuDisconnect: boolean;
}

/**
 * The Architect Scripting class that represents the Jump to Menu menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuJumpToMenu}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice view model associated with this menu choice.
 */
declare class ArchMenuJumpToMenu extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuJumpToMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect jump to menu action for this menu.
     */
    readonly actionJumpToMenu: ArchActionJumpToMenu;
    /**
     * Returns true indicating that this is an ArchMenuJumpToMenu instance.
     */
    static isArchMenuJumpToMenu: boolean;
}

/**
 * The Architect Scripting class that represents the Jump To Task menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuJumpToTask}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuJumpToTask extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuJumpToTask'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect jump to task action associated with this menu choice.
     */
    readonly actionJumpToTask: ArchActionJumpToTask;
    /**
     * Returns true indicating that this is an ArchMenuJumpToTask instance.
     */
    static readonly isArchMenuJumpToTask: boolean;
}

/**
 * The Architect Scripting class that represents the Previous Menu menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuPreviousMenu}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuPreviousMenu extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuPreviousMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * The previous menu action associated with this menu choice.
     */
    readonly actionPreviousMenu: ArchActionPreviousMenu;
    /**
     * Returns true indicating that this is an ArchMenuPreviousMenu instance.
     */
    static isArchMenuPreviousMenu: boolean;
}

/**
 * The Architect Scripting class that represents the Repeat Menu menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuRepeatMenu}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuRepeatMenu extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuRepeatMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect repeat menu action for this menu.
     */
    readonly actionRepeatMenu: ArchActionRepeatMenu;
    /**
     * Returns true indicating that this is an ArchMenuRepeatMenu instance.
     */
    static readonly isArchMenuRepeatMenu: boolean;
}

/**
 * The Architect Scripting class that represents the Return To Agent menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuReturnToAgent}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuReturnToAgent extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuReturnToAgent'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect returnToAgent action associated with this menu.
     */
    readonly actionReturnToAgent: ArchActionReturnToAgent;
    /**
     * Returns true indicating that this is an ArchMenuReturnToAgent instance.
     */
    static readonly isArchMenuReturnToAgent: boolean;
}

/**
 * The Architect Scripting class that represents a Sub Menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuSubMenu}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice view model.
 */
declare class ArchMenuSubMenu extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns a array of menus for this sub menu.
     */
    readonly childMenus: ArchBaseMenu[];
    /**
     * Gets or sets the default menu choice for this sub menu.  To be a valid default menu choice, the menu choice must be
     * a child of this sub menu.  To clear the default menu choice, set the value to null or undefined.  If no default menu
     * choice is specified, and the getter is called, nothing is returned.
     */
    menuDefault: ArchBaseMenuChoice;
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The ArchActionMenu action associated with this sub menu.
     */
    readonly actionMenu: ArchActionMenu;
    /**
     * The audio for this sub menu.
     */
    readonly audio: ArchAudio;
    /**
     * Returns true indicating that this is an ArchMenuSubMenu instance.
     */
    static readonly isArchMenuSubMenu: boolean;
    /**
     * The menu options / settings for this sub menu.
     */
    readonly settingsMenu: ArchSettingsMenu;
    /**
     * The speech rec settings for this sub menu.
     */
    readonly settingsSpeechRec: ArchSettingsSpeechRec;
}

/**
 * The Architect Scripting class that represents the Task menu which contains a task.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTask}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu choice.
 */
declare class ArchMenuTask extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The task associated with this menu.
     */
    readonly actionTask: ArchActionTask;
    /**
     * Returns true indicating that this is an ArchMenuTask instance.
     */
    static readonly isArchMenuTask: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer To Acd menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToAcd}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToAcd extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to acd action for this menu.
     */
    actionTransferToAcd: ArchActionTransferToAcd;
    /**
     * Returns true indicating that this is an ArchMenuTransferToAcd instance.
     */
    static isArchMenuTransferToAcd: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer To Flow menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToFlow}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToFlow extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to flow action associated with this menu.
     */
    actionTransferToFlow: ArchActionTransferToFlow;
    /**
     * Returns true indicating that this is an ArchMenuTransferToFlow instance.
     */
    static isArchMenuTransferToFlow: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer To Secure Flow menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToFlowSecure}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToFlowSecure extends ArchMenuTransferToFlow {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuTransferToFlowSecure'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to flow action associated with this menu.
     */
    actionTransferToFlowSecure: ArchActionTransferToFlowSecure;
    /**
     * Returns true indicating that this is an ArchMenuTransferToFlowSecure instance.
     */
    static readonly isArchMenuTransferToFlowSecure: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer To Group menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToGroup}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToGroup extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuTransferToGroup'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to group action associated with this menu.
     */
    actionTransferToGroup: ArchActionTransferToGroup;
    /**
     * Returns true indicating that this is an ArchMenuTransferToGroup instance.
     */
    static isArchMenuTransferToGroup: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer to Number menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToNumber}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToNumber extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to number action associated with this menu.
     */
    actionTransferToNumber: ArchActionTransferToNumber;
    /**
     * Returns true indicating that this is an ArchMenuTransferToNumber instance.
     */
    static isArchMenuTransferToNumber: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer to User menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToUser}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToUser extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect transfer to user action associated with this menu.
     */
    actionTransferToUser: ArchActionTransferToUser;
    /**
     * Returns true indicating that this is an ArchMenuTransferToUser instance.
     */
    static isArchMenuTransferToUser: boolean;
}

/**
 * The Architect Scripting class that represents the Transfer To Voicemail menu.
 * Instances of this action should be created by calling {@link ArchFactoryMenus#addMenuTransferToVoicemail}
 * @param coreMenuChoiceViewModel - ( *Internal* ) an Architect core menu choice associated with this menu.
 */
declare class ArchMenuTransferToVoicemail extends ArchBaseMenuChoice {
    // constructor(coreMenuChoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchMenuTransferToVoicemail'.
     */
    static readonly displayTypeName: string;
    /**
     * The Architect Transfer to Voicemail action associated with this menu.
     */
    actionTransferToVoicemail: ArchActionTransferToVoicemail;
    /**
     * Returns true indicating that this is an ArchMenuTransferToVoicemail instance.
     */
    static readonly isArchMenuTransferToVoicemail: boolean;
}

/**
 * The Architect Scripting class that represents an output on an action.
 * Instances of this class will be created automatically as needed by Architect Scripting.
 * @param archAction - the Architect action that contains this output.
 * @param coreActionPathViewModel - ( *Internal* ) an Architect core action path view model.
 */
declare class ArchActionOutput extends ArchBaseMultiActionContainer {
    // constructor(archAction: any, coreActionPathViewModel: any);
    /**
     * Returns the display type name string 'ArchActionOutput'.
     */
    static readonly displayTypeName: string;
    /**
     * Whether or not the output is enabled for runtime execution.  An enabled action
     * output will be displayed in the UI.  If it's disabled and there are no actions
     * in the output path, it will be hidden from the flow author.  Remember that you
     * can access the {@link ArchActionOutput#canEnableDisable} property to see whether
     * or not it is ok to set a value on the enabled property.  If {@link ArchActionOutput#canEnableDisable}
     * returns false for this output and code attempts to set an enabled value, the
     * property setter will throw.
     */
    enabled: boolean;
    /**
     * The identifier for this action output.  For known outputs such as the Yes output on a decision action,
     * this string will be a string value from the {@link ArchEnums#OUTPUT_IDS_ALL} array.  For dynamically
     * created outputs such as outputs on an {@link ArchActionSwitch} or {@link ArchActionCallLexBot}, the
     * identifier will be a guid.
     */
    readonly id: string;
    /**
     * Whether or not the output is dynamic.  A dynamic action output is an output that is not built in to the action.
     * The Yes or No outputs on a {@link ArchActionDecision} action are not dynamic.  Dynamically created cases on a
     * switch action, intent outputs on various bot actions such as the {@link ArchActionCallLexBot} or intent outputs
     * on the {@link ArchActionAskForIntent} action are dynamic because they are created dynamically rather than being
     * hard coded on an action.
     */
    readonly isDynamic: boolean;
    /**
     * Returns true indicating that this is an ArchActionOutput instance which means it's an output on an Architect action.
     */
    readonly isArchActionOutput: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * The label of this output ( i.e. Success, Failure, Timeout, etc. etc. )
     * Note:  The name and label properties on this class return the same string
     * value.  This is by design.
     */
    readonly label: string;
    /**
     * The name of this output ( i.e. Success, Failure, Timeout, etc. etc. )
     * Note:  The name and label properties on this class return the same string
     * value.  This is by design.
     */
    readonly name: string;
    /**
     * Returns the Architect action that contains this output.
     */
    readonly parentAction: ArchBaseAction;
    /**
     * Returns the parent flow for the action that contains this action output.  This is a helper method that internally
     * calls {@link ArchActionOutput#parentAction} and on the returned [action]{@link ArchBaseAction} it then calls
     * {@link ArchBaseAction#parentFlow}.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns whether or not this action output can be enabled or disabled.
     * A disabled action output does not show in the Architect UI *unless* there are actions
     * in it.  The output path will be displayed as unreachable and once all actions are
     * removed from underneath it it will no longer be shown in the UI.  Execution will
     * not take a disabled output at runtime.  Remember that whether or not an action output
     * can be disabled is also dependent on the parent flow such as whether it is
     * [read only]{@link ArchBaseFlow#isReadOnly} or not.
     */
    readonly canEnableDisable: boolean;
}

/**
 * Creates an instance of an ArchBranch.  This contains branch information which is used by actions to create
 * action outputs.  For example, in workflow or inbound email flows, tasks can have branches.  If you add an {@link ArchActionCallTask}
 * action, the outputs on that action will reflect the branches from the task.  Information about those branches is
 * made available via. ArchBranch instances in {@link ArchTask#branches}.
 * @param coreBranchItem - ( *Internal* ) the Architect core branch item associated with this ArchBranch wrapper
 */
declare class ArchBranch extends ArchBaseCoreObject {
    // constructor(coreBranchItem: any);
    /**
     * Returns the display type name string 'ArchBranch'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchBranch instance.
     */
    readonly isArchBranch: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * Returns the name associated with this branch.
     */
    readonly name: string;
    /**
     * Returns the output identifier for this branch.
     */
    readonly outputId: string;
}

/**
 * The Architect Scripting class that provides internal support for Architect Scripting system prompt objects.
 */
declare class ArchPromptSystem extends ArchBasePrompt {
    // constructor();
    /**
     * Returns the display type name string 'ArchPromptSystem'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchPromptSystem instance which means
     * this is a system prompt instance.
     */
    readonly isArchPromptSystem: boolean;
}

/**
 * The Architect Scripting class that provides internal support for Architect Scripting user prompt objects.
 */
declare class ArchPromptUser extends ArchBasePrompt {
    // constructor();
    /**
     * Returns the display type name string 'ArchPromptUser'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchPromptUser instance which means
     * this is a user prompt instance.
     */
    readonly isArchPromptUser: boolean;
}

declare class ArchSettingActionPropertyDefault extends ArchBaseObject {
    // constructor(archDefinitionAction: ArchDefinitionAction, propertyName: string, propertyDefaultValue: ArchBaseValue);
    /**
     * Returns the display type name string 'ArchSettingActionPropertyDefault'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingActionPropertyDefault instance.
     */
    readonly ArchSettingActionPropertyDefault: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Returns the action definition for this property default.
     */
    readonly definitionAction: ArchDefinitionAction;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

declare class ArchSettingsActionDefaults extends ArchBaseCoreObject {
    // constructor(coreDefaultSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsActionDefaults'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsActionDefaults instance.
     */
    readonly isArchSettingsActionDefaults: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Gets a list of all default settings for the specified action definition.
     * @param archDefinitionAction - the action whose defaults you wish to retrieve.
     */
    getDefaultSettingsForActionDefinition(archDefinitionAction: ArchDefinitionAction): ArchSettingActionPropertyDefault[];
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an instance of an ArchSettingsBotFlow.  This is the Scripting class that handles flow error event handling settings.
 * @param coreBotSettingsViewModel - ( *Internal* ) an Architect core bot flow settings view model.
 */
declare class ArchSettingsBotFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreBotSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsBotFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging that describes this inbound email settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsBotFlow instance.
     */
    readonly isArchSettingsBotFlow: boolean;
    /**
     * Given an intent name, returns the ArchSettingsNluIntent object for that intent.
     * This name lookup is case-sensitive.
     */
    getIntentSettingsByIntentName: any;
}

/**
 * Creates an instance of an ArchSettingsCommonModuleFlow.  This is the Scripting class that handles common module flow settings.
 * @param coreCommonModuleSettingsViewModel - ( *Internal* ) an Architect core error handling settings view model.
 */
declare class ArchSettingsCommonModuleFlow extends ArchBaseCoreObject {
    // constructor(coreCommonModuleSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsCommonModuleFlow'.
     */
    readonly displayTypeName: string;
    /**
     * Returns an array of flow type strings that is a snapshot of the compatible flow types
     * for this [common module flow]{@link ArchFlowCommonModule}.  To add an additional compatible
     * flow type to this flow, see the {@link ArchSettingsCommonModuleFlow#addCompatibleFlowType} method.
     * To remove an existing compatible flow type from this [common module flow]{@link ArchFlowCommonModule}, see the
     * {@link ArchSettingsCommonModuleFlow#removeCompatibleFlowType} method.
     */
    readonly compatibleFlowTypes: string[];
    /**
     * Adds a flow type to the list of compatible flow types that are configured on this [common module flow]{@link ArchFlowCommonModule}.
     * If the supplied flow type string is not a valid flow type string at all or not a valid compatible flow type for a common module
     * flow, this method will throw.
     * @param flowType - the flow type to add to the compatible flow types for this common module.
     *                            The string values in {@link ArchEnums#FLOW_TYPES} list valid flow type values but
     *                            additionally the flow type must be one that is valid for use as a compatible flow
     *                            type in a common module flow.  Whether a flow can be used as a compatible flow
     *                            in a common module can be found [here]{@link ArchDefinitionFlow#isCommonModuleCompatibleFlowType}.
     *                            Remember too that [flow definitions]{@link ArchDefinitionFlow} have a {@link ArchDefinitionFlow#type} property
     *                            that returns its flow type string value.
     */
    addCompatibleFlowType(flowType: string): void;
    /**
     * Removes a flow type from the list of compatible flow types that are configured on this [common module flow]{@link ArchFlowCommonModule}.
     * If the supplied flow type string is not a valid flow type string at all or not a valid compatible flow type for a common module
     * flow, this method will throw.
     */
    readonly removeCompatibleFlowType: any;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object which is generated by the Architect Scripting object itself.
     * Usually this contains stuff like the tracking ID, name, type information, etc. etc.  This information will be used as the
     * header for actual logging calls.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an instance of an ArchSettingsEventErrorFlow.  This is the Scripting class that handles flow error event handling settings.
 * @param coreErrorHandlingSettingsViewModel - ( *Internal* ) an Architect core error handling settings view model.
 */
declare class ArchSettingsEventErrorFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreErrorHandlingSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsEventErrorFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging that describes this menu settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsEventErrorFlow instance.
     */
    readonly isArchSettingsEventErrorFlow: boolean;
    /**
     * Returns the parent flow for this error handling settings instance.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * The audio that will be played to the call prior to the actual error handling being invoked.
     */
    readonly preHandlingAudio: ArchAudio;
    /**
     * The error handling configured for the flow.  The string values in {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING}
     * lists valid values.
     * Based on the handling setting, there are other properties in this class that will provide the target
     * menu, queue, state or task that should be used in the event of a flow runtime error.
     */
    handling: string;
    /**
     * Returns whether or not the specified error handling type is available for this flow
     * based on the error handling enum string value that is passed in.  This function returns
     * true if the error handling type is available, otherwise false.
     * @param errorHandlingEnumValue - the error handling to check.  This must be a
     *                                          string value from the {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING}
     *                                          enum.
     */
    isErrorHandlingTypeAvailable(errorHandlingEnumValue: string): boolean;
    /**
     * The menu to jump to when the [handling]{@link ArchSettingsEventErrorFlow.handling} property is set to ArchEnums.EVENTS_FLOW_ERROR_HANDLING.jumpToMenu ( see {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING} ).
     */
    targetMenu: ArchMenu;
    /**
     * The state to change to when the [handling]{@link ArchSettingsEventErrorFlow.handling} property is set to ArchEnums.EVENTS_FLOW_ERROR_HANDLING.changeState ( see {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING} ).
     */
    targetState: ArchState;
    /**
     * The task to run when the [handling]{@link ArchSettingsEventErrorFlow.handling} property is set to ArchEnums.EVENTS_FLOW_ERROR_HANDLING.jumpToTask ( see {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING} ).
     */
    targetTask: ArchTask;
    /**
     * The queue to transfer to when the [handling]{@link ArchSettingsEventErrorFlow.handling} property is set to ArchEnums.EVENTS_FLOW_ERROR_HANDLING.transferToQueue ( see {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING} ).
     */
    readonly targetQueue: ArchValueQueue;
}

/**
 * Creates an instance of an ArchSettingsEventErrorFlowBot.  This is the Scripting class that handles bot flow error event handling settings.
 * @param coreBotErrorHandlingSettingsViewModel - ( *Internal* ) an Architect core bot error handling settings view model.
 */
declare class ArchSettingsEventErrorFlowBot extends ArchSettingsEventErrorFlow {
    // constructor(coreBotErrorHandlingSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsEventErrorFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsEventErrorFlowBot instance.
     */
    readonly isArchSettingsEventErrorFlowBot: boolean;
    /**
     * Wording the bot will use when the participant has requested to speak to a human and has said yes to the Agent Escalation Confirmation prompt.  Once this wording has been communicated, the Bot will Exit back to the calling flow which invoked this Bot flow.
     */
    readonly agentEscalationConfirmation: ArchValueCommunication;
    /**
     * Wording the bot will use when the participant has requested to speak to a human and has said yes to the Agent
     * Escalation Confirmation prompt. Once this wording has been communicated, the Bot will Exit back to the calling
     * flow which invoked this Bot flow.
     */
    readonly agentEscalationHandover: ArchValueCommunication;
    /**
     * A boolean value which lets you configure whether or not the bot listening to requests to speak to a human.
     * When creating a new bot flow this will be set to true by default.
     */
    readonly enableAgentEscalation: ArchValueBoolean;
    /**
     * Wording the bot will use Bot when there is an error encountered during the execution of the flow. Examples of
     * such an error include a divide-by-zero error or submitting a NOT_SET value to a function that does not allow it.
     */
    readonly errorEventHandover: ArchValueCommunication;
    /**
     * Wording the bot will use when the bot asks a question and the participants takes too many attempts to provide a
     * valid answer. This could include too many of any of the following: No Matches, No Inputs, or Confirmation Rejections.
     * Recognition Failures can occur in any 'Ask For ...' or '"Anything Else?" Loop' action.
     */
    readonly recognitionFailureEventHandover: ArchValueCommunication;
    /**
     * The recognition failure event handling configured for the flow. The string values in {@link ArchEnums#EVENTS_FLOW_ERROR_HANDLING}
     * lists valid values.
     *
     * Specifies the bot's behavior when it asks a question and the participants takes too many attempts to provide a
     * valid answer. This could include too many of any of the following: No Matches, No Inputs, or Confirmation Rejections.
     * Recognition Failures can occur in any 'Ask For ...' action or in an '"Anything Else?" Loop' action. Setting 'Disconnect'
     * will end the participant's Genesys Cloud conversation and setting 'Exit the Flow' will return control to the flow
     * which invoked this Bot Flow.
     */
    readonly recognitionFailureEventHandling: string;
}

/**
 * Creates an instance of an ArchSettingsInQueueCallFlow.  This is the Scripting class that handles the hold music
 * setting for an in-queue call flow.
 * @param coreInQueueCallFlowSettingsViewModel - ( *Internal* ) an Architect core menu settings view model.
 */
declare class ArchSettingsInQueueCallFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreInQueueCallFlowSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsInQueueCallFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the hold music prompt value for the in-queue call flow.
     */
    readonly holdMusic: ArchValuePrompt;
    /**
     * Returns a string suitable for logging that describes in-queue call flow settings
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsInQueueCallFlow instance.
     */
    readonly isArchSettingsInQueueCallFlow: boolean;
}

/**
 * Creates an instance of an ArchSettingsInboundEmailFlow.  This is the Scripting class that handles flow error event handling settings.
 * @param coreInboundEmailSettingsViewModel - ( *Internal* ) an Architect core error handling settings view model.
 */
declare class ArchSettingsInboundEmailFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreInboundEmailSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsInboundEmailFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging that describes this inbound email settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsInboundEmailFlow instance.
     */
    readonly isArchSettingsInboundEmailFlow: boolean;
    /**
     * The auto-generated email handling configured for the flow.  The string values in {@link ArchEnums#AUTO_GENERATED_EMAIL_HANDLING}
     * lists valid values.
     */
    autoGeneratedEmailHandling: string;
}

/**
 * Creates an instance of an ArchSettingsMenu.  This is the Scripting class that handles menu settings / options.
 * @param coreMenuSettingsViewModel - ( *Internal* ) an Architect core menu settings view model.
 */
declare class ArchSettingsMenu extends ArchBaseCoreObjectWithId {
    // constructor(coreMenuSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsMenu'.
     */
    static readonly displayTypeName: string;
    /**
     * The maximum delay for extension dialing.  This cannot be less than 1 second.
     */
    readonly extensionDialingMaxDelay: ArchValueDuration;
    /**
     * Returns a string suitable for logging that describes this menu settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsMenu instance.
     */
    readonly isArchSettingsMenu: boolean;
    /**
     * Returns whether or not to listen for extension dialing.
     */
    readonly listenForExtensionDialing: ArchValueBoolean;
    /**
     * The menu selection timeout.  This cannot be less than 1 second or greater than 60 seconds.
     */
    readonly menuSelectionTimeout: ArchValueDuration;
    /**
     * The number of times to repeat the menu.  This can range from 0 to 10.
     */
    readonly repeatCount: ArchValueInteger;
}

/**
 * Creates an instance of an ArchSettingsMenuFlow.  This is the Scripting class that handles menu settings / options
 * for a flow.  This will still be created for flow level menu settings but not settings on individual menu instances.
 * @param coreMenuSettingsViewModel - ( *Internal* ) an Architect core menu settings view model.
 */
declare class ArchSettingsMenuFlow extends ArchSettingsMenu {
    // constructor(coreMenuSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsMenuFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging that describes this menu settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsMenuFlow instance.
     */
    readonly isArchSettingsMenuFlow: boolean;
}

declare class ArchSettingsNluIntent extends ArchBaseObject {
    // constructor(coreIntentSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsNluIntent'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsNluIntent instance.
     */
    readonly isArchSettingsNluIntent: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an instance of an ArchSettingsNluKnowledge.  This is the Scripting class that handles the natural
 * language understanding knowledge settings which includes the ability to pick a knowledge base for a bot
 * to use.
 * @param coreKnowledgeSettingsViewModel - ( *Internal* ) an Architect core error knowledge settings view model.
 */
declare class ArchSettingsNluKnowledge extends ArchBaseCoreObject {
    // constructor(coreKnowledgeSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsNluKnowledge'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsNluKnowledge instance.
     */
    readonly isArchSettingsNluKnowledge: boolean;
    /**
     * The bias the bot should use when interpreting participant input to prefer knowledge base answers, other
     * natural language understanding settings such as intents, or weight input equally.  The string values in {@link ArchEnums#NLU_RESPONSE_BIAS_MODES}
     * lists valid values.
     */
    readonly responseBias: ArchValueString;
    /**
     * Returns the knowledge base name if there is one set on this ArchActionSettingsNluKnowledge instance. If there is not one set,
     * nothing is returned.
     */
    readonly knowledgeBaseName: string;
    /**
     * Returns the knowledge base id if there is one set on this ArchActionSettingsNluKnowledge instance. If there is not one set,
     * nothing is returned.
     */
    readonly knowledgeBaseId: string;
    /**
     * Wording the bot will use after playing back one or more knowledge base answers.  For example, 'Does this answer your question?'
     */
    readonly knowledgeConfirmation: ArchValueCommunication;
    /**
     * Wording the bot will use to introduce a numbered list of matching Knowledge answers, in the case
     * where multiple good matches are found in the Knowledge Base. For example, 'This is what I found'
     */
    readonly knowledgeInitialResponseMulti: ArchValueCommunication;
    /**
     * Wording the bot will use to re-introduce a numbered list of matching Knowledge answers, in the case
     * where the user's first attempt to choose a number was unsuccessful.
     * For example, 'I didn't understand that. Please pick one of the following:'
     */
    readonly knowledgeInitialResponseMultiRetry: ArchValueCommunication;
    /**
     * Wording the bot will use prior to playing back a single knowledge base answer. For example, 'This is what I found'
     */
    readonly knowledgeInitialResponseSingle: ArchValueCommunication;
    /**
     * Wording the bot will use to represent the 'no match' option.  For example, 'None of the above'
     */
    readonly knowledgeNoMatch: ArchValueCommunication;
    /**
     * The maximum number of knowledge base answers to be returned by the bot from the selected knowledge base.
     */
    readonly maxNumOfAnswersReturned: ArchValueInteger;
    /**
     * A boolean value which, if it evaluates to true, will send knowledge confirmation feedback to the knowledge service
     * which will be used to improve the performance of your knowledge base.
     */
    readonly sendKnowledgeFeedback: ArchValueBoolean;
    /**
     * This sets the knowledge base that will be used for use at runtime by the knowledge base id.
     * @param knowledgeBaseId - the id of the  Knowledge Base to set.
     * @param [callbackFunction] - a callback function to call if the Knowledge Base is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect NLU Knowledge Settings instance.
     */
    setKnowledgeBaseByIdAsync(knowledgeBaseId: string, callbackFunction?: (...params: any[]) => any): void;
    /**
     * This sets the knowledge base that will be used for use at runtime by the knowledge base name.
     * @param knowledgeBaseName - the name of the Knowledge Base to set. Knowledge Base names are looked up case insensitively.
     * @param [callbackFunction] - a callback function to call if the Knowledge Base is successfully
     *                                        looked up and configured on this action. The first parameter passed to the
     *                                        callback function will be this Architect NLU Knowledge Settings instance.
     */
    setKnowledgeBaseByNameAsync(knowledgeBaseName: string, callbackFunction?: (...params: any[]) => any): void;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object which is generated by the Architect Scripting object itself.
     * Usually this contains stuff like the tracking ID, name, type information, etc. etc.  This information will be used as the
     * header for actual logging calls.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * The Architect Scripting class that represents the Outbound settings on an [Outbound Call Flow]{@link ArchFlowOutboundCall}.
 * This is where you specify the contact list and default wrapup code for an Outbound Call Flow.
 * Architect Scripting will automatically create instances of this class as needed.  On an Outbound Call Flow, access the
 * [settingsOutboundCall]{@link ArchFlowOutboundCall#settingsOutboundCall} property to get at these settings.
 * @param coreOutboundCallSettingsViewModel - ( *Internal* ) an Architect core outbound flow settings.
 */
declare class ArchSettingsOutboundCallFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreOutboundCallSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsOutboundCallFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * The default wrapup code set for the outbound call flow.
     */
    readonly defaultWrapupCode: ArchValueWrapupCode;
    /**
     * Returns a string suitable for logging that describes outbound call flow settings
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsOutboundCallFlow instance.
     */
    readonly isArchSettingsOutboundCallFlow: boolean;
    /**
     * Sets the outbound flow's contact list to the contact list with the specified identifier.
     * @param contactListId - the identifier for the contact list.
     * @param [callbackFunction] - a callback function to call if the contact list is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this contact list value instance.
     */
    setContactListLiteralByContactListIdAsync(contactListId: string, callbackFunction?: callbackArchValueContactList): void;
    /**
     * Sets the outbound flow's contact list to the contact list with the specified name.
     * @param contactListName - the name for the contact list.
     * @param [callbackFunction] - a callback function to call if the contact list is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this contact list value instance.
     */
    setContactListLiteralByContactListNameAsync(contactListName: string, callbackFunction?: callbackArchValueContactList): void;
}

declare class ArchSettingsPromptsFlow extends ArchBaseCoreObjectWithId {
    // constructor(corePromptSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsPromptsFlow'.
     */
    readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsPromptsFlow instance.
     */
    readonly isArchSettingsPromptsFlow: boolean;
    /**
     * Whether or not to ensure audio is present on prompts used for all supported languages in a flow for validation.
     */
    ensureAudioInPrompts: boolean;
    /**
     * The identifier string for this object.
     */
    readonly id: string;
    /**
     * Returns whether or not the id property may be blank or undefined for this object.  For example, the returned settings from {@link ArchMenu#settingsMenu}
     * will have a blank identifier along with the settings returned from {@link ArchMenu#settingsSpeechRec}.  Note that this is
     * an extremely rare case.
     */
    readonly idMayBeBlank: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object which is generated by the Architect Scripting object itself.
     * Usually this contains stuff like the tracking ID, name, type information, etc. etc.  This information will be used as the
     * header for actual logging calls.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an instance of an ArchSettingsSpeechRec.  This is the Scripting class that handles speech rec settings.
 * @param coreSpeechRecSettingsViewModel - ( *Internal* ) an Architect core speech rec settings view model.
 */
declare class ArchSettingsSpeechRec extends ArchBaseCoreObjectWithId {
    // constructor(coreSpeechRecSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsSpeechRec'.
     */
    static readonly displayTypeName: string;
    /**
     * The complete match timeout duration value.  This value can range from 100ms to 20000ms.
     */
    readonly completeMatchTimeout: ArchValueDuration;
    /**
     * The incomplete match timeout duration value.  This value can range from 100ms to 20000ms.
     */
    readonly incompleteMatchTimeout: ArchValueDuration;
    /**
     * The maximum overall speech allowed total duration value.  This value can range from 100ms to 40000ms.
     */
    readonly maxSpeechLengthTimeout: ArchValueDuration;
    /**
     * Returns a string suitable for logging that describes this speech rec settings instance.
     */
    readonly logStr: string;
    /**
     * The minimum speech rec confidence level integer value.  This value can range from 0 to 100.
     */
    readonly minConfidenceLevel: ArchValueInteger;
    /**
     * Returns true indicating that this is an ArchSettingsSpeechRec instance.
     */
    readonly isArchSettingsSpeechRec: boolean;
}

/**
 * Creates an instance of an ArchSettingsSpeechRecFlow.  This is the Scripting class that handles speech rec settings
 * for a flow.  This will still be created for flow level speech rec settings but not settings on individual menu instances.
 * @param coreSpeechRecSettingsViewModel - ( *Internal* ) an Architect core speech rec settings view model.
 */
declare class ArchSettingsSpeechRecFlow extends ArchSettingsSpeechRec {
    // constructor(coreSpeechRecSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsSpeechRecFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Whether or not speech rec is enabled on the flow.  If speech rec is turned off for then any other speech rec
     * settings like the company directory support or speech rec terms on menu items will not be used at runtime.
     */
    asrEnabledOnFlow: boolean;
    /**
     * The company directory ASR support for the flow.  The string values in {@link ArchEnums#SPEECH_REC_COMPANY_MODES}
     * lists valid values.
     *
     * Remember that if you turn off ASR for the entire flow by setting the {@link ArchSettingsSpeechRecFlow#asrEnabledOnFlow} to false,
     * the company directory settings won't have any impact because speech recognition has been disabled for the entire flow.
     */
    asrCompanyDir: string;
    /**
     * Returns a string suitable for logging that describes this speech rec settings instance.
     */
    readonly logStr: string;
    /**
     * Returns true indicating that this is an ArchSettingsSpeechRecFlow instance.
     */
    readonly isArchSettingsSpeechRecFlow: boolean;
}

/**
 * Creates an instance of ArchSettingsSupportedLanguage.  Instances of this class will be automatically
 * created by Architect Scripting.
 * @param coreLanguageOptionsViewModel - ( *Internal* ) an Architect core language options object.
 */
declare class ArchSettingsSupportedLanguage extends ArchBaseCoreObject {
    // constructor(coreLanguageOptionsViewModel: any);
    /**
     * A logging string for the ArchSettingsSupportedLanguage instance.
     */
    readonly logStr: string;
    /**
     * The default language skill configured for this flow supported language.
     * If the parent flow for this supported language setting does not have
     * supported languages or the language does not support the notion of
     * a default language skill because it's not applicable then null will be
     * returned.
     */
    readonly defaultLanguageSkill: ArchValueLanguageSkill;
    /**
     * Returns the display type name string 'ArchSettingsSupportedLanguage'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsSupportedLanguage instance.
     */
    readonly isArchSettingsSupportedLanguage: boolean;
    /**
     * The language for this supported language setting.
     */
    readonly language: ArchLanguage;
    /**
     * Set a text to speech engine selection for this supported language setting. Calling this function also sets the current voice to 'None'.
     * @param archTtsEngine - the text to speech engine to set for this language.
     */
    setTtsEngine(archTtsEngine: ArchTtsEngine): void;
    /**
     * Sets the text to speech engine selection to 'None' for this supported language setting. Calling this function also sets the current voice to 'None'.
     */
    setTtsEngineNone(): void;
    /**
     * Sets the text to speech engine selection for this supported language setting to the default engine. The default engine per language is defined
     * at the org level in Genesys Cloud Admin. Calling this function also sets the current voice to 'None'.
     * @returns the default engine for this language
     */
    setTtsEngineDefault(): ArchTtsEngine;
    /**
     * Sets the text to speech voice selection for this supported language setting. The default voice and engine per language are defined at the org level in Genesys Cloud Admin.
     * This function also sets the voice's parent engine on this language if it's not already selected.
     */
    setTtsVoice(): void;
    /**
     * Sets the text to speech voice selection to 'None' for this supported language setting.
     */
    setTtsVoiceNone(): void;
    /**
     * Sets the text to speech voice selection for this supported language setting to the default voice for the currently-selected engine.
     * The default voice and engine per language are defined at the org level in Genesys Cloud Admin.
     * @returns the default voice that was set for this language
     */
    setTtsVoiceDefaultForCurrentEngine(): ArchTtsVoice;
    /**
     * The text to speech engine currently set for this supported language setting. If the parent flow does not support audio, it will return null.
     */
    readonly ttsEngine: ArchTtsEngine;
    /**
     * The text to speech voice currently set for this supported language setting. If the parent flow does not support audio, it will return null.
     */
    readonly ttsVoice: ArchTtsVoice;
}

/**
 * This class holds supported language setting information for a flow.  This class can be thought of a the container
 * for language setting instances but it will be off of an [individual language settings]{@link ArchSettingsSupportedLanguage} where
 * you can configure a supported language itself.
 * Instances of this action should be created by accessing the [settingsSupportedLanguages]{@link ArchBaseFlow#settingsSupportedLanguages} property on a flow.
 * @param coreLanguageSelectionViewModel - ( *Internal* ) an Architect core language selection view model.
 */
declare class ArchSettingsSupportedLanguagesFlow extends ArchBaseCoreObjectWithId {
    // constructor(coreLanguageSelectionViewModel: any);
    /**
     * Checks flow to see if a language can be added in its current state. Some flows may have restrictions
     * if any or more than one can be added.
     */
    canAddSupportedLanguage(): boolean;
    /**
     * Adds a supported language to a flow for a specified [language]{@link ArchLanguage}.
     * @param archLanguage - the language to add to supported languages on the flow.  Note that any language used as a supported
     * language must have at least one region sub-tag.
     * @param [setAsDefaultLanguage] - if true, the language will be set as the default language on the flow.
     */
    addSupportedLanguage(archLanguage: ArchLanguage, setAsDefaultLanguage?: boolean): ArchSettingsSupportedLanguage;
    /**
     * This gets the supported language settings for the supported language set as default on the flow.
     * While this should not happen, if for some reason the default supported language cannot be determined,
     * nothing is returned.
     */
    getDefaultSupportedLanguageSettings(): ArchSettingsSupportedLanguage;
    /**
     * Returns the display type name string 'ArchSettingsSupportedLanguagesFlow'.
     */
    static readonly displayTypeName: string;
    /**
     * Looks through the supported languages on this flow for the language
     * specified by the language parameter and if found, returns the ArchSettingsSupportedLanguage
     * for it.  If not found, nothing is returned.
     * @param archLanguage - the Architect Scripting language whose settings you want to find in the flow's
     *                                      supported languages.
     */
    findLanguageSettings(archLanguage: ArchLanguage): ArchSettingsSupportedLanguage;
    /**
     * Returns true indicating that this is an ArchSettingsSupportedLanguagesFlow instance.
     */
    readonly isArchSettingsSupportedLanguagesFlow: boolean;
    /**
     * Returns a string suitable for logging that describes this supported languages instance.
     */
    readonly logStr: string;
    /**
     * Returns the parent flow for this supported languages settings instance.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns an array of settings for the currently supported languages set for this flow.  This array is a snapshot
     * of the supported language settings so modification of this array will not change the supported languages set
     * on the flow.
     */
    readonly languagesSettings: ArchSettingsSupportedLanguage[];
}

declare class ArchSettingsUserInput extends ArchBaseCoreObject {
    // constructor(coreUserInputSettingsViewModel: any);
    /**
     * Returns the display type name string 'ArchSettingsUserInput'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchSettingsUserInput instance.
     */
    readonly isArchSettingsUserInput: boolean;
    /**
     * The minimum confidence level percentage (score) that an input phrase must receive to be accepted without
     * triggering a confirmation question.
     */
    readonly collectionHighConfidenceThreshold: ArchValueInteger;
    /**
     * The minimum confidence level percentage (score) that an input phrase must receive to avoid a No Match. If the
     * confidence level of an input phrase is above this threshold then the bot will either accept it or confirm it
     * with the participant, depending on the value of the collectionHighConfidenceThreshold property.
     */
    readonly collectionLowConfidenceThreshold: ArchValueInteger;
    /**
     * The minimum confidence level percentage (score) that an input phrase must receive to be accepted without
     * triggering a confirmation question.
     */
    readonly confirmationLowConfidenceThreshold: ArchValueInteger;
    /**
     * This Communication is output prior to the bot repeating the current confirmation question whenever the bot does
     * not receive any input during a confirmation.
     */
    readonly confirmationNoInputApology: ArchValueCommunication;
    /**
     * Wording the bot will output prior to the bot repeating the current confirmation question whenever the bot
     * receives input that is neither a yes nor a no during a confirmation.
     */
    readonly confirmationNoMatchApology: ArchValueCommunication;
    /**
     * For the current 'Ask for ...' action, this is the maximum number of times that the bot will allow the
     * participant to say no while the bot is confirming an input. If the number exceeds this maximum then the
     * rules in the flow's Event Handling 'Recognition Failure Event' section will be followed, or if the action
     * has a 'No Intent' path then that path will be taken at runtime instead.
     */
    readonly confirmationRejectionsMax: ArchValueInteger;
    /**
     * A Boolean value which enables or disables barge-in functionality in the Bot Flow at runtime.
     */
    readonly enableBargeIn: ArchValueBoolean;
    /**
     * This Communication is output prior to the current 'Ask for ...' action's 'No Input' Communication whenever the
     * bot does not receive any input from the participant.
     */
    readonly noInputApology: ArchValueCommunication;
    /**
     * For the current 'Ask for ...' action, this is the maximum number of times that the bot will allow no input
     * (i.e. silence) from the participant. If the number exceeds this maximum then the rules in the flow's Event
     * Handling 'Recognition Failure Event' section will be followed, or if the action has a 'No Intent' path then
     * that path will be taken at runtime instead. No Input in both the 'Normal' and 'Confirmation' phases of the
     * 'Ask for ...' action will count towards this maximum.
     */
    readonly noInputsMax: ArchValueInteger;
    /**
     * Once the current Communication has finished playing, this is the maximum length of time to wait for the
     * participant to start speaking.  If no speech is detected within this time then a No Input will be triggered.
     */
    readonly noInputsTimeout: ArchValueDuration;
    /**
     * Wording the bot will output prior to the current 'Ask for ...' action's 'No Match' Communication whenever the bot
     * receives input from the participant that is not a valid match.
     */
    readonly noMatchApology: ArchValueCommunication;
    /**
     * For the current 'Ask for ...' action, this is the maximum number of times that the bot will expect to receive
     * input that is not a valid match.  If the number exceeds this maximum then the rules in the flow's Event Handling
     * 'Recognition Failure Event' section will be followed, or if the action has a 'No Intent' path then that path
     * will be taken at runtime instead.  No Match in both the 'Normal' and 'Confirmation' phases of the 'Ask for ...'
     * action will count towards this maximum.
     */
    readonly noMatchesMax: ArchValueInteger;
    /**
     * Wording the bot will output prior to the current 'Ask for ...' action's 'No Match' Communication whenever the
     * participant says no while the bot is confirming the participant's last input.
     */
    readonly noToConfirmationApology: ArchValueCommunication;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an instance of an ArchSpeechRecTermContainer object which contains speech rec terms
 * for a language.  These containers are per language on ArchSpeechRecTermContainers objects
 * which are on menu choices.
 * @param coreSpeechRecTermContainerViewModel - ( *Internal* ) an Architect core speech rec term container view model.
 */
declare class ArchSpeechRecTermContainer extends ArchBaseCoreObject {
    // constructor(coreSpeechRecTermContainerViewModel: any);
    /**
     * Returns the display type name string 'ArchSpeechRecTermContainer'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging for this speech rec term container.
     */
    readonly logStr: string;
    /**
     * Adds a new speech rec term to the container.
     * @param newTerm - the new speech rec term to add to the container.
     * @returns - returns true if the term was added, otherwise false.
     */
    addTerm(newTerm: string): boolean;
    /**
     * Checks to see if the specified term is in the container.  This is a case sensitive string check.
     * @param term - the term to check to see if it is in the container.  This should not be null.
     * @returns - returns true if the term is in the container, otherwise false.
     */
    containsTerm(term: string): boolean;
    /**
     * The language associated with this speech rec term container.
     */
    readonly language: ArchLanguage;
    /**
     * Returns true indicating that this is an ArchSpeechRecTermContainer instance.
     */
    readonly isArchSpeechRecTermContainer: boolean;
}

/**
 * Creates an instance of an ArchSpeechRecTermContainers object which contains ArchSpeechRecTermContainer
 * instances that are per language.  These are used in menu choices to hold
 * @param coreSpeechRecViewModel - ( *Internal* ) an Architect core speech rec view model.
 */
declare class ArchSpeechRecTermContainers extends ArchBaseCoreObject {
    // constructor(coreSpeechRecViewModel: any);
    /**
     * Returns the display type name string 'ArchSpeechRecTermContainers'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a string suitable for logging for this speech rec term containers object.
     */
    readonly logStr: string;
    /**
     * Gets the speech rec term container for the specified language.  If the container doesn't exist, it will
     * be created.  The language must be a language supported by the flow.
     * @param archLanguage - the language of the speech rec term container you wish to get.  This
     * must be a supported language on the flow.
     */
    getContainer(archLanguage: ArchLanguage): ArchSpeechRecTermContainer;
    /**
     * Returns true indicating that this is an ArchSpeechRecTermContainers instance.
     */
    readonly isArchSpeechRecTermContainers: boolean;
}

/**
 * Creates an Architect state.
 * @param coreStateViewModel - ( *Internal* ) an Architect core state view model.
 */
declare class ArchState extends ArchBaseMultiActionContainer {
    // constructor(coreStateViewModel: any);
    /**
     * This adds a new variable to the state.
     * @param name - the name of the variable to add.  Remember that variable names must
     *                        start with a letter and can then be followed by one ore more letters, numbers
     *                        or underscore characters to be valid.  Submitting the variable scope on the name
     *                        is optional.  If specified, it must be 'State.' in order to be valid since you're
     *                        adding the variable to a state.
     * @param type - the data type for the new variable.  Remember that type must be supported
     *                              in the flow type for which you're looking to add the variable.  If you are
     *                              not sure if a type is creatable, see the {@link ArchDataType#isScriptCreatableForFlowType} or
     *                              {@link ArchDataType#isScriptCreatableForFlow} methods.
     * @param [description] - the description for the new variable.
     */
    addVariable(name: string, type: ArchDataType, description?: string): ArchBaseVariable;
    /**
     * Returns the display type name string 'ArchState'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchState instance.
     */
    static readonly isArchState: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * Returns the state scoped variable for the supplied fully scoped variable name ( if it exists ).  Remember, looking
     * up variables by name is case insensitive.
     * @param variableName - the fully scoped variable name to look up such as State.MyVar.
     */
    getVariableByName(variableName: string): ArchBaseVariable;
    /**
     * Gets or sets the name for the state.  This cannot be blank.
     */
    name: string;
    /**
     * Returns the parent flow for this state.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * The integer tracking identifier for this state.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
    /**
     * Returns an array of variables defined in this state.
     */
    readonly variables: ArchBaseVariable[];
}

/**
 * Creates an Architect Bot state.
 * @param coreStateViewModel - ( *Internal* ) an Architect core state view model.
 */
declare class ArchStateBot extends ArchBaseMultiActionContainer {
    // constructor(coreStateViewModel: any);
    /**
     * Returns the display type name string 'ArchStateBot'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchStateBot instance.
     */
    static readonly isArchStateBot: boolean;
}

/**
 * The Architect Scripting class that represents a task.
 * Instances of this class should be created by calling {@link ArchFactoryTasks#addTask}
 * @param coreTaskViewModel - ( *Internal* ) an Architect core task view model.
 */
declare class ArchTask extends ArchBaseMultiActionContainer {
    // constructor(coreTaskViewModel: any);
    /**
     * This adds a new variable to the task.
     * @param name - the name of the variable to add.  Remember that variable names must
     *                        start with a letter and can then be followed by one ore more letters, numbers
     *                        or underscore characters to be valid.  Submitting the variable scope on the name
     *                        is optional.  If specified, it must be 'Task.' in order to be valid since you're
     *                        adding the variable to a task.
     * @param type - the data type for the new variable.  Remember that type must be supported
     *                              in the flow type for which you're looking to add the variable.  If you are
     *                              not sure if a type is creatable, see the {@link ArchDataType#isScriptCreatableForFlowType}
     *                              or {@link ArchDataType#isScriptCreatableForFlow} methods.
     * @param [description] - the description for the new variable.
     */
    addVariable(name: string, type: ArchDataType, description?: string): ArchBaseVariable;
    /**
     * Returns the display type name string 'ArchTask'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTask instance.
     */
    readonly isArchTask: boolean;
    /**
     * Returns whether or not the task is secure.  That means it contains something that is
     * secure like a secure variable or secure action.
     */
    readonly isSecure: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * Returns the task scoped variable for the supplied fully scoped variable name ( if it exists ).  Remember, looking
     * up variables by name is case insensitive.
     * @param variableName - the fully scoped variable name to look up such as Task.MyVar.
     */
    getVariableByName(variableName: string): ArchBaseVariable;
    /**
     * Gets or sets the name for the task.  This cannot be blank.
     */
    name: string;
    /**
     * This returns an array of the branches currently defined on the task.  Items in the returned array
     * will be branch instances.
     */
    readonly branches: ArchBranch[];
    /**
     * The integer tracking identifier for this task.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
    /**
     * Returns an array of variables defined in this task.
     */
    readonly variables: ArchBaseVariable[];
    /**
     * Creates a new branch for this task.
     * @param branchName - the name of the branch to add.  This name should not be blank and should be unique for the branches added to this task.
     */
    addBranch(branchName: string): ArchBranch;
    /**
     * Deletes the specified branch from the task.
     * @param branchToDelete - if a string, this should be the output ID.
     * @returns - whether or not the branch was deleted.
     */
    deleteBranch(branchToDelete: ArchBranch | string): boolean;
    /**
     * This method will call in to @link ArchTask.getBranchByOutputId passing in {@link ArchEnums#OUTPUT_IDS}.default
     * for the outputId.
     */
    getBranchByDefaultOutput(): ArchBranch;
    /**
     * Searches the branches configured on this task looking for the one whose output identifier matches the value specified
     * in outputId.  If found, an ArchBranch instance is returned for it.  Otherwise, null.
     * @param outputId - the output identifier to find.
     */
    getBranchByOutputId(outputId: string): ArchBranch;
    /**
     * Searches the branches configured on this task looking for the one whose name matches the value specified
     * in branchName. Branch name lookups are performed case insensitively. If found, an ArchBranch instance is returned for it.  Otherwise, null.
     * @param branchName - the name of the branch to find.
     */
    getBranchByName(branchName: string): ArchBranch;
    /**
     * Returns whether or not this task is a reusable task.  An example of a non-reusable task is when
     * the task is in a menu choice directly.
     */
    readonly isReusableTask: boolean;
    /**
     * Returns the number of output branches defined for this task. If this task [does not support output branches]{@link ArchTask#supportsBranches},
     * accessing this property getter will return 0.
     */
    readonly branchCount: number;
    /**
     * Returns the parent flow for this task.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns whether or not this task supports branches.  Task branches provide meta data about how a task can end via.
     * ArchBranch instances.  Do note that task branches are not supported in all Architect flow types and if you
     * try to add or delete branches in a task that does not support branches then the operation will immediately fail.
     */
    readonly supportsBranches: boolean;
}

declare class ArchTaskCommonModule extends ArchTask {
    // constructor(coreCommonModuleTaskViewModel: any);
    /**
     * Returns the display type name string 'ArchTaskCommonModule'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTaskCommonModule instance.
     */
    readonly isArchTaskCommonModule: boolean;
    /**
     * A string suitable for logging that contains information about this common module task.
     */
    readonly logStr: string;
    /**
     * This adds a new variable to the task.
     * @param name - the name of the variable to add.  Remember that variable names must
     *                        start with a letter and can then be followed by one ore more letters, numbers
     *                        or underscore characters to be valid.  Submitting the variable scope on the name
     *                        is optional.  If specified, it must be 'Task.' in order to be valid since you're
     *                        adding the variable to a task.
     * @param type - the data type for the new variable.  Remember that type must be supported
     *                              in the flow type for which you're looking to add the variable.  If you are
     *                              not sure if a type is creatable, see the {@link ArchDataType#isScriptCreatableForFlowType}
     *                              or {@link ArchDataType#isScriptCreatableForFlow} methods.
     * @param [description] - the description for the new variable.
     */
    addVariable(name: string, type: ArchDataType, description?: string): ArchBaseVariable;
    /**
     * Returns true indicating that this is an ArchTask instance.
     */
    readonly isArchTask: boolean;
    /**
     * Returns whether or not the task is secure.  That means it contains something that is
     * secure like a secure variable or secure action.
     */
    readonly isSecure: boolean;
    /**
     * Returns the task scoped variable for the supplied fully scoped variable name ( if it exists ).  Remember, looking
     * up variables by name is case insensitive.
     * @param variableName - the fully scoped variable name to look up such as Task.MyVar.
     */
    getVariableByName(variableName: string): ArchBaseVariable;
    /**
     * Gets or sets the name for the task.  This cannot be blank.
     */
    name: string;
    /**
     * This returns an array of the branches currently defined on the task.  Items in the returned array
     * will be branch instances.
     */
    readonly branches: ArchBranch[];
    /**
     * The integer tracking identifier for this task.  This is the numeric identifier is displayed in the Architect user interface.
     */
    readonly trackingId: number;
    /**
     * Returns an array of variables defined in this task.
     */
    readonly variables: ArchBaseVariable[];
    /**
     * Creates a new branch for this task.
     * @param branchName - the name of the branch to add.  This name should not be blank and should be unique for the branches added to this task.
     */
    addBranch(branchName: string): ArchBranch;
    /**
     * Deletes the specified branch from the task.
     * @param branchToDelete - if a string, this should be the output ID.
     * @returns - whether or not the branch was deleted.
     */
    deleteBranch(branchToDelete: ArchBranch | string): boolean;
    /**
     * This method will call in to @link ArchTask.getBranchByOutputId passing in {@link ArchEnums#OUTPUT_IDS}.default
     * for the outputId.
     */
    getBranchByDefaultOutput(): ArchBranch;
    /**
     * Searches the branches configured on this task looking for the one whose output identifier matches the value specified
     * in outputId.  If found, an ArchBranch instance is returned for it.  Otherwise, null.
     * @param outputId - the output identifier to find.
     */
    getBranchByOutputId(outputId: string): ArchBranch;
    /**
     * Searches the branches configured on this task looking for the one whose name matches the value specified
     * in branchName. Branch name lookups are performed case insensitively. If found, an ArchBranch instance is returned for it.  Otherwise, null.
     * @param branchName - the name of the branch to find.
     */
    getBranchByName(branchName: string): ArchBranch;
    /**
     * Returns whether or not this task is a reusable task.  An example of a non-reusable task is when
     * the task is in a menu choice directly.
     */
    readonly isReusableTask: boolean;
    /**
     * Returns the number of output branches defined for this task. If this task [does not support output branches]{@link ArchTask#supportsBranches},
     * accessing this property getter will return 0.
     */
    readonly branchCount: number;
    /**
     * Returns the parent flow for this task.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns whether or not this task supports branches.  Task branches provide meta data about how a task can end via.
     * ArchBranch instances.  Do note that task branches are not supported in all Architect flow types and if you
     * try to add or delete branches in a task that does not support branches then the operation will immediately fail.
     */
    readonly supportsBranches: boolean;
    /**
     * Returns the number of actions in this multi action container.
     */
    readonly actionCount: number;
    /**
     * Returns the first / starting action in this container's action list.  For a task or
     * state, this would be the starting action.  If there is no first action, nothing is returned.
     */
    readonly actionFirst: ArchBaseAction;
    /**
     * Returns the last action in this container's action list.  If there is no last
     * action, nothing is returned.  Remember, this does not mean this would be the last action
     * to execute at runtime because the last action may have outputs with actions contained
     * underneath them.
     */
    readonly actionLast: ArchBaseAction;
    /**
     * Returns an ordered array that contains the top level actions contained in this container.
     * By top level this means that actions which are contained in outputs of actions will
     * not be included in this array.  If there are no actions, an empty array is returned.
     * The action at index 0 will be the first action in this container.  For example, if this
     * were actions contained in a task or state, the action at index 0 is the starting / first action.
     */
    readonly actions: ArchBaseAction[];
    /**
     * Returns whether or not the specified action can be added to this container.
     * @param archDefinitionAction - the action definition to check.
     */
    canAddAction(archDefinitionAction: ArchDefinitionAction): boolean;
    /**
     * Deletes the specified action from this container.
     * @param archActionToDelete - the action to delete.
     */
    deleteAction(archActionToDelete: ArchBaseAction): void;
    /**
     * Returns whether or not this action container is in a menu choice.  If so, you cannot
     * add actions to it.  Actions are added to menu choices when menu choices are created by different
     * methods on the ArchFactoryMenus.
     */
    readonly isMenuChoiceContainer: boolean;
    /**
     * Returns whether or not all paths of execution are terminated ( i.e. have terminating actions ).
     */
    readonly isTerminated: boolean;
    /**
     * Returns whether or not this object acts as a variable container which means you can
     * add variables to it.
     */
    readonly isVariableContainer: boolean;
    /**
     * Moves an action in the action container to a different position.
     * @param archActionToMove - the action to move in this container.
     * @param [archActionNewPreviousAction = If not specified, moves the action to the top of this action container.] - the destination action in this container above which the action specified in the archActionToMove parameter should be moved.
     */
    moveAction(archActionToMove: ArchBaseAction, archActionNewPreviousAction?: ArchBaseAction): void;
    /**
     * The identifier string for this object.
     */
    readonly id: string;
    /**
     * Returns whether or not the id property may be blank or undefined for this object.  For example, the returned settings from {@link ArchMenu#settingsMenu}
     * will have a blank identifier along with the settings returned from {@link ArchMenu#settingsSpeechRec}.  Note that this is
     * an extremely rare case.
     */
    readonly idMayBeBlank: string;
    /**
     * Returns true indicating that this is an ArchBaseCoreObject instance.
     */
    readonly isArchBaseCoreObject: boolean;
    /**
     * This method iterates over this object and ArchBaseCoreObject instances
     * within it.  For each object it will call the {@link ArchBaseObject#isFilterMatch} method
     * with a filter and call the supplied callback function if isMatch returns true.
     * The callback will be passed an {@link ArchTraverseInfo} with details
     * about the match such as the match object itself along with current contextual
     * information such as the object hierarchy for the match object relative to
     * the object on which this traverse call is being made.
     *
     * The traverse [filter]{@link ArchFilterObject} is one which you can create
     * by calling {@link ArchFactoryFilters#createFilterObject} and then add desired clauses
     * or clause containers to it.  If not specified, this function will use a
     * [default filter]{@link ArchFactoryFilters#createFilterTraverseDefault}.
     *
     * Here is an example that does a simple flow traversal using the default
     * filter and logs information about objects in the callback from the
     * traverse object that's passed back:
     *
     * ```
     * archInboundCallFlow.traverse(function(traverseInfo) {
     *    archLogging.logNote('  Object     : ' + traverseInfo.matchObject.logStr);
     *    archLogging.logNote('    Hierarchy: ' + traverseInfo.context.hierarchyStr);
     * });
     * ```
     * This might be enough for most uses and you can check various aspects
     * about the object in the callback such as "is this an Architect action?" by
     * seeing if traverseInfo.matchObject.isArchBaseAction is true.  You can specify
     * a filter for the traversal code to use as well and only have it call your
     * callback when the object's {@link ArchBaseCoreObject#isFilterMatch} method returns true for
     * the filter.  Here's an example that creates a filter for callbacks on
     * [any type of transfer action]{@link ArchBaseActionTransfer}, any
     * [decision action]{@link ArchActionDecision} or objects whose name
     * property case insensitively matches the word 'foo'.  While this could all be done
     * with one property callback clause the example will use multiple clauses for
     * the sake of simplicity:
     * ```
     * const myTraverseFilter = filterFactory.createFilterObject(archEnums.FILTER_CONTAINER_OPERATORS.or);
     * myTraverseFilter.addClausePropertyValueEquals('isArchBaseActionTransfer', true);
     * myTraverseFilter.addClausePropertyValueEquals('isArchActionDecision',     true);
     * myTraverseFilter.addClausePropertyCallback('name', function(propValue, archContainingObject, propName) {
     *       // We fully spelled out the function signature above but archContainingObject and propName are
     *       // not needed in this case.  The archContainingObject is the object that contains the
     *       // property and propName is the property name itself.  We pass in propName because the same
     *       // function could be used for multiple property callback clauses.
     *       // Remember to return a boolean true, false or undefined from ths callback.  :)
     *       return propValue && propValue.toLowerCase() === 'foo';
     * });
     * archTask.traverse(function(traverseContext) {
     *    // You will only be called back here for ArchBaseCoreObject instances that
     *    // have the isArchBaseActionTransfer or isArchActionDecision property values equal to true.
     * }, myTraverseFilter);
     * ```
     * If you supply a filter with no clauses, this tells the traverse method to
     * call the supplied callback function for every {@link ArchBaseCoreObject} it traverses.
     *
     * If you want traversal itself to stop after a callback, simply return boolean
     * false from the callback function you supply to the traverse call.
     *
     * The traverse method does not process deprecated property names such as [orgId]{@link ArchSession#orgId},
     * [orgName]{@link ArchSession#orgName} or [languageSettings]{@link ArchBaseFlow#languageSettings}.  Additionally
     * it does not traverse in to properties that would "jump out" of the current traversal.  An example of this
     * would be if the code was traversing an {@link ArchActionJumpToMenu} action that it would not start traversing
     * in to the menu that it jumps to.  Another example would be a {@link ArchActionChangeState} action where
     * it would not traverse in to the target state of the action.  This also means traversal does not traverse
     * in to the {@link ArchBaseValue#flowLevelDefault} property.
     *
     * And lastly, as Scripting evolves over time with new versions, you can expect to get callbacks for new object
     * types such as new actions or new properties on objects.  As such, it's important not to assume any particular
     * order in callbacks to keep code most compatible with traversal callbacks.  Or if you use inequality checks in filter
     * clauses remember that new "stuff" may satisfy an inequality check which may or may not be anticipated in your logic.
     *
     * Note:  This traverse method is a helper method and is very handy for iterating over Architect Scripting
     * objects and their properties in a generic fashion with filtering capabilities.  Obviously you can write
     * your own custom traversal code if this implementation doesn't cut it for some reason. :)
     *
     * This function returns the number of times it called the callback function.
     * @param callbackFunction - the callback function to call for objects that match the traverse filter.
     * @param [traverseFilter = {@link ArchFactoryFilters#createFilterTraverseDefault}] - the filter to use when performing the traversal to determine which
     *                                              {@link ArchBaseCoreObject} instances you wish to be called back for.  If no
     *                                              filter is specified, this function will call {@link ArchFactoryFilters#createFilterTraverseDefault} and
     *                                              use that traversal default filter.  The wantArchBaseValues parameter on that call is set to true.
     */
    traverse(callbackFunction: callbackTraverseInfo, traverseFilter?: ArchFilterObject): number;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

/**
 * Creates an Architect looping task.  This is the task that is used in in-queue flows because when execution completes
 * for the actions defined in the task, the task will start over.
 * @param coreLoopingTaskViewModel - ( *Internal* ) an Architect core looping task view model.
 */
declare class ArchTaskLoop extends ArchTask {
    // constructor(coreLoopingTaskViewModel: any);
    /**
     * Returns the display type name string 'ArchTaskLoop'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTaskLoop instance.
     */
    static readonly isArchTaskLoop: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
}

/**
 * Creates an instance of an ArchTtsEngine object which represents a text to speech engine.  This represents
 * a text to speech engine that you can configure in flows that support audio ( i.e. call flows ).
 * Instances of this class will be created by Scripting as needed.
 * @param coreTtsEngineViewModel - ( *Internal* ) an Architect core TTS engine view model.
 */
declare class ArchTtsEngine extends ArchBaseCoreObjectWithId {
    // constructor(coreTtsEngineViewModel: any);
    /**
     * Returns the display type name string 'ArchTtsEngine'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTtsEngine instance.
     */
    static readonly isArchTtsEngine: boolean;
    /**
     * Returns whether or not this text to speech engine is secure.
     */
    readonly isSecure: boolean;
    /**
     * A string suitable for logging
     */
    readonly logStr: string;
    /**
     * The name of this text to speech engine.
     */
    readonly name: string;
    /**
     * Gets a text to speech voice for this engine by its voice identifier.  If not found, nothing is returned.
     * @param voiceId - the identifier of the voice to retrieve.  This should be a non-blank string.
     */
    getVoiceById(voiceId: string): ArchTtsVoice;
    /**
     * Gets a text to speech voice for this engine by its voice name.  If not found, nothing is returned.
     * @param voiceName - the name of the voice to retrieve.  The name is looked up case insensitively.
     */
    getVoiceByName(voiceName: string): ArchTtsVoice;
    /**
     * Gets all available voices on this text to speech engine for a specified language.
     * @param archLanguage - the language for which supported voices should be retrieved.
     * @returns the voices that support the language. If no voices on this engine support the specified
     * language, an empty array will be returned.
     */
    getVoicesForLanguage(archLanguage: ArchLanguage): ArchTtsVoice[];
    /**
     * Gets the default voice configured on this text to speech engine for a specified language. If there is no default
     * voice specified for this engine, nothing is returned.
     * @param archLanguage - the language for which the default voice should be retrieved.
     * @returns the default voice for the language. If there is no default voice for this
     * language, this function will return nothing.
     */
    getDefaultVoiceForLanguage(archLanguage: ArchLanguage): ArchTtsVoice;
}

/**
 * This singleton provides information for the available text to speech engines configured for the organization.
 * Before attempting to work with text to speech engines, be sure to check the [areTtsEnginesAndVoicesAvailable]{@link ArchOrganizationInfo#areTtsEnginesAndVoicesAvailable}
 * property to see if your organization supports this functionality.
 */
declare class ArchTtsEngines extends ArchBaseObject {
    // constructor();
    /**
     * A logging string for the ArchTtsEngines instance.
     */
    readonly logStr: string;
    /**
     * Returns the display type name string 'ArchTtsEngines'.
     */
    static readonly displayTypeName: string;
    /**
     * Gets the text to speech engine by its name in a case insensitive manner.
     * @param engineName - the name of the text to speech engine to retrieve.
     */
    getEngineByName(engineName: string): ArchTtsEngine;
    /**
     * A helper property that retrieves the Genesys text to speech engine.
     * Accessing this property when the Architect Scripting session is not [connected]{@link ArchSession#isConnected} or if the organization
     * does not support text to speech engine / voice information available will throw.
     * You can access [areTtsEnginesAndVoicesAvailable]{@link ArchOrganizationInfo#areTtsEnginesAndVoicesAvailable} to
     * see if text to speech engine and voice information is available on an organization.
     */
    ttsEngineGenesys: ArchTtsEngine;
}

/**
 * Creates an instance of an ArchTtsVoice object which represents a voice for a text to speech engine.  A voice
 * belongs to a [text to speech engine]{@link ArchTtsEngine}.
 * Instances of this class will be created automatically by Architect Scripting as needed.
 * @param coreTtsVoiceViewModel - ( *Internal* ) an Architect core text to speech voice view model.
 */
declare class ArchTtsVoice extends ArchBaseCoreObjectWithId {
    // constructor(coreTtsVoiceViewModel: any);
    /**
     * Returns the display type name string 'ArchTtsVoice'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTtsVoice instance.
     */
    static readonly isArchTtsVoice: boolean;
    /**
     * A string suitable for logging for this text to speech engine voice.
     */
    readonly logStr: string;
    /**
     * The name of the voice.
     */
    readonly name: string;
    /**
     * The text to speech engine that this voice belongs to.
     */
    readonly parentEngine: ArchTtsEngine;
    /**
     * The language that this voice supports.
     */
    readonly supportedLanguage: ArchLanguage;
}

declare class ArchTraverseContext extends ArchBaseObject {
    /**
     * Returns the current traversal hierarchy for the traverse callback as an array of {@link ArchTraverseHierarchyItem} instances.
     * For example, if you called [traverse]{@link ArchBaseCoreObject#traverse} on a [task]{@link ArchTask} and the traversal code was
     * going through the actions available off of the actions property and it was on the second action, you would see one
     * hierarchical item in this array that hierarchical item hold a pointer to the task in the [archBaseObject]{@link ArchTraverseHierarchyItem#archBaseObject} property,
     * the [property name]{@link ArchTraverseHierarchyItem#propertyName} would be 'actions' and the [index]{@link ArchTraverseHierarchyItem#index} property
     * value would be 1.
     */
    readonly hierarchy: ArchTraverseHierarchyItem[];
    /**
     * Returns the {@link ArchTraverseHierarchyItem#hierarchyStr} string value from the last item in the hierarchy item array.
     * If there are no items in the hierarchy array, this returns the string '<none>'.  This string is meant to be more
     * informational than anything else.  Instead of trying to parse the contents of the hierarchy string, we recommend using the
     * {@link ArchTraverseContext#hierarchy} array itself since it'll have the information that was used to build up this
     * string as well as actual Architect Scripting object references as well.
     */
    readonly hierarchyStr: string;
    /**
     * Returns the display type name string 'ArchTraverseContext'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTraverseContext instance.
     */
    readonly isArchTraverseContext: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * This is a string suitable for logging information about this object where it's just the object's type.  This is normally used
     * when logging errors that occur in constructor parameter checking because the scripting object isn't set up and the normal
     * logging str contents wouldn't be set up.
     */
    readonly logStrTypeOnly: string;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true.
     * @param errorStr - the error string to log.
     */
    logError(errorStr: string): void;
    /**
     * Logs an error to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logErrors} is true and then throws
     * the string in the errorStr parameter.
     * @param errorStr - the error string to log.  This should be a non-blank string.
     */
    logErrorAndThrow(errorStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotes} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNote(noteStr: string): void;
    /**
     * Logs a note to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logNotesVerbose} is true.
     * @param noteStr - the note string to log.  This should be a non-blank string.
     */
    logNoteVerbose(noteStr: string): void;
    /**
     * Logs a warning to the logging service with a log header from this object's [logStr]{@link ArchBaseObject#logStr} property value when {@link ArchLogging#logWarnings} is true.
     * @param warningStr - the warning string to log.  This should be a non-blank string.
     */
    logWarning(warningStr: string): void;
    /**
     * Returns whether or not this Architect Scripting object is a match
     * for the supplied ArchFilterObject instance.
     * @param archFilterObject - the object filter to use to determine if it's a match.
     */
    isFilterMatch(archFilterObject: ArchFilterObject): boolean;
}

declare class ArchTraverseHierarchyItem extends ArchBaseObject {
    /**
     * Returns the display type name string 'ArchTraverseHierarchyItem'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the Architect Scripting object associated with this hierarchy item.
     */
    readonly archBaseObject: ArchBaseObject;
    /**
     * Returns a string that represents the hierarchy of this item in the traverse stack.
     * If you were traversing a flow that was just created in Scripting code, an example
     * string could look like:
     * ```
     *     __script_flow__1.tasksReusable[0].actions[5].outputs[1].actions[0]
     * ```
     * This would mean that the object in this hierarchical item is from the first action of
     * the second output of the sixth action for the first reusable task in the flow.
     * One thing to note is that often times you'll see a guid as the first part of
     * that string.  It just so happens that for a created but not saved flow the identifier
     * for it is not a guid.
     */
    readonly hierarchyStr: string;
    /**
     * If this hierarchical item represents an item that is in an array for a property value, accessing this
     * property will return the index of that item, otherwise nothing.  The property name that is being
     * accessed is available from the {@link ArchTraverseHierarchyItem#propertyName} property and the object
     * that contains the property is accessible from the {@link ArchTraverseHierarchyItem#archBaseObject} property.
     * An example of this would be when a hierarchical item is the first action from the [actions]{@link ArchBaseMultiActionContainer#actions}
     * property on a [task]{@link ArchTask}.  It would return a value of 0 in that case.
     */
    readonly index: number;
    /**
     * Returns true indicating that this is an ArchTraverseHierarchyItem instance.
     */
    readonly isArchTraverseHierarchyItem: boolean;
    /**
     * A string suitable for logging that contains information about hierarchy item.
     */
    readonly logStr: string;
    /**
     * Returns the property name associated with this hierarchical item.
     * The property name refers to the property being referenced off of the
     * {@link ArchTraverseHierarchyItem#archBaseObject} associated with this
     * hierarchy item.
     */
    readonly propertyName: string;
}

declare class ArchTraverseInfo {
    // constructor(matchArchBaseCoreObject: ArchBaseCoreObject, archTraverseContext: ArchTraverseContext, archTraverseSettings: ArchTraverseSettings);
    /**
     * Returns the Architect Scripting object for which the callback on the [traverse]{@link ArchBaseCoreObject#traverse} call was made.
     */
    readonly matchObject: ArchBaseObject;
    /**
     * Returns the display type name string 'ArchTraverseInfo'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchTraverseInfo instance.
     */
    readonly isArchCallbackTraverseInfo: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Returns a traversal context object that provides information about the context
     * of the object in relationship to the original object where the [traverse]{@link ArchBaseCoreObject#traverse}
     * call was made.
     */
    readonly context: ArchTraverseContext;
    /**
     * Returns a traversal settings object that provides access to settings about the current
     * traversal operation.
     */
    readonly settings: ArchTraverseSettings;
}

declare class ArchTraverseSettings {
    /**
     * Returns the traverse info callback function being used for the traversal operation.
     */
    callbackFunction: callbackTraverseInfo;
    /**
     * Returns the number of callbacks that have been made.  The counter is incremented
     * prior to a callback function being invoked so on the very first traverse callback
     * the value will be 1.
     */
    callbackCount: number;
    /**
     * Returns the display type name string 'ArchTraverseSettings'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the filter being used for the traversal operation.
     */
    filter: ArchFilterObject;
    /**
     * Returns true indicating that this is an ArchTraverseSettings instance.
     */
    readonly isArchCallbackTraverseInfo: boolean;
    /**
     * A string suitable for logging that contains information about this definition.
     */
    readonly logStr: string;
    /**
     * Whether or not traversal should continue processing.
     */
    shouldContinue: boolean;
}

/**
 * Creates an instance of an ArchValidationIssue object.
 * This object holds validation error and warning information for an object in a flow.  The archObject property
 * will point to the Architect Scripting object for which this issue object is for.  You can then look at the
 * errors or warnings for that object by accessing the error or warning properties on this class.
 * Instances of this object will be created by Architect Scripting when the {@link ArchBaseFlow#validateAsync} method
 * is called and will be returned in the [validation results]{@link ArchValidationResults} returned from that call.
 * @param coreValidationIssue - ( *Internal* ) an Architect core validation issue object
 */
declare class ArchValidationIssue extends ArchBaseCoreObject {
    // constructor(coreValidationIssue: any);
    /**
     * Returns the display type name string 'ArchValidationIssue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a logging string for this validation result that will show information
     * about the referenced Architect Scripting object and the error / warning count.
     */
    readonly logStr: string;
    /**
     * The Architect Scripting object associated with this issue.
     */
    readonly archObject: ArchBaseObject;
    /**
     * The count of errors for this issue.
     */
    readonly errorCount: number;
    /**
     * Returns a string array of validation errors.  If there are no errors, no value is returned.
     */
    readonly errors: string[];
    /**
     * Returns true if this validation issue has any errors or rollup errors.
     */
    readonly hasErrors: boolean;
    /**
     * Returns true if this validation issue has no errors or rollup errors.
     */
    readonly hasNoErrors: boolean;
    /**
     * Returns true if this validation issue has any errors, rollup errors, warnings or rollup warnings,
     * otherwise false.
     */
    readonly hasErrorsOrWarnings: boolean;
    /**
     * Returns true if this validation issue does not have any errors, rollup errors, warnings or rollup warnings,
     * otherwise false.
     */
    readonly hasNoErrorsOrWarnings: boolean;
    /**
     * Returns true if this validation issue has no warnings or rollup warnings, otherwise false.
     */
    readonly hasNoWarnings: boolean;
    /**
     * Returns true if this validation issue has any warnings or rollup warnings, otherwise false.
     */
    readonly hasWarnings: boolean;
    /**
     * Returns whether or not the supplied error string exists in this validation issue.  This function enumerates
     * both errors and rollup errors.
     * @param errorString - the error or rollup error string to search for.
     */
    hasErrorString(errorString: string): boolean;
    /**
     * Returns whether or not the supplied warning string exists in this validation issue.  This function enumerates
     * both warnings and rollup warnings.
     * @param warningString - the warning or rollup warning string to search for.
     */
    hasWarningString(warningString: string): boolean;
    /**
     * The validation error and warning information associated with this validation issues object as a string.
     * It will be one string with \n's used to separate summary information.
     * @param wantDetails - whether or not to emit the warning and error strings.
     * @param [prefix] - a string to prefix before each line in the returned string.
     */
    getSummaryStr(wantDetails: boolean, prefix?: string): string;
    static readonly isArchValidationIssue: boolean;
    /**
     * The count of rollup errors for this issue.
     */
    readonly rollupErrorCount: number;
    /**
     * Returns a string array of rollup validation errors.  If there are no rollup errors, no value is returned.
     */
    readonly rollupErrors: object[];
    /**
     * The count of rollup warnings for this issue.
     */
    readonly rollupWarningCount: number;
    /**
     * Returns a string array of rollup validation warnings.  If there are no rollup warnings, no value is returned.
     */
    readonly rollupWarnings: object[];
    /**
     * The count of warnings in this issue.
     */
    readonly warningCount: number;
    /**
     * Returns a string array of warnings in this issue.  If there are no warnings, no value is returned.
     */
    readonly warnings: string[];
}

/**
 * Creates an instance of an ArchValidationResults object.  The validation results object will be returned
 * from flow [validation]{@link ArchBaseFlow#validateAsync} and contain information about warnings and errors that were reported during validation.
 * There are issues within this results object that can further be accessed to get at more specifics about
 * errors, warnings and the Architect Scripting objects they're associated with.
 * @param coreValidationResultsViewModel - *Internal* The core validation results object
 */
declare class ArchValidationResults extends ArchBaseCoreObject {
    // constructor(coreValidationResultsViewModel: any);
    /**
     * Returns the display type name string 'ArchValidationResults'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns a logging string for this validation result that will show information
     * about the referenced Architect Scripting object and the error / warning count.
     */
    readonly logStr: string;
    /**
     * Returns the total number of errors by iterating through each validation result contained in this results instance
     * and adding up the errorCount property for each validation issue.
     */
    readonly errorCountTotal: number;
    /**
     * The validation issue array associated with these validation results.  [Issues]{@link ArchValidationIssue} in the array will have more
     * information like the Architect object associated with the issue and the error or warning messages for that object.
     */
    readonly issues: ArchValidationIssue[];
    /**
     * Returns a string array of the errors for the supplied Architect Scripting object.  This method will attempt to
     * find the validation issue for the specified object in this validation results instance.  If found, the {@link ArchValidationIssue.errors}
     * property from the looked up {@link ArchValidationIssue} will be returned.  Otherwise no value is returned.
     * @param archObjectWithId - the Architect Scripting object for which you wish to get the error strings.
     */
    getErrorsForObject(archObjectWithId: ArchBaseCoreObjectWithId): string[];
    /**
     * Returns the validation issue for the supplied Architect Scripting object.  If no validation issue is found
     * for the supplied Architect Scripting object, nothing is returned.
     * @param archObjectWithId - the Architect Scripting object for which you wish to get the validation result.
     */
    getIssueForObject(archObjectWithId: ArchBaseCoreObjectWithId): ArchValidationIssue;
    /**
     * Returns a string array of the rollup errors for the supplied Architect Scripting object.  This method will attempt to
     * find the validation issue for the specified object in this validation results instance.  If found, the {@link ArchValidationIssue.rollupErrors}
     * property from the looked up {@link ArchValidationIssue} will be returned.  Otherwise no value is returned.
     * @param archObjectWithId - the Architect Scripting object for which you wish to get the rollup error strings.
     */
    getRollupErrorsForObject(archObjectWithId: ArchBaseCoreObjectWithId): string[];
    /**
     * Returns a string array of the rollup warnings for the supplied Architect Scripting object.  This method will attempt to
     * find the validation issue for the specified object in this validation results instance.  If found, the {@link ArchValidationIssue.rollupWarnings}
     * property from the looked up {@link ArchValidationIssue} will be returned.  Otherwise no value is returned.
     * @param archObjectWithId - the Architect Scripting object for which you wish to get the rollup error strings.
     */
    getRollupWarningsForObject(archObjectWithId: ArchBaseCoreObjectWithId): string[];
    /**
     * Returns a string array of the warnings for the supplied Architect Scripting object.  This method will attempt to
     * find the validation issue for the specified object in this validation results instance.  If found, the {@link ArchValidationIssue.warnings}
     * property from the looked up {@link ArchValidationIssue} will be returned.  Otherwise no value is returned.
     * @param archObjectWithId - the Architect Scripting object for which you wish to get the warning strings.
     */
    getWarningsForObject(archObjectWithId: ArchBaseCoreObjectWithId): string[];
    /**
     * Returns a summary string containing information about this validation results along with
     * summary information about issues contained in this results object.
     * @param wantDetails - whether or not to emit the warning and error strings on issues.
     * @param [addLogStr] - whether or not to add a log string at the beginning of the returned string.
     * @param [prefix] - a string to prefix before each line in the returned string.
     */
    getSummaryStr(wantDetails: boolean, addLogStr?: boolean, prefix?: string): string;
    /**
     * Returns true is there are any validation issues with errors in these results, otherwise false.
     */
    readonly hasErrors: boolean;
    /**
     * Returns true is there are no validation issues with errors or rollup errors in this validation
     * results instance, otherwise false.
     */
    readonly hasNoErrors: boolean;
    /**
     * Returns true is there are any validation issues with errors, rollup errors, warnings or rollup warnings in
     * these results, otherwise false.
     */
    readonly hasErrorsOrWarnings: boolean;
    /**
     * Returns true if there are no errors or warnings in this validation results instance.
     */
    readonly hasNoErrorsOrWarnings: boolean;
    /**
     * Returns true is there are any validation issues with warnings or rollup warnings in these results, otherwise false.
     */
    readonly hasWarnings: boolean;
    /**
     * Returns true is there are no validation issues with warnings or rollup warnings in this validation
     * results instance, otherwise false.
     */
    readonly hasNoWarnings: boolean;
    /**
     * Returns number of errors the object has
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectErrorCount(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns whether or not the supplied Architect Scripting object has an error or rollup error that matches
     * the supplied error string.
     * @param archObjectWithId - the Architect Scripting object to check.
     * @param errorString - the error string to look up.  This must be a non-blank string.
     */
    objectHasErrorString(archObjectWithId: ArchBaseCoreObjectWithId, errorString: string): boolean;
    /**
     * Returns true if the the supplied Architect Scripting object has an error or rollup error in this set of validation
     * results.  This method looks up a validation issue for the specified Architect base object and if found will check
     * to see if the error or rollup error count are greater than 0.
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectHasErrors(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns whether or not the supplied Architect Scripting object has no errors or rollup errors
     * in this set of validation results.  This method looks up a validation issue for the specified Architect
     * base object and if found will check to make sure that the validation issue's error count and rollup
     * error count are equal to 0.
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectHasNoErrors(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns true if the the supplied Architect Scripting object has an error, rollup error, warning or
     * rollup warning in this set of validation results.  This method looks up a validation issue for the specified
     * Architect base object and if found will check to see if the error, rollup error, warning or rollup warning
     * count are greater than 0.
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectHasErrorsOrWarnings(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns true if the the supplied Architect Scripting object has no errors, rollup errors, warnings or
     * rollup warnings in this set of validation results.  This method looks up a validation issue for the specified
     * Architect base object and if found will check to make sure that the validation issue's error, rollup error, warning
     * and rollup warning counts are 0.
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectHasNoErrorsOrWarnings(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns whether or not the supplied Architect Scripting object has no warnings or rollup warnings
     * in this set of validation results.  This method looks up a validation issue for the specified Architect
     * base object and if found will check to make sure that the validation issue's warning count and rollup
     * warning count are equal to 0.
     * @param archObjectWithId - the Architect Scripting object to check.
     */
    objectHasNoWarnings(archObjectWithId: ArchBaseCoreObjectWithId): boolean;
    /**
     * Returns whether or not the supplied Architect Scripting object has a warning or rollup warning that matches
     * the supplied warning string.
     * @param archObjectWithId - the Architect Scripting object to check.
     * @param warningString - the warning string to look up.  This must be a non-blank string.
     */
    objectHasWarningString(archObjectWithId: ArchBaseCoreObjectWithId, warningString: string): boolean;
    /**
     * Returns the parent flow for these validation results.
     */
    readonly parentFlow: ArchBaseFlow;
    /**
     * Returns the total number of rollup errors by iterating through each validation result contained in this results instance
     * and adding up the rollupErrorCount property for each validation issue.
     */
    readonly rollupErrorCountTotal: number;
    /**
     * Returns the total number of rollup warnings by iterating through each validation result contained in this results instance
     * and adding up the rollupWarningCount property for each validation issue.
     */
    readonly rollupWarningCountTotal: number;
    /**
     * Returns the total number of warnings by iterating through each validation result contained in this results instance
     * and adding up the warningCount property for each validation issue.
     */
    readonly warningCountTotal: number;
    static readonly isArchValidationResults: boolean;
}

/**
 * Creates a new ArchNamedValue instance.
 * @param coreDataPair - ( *Internal* ) an Architect core data pair instance.
 */
declare class ArchNamedValue extends ArchBaseCoreObject {
    // constructor(coreDataPair: any);
    /**
     * Returns the display type name string 'ArchNamedValue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the name for this named value instance.
     */
    readonly name: string;
    /**
     * Returns the value for this named value instance.
     */
    readonly value: ArchBaseValue;
    /**
     * Returns true indicating that this is an ArchNamedValue instance.
     */
    readonly isArchNamedValue: boolean;
}

/**
 * Creates a new ArchNamedValueList used to represent a list of Data Pairs
 * @param coreDataPairList - ( *Internal* ) an Architect core data pairs list object
 */
declare class ArchNamedValueList extends ArchBaseValueContainer {
    // constructor(coreDataPairList: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns the number of pairs in this list.
     */
    length: number;
    /**
     * Gets a data pair at the given index.
     * @param index - the index of the data pair to retrieve.  This value should be a non-negative integer.
     */
    getNamedValueByIndex(index: number): ArchNamedValue;
    /**
     * Gets the named value by its name.  This is a case sensitive lookup.  If the named value cannot be found,
     * nothing is returned.
     * @param valueName - the name of the value.
     */
    getNamedValueByName(valueName: string): ArchNamedValue;
    /**
     * Returns true indicating that this is an ArchNamedValueList instance.
     */
    readonly isArchNamedValueList: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  AgentScorePair
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueAgentScorePair extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueAgentScorePair'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueAgentScorePair instance.
     */
    static readonly isArchValueAgentScorePair: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  AgentScorePair
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueAgentScorePairCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueAgentScorePairCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueAgentScorePairCollection instance.
     */
    static readonly isArchValueAgentScorePairCollection: boolean;
}

/**
 * Creates an ArchValueAny instance that represents an Any singleton value.  An Any value
 * is a user creatable data type.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueAny extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueAny instance.
     */
    static isArchValueAny: any;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Any ( An Any value is a user creatable data type )
 * Collection: Yes
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueAnyCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueAnyCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueAnyCollection instance.
     */
    readonly isArchValueAnyCollection: any;
}

/**
 * This class holds an audio value.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression audio view model.
 */
declare class ArchValueAudio extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueAudio instance.
     */
    static isArchValueAudio: boolean;
    /**
     * Sets expression text on this audio value.
     * @param expressionText - the audio expression text to set.
     */
    setExpression(expressionText: string): void;
    /**
     * Sets this audio to an expression where the expression text is a ToAudioTTS function call that uses the supplied
     * text value.  This function will automatically add surrounding quotes to the supplied text in the generated
     * ToAudioTTS function call so you do not need to do that.  For example, if you specify 'foo' in the text parameter,
     * this will generate expression text of ToAudioTTS("foo").
     * @param text - the text to use in the ToAudioTTS expression.  If the supplied value is null or undefined,
     *                        a blank string will be used.
     * @param [doNotEscapeText] - specify true if the text is already escaped for use as the contents of a string
     *                                      literal in expression text and should not be re-escaped.
     */
    setExpressionToAudioTTS(text: string, doNotEscapeText?: boolean): void;
    /**
     * Configures this audio as a sequence with one text to speech sequence item configured with the supplied text.
     * @param text - the text to speech text to set on the sequence item.  If the value is null or undefined, a blank
     *                        string will be used.
     */
    setLiteralTTS(text: string): void;
    /**
     * Returns the generated custom expression text for this ArchValueAudio. Overall this property is meant to be
     * a quick and easy way to look at a "value" string but it is not meant to be some kind of fully
     * inclusive description of this ArchValueAudio.
     */
    readonly valueText: string;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Boolean
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueBoolean extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueBoolean instance.
     */
    readonly isArchValueBoolean: boolean;
    /**
     * Sets the boolean value to the expression false.
     */
    setExpressionFalse(): void;
    /**
     * Sets the boolean value to the expression true.
     */
    setExpressionTrue(): void;
    /**
     * Sets the boolean value as a literal.
     * @param boolValue - this value must be a JavaScript boolean.
     */
    setLiteralBool(boolValue: boolean): void;
    /**
     * Sets the value to the literal boolean value false.
     */
    setLiteralFalse(): void;
    /**
     * Sets the value to the literal boolean value true.
     */
    setLiteralTrue(): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Boolean Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueBooleanCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueBooleanCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueBooleanCollection instance.
     */
    readonly isArchValueBooleanCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Communication
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueCommunication extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * contact list value instance such as {@link ArchValueContactList#setLiteralByContactListIdAsync} or {@link ArchValueContactList#setLiteralByContactListNameAsync}
 * @param ArchValueContactList - the Architect contact list value instance.
 */
declare type callbackArchValueContactList = (ArchValueContactList: ArchValueContactList) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Contact List
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueContactList extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueContactList'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueContactList instance.
     */
    readonly isArchValueContactList: boolean;
    /**
     * Sets the value of this contact list to the contact list with the specified identifier.
     * @param contactListId - the identifier of the contact list.
     * @param [callbackFunction] - a callback function to call if the contact list is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this contact list value instance.
     */
    setLiteralByContactListIdAsync(contactListId: string, callbackFunction?: callbackArchValueContactList): void;
    /**
     * Sets the value of this contact list to the contact list with the specified name.
     * @param contactListName - the name of the contact list.
     * @param [callbackFunction] - a callback function to call if the contact list is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this contact list value instance.
     */
    setLiteralByContactListNameAsync(contactListName: string, callbackFunction?: callbackArchValueContactList): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Currency
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueCurrency {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    static isArchValueCurrency: boolean;
    /**
     * Sets the curreny value to a literal from the supplied amount and optional ISO 4217 currency code.
     * @param amount - this value is assigned to the amount property on the currency value.  It must be a JavaScript number that when converted to a string does not have e notation.
     * @param [code] - this optional value is assigned to the code property on the currency value.  If specified, it must be a valid ISO 4217 code.  Currency codes are processed case insensitively.  If the supplied value is undefined or null, the currency value will have a NOT_SET String value for the code property.
     */
    setLiteralAmountAndCode(amount: number, code?: string): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Currency Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueCurrencyCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating this is an ArchValueCurrencyCollection instance.
     */
    static isArchValueCurrencyCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Date
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * Maximum value allowed: December 31, 2200
 * Minimum value allowed: January 1, 1800
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueDate extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * This sets the date as a literal.
     * @param date - the string value for the date formatted as 'YYYY-MM-DD' where YYYY is a four digit year, MM is a two digit month, and DD is a two digit day (ex: '2020-12-05').
     */
    setLiteralDate(date: string): void;
    /**
     * This sets the date literal value from year, month, and day parts.
     * @param year - the year for the date. This value should be an integer >= 1800 and <= 2200.
     * @param month - the month for the date. This value should be an integer >= 1 and <= 12.
     * @param day - the day for the date. This value should be an integer >= 1 and <= 31.
     */
    setLiteralDateParts(year: number, month: number, day: number): void;
    /**
     * Returns true indicating that this is an ArchValueDate instance.
     */
    isArchValueDate: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Date Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueDateCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating this is an ArchValueDateCollection instance.
     */
    readonly isArchValueDateCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  DateTime
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * Maximum value allowed:  December 31, 2200 at 23:59:59 UTC ( JavaScript Date -> Date.UTC(2200, 12, 31, 23, 59, 59) )
 * Minimum value allowed:  January 01, 1800 at 00:00:00 UTC ( JavaScript Date -> Date.UTC(1800, 0, 1, 0, 0, 0) )
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueDateTime extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueDateTime instance.
     */
    readonly isArchValueDateTime: boolean;
    /**
     * Sets the minimum DateTime supported in Architect as an expression.
     */
    setExpressionMinDateTime(): void;
    /**
     * Sets the maximum DateTime supported in Architect as an expression.
     */
    setExpressionMaxDateTime(): void;
    /**
     * This sets the dateTime literal value from a JavaScript date.
     * @param dateTime - the JavaScript Date to use to set the value.  This value should not be null or undefined.
     *                          Remember Architect deals with datetimes in UTC so the assignment here will be the UTC value
     *                          for the submitted JavaScript Date value.  To be valid the Date must be in the supported
     *                          Architect min / max DateTime range and not have any fractional seconds specified.
     */
    setLiteralDateTime(dateTime: Date): void;
    /**
     * Sets the minimum DateTime supported in Architect as a literal.
     */
    setLiteralMinDateTime(): void;
    /**
     * Sets the maximum DateTime supported in Architect as a literal.
     */
    setLiteralMaxDateTime(): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  DateTime Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueDateTimeCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating this is an ArchValueDateTimeCollection instance.
     */
    readonly isArchValueDateTimeCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Decimal
 * Maximum value allowed: 9999999999999999999999999999999999999999.0
 * Minimum value allowed: -9999999999999999999999999999999999999999.0
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueDecimal extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueDecimal instance.
     */
    readonly isArchValueDecimal: boolean;
    /**
     * Sets the value to the maximum decimal value supported by the Architect decimal data type as an expression.
     */
    setExpressionMaxDecimal(): void;
    /**
     * Sets the value to the minimum decimal value supported by the Architect decimal data type as an expression.
     */
    setExpressionMinDecimal(): void;
    /**
     * Sets the value to the supplied decimal value as a literal.
     * @param decimalVal - must be a JavaScript number that when converted to a string does not have e notation.
     */
    setLiteralDecimal(decimalVal: number): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Decimal Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueDecimalCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueDecimalCollection instance.
     */
    readonly isArchValueDecimalCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Duration
 * Maximum value allowed: 999999999999999 ms ( 11574074 days, 1 hour, 46 minutes and 39.999 seconds )
 * Minimum value allowed: -999999999999999 ms ( -11574074 days, -1 hour, -46 minutes and -39.999 seconds )
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueDuration extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueDuration instance.
     */
    static isArchValueDuration: boolean;
    /**
     * Sets the maximum duration supported in Architect as a literal.
     */
    setLiteralMaxDuration(): void;
    /**
     * Sets the minimum duration supported in Architect as a literal.
     */
    setLiteralMinDuration(): void;
    /**
     * This sets the duration literal value from a specified number of milliseconds.
     * @param milliseconds - the number of milliseconds for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     */
    setLiteralMs(milliseconds: number): void;
    /**
     * This sets the duration literal value from time parts.
     * @param [days] - the number of days for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     * @param [hours] - the number of hours for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     * @param [minutes] - the number of minutes for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     * @param [seconds] - the number of seconds for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     * @param [milliseconds] - the number of milliseconds for the duration.  This value should be an integer.  If undefined or null, it will be treated as 0.
     */
    setLiteralTimeParts(days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Duration Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueDurationCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueDurationCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueDurationCollection instance.
     */
    readonly isArchValueDurationCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  EmailAddress
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueEmailAddress extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueEmailAddress'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueEmailAddress instance.
     */
    static readonly isArchValueEmailAddress: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  EmailAddress
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueEmailAddressCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueEmailAddressCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueEmailAddressCollection instance.
     */
    static readonly isArchValueEmailAddressCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  ExternalContact
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueExternalContact extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueExternalContact'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueExternalContact instance.
     */
    static readonly isArchValueExternalContact: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  ExternalContact
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueExternalContactCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueExternalContactCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueExternalContactCollection instance.
     */
    static readonly isArchValueExternalContactCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  ExternalOrganization
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueExternalOrganization extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueExternalOrganization'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueExternalOrganization instance.
     */
    static readonly isArchValueExternalOrganization: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  ExternalOrganization
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueExternalOrganizationCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueExternalOrganizationCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueExternalOrganizationCollection instance.
     */
    static readonly isArchValueExternalOrganizationCollection: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * group value instance such as {@link ArchValueGroup#setLiteralByGroupIdAsync} or {@link ArchValueGroup#setLiteralByGroupNameAsync}
 * @param archValueGroup - the Architect group value instance.
 */
declare type callbackArchValueGroup = (archValueGroup: ArchValueGroup) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Group
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueGroup extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueGroup instance.
     */
    readonly isArchValueGroup: boolean;
    /**
     * Sets the value of this group to the group with the specified identifier.
     * @param groupId - the identifier of the group.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this group value instance.
     */
    setLiteralByGroupIdAsync(groupId: string, callbackFunction?: callbackArchValueGroup): void;
    /**
     * Sets the value of this group to the group with the specified name.
     * @param groupName - the name of the group.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this group value instance.
     */
    setLiteralByGroupNameAsync(groupName: string, callbackFunction?: callbackArchValueGroup): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * group collection instance such as {@link ArchValueGroupCollection#addLiteralByGroupIdAsync} or {@link ArchValueGroupCollection#addLiteralByGroupNameAsync}
 * @param archValueGroupCollection - the Architect group collection value instance.
 */
declare type callbackArchValueGroupCollection = (archValueGroupCollection: ArchValueGroupCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Group Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueGroupCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a group to this collection looking up the group to add by the group by id
     * @param groupId - the identifier of the group.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                      looked up and added to this group collection value.  The first parameter passed
     *                                                      to the callback function will be this group collection value instance.
     */
    addLiteralByGroupIdAsync(groupId: string, callbackFunction?: callbackArchValueGroupCollection): void;
    /**
     * Adds a group to this collection looking up the group to add by the group name
     * @param groupName - the name of the group.
     * @param [callbackFunction] - a callback function to call if the group is successfully
     *                                                      looked up and added to this group collection value.  The first parameter passed
     *                                                      to the callback function will be this group collection value instance.
     */
    addLiteralByGroupNameAsync(groupName: string, callbackFunction?: callbackArchValueGroupCollection): void;
    /**
     * Returns true indicating that this is an ArchValueGroupCollection instance.
     */
    readonly isArchValueGroupCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Integer
 * Maximum value allowed: 999999999999999
 * Minimum value allowed: -999999999999999
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueInteger extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueInteger'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueInteger instance.
     */
    static isArchValueInteger: boolean;
    /**
     * Sets the maximum Architect supported integer value ( 999999999999999 ) as an expression.
     */
    setExpressionMaxInt(): void;
    /**
     * Sets the minimum Architect supported integer value ( -999999999999999 ) as an expression.
     */
    setExpressionMinInt(): void;
    /**
     * Sets the specified integer value as a literal.
     * @param intValue - this value passed in must be a JavaScript number with an integral value.
     */
    setLiteralInt(intValue: number): void;
    /**
     * Sets the maximum Architect supported integer value ( 999999999999999 ) as a literal.
     */
    setLiteralMaxInt(): void;
    /**
     * Sets the minimum Architect supported integer value ( -999999999999999 ) as a literal.
     */
    setLiteralMinInt(): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Integer Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueIntegerCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating this is an ArchValueIntegerCollection instance.
     */
    static isArchValueIntegerCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  JourneyOutcome
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneyOutcome extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneyOutcome'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneyOutcome instance.
     */
    static readonly isArchValueJourneyOutcome: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  JourneyOutcome
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneyOutcomeCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneyOutcomeCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneyOutcomeCollection instance.
     */
    static readonly isArchValueJourneyOutcomeCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  JourneyOutcomeScore
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneyOutcomeScore extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneyOutcomeScore'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneyOutcomeScore instance.
     */
    static readonly isArchValueJourneyOutcomeScore: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  JourneyOutcomeScore
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneyOutcomeScoreCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneyOutcomeScoreCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneyOutcomeScoreCollection instance.
     */
    static readonly isArchValueJourneyOutcomeScoreCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  JourneySegment
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneySegment extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneySegment'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneySegment instance.
     */
    static readonly isArchValueJourneySegment: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  JourneySegment
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneySegmentCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneySegmentCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneySegmentCollection instance.
     */
    static readonly isArchValueJourneySegmentCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  JourneySession
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneySession extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneySession'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneySession instance.
     */
    static readonly isArchValueJourneySession: boolean;
}

/**
 * + This class holds a collection value in Architect Scripting.
 * + Data Type:  JourneySession
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueJourneySessionCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueJourneySessionCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueJourneySessionCollection instance.
     */
    static readonly isArchValueJourneySessionCollection: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * languageSkill value instance such as {@link ArchValueLanguageSkill#setLiteralByLanguageSkillIdAsync} or {@link ArchValueLanguageSkill#setLiteralByLanguageSkillNameAsync}
 * @param ArchValueLanguageSkill - the Architect languageSkill value instance.
 */
declare type callbackArchValueLanguageSkill = (ArchValueLanguageSkill: ArchValueLanguageSkill) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Language Skill
 * An Architect language skill instance maps to an ACD Skill in the Languages category in Admin.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueLanguageSkill extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueLanguageSkill'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueLanguageSkill instance.
     */
    static readonly isArchValueLanguageSkill: boolean;
    /**
     * Sets the value of this languageSkill to the languageSkill with the specified identifier.
     * @param languageSkillId - the identifier of the language skill.
     * @param [callbackFunction] - a callback function to call if the languageSkill is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this languageSkill value instance.
     */
    setLiteralByLanguageSkillIdAsync(languageSkillId: string, callbackFunction?: callbackArchValueLanguageSkill): void;
    /**
     * Sets the value of this languageSkill to the languageSkill with the specified name.
     * @param languageSkillName - the name of the language skill.
     * @param [callbackFunction] - a callback function to call if the languageSkill is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this languageSkill value instance.
     */
    setLiteralByLanguageSkillNameAsync(languageSkillName: string, callbackFunction?: callbackArchValueLanguageSkill): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * languageSkill collection instance such as {@link ArchValueLanguageSkillCollection#addLiteralByLanguageSkillIdAsync} or {@link ArchValueLanguageSkillCollection#addLiteralByLanguageSkillNameAsync}
 * @param archValueLanguageSkillCollection - the Architect languageSkill collection value instance.
 */
declare type callbackArchValueLanguageSkillCollection = (archValueLanguageSkillCollection: ArchValueLanguageSkillCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Language Skill Collection
 * An Architect language skill instance maps to an ACD Skill in the Skills category in Admin.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueLanguageSkillCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueLanguageSkillCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Adds an {@link ArchValueLanguageSkill} instance to this collection for the language skill if it can be looked up by
     * its guid identifier.  If the language skill cannot be found, nothing is added to the collection.
     * @param languageSkillId - the identifier of the language skill.
     * @param [callbackFunction] - a callback function to call if the languageSkill is successfully
     *                                                      looked up and added to this languageSkill collection value.  The first parameter passed
     *                                                      to the callback function will be this languageSkill collection value instance.
     */
    addLiteralByLanguageSkillIdAsync(languageSkillId: string, callbackFunction?: callbackArchValueLanguageSkillCollection): void;
    /**
     * Adds an {@link ArchValueLanguageSkill} instance to this collection for the language skill if it can be looked up by
     * its name.  If the language skill cannot be found, nothing is added to the collection.
     * @param languageSkillName - the name of the language skill.
     * @param [callbackFunction] - a callback function to call if the languageSkill is successfully
     *                                                      looked up and added to this languageSkill collection value.  The first parameter passed
     *                                                      to the callback function will be this languageSkill collection value instance.
     */
    addLiteralByLanguageSkillNameAsync(languageSkillName: string, callbackFunction?: callbackArchValueLanguageSkillCollection): void;
    /**
     * Returns true indicating that this is an ArchValueLanguageSkillCollection instance.
     */
    static isArchValueLanguageSkillCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Phone Number
 * Phone numbers fall in to two classifications.  There are telephone
 * numbers that have a 'tel:' scheme followed by an E.164 formatted number.  There are also 'sip:' and 'sips:'
 * SIP phone numbers that contain a sip URI.  The 'tel:', 'sip:' or 'sips:' prefix is referred to as the scheme
 * for a phone number in Architect.
 *
 * When specifying telephone numbers to a phone number, you should specify both a dialing / country code as
 * well as the subscriber number.  For example:
 *
 * tel:+13178723000
 *
 * The dialing code in the above number is +1.  The subscriber number is 3178723000.  Valid dialing / country codes can
 * be found [here]{@link https://www.itu.int/dms_pub/itu-t/opb/sp/T-SP-E.164D-11-2011-PDF-E.pdf}
 *
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValuePhoneNumber extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValuePhoneNumber instance.
     */
    readonly isArchValuePhoneNumber: boolean;
    /**
     * Sets a literal phone number for this phone number.  The value can be either a sip, sips or tel phone number.
     * @param phoneNumberVal - the text to set on this phoneNumber value.  If you pass in undefined or null, a blank
     *                                       phoneNumber will be set as the literal value.  If non blank, the phone number should be
     *                                       in one of the following formats.
     * * Telephone number format:
     * ``<scheme><dialing_code><subscriber_number>``
     * Note:  Do not put whitespace between the ``scheme`` and ``dialing_code`` or between ``dialing_code`` and ``subscriber_number``
     *
     * * Sip / Sips number format:
     * ``<scheme><sipUri>``
     * Note:  Do not put whitespace between the ``scheme`` and ``sipUri``
     *
     * Example Phone Number Strings
     *
     * ``'tel:+13178723000'``
     * * Telephone Number where 'tel:' is the scheme, '+1' is the dialing code, and '3178723000' is the subscriber number.
     *
     * ``'sip:foo@exmple.com'``
     * * Sip Number where 'sip:' is the scheme and 'foo@example.com' is the sipUri.
     *
     * ``'sips:foo@exmple.com'``
     * * Sips Number where 'sips:' is the scheme and 'foo@example.com' is the sipUri.
     */
    setLiteralPhoneNumber(phoneNumberVal: string): void;
    /**
     * Sets a sip scheme phone number for this phone number from the specified URI.  This is a helper method that will
     * create a phone number with the 'sip:' scheme prefixed to the supplied URI.  The phone number will be:
     *
     * ``sip:<uri>``
     * @param uri - a URI to prefix with ``sip:``.
     */
    setLiteralSipNumber(uri: string): void;
    /**
     * Sets a sips scheme phone number for this phone number from the specified URI.  This is a helper method that will
     * create a phone number with the 'sips:' scheme prefixed to the supplied URI.  The phone number will be:
     *
     * ``sips:<uri>``
     * @param uri - a URI to prefix with ``sips:``.
     */
    setLiteralSipsNumber(uri: string): void;
    /**
     * Sets a telephone number from the specified dialing code and subscriber number.  This is a helper method that
     * will create a phone number with the 'tel:' scheme from the supplied parameters.  The phone number will be:
     *
     * ``tel:<dialingCode><subscriberNumber>``
     * @param dialingCode - An ITU-T E.164 complement dialing code.  Passing in a + as the first character
     *                               is optional.
     * @param subscriberNumber - the E.164 subscriber number portion for the phone number.
     */
    setLiteralTelephoneNumber(dialingCode: string, subscriberNumber: string): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Phone Number Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValuePhoneNumberCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    static isArchValuePhoneNumberCollection: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * prompt value instance such as {@link ArchValuePrompt#setLiteralByPromptNameAsync}
 * @param archValuePrompt - the Architect prompt value instance.
 */
declare type callbackArchValuePrompt = (archValuePrompt: ArchValuePrompt) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Prompt
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValuePrompt extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValuePrompt'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValuePrompt instance.
     */
    readonly isArchValuePrompt: boolean;
    /**
     * Sets the value of this prompt value to a literal value of the supplied prompt name.
     * @param promptPrefixedName - if a string, the name of the prompt needs a prompt prefix like "Prompt."
     *                                      or "PromptSystem.".  While the "Prompt." or "PromptSystem." is not part
     *                                      of a prompt's name, it is used by this method to determine whether or
     *                                      not it should look up a user or system prompt.
     * @param [callbackFunction] - a callback function to call if the prompt is successfully
     *                                                looked up and configured on this action.  The first parameter passed
     *                                                to the callback function will be this prompt value instance.
     */
    setLiteralByPromptNameAsync(promptPrefixedName: string, callbackFunction?: callbackArchValuePrompt): void;
    /**
     * Sets the value of this prompt value to a literal value of the supplied prompt id.
     * @param promptId - the user or system prompt identifier.  System prompt identifiers start and end with '__' and
     *                            user prompt identifiers are guids.
     * @param [callbackFunction] - a callback function to call if the prompt is successfully
     *                                                looked up and configured on this action.  The first parameter passed
     *                                                to the callback function will be this prompt value instance.
     */
    setLiteralByPromptIdAsync(promptId: string, callbackFunction?: callbackArchValuePrompt): void;
    /**
     * Sets the value of this prompt value to a literal value of the supplied prompt.
     * Note:  The ability to call this function to set a prompt literal from an ArchPromptUser or ArchPromptSystem instance
     * is currently under development and will error if called because the feature that allows
     * dynamic prompts is not generally available yet.  When the dynamic prompt feature work
     * is complete, we'll remove this note and you'll be able to call this method. :)
     * @param archPrompt - An Architect Scripting prompt such as a {@link ArchPromptUser} or {@link @ArchPromptSystem} instance.
     */
    setLiteralPrompt(archPrompt: ArchBasePrompt): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * prompt collection instance such as {@link ArchValuePromptCollection#addLiteralByPromptNameAsync}
 * @param archValuePromptCollection - the Architect prompt collection value instance.
 */
declare type callbackArchValuePromptCollection = (archValuePromptCollection: ArchValuePromptCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Prompt Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValuePromptCollection extends ArchBaseValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a prompt to this collection looking up the prompt to add by the prompt name
     * @param promptName - the name of the Architect prompt.
     * @param [callbackFunction] - a callback function to call if the prompt is successfully
     *                                                      looked up and added to this prompt collection value.  The first parameter passed
     *                                                      to the callback function will be this prompt collection value instance.
     */
    addLiteralByPromptNameAsync(promptName: string, callbackFunction?: callbackArchValuePromptCollection): void;
    /**
     * Returns true indicating that this is an ArchValuePromptCollection instance.
     */
    readonly isArchValuePromptCollection: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * queue value instance such as {@link ArchValueQueue#setLiteralByQueueIdAsync} or {@link ArchValueQueue#setLiteralByQueueNameAsync}
 * @param archValueQueue - the Architect queue value instance.
 */
declare type callbackArchValueQueue = (archValueQueue: ArchValueQueue) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Queue
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueQueue extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueQueue'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueQueue instance.
     */
    readonly isArchValueQueue: boolean;
    /**
     * Sets the value of this queue to the queue with the specified guid identifier.
     * @param queueId - the identifier of the queue.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this queue value instance.
     */
    setLiteralByQueueIdAsync(queueId: string, callbackFunction?: callbackArchValueQueue): void;
    /**
     * Sets the value of this queue to the queue with the specified name.
     * @param queueName - the name of the queue.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this queue value instance.
     */
    setLiteralByQueueNameAsync(queueName: string, callbackFunction?: callbackArchValueQueue): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * queue collection instance such as {@link ArchValueQueueCollection#addLiteralByQueueIdAsync} or {@link ArchValueQueueCollection#addLiteralByQueueNameAsync}
 * @param archValueQueueCollection - the Architect queue collection value instance.
 */
declare type callbackArchValueQueueCollection = (archValueQueueCollection: ArchValueQueueCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Queue Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueQueueCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a queue to this collection looking up the queue to add by the queue by id
     * @param queueId - the identifier of the queue.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                      looked up and added to this queue collection value.  The first parameter passed
     *                                                      to the callback function will be this queue collection value instance.
     */
    addLiteralByQueueIdAsync(queueId: string, callbackFunction?: callbackArchValueQueueCollection): void;
    /**
     * Adds a queue to this collection looking up the queue to add by the queue name
     * @param queueName - the name of the queue.
     * @param [callbackFunction] - a callback function to call if the queue is successfully
     *                                                      looked up and added to this queue collection value.  The first parameter passed
     *                                                      to the callback function will be this queue collection value instance.
     */
    addLiteralByQueueNameAsync(queueName: string, callbackFunction?: callbackArchValueQueueCollection): void;
    /**
     * Returns true indicating that this is an ArchValueQueueCollection instance.
     */
    static isArchValueQueueCollection: boolean;
}

/**
 * This class reports meta data about Architect value classes in Architect Scripting
 * such as if a value is an output, it can be assigned a variable, etc. etc.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param archBaseValue - An Architect base value instance.
 */
declare class ArchValueSettings extends ArchBaseObject {
    // constructor(archBaseValue: ArchBaseValue);
    /**
     * Returns the display type name string 'ArchValueSettings'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this value settings object.
     */
    readonly logStr: string;
    /**
     * Returns whether or not the value associated with these settings can be set to an expression.
     */
    readonly canBeExpression: boolean;
    /**
     * Returns whether or not the value associated with these settings can be set to a literal.
     */
    readonly canBeLiteral: boolean;
    /**
     * Returns whether or not the value associated with these settings can be set to a variable.
     */
    readonly canBeVariable: boolean;
    /**
     * Returns whether or not the value associated with these settings can be set to no value.
     */
    readonly canBeNoValue: boolean;
    /**
     * Returns whether or not the value associated with these settings can be set to no value along with no fallback
     * to a default expression
     */
    readonly canBeNoValueNoFallback: boolean;
    /**
     * Returns whether or not the value associated with these settings can use secure
     * variables and be valid.
     */
    readonly canUseSecureVariables: boolean;
    /**
     * Returns the display label for this value.
     */
    readonly label: string;
    /**
     * Returns whether or not the value associated with these settings is an overridable value ( i.e. it has a flow level or higher default setting )
     */
    readonly hasFlowLevelDefault: boolean;
    /**
     * Returns true indicating that this object is an ArchValueSettings instance.
     */
    readonly isArchValueSettings: boolean;
    /**
     * Returns whether or not the value associated with these settings is treated as an input
     * at runtime.
     */
    readonly isInput: boolean;
    /**
     * Returns whether or not the value is treated as an output at runtime.
     * Outputs are bindings which means they're not going to allow a value to be specified as
     * an expression or literal but rather a variable.
     */
    readonly isOutput: boolean;
    /**
     * Returns whether or not the value associated with these settings can be read from.
     */
    readonly isReadable: boolean;
    /**
     * Returns whether or not the value associated with these settings can be written to
     */
    readonly isWritable: boolean;
    /**
     * Returns whether or not the value associated with these settings must be an expression.
     */
    readonly mustBeExpression: boolean;
    /**
     * Returns whether or not the value associated with these settings must be a literal.
     */
    readonly mustBeLiteral: boolean;
    /**
     * Returns whether or not the value associated with these settings must be a variable.  Note that setting an expression
     * that references a variable in expression text is not the same thing because you're setting the value to an expression.
     */
    readonly mustBeVariable: boolean;
    /**
     * Whether or not setting invalid expression text on an {@link ArchBaseValue} should throw an error if the
     * expression text is invalid such as '5 < ', '3 + 4 +', '"Hello World' ( missing quote on string literal ),
     * etc. etc.
     * ```
     * // Example code - this will make it so you can set invalid expression text on ArchBaseValue instances
     * // and Scripting will not throw.
     * scripting.viewModels.values.ArchValueSettings.allowInvalidExpressionText = true;
     * ```
     */
    static allowInvalidExpressionText: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * skill value instance such as {@link ArchValueSkill#setLiteralBySkillIdAsync} or {@link ArchValueSkill#setLiteralBySkillNameAsync}
 * @param archValueSkill - the Architect skill value instance.
 */
declare type callbackArchValueSkill = (archValueSkill: ArchValueSkill) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Skill
 * An Architect skill instance maps to an ACD Skill in the Skills category in Admin.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueSkill extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueSkill instance.
     */
    readonly isArchValueSkill: boolean;
    /**
     * Sets the value of this skill to the skill with the specified identifier.
     * @param skillId - the identifier of the ACD skill.
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this skill value instance.
     */
    setLiteralBySkillIdAsync(skillId: string, callbackFunction?: callbackArchValueSkill): void;
    /**
     * Sets the value of this skill to the skill with the specified name.
     * @param skillName - the name of the ACD skill.
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this skill value instance.
     */
    setLiteralBySkillNameAsync(skillName: string, callbackFunction?: callbackArchValueSkill): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * skill collection instance such as {@link ArchValueSkillCollection#addLiteralBySkillIdAsync} or {@link ArchValueSkillCollection#addLiteralBySkillNameAsync}
 * @param archValueSkillCollection - the Architect skill collection value instance.
 */
declare type callbackArchValueSkillCollection = (archValueSkillCollection: ArchValueSkillCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Skill Collection
 * An Architect skill instance maps to an ACD Skill in the Skills category in Admin.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueSkillCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds an {@link ArchValueSkill} instance to this collection for the skill if it can be looked up by
     * its guid identifier.  If the skill cannot be found, nothing is added to the collection.
     * @param skillId - the identifier of the ACD Skill.  Remember, an Architect ACD Skill is
     * an ACD Skill in the Skills category in Admin.
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and added to this skill collection value.  The first parameter passed
     *                                                      to the callback function will be this skill collection value instance.
     */
    addLiteralBySkillIdAsync(skillId: string, callbackFunction?: callbackArchValueSkillCollection): void;
    /**
     * Adds an {@link ArchValueSkill} instance to this collection for the skill if it can be looked up by
     * its name.  If the skill cannot be found, nothing is added to the collection.
     * @param skillName - the name of the skill.
     * @param [callbackFunction] - a callback function to call if the skill is successfully
     *                                                      looked up and added to this skill collection value.  The first parameter passed
     *                                                      to the callback function will be this skill collection value instance.
     */
    addLiteralBySkillNameAsync(skillName: string, callbackFunction?: callbackArchValueSkillCollection): void;
    /**
     * Returns true indicating that this is an ArchValueSkillCollection instance.
     */
    static isArchValueSkillCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  String
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueString extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueString'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueString instance.
     */
    readonly isArchValueString: boolean;
    /**
     * Sets the supplied JavaScript string as expression text.  This text will be escaped properly for use in an expression.
     * So if you were to pass in 'He said, "boo"', the resulting expression that is generated here will be "He said, \"boo\""
     * @param stringVal - the text to set on this string value.  If you pass in undefined or null, a string of
     *                                  "" will be set as the expression text value.
     */
    setExpressionString(stringVal: string): void;
    /**
     * Sets the literal text for this value.
     * @param stringVal - the text to set on this string value.  If you pass in undefined or null, a blank
     *                               string will be set as the literal value.
     */
    setLiteralString(stringVal: string): void;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  String Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueStringCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueStringCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueStringCollection instance.
     */
    readonly isArchValueStringCollection: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Time
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * Maximum value allowed: 00:00:00
 * Minimum value allowed: 23:59:59.999
 * @param coreExpressionViewModel - ( *Internal* ) an expression view model from core.
 */
declare class ArchValueTime extends ArchBaseValueBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * This sets the time as a literal using a 24 hour time notation.
     * @param time - the string value for the time formatted as 'HH:MM:SS' where HH is a two digit hour, MM is a two digit minute, and SS is a two digit second (ex: '14:33:05').
     */
    setLiteralTime(time: string): void;
    /**
     * This sets the time literal value from the specified hours, minutes, and seconds parts using a 24 hour time notation.
     * @param hours - the hours for the time. This value should be an integer >= 0 and <= 23.
     * @param minutes - the minutes for the time. This value should be an integer >= 0 and <= 59.
     * @param seconds - the seconds for the time. This value should be an integer >= 0 and <= 59.
     */
    setLiteralTimeParts(hours: number, minutes: number, seconds: number): void;
    /**
     * Returns true indicating that this is an ArchValueTime instance.
     */
    isArchValueTime: boolean;
}

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Time Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueTimeCollection extends ArchBaseValueCollectionBasic {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating this is an ArchValueTimeCollection instance.
     */
    readonly isArchValueTimeCollection: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * user value instance such as {@link ArchValueUser#setLiteralByUserIdAsync} or {@link ArchValueUser#setLiteralByUserNameAsync}
 * @param archValueUser - the Architect user value instance.
 */
declare type callbackArchValueUser = (archValueUser: ArchValueUser) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  User
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueUser extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueUser'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueUser instance.
     */
    readonly isArchValueUser: boolean;
    /**
     * Sets the value of this user to the user with the specified identifier.
     * @param userId - the identifier of the user.
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this user value instance.
     */
    setLiteralByUserIdAsync(userId: string, callbackFunction?: callbackArchValueUser): void;
    /**
     * Sets the value of this user to the user with the specified username.
     * @param userName - the username for the user ( i.e. the user's email )
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this user value instance.
     */
    setLiteralByUserNameAsync(userName: string, callbackFunction?: callbackArchValueUser): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * user collection instance such as {@link ArchValueUserCollection#addLiteralByUserIdAsync} or {@link ArchValueUserCollection#addLiteralByUserNameAsync}
 * @param archValueUserCollection - the Architect user collection value instance.
 */
declare type callbackArchValueUserCollection = (archValueUserCollection: ArchValueUserCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  User Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - an expression from core.
 */
declare class ArchValueUserCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a user to this collection looking up the user to add by the user by id
     * @param userId - the identifier of the user.
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                      looked up and added to this user collection value.  The first parameter passed
     *                                                      to the callback function will be this user collection value instance.
     */
    addLiteralByUserIdAsync(userId: string, callbackFunction?: callbackArchValueUserCollection): void;
    /**
     * Adds a user to this collection looking up the user to add by the user's username ( i.e. the user's email )
     * @param userName - the username of the user ( i.e. the user's email ).
     * @param [callbackFunction] - a callback function to call if the user is successfully
     *                                                      looked up and added to this user collection value.  The first parameter passed
     *                                                      to the callback function will be this user collection value instance.
     */
    addLiteralByUserNameAsync(userName: string, callbackFunction?: callbackArchValueUserCollection): void;
    /**
     * Returns true indicating that this is an ArchValueUserCollection instance.
     */
    static isArchValueUserCollection: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  VoiceSnippet
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueVoiceSnippet extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueVoiceSnippet'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueVoiceSnippet instance.
     */
    static readonly isArchValueVoiceSnippet: boolean;
}

/**
 * + This class holds a value in Architect Scripting.
 * + Data Type:  VoicemailSnippet
 * + At this time, no properties specific to the data type are being exposed in Architect Scripting.
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueVoicemailSnippet extends ArchBaseValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Returns the display type name string 'ArchValueVoicemailSnippet'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueVoicemailSnippet instance.
     */
    static readonly isArchValueVoicemailSnippet: boolean;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * wrapup code value instance such as {@link ArchValueWrapupCode#setLiteralByWrapupCodeIdAsync} or {@link ArchValueWrapupCode#setLiteralByWrapupCodeNameAsync}
 * @param archValueWrapupCode - the Architect wrapup code value instance.
 */
declare type callbackArchValueWrapupCode = (archValueWrapupCode: ArchValueWrapupCode) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Wrapup Code
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueWrapupCode extends ArchBaseNetworkValueSingleton {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchValueWrapupCode instance.
     */
    readonly isArchValueWrapupCode: boolean;
    /**
     * Sets the value of this wrapup code to the wrapup code with the specified identifier.
     * @param wrapupCodeId - the identifier for the wrapup code.
     * @param [callbackFunction] - a callback function to call if the wrapup code is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this wrapup code value instance.
     */
    setLiteralByWrapupCodeIdAsync(wrapupCodeId: string, callbackFunction?: callbackArchValueWrapupCode): void;
    /**
     * Sets the value of this wrapup code to the wrapup code with the specified name.
     * @param wrapupCodeName - the name of the wrapup code.
     * @param [callbackFunction] - a callback function to call if the wrapup code is successfully
     *                                                      looked up and configured on this value.  The first parameter passed
     *                                                      to the callback function will be this wrapup code value instance.
     */
    setLiteralByWrapupCodeNameAsync(wrapupCodeName: string, callbackFunction?: callbackArchValueWrapupCode): void;
}

/**
 * This callback function type is invoked by Architect Scripting where the callback function is passed an Architect
 * wrapup code collection instance such as {@link ArchValueWrapupCodeCollection#addLiteralByWrapupCodeIdAsync} or {@link ArchValueWrapupCodeCollection#addLiteralByWrapupCodeNameAsync}
 * @param archValueWrapupCodeCollection - the Architect wrapup code collection value instance.
 */
declare type callbackArchValueWrapupCodeCollection = (archValueWrapupCodeCollection: ArchValueWrapupCodeCollection) => void;

/**
 * This class holds a value in Architect Scripting.
 * Data Type:  Wrapup Code Collection
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param coreExpressionViewModel - ( *Internal* ) an Architect core expression view model.
 */
declare class ArchValueWrapupCodeCollection extends ArchBaseNetworkValueCollection {
    // constructor(coreExpressionViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * Adds a wrapupCode to this collection looking up the wrapup code to add by id
     * @param wrapupCodeId - the identifier of the wrapup code.
     * @param [callbackFunction] - a callback function to call if the wrapup code is successfully
     *                                                      looked up and added to this wrapup code collection value.  The first parameter passed
     *                                                      to the callback function will be this wrapup code collection value instance.
     */
    addLiteralByWrapupCodeIdAsync(wrapupCodeId: string, callbackFunction?: callbackArchValueWrapupCodeCollection): void;
    /**
     * Adds a wrapupCode to this collection looking up the wrapup code to add by name
     * @param wrapupCodeName - the name of the wrapup code.
     * @param [callbackFunction] - a callback function to call if the wrapup code is successfully
     *                                                      looked up and added to this wrapup code collection value.  The first parameter passed
     *                                                      to the callback function will be this wrapup code collection value instance.
     */
    addLiteralByWrapupCodeNameAsync(wrapupCodeName: string, callbackFunction?: callbackArchValueWrapupCodeCollection): void;
    /**
     * Returns true indicating that this is an ArchValueWrapupCodeCollection instance.
     */
    readonly isArchValueWrapupCodeCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  AgentScorePair
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableAgentScorePair extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial AgentScorePair value for the variable at runtime.  If the {@link ArchValueAgentScorePair} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET AgentScorePair at runtime.
     */
    readonly initialValue: ArchValueAgentScorePair;
    /**
     * Returns the display type name string 'ArchVariableAgentScorePair'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableAgentScorePair instance.
     */
    static readonly isArchVariableAgentScorePair: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  AgentScorePair
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableAgentScorePairCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial AgentScorePair collection value for the variable at runtime.  If the {@link ArchValueAgentScorePair} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty AgentScorePair collection at runtime.
     */
    readonly initialValue: ArchValueAgentScorePair;
    /**
     * Returns the display type name string 'ArchVariableAgentScorePairCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableAgentScorePairCollection instance.
     */
    static readonly isArchVariableAgentScorePairCollection: boolean;
}

/**
 * ArchVariableBoolean
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableBoolean extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableBoolean'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial boolean value for the variable at runtime.  If the {@link ArchValueBoolean} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET boolean at runtime.
     */
    initialValue: ArchValueBoolean;
    /**
     * Returns true indicating that this is an ArchVariableBoolean instance.
     */
    readonly isArchVariableBoolean: boolean;
}

/**
 * ArchVariableBooleanCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableBooleanCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableBooleanCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial boolean collection value for the variable at runtime.  If the {@link ArchValueBooleanCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty boolean collection at runtime.
     */
    initialValue: ArchValueBooleanCollection;
    static isArchVariableBooleanCollection: boolean;
}

/**
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableCommunication extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableCommunication'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial Communication value for the variable at runtime.  If the {@link ArchValueCommunication} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET Communication at runtime.
     */
    initialValue: ArchValueCommunication;
    /**
     * Returns true indicating that this is an ArchVariableCommunication instance.
     */
    static isArchVariableCommunication: boolean;
}

/**
 * ArchVariableCommunicationCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableCommunicationCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableCommunicationCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial communication collection value for the variable at runtime.  If the {@link ArchValueCommunicationCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty communication collection at runtime.
     */
    initialValue: ArchValueCommunicationCollection;
    static isArchVariableCommunicationCollection: boolean;
}

/**
 * ArchVariableCurrency
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableCurrency extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableCurrency'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial currency value for the variable at runtime.  If the {@link ArchValueCurrency} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET currency at runtime.
     */
    initialValue: ArchValueCurrency;
    /**
     * Returns true indicating that this is an ArchVariableCurrency instance.
     */
    readonly isArchVariableCurrency: boolean;
}

/**
 * ArchVariableCurrencyCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableCurrencyCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableCurrencyCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial currency collection value for the variable at runtime.  If the {@link ArchValueCurrencyCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty currency collection at runtime.
     */
    initialValue: ArchValueCurrencyCollection;
    static isArchVariableCurrencyCollection: boolean;
}

/**
 * ArchVariableDate
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDate extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDate'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial Date value for the variable at runtime.  If the {@link ArchValueDate} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET Date at runtime.
     */
    initialValue: ArchValueDate;
    /**
     * Returns true indicating that this is an ArchVariableDate instance.
     */
    isArchVariableDate: boolean;
}

/**
 * ArchVariableDateCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDateCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDateCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial Date collection value for the variable at runtime.  If the {@link ArchValueDateCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty Date collection at runtime.
     */
    initialValue: ArchValueDateCollection;
    /**
     * Returns true indicating that this is an ArchVariableDateCollection instance.
     */
    static isArchVariableDateCollection: boolean;
}

/**
 * ArchVariableDateTime
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDateTime extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDateTime'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial DateTime value for the variable at runtime.  If the {@link ArchValueDateTime} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET DateTime at runtime.
     */
    initialValue: ArchValueDateTime;
    static isArchVariableDateTime: boolean;
}

/**
 * ArchVariableDateTimeCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDateTimeCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDateTimeCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial DateTime collection value for the variable at runtime.  If the {@link ArchValueDateTimeCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty DateTime collection at runtime.
     */
    initialValue: ArchValueDateTimeCollection;
    static isArchVariableDateTimeCollection: boolean;
}

/**
 * ArchVariableDecimal
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDecimal extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDecimal'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial decimal value for the variable at runtime.  If the {@link ArchValueDecimal} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET decimal at runtime.
     */
    initialValue: ArchValueDecimal;
    static isArchVariableDecimal: boolean;
}

/**
 * ArchVariableDecimalCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDecimalCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDecimalCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial decimal collection value for the variable at runtime.  If the {@link ArchValueDecimalCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty decimal collection at runtime.
     */
    initialValue: ArchValueDecimalCollection;
    static isArchVariableDecimalCollection: boolean;
}

/**
 * ArchVariableDuration
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDuration extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDuration'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial duration value for the variable at runtime.  If the {@link ArchValueDuration} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET duration at runtime.
     */
    initialValue: ArchValueDuration;
    static isArchVariableDuration: boolean;
}

/**
 * ArchVariableDurationCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableDurationCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableDurationCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial duration collection value for the variable at runtime.  If the {@link ArchValueDurationCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty duration collection at runtime.
     */
    initialValue: ArchValueDurationCollection;
    /**
     * Returns true indicating that this is an ArchVariableDurationCollection instance.
     */
    readonly isArchVariableDurationCollection: boolean;
}

/**
 * ArchVariableEmailAddress
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableEmailAddress extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableEmailAddress'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial EmailAddress value for the variable at runtime.  If the {@link ArchValueEmailAddress} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET EmailAddress at runtime.
     */
    initialValue: ArchValueUser;
    /**
     * Returns true indicating that this is an ArchVariableEmailAddress instance.
     */
    isArchVariableEmailAddress: boolean;
}

/**
 * ArchVariableEmailAddressCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableEmailAddressCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableEmailAddressCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial EmailAddress collection value for the variable at runtime.  If the {@link ArchValueEmailAddressCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty EmailAddress collection at runtime.
     */
    initialValue: ArchValueUserCollection;
    static isArchVariableEmailAddressCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  ExternalContact
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableExternalContact extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial ExternalContact value for the variable at runtime.  If the {@link ArchValueExternalContact} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET ExternalContact at runtime.
     */
    readonly initialValue: ArchValueExternalContact;
    /**
     * Returns the display type name string 'ArchVariableExternalContact'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableExternalContact instance.
     */
    static readonly isArchVariableExternalContact: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  ExternalContact
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableExternalContactCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial ExternalContact collection value for the variable at runtime.  If the {@link ArchValueExternalContact} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty ExternalContact collection at runtime.
     */
    readonly initialValue: ArchValueExternalContact;
    /**
     * Returns the display type name string 'ArchVariableExternalContactCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableExternalContactCollection instance.
     */
    static readonly isArchVariableExternalContactCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  ExternalOrganization
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableExternalOrganization extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial ExternalOrganization value for the variable at runtime.  If the {@link ArchValueExternalOrganization} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET ExternalOrganization at runtime.
     */
    readonly initialValue: ArchValueExternalOrganization;
    /**
     * Returns the display type name string 'ArchVariableExternalOrganization'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableExternalOrganization instance.
     */
    static readonly isArchVariableExternalOrganization: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  ExternalOrganization
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableExternalOrganizationCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial ExternalOrganization collection value for the variable at runtime.  If the {@link ArchValueExternalOrganization} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty ExternalOrganization collection at runtime.
     */
    readonly initialValue: ArchValueExternalOrganization;
    /**
     * Returns the display type name string 'ArchVariableExternalOrganizationCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableExternalOrganizationCollection instance.
     */
    static readonly isArchVariableExternalOrganizationCollection: boolean;
}

/**
 * ArchVariableGroup
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableGroup extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableGroup'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial group value for the variable at runtime.  If the {@link ArchValueGroup} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET group at runtime.
     */
    initialValue: ArchValueGroup;
    static isArchVariableGroup: boolean;
}

/**
 * ArchVariableGroupCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableGroupCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableGroupCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial group collection value for the variable at runtime.  If the {@link ArchValueGroupCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty group collection at runtime.
     */
    initialValue: ArchValueGroupCollection;
    /**
     * Returns true indicating that this is an ArchVariableGroupCollection instance.
     */
    readonly isArchVariableGroupCollection: boolean;
}

/**
 * ArchVariableInteger
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableInteger extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableInteger'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial integer value for the variable at runtime.  If the {@link ArchValueInteger} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET integer at runtime.
     */
    initialValue: ArchValueInteger;
    /**
     * Returns true indicating that this is an ArchVariableInteger instance.
     */
    static isArchVariableInteger: boolean;
}

/**
 * ArchVariableIntegerCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableIntegerCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableIntegerCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial integer collection value for the variable at runtime.  If the {@link ArchValueIntegerCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty integer collection at runtime.
     */
    initialValue: ArchValueIntegerCollection;
    /**
     * Returns true indicating that this is an ArchVariableIntegerCollection instance.
     */
    readonly isArchVariableIntegerCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  JourneyOutcome
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneyOutcome extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneyOutcome value for the variable at runtime.  If the {@link ArchValueJourneyOutcome} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET JourneyOutcome at runtime.
     */
    readonly initialValue: ArchValueJourneyOutcome;
    /**
     * Returns the display type name string 'ArchVariableJourneyOutcome'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneyOutcome instance.
     */
    static readonly isArchVariableJourneyOutcome: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  JourneyOutcome
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneyOutcomeCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneyOutcome collection value for the variable at runtime.  If the {@link ArchValueJourneyOutcome} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty JourneyOutcome collection at runtime.
     */
    readonly initialValue: ArchValueJourneyOutcome;
    /**
     * Returns the display type name string 'ArchVariableJourneyOutcomeCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneyOutcomeCollection instance.
     */
    static readonly isArchVariableJourneyOutcomeCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  JourneyOutcomeScore
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneyOutcomeScore extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneyOutcomeScore value for the variable at runtime.  If the {@link ArchValueJourneyOutcomeScore} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET JourneyOutcomeScore at runtime.
     */
    readonly initialValue: ArchValueJourneyOutcomeScore;
    /**
     * Returns the display type name string 'ArchVariableJourneyOutcomeScore'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneyOutcomeScore instance.
     */
    static readonly isArchVariableJourneyOutcomeScore: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  JourneyOutcomeScore
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneyOutcomeScoreCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneyOutcomeScore collection value for the variable at runtime.  If the {@link ArchValueJourneyOutcomeScore} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty JourneyOutcomeScore collection at runtime.
     */
    readonly initialValue: ArchValueJourneyOutcomeScore;
    /**
     * Returns the display type name string 'ArchVariableJourneyOutcomeScoreCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneyOutcomeScoreCollection instance.
     */
    static readonly isArchVariableJourneyOutcomeScoreCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  JourneySegment
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneySegment extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneySegment value for the variable at runtime.  If the {@link ArchValueJourneySegment} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET JourneySegment at runtime.
     */
    readonly initialValue: ArchValueJourneySegment;
    /**
     * Returns the display type name string 'ArchVariableJourneySegment'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneySegment instance.
     */
    static readonly isArchVariableJourneySegment: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  JourneySegment
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneySegmentCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneySegment collection value for the variable at runtime.  If the {@link ArchValueJourneySegment} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty JourneySegment collection at runtime.
     */
    readonly initialValue: ArchValueJourneySegment;
    /**
     * Returns the display type name string 'ArchVariableJourneySegmentCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneySegmentCollection instance.
     */
    static readonly isArchVariableJourneySegmentCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  JourneySession
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneySession extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneySession value for the variable at runtime.  If the {@link ArchValueJourneySession} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET JourneySession at runtime.
     */
    readonly initialValue: ArchValueJourneySession;
    /**
     * Returns the display type name string 'ArchVariableJourneySession'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneySession instance.
     */
    static readonly isArchVariableJourneySession: boolean;
}

/**
 * + This class represents a collection variable in Architect Scripting.
 * + Data Type:  JourneySession
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableJourneySessionCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial JourneySession collection value for the variable at runtime.  If the {@link ArchValueJourneySession} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be an empty JourneySession collection at runtime.
     */
    readonly initialValue: ArchValueJourneySession;
    /**
     * Returns the display type name string 'ArchVariableJourneySessionCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableJourneySessionCollection instance.
     */
    static readonly isArchVariableJourneySessionCollection: boolean;
}

/**
 * ArchVariableLanguageSkill
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableLanguageSkill extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableLanguageSkill'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial language skill value for the variable at runtime.  If the {@link ArchValueLanguageSkill} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET language skill at runtime.
     */
    initialValue: ArchValueLanguageSkill;
    /**
     * Returns true indicating that this is an ArchVariableLanguageSkill instance.
     */
    readonly isArchVariableLanguageSkill: boolean;
}

/**
 * ArchVariableLanguageSkillCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableLanguageSkillCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableLanguageSkillCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial LanguageSkill collection value for the variable at runtime.  If the {@link ArchValueLanguageSkillCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty LanguageSkill collection at runtime.
     */
    initialValue: ArchValueLanguageSkillCollection;
    /**
     * Returns true indicating that this is an ArchVariableLanguageSkillCollection instance.
     */
    readonly isArchVariableLanguageSkillCollection: boolean;
}

/**
 * ArchVariablePhoneNumber
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariablePhoneNumber extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariablePhoneNumber'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial PhoneNumber value for the variable at runtime.  If the {@link ArchValuePhoneNumber} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET PhoneNumber at runtime.
     */
    initialValue: ArchValuePhoneNumber;
    /**
     * Returns true indicating that this is an ArchVariablePhoneNumber instance.
     */
    readonly isArchVariablePhoneNumber: boolean;
}

/**
 * ArchVariablePhoneNumberCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariablePhoneNumberCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Implements override support for the display type name string for this
     * Architect Scripting object.
     */
    static readonly displayTypeName: string;
    /**
     * The initial PhoneNumber collection value for the variable at runtime.  If the {@link ArchValuePhoneNumberCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty PhoneNumber collection at runtime.
     */
    initialValue: ArchValuePhoneNumberCollection;
    /**
     * Returns true indicating that this is an ArchVariablePhoneNumberCollection instance.
     */
    isArchVariablePhoneNumberCollection: boolean;
}

/**
 * ArchVariablePrompt
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariablePrompt extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariablePrompt'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial prompt value for the variable at runtime.  If the {@link ArchValuePrompt} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET prompt at runtime.
     */
    initialValue: ArchVariablePrompt;
    /**
     * Returns true indicating that this is an ArchVariablePrompt instance.
     */
    readonly isArchVariablePrompt: boolean;
}

/**
 * ArchVariablePromptCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariablePromptCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariablePromptCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial prompt collection value for the variable at runtime.  If the {@link ArchValuePromptCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty prompt collection at runtime.
     */
    initialValue: ArchValuePromptCollection;
    /**
     * Returns true indicating that this is an ArchVariablePromptCollection instance.
     */
    readonly isArchVariablePromptCollection: boolean;
}

/**
 * ArchVariableQueue
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableQueue extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableQueue'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial queue value for the variable at runtime.  If the {@link ArchValueQueue} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET queue at runtime.
     */
    initialValue: ArchValueQueue;
    static isArchVariableQueue: boolean;
}

/**
 * ArchVariableQueueCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableQueueCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableQueueCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial queue collection value for the variable at runtime.  If the {@link ArchValueQueueCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty queue collection at runtime.
     */
    initialValue: ArchValueQueueCollection;
    /**
     * Returns true indicating that this is an ArchVariableQueueCollection instance.
     */
    readonly isArchVariableQueueCollection: boolean;
}

/**
 * This class reports meta data about Architect variable classes in Architect Scripting
 * such as if the variable can be configured as an input or output.  Since variables
 * exist at a particular scope in a flow such as flow scoped, task scoped or state scoped
 * the meta data reported for a variable can change.
 * Note:  Do not attempt to create instances of this class directly.  They will be created
 * automatically as needed by Architect Scripting.
 * @param archBaseVariable - An Architect base variable instance.
 */
declare class ArchVariableSettings extends ArchBaseObject {
    // constructor(archBaseVariable: ArchBaseVariable);
    /**
     * Returns whether or not you can set a boolean value on the {@link ArchBaseVariable#isInput} property
     * for the variable.
     */
    readonly canSetIsInput: boolean;
    /**
     * Returns whether or not you can set a boolean value on the {@link ArchBaseVariable#isOutput} property
     * for the variable.
     */
    readonly canSetIsOutput: boolean;
    /**
     * Returns the display type name string 'ArchVariableSettings'.
     */
    static readonly displayTypeName: string;
    /**
     * A string suitable for logging that contains information about this value settings object.
     */
    readonly logStr: string;
}

/**
 * ArchVariableSkill
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableSkill extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableSkill'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial skill value for the variable at runtime.  If the {@link ArchValueSkill} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET skill at runtime.
     */
    initialValue: ArchValueSkill;
    /**
     * Returns true indicating that this is an ArchVariableSkill instance.
     */
    readonly isArchVariableSkill: boolean;
}

/**
 * ArchVariableSkillCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableSkillCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableSkillCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial skill collection value for the variable at runtime.  If the {@link ArchValueSkillCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty skill collection at runtime.
     */
    initialValue: ArchValueSkillCollection;
    static isArchVariableSkillCollection: boolean;
}

/**
 * ArchVariableString
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableString extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableString'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial string value for the variable at runtime.  If the {@link ArchValueString} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET string at runtime.
     */
    initialValue: ArchValueString;
    /**
     * Returns true indicating that this is an ArchVariableString instance.
     */
    readonly isArchVariableString: boolean;
}

/**
 * ArchVariableStringCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableStringCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableStringCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial string collection value for the variable at runtime.  If the {@link ArchValueStringCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty string collection at runtime.
     */
    initialValue: ArchValueStringCollection;
    /**
     * Returns true indicating that this is an ArchVariableStringCollection instance.
     */
    readonly isArchVariableStringCollection: boolean;
}

/**
 * ArchVariableTime
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableTime extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableTime'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial Time value for the variable at runtime.  If the {@link ArchValueTime} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET Time at runtime.
     */
    initialValue: ArchValueTime;
    /**
     * Returns true indicating that this is an ArchVariableTime instance.
     */
    isArchVariableTime: boolean;
}

/**
 * ArchVariableTimeCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableTimeCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableTimeCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial Time collection value for the variable at runtime.  If the {@link ArchValueTimeCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty Time collection at runtime.
     */
    initialValue: ArchValueTimeCollection;
    /**
     * Returns true indicating that this is an ArchVariableTimeCollection instance.
     */
    static isArchVariableTimeCollection: boolean;
}

/**
 * ArchVariableUser
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableUser extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableUser'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial user value for the variable at runtime.  If the {@link ArchValueUser} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET user at runtime.
     */
    initialValue: ArchValueUser;
    static isArchVariableUser: boolean;
}

/**
 * ArchVariableUserCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableUserCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableUserCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial user collection value for the variable at runtime.  If the {@link ArchValueUserCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty user collection at runtime.
     */
    initialValue: ArchValueUserCollection;
    /**
     * Returns true indicating that this is an ArchVariableUserCollection instance.
     */
    readonly isArchVariableUserCollection: boolean;
}

/**
 * + This class represents a variable in Architect Scripting.
 * + Data Type:  VoiceSnippet
 * Note: Do not attempt to create an instance of this class directly.
 * Instances of this class will be created automatically by Architect
 * Scripting as needed.
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableVoiceSnippet extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * The initial VoiceSnippet value for the variable at runtime.  If the {@link ArchValueVoiceSnippet} is set to [no value]{@link ArchBaseValue#isNoValue}, this will be a NOT_SET VoiceSnippet at runtime.
     */
    readonly initialValue: ArchValueVoiceSnippet;
    /**
     * Returns the display type name string 'ArchVariableVoiceSnippet'.
     */
    static readonly displayTypeName: string;
    /**
     * Returns true indicating that this is an ArchVariableVoiceSnippet instance.
     */
    static readonly isArchVariableVoiceSnippet: boolean;
}

/**
 * ArchVariableWrapupCode
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableWrapupCode extends ArchBaseVariableSingleton {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableWrapupCode'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial wrapup code value for the variable at runtime.  If the {@link ArchValueWrapupCode} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be a NOT_SET wrapup code at runtime.
     */
    initialValue: ArchValueWrapupCode;
    /**
     * Returns true indicating that this is an ArchVariableWrapupCode instance.
     */
    readonly isArchVariableWrapupCode: boolean;
}

/**
 * ArchVariableWrapupCodeCollection
 * @param coreVariableViewModel - ( *Internal* ) an Architect core variable view model.
 */
declare class ArchVariableWrapupCodeCollection extends ArchBaseVariableCollection {
    // constructor(coreVariableViewModel: any);
    /**
     * Returns the display type name string 'ArchVariableWrapupCodeCollection'.
     */
    static readonly displayTypeName: string;
    /**
     * The initial wraupup code collection value for the variable at runtime.  If the {@link ArchValueWrapupCodeCollection} is set to [no value]{@link ArchBaseValue#isNoValue},
     * this will be an empty wraupup code collection at runtime.
     */
    initialValue: ArchValueWrapupCodeCollection;
    /**
     * Returns true indicating that this is an ArchVariableWrapupCodeCollection instance.
     */
    isArchVariableWrapupCodeCollection: boolean;
}

/**
 * The top level Architect Scripting SDK namespace.
 */
declare namespace scripting {
    /**
     * The namespace for Architect Scripting data type support.
     */
    export namespace dataTypes {
        let ArchDataType: ArchDataType;
        let ArchDataTypes: ArchDataTypes;
    }
    /**
     * The namespace for Architect Scripting environment support.  This namespace contains the Architect
     * Scripting session class which provides startup / end functionality.
     */
    export namespace environment {
        let archSession: ArchSession;
        let ArchOrganizationInfo: ArchOrganizationInfo;
        let ArchScriptingInfo: ArchScriptingInfo;
        /**
         * This namespace contains Architect Scripting organization related view models.
         */
        namespace organization {
            let ArchDivision: ArchDivision;
        }
    }
    /**
     * The namespace for Architect Scripting enum value support.
     */
    export namespace enums {
        let archEnums: ArchEnums;
    }
    /**
     * The namespace that contains Architect Scripting factories that are responsible for Architect Scripting object
     * creation.  For example, you use the {@link ArchFactoryActions} factory to add actions to a flow.
     */
    export namespace factories {
        let archFactoryActions: ArchFactoryActions;
        let archFactoryFilters: ArchFactoryFilters;
        let archFactoryFlows: ArchFactoryFlows;
        let archFactoryMenus: ArchFactoryMenus;
        let archFactoryPromise: ArchFactoryPromise;
        let archFactoryPrompts: ArchFactoryPrompts;
        let archFactoryStates: ArchFactoryStates;
        let archFactoryTasks: ArchFactoryTasks;
    }
    /**
     * The namespace for Architect Scripting language support.
     */
    export namespace languages {
        let ArchLanguage: ArchLanguage;
        let archLanguages: ArchLanguages;
    }
    /**
     * The namespace for Architect Scripting services support.  There is support for logging and, if needed, access
     * to the asynchronous operation promise tracker.
     */
    export namespace services {
        let archAsyncTracker: ArchAsyncTracker;
        let archLogging: ArchLogging;
    }
    /**
     * The namespace for Architect Scripting view model support.  This namespace holds view models to lots of the
     * Architect Scripting created objects you'll use when writing code.
     */
    export namespace viewModels {
        /**
         * This namespace contains Architect Scripting action related view models.
         */
        namespace actions {
            let ArchActionAbortSurveyInvite: ArchActionAbortSurveyInvite;
            let ArchActionAddFlowMilestone: ArchActionAddFlowMilestone;
            let ArchActionAskForBoolean: ArchActionAskForBoolean;
            let ArchActionAskForIntent: ArchActionAskForIntent;
            let ArchActionAskForSlot: ArchActionAskForSlot;
            let ArchActionCallBotFlow: ArchActionCallBotFlow;
            let ArchActionCallBridge: ArchActionCallBridge;
            let ArchActionCallCommonModule: ArchActionCallCommonModule;
            let ArchActionCallData: ArchActionCallData;
            let ArchActionCallDataSecure: ArchActionCallDataSecure;
            let ArchActionCallDialogEngineBot: ArchActionCallDialogEngineBot;
            let ArchActionCallDialogflowBot: ArchActionCallDialogflowBot;
            let ArchActionCallDialogflowCxBot: ArchActionCallDialogflowCxBot;
            let ArchActionCallLexBot: ArchActionCallLexBot;
            let ArchActionCallLexV2Bot: ArchActionCallLexV2Bot;
            let ArchActionCallTask: ArchActionCallTask;
            let ArchActionChangeState: ArchActionChangeState;
            let ArchActionClearActiveIntent: ArchActionClearActiveIntent;
            let ArchActionClearSlot: ArchActionClearSlot;
            let ArchActionCollectInput: ArchActionCollectInput;
            let ArchActionCommunicate: ArchActionCommunicate;
            let ArchActionCompleteSurveyInvite: ArchActionCompleteSurveyInvite;
            let ArchActionCreateCallback: ArchActionCreateCallback;
            let ArchActionDataTableLookup: ArchActionDataTableLookup;
            let ArchActionDecision: ArchActionDecision;
            let ArchActionDetectSilence: ArchActionDetectSilence;
            let ArchActionDialByExtension: ArchActionDialByExtension;
            let ArchActionDisconnect: ArchActionDisconnect;
            let ArchActionEnableParticipantRecord: ArchActionEnableParticipantRecord;
            let ArchActionEndTask: ArchActionEndTask;
            let ArchActionEndWorkflow: ArchActionEndWorkflow;
            let ArchActionEvaluateSchedule: ArchActionEvaluateSchedule;
            let ArchActionEvaluateScheduleGroup: ArchActionEvaluateScheduleGroup;
            let ArchActionExitBotFlow: ArchActionExitBotFlow;
            let ArchActionExtractSecureData: ArchActionExtractSecureData;
            let ArchActionFindGroup: ArchActionFindGroup;
            let ArchActionFindLanguageSkill: ArchActionFindLanguageSkill;
            let ArchActionFindQueue: ArchActionFindQueue;
            let ArchActionFindQueueById: ArchActionFindQueueById;
            let ArchActionFindSkill: ArchActionFindSkill;
            let ArchActionFindSystemPrompt: ArchActionFindSystemPrompt;
            let ArchActionFindUser: ArchActionFindUser;
            let ArchActionFindUserById: ArchActionFindUserById;
            let ArchActionFindUserPrompt: ArchActionFindUserPrompt;
            let ArchActionFindUsersById: ArchActionFindUsersById;
            let ArchActionFlushAudio: ArchActionFlushAudio;
            let ArchActionGetExternalContact: ArchActionGetExternalContact;
            let ArchActionGetExternalOrganization: ArchActionGetExternalOrganization;
            let ArchActionGetJourneyOutcome: ArchActionGetJourneyOutcome;
            let ArchActionGetJourneyOutcomeScoresBySession: ArchActionGetJourneyOutcomeScoresBySession;
            let ArchActionGetJourneySegment: ArchActionGetJourneySegment;
            let ArchActionGetJourneySession: ArchActionGetJourneySession;
            let ArchActionGetJourneySessionsByCustomer: ArchActionGetJourneySessionsByCustomer;
            let ArchActionGetJourneySessionsByExternalContact: ArchActionGetJourneySessionsByExternalContact;
            let ArchActionGetParticipantData: ArchActionGetParticipantData;
            let ArchActionGetResponse: ArchActionGetResponse;
            let ArchActionHoldMusic: ArchActionHoldMusic;
            let ArchActionInitializeFlowOutcome: ArchActionInitializeFlowOutcome;
            let ArchActionJumpToMenu: ArchActionJumpToMenu;
            let ArchActionJumpToTask: ArchActionJumpToTask;
            let ArchActionLoop: ArchActionLoop;
            let ArchActionLoopAnythingElse: ArchActionLoopAnythingElse;
            let ArchActionLoopUntil: ArchActionLoopUntil;
            let ArchActionLoopExit: ArchActionLoopExit;
            let ArchActionLoopNext: ArchActionLoopNext;
            let ArchActionMenu: ArchActionMenu;
            let ArchActionPlayAudio: ArchActionPlayAudio;
            let ArchActionPlayAudioOnSilence: ArchActionPlayAudioOnSilence;
            let ArchActionPlayEstimatedWaitTime: ArchActionPlayEstimatedWaitTime;
            let ArchActionPlayPositionInQueue: ArchActionPlayPositionInQueue;
            let ArchActionPreviousMenu: ArchActionPreviousMenu;
            let ArchActionRepeatMenu: ArchActionRepeatMenu;
            let ArchActionReturnToAgent: ArchActionReturnToAgent;
            let ArchActionSearchExternalContacts: ArchActionSearchExternalContacts;
            let ArchActionSendAutoReply: ArchActionSendAutoReply;
            let ArchActionSendResponse: ArchActionSendResponse;
            let ArchActionSetExternalTag: ArchActionSetExternalTag;
            let ArchActionSetIntent: ArchActionSetIntent;
            let ArchActionSetFlowOutcome: ArchActionSetFlowOutcome;
            let ArchActionSetLanguage: ArchActionSetLanguage;
            let ArchActionSetParticipantData: ArchActionSetParticipantData;
            let ArchActionSetScreenPop: ArchActionSetScreenPop;
            let ArchActionSetUUIData: ArchActionSetUUIData;
            let ArchActionSetWhisperAudio: ArchActionSetWhisperAudio;
            let ArchActionSetWrapupCode: ArchActionSetWrapupCode;
            let ArchActionSwitch: ArchActionSwitch;
            let ArchActionTask: ArchActionTask;
            let ArchActionTranscription: ArchActionTranscription;
            let ArchActionTransferToAcd: ArchActionTransferToAcd;
            let ArchActionTransferToFlow: ArchActionTransferToFlow;
            let ArchActionTransferToFlowSecure: ArchActionTransferToFlowSecure;
            let ArchActionTransferToGroup: ArchActionTransferToGroup;
            let ArchActionTransferToNumber: ArchActionTransferToNumber;
            let ArchActionTransferToUser: ArchActionTransferToUser;
            let ArchActionTransferToVoicemail: ArchActionTransferToVoicemail;
            let ArchActionUpdateData: ArchActionUpdateData;
            let ArchActionWait: ArchActionWait;
        }
        /**
         * This namespace contains Architect Scripting audio related view models.
         */
        namespace audio {
            let ArchAudio: ArchAudio;
            let ArchAudioCase: ArchAudioCase;
        }
        /**
         * This namespace contains Architect Scripting base class view models that support
         * other view models.
         */
        namespace baseClasses {
            let ArchBaseAction: ArchBaseAction;
            let ArchBaseActionAsk: ArchBaseActionAsk;
            let ArchBaseActionBot: ArchBaseActionBot;
            let ArchBaseActionDataAction: ArchBaseActionDataAction;
            let ArchBaseDefinition: ArchBaseDefinition;
            let ArchBaseActionFindSystemObject: ArchBaseActionFindSystemObject;
            let ArchBaseActionFindSystemObjects: ArchBaseActionFindSystemObject;
            let ArchBaseActionFindSystemObjectById: ArchBaseActionFindSystemObjectById;
            let ArchBaseActionFindSystemObjectByName: ArchBaseActionFindSystemObjectByName;
            let ArchBaseActionFindSystemObjectsById: ArchBaseActionFindSystemObjectsById;
            let ArchBaseActionLex: ArchBaseActionLex;
            let ArchBaseActionTransfer: ArchBaseActionTransfer;
            let ArchBaseActionTransferWithConnectTimeout: ArchBaseActionTransferWithConnectTimeout;
            let ArchBaseActionWithOutputLoop: ArchBaseActionWithOutputLoop;
            let ArchBaseActionWithOutputLoopMaxLoopsNextLoop: ArchBaseActionWithOutputLoopMaxLoopsNextLoop;
            let ArchBaseActionWithOutputs: ArchBaseActionWithOutputs;
            let ArchBaseActionWithOutputsDefaults: ArchBaseActionWithOutputsDefault;
            let ArchBaseActionWithOutputsFakeSuccessFailure: ArchBaseActionWithOutputsFakeSuccessFailure;
            let ArchBaseActionWithOutputsFakeSuccessFailureTimeout: ArchBaseActionWithOutputsFakeSuccessFailureTimeout;
            let ArchBaseActionWithOutputsFoundNotFoundFailure: ArchBaseActionWithOutputsFoundNotFoundFailure;
            let ArchBaseActionWithOutputsFoundNotFoundPartiallyFound: ArchBaseActionWithOutputsFoundNotFoundPartiallyFound;
            let ArchBaseActionWithOutputsSuccessFailure: ArchBaseActionWithOutputsSuccessFailure;
            let ArchBaseActionWithOutputsSuccessFailureTimeout: ArchBaseActionWithOutputsSuccessFailureTimeout;
            let ArchBaseActionWithOutputsYesNo: ArchBaseActionWithOutputsYesNo;
            let ArchBaseCoreObject: ArchBaseCoreObject;
            let ArchBaseCoreObjectWithId: ArchBaseCoreObjectWithId;
            let ArchBaseFilterClause: ArchBaseFilterClause;
            let ArchBaseFilterClauseProperty: ArchBaseFilterClauseProperty;
            let ArchBaseFilterClausePropertyValue: ArchBaseFilterClausePropertyValue;
            let ArchBaseFilterMatching: ArchBaseObjectFilterCommon;
            let ArchBaseFlow: ArchBaseFlow;
            let ArchBaseFlowInboundOutboundSecureCall: ArchBaseFlowInboundOutboundSecureCall;
            let ArchBaseFlowWithMenus: ArchBaseFlowWithMenus;
            let ArchBaseFlowWithTasks: ArchBaseFlowWithTasks;
            let ArchBaseFlowWorkflow: ArchBaseFlowWorkflow;
            let ArchBaseMenu: ArchBaseMenu;
            let ArchBaseMenuChoice: ArchBaseMenuChoice;
            let ArchBaseMultiActionContainer: ArchBaseMultiActionContainer;
            let ArchBaseNameValuePair: ArchBaseNameValuePair;
            let ArchBaseNameValuePairs: ArchBaseNameValuePairs;
            let ArchBaseNetworkValue: ArchBaseNetworkValue;
            let ArchBaseNetworkValueCollection: ArchBaseNetworkValueCollection;
            let ArchBaseNetworkValueContainer: ArchBaseNetworkValueContainer;
            let ArchBaseNetworkValueSingleton: ArchBaseNetworkValueSingleton;
            let ArchBaseObject: ArchBaseObject;
            let ArchBasePrompt: ArchBasePrompt;
            let ArchBaseSkillValuePair: ArchBaseSkillValuePair;
            let ArchBaseSkillValuePairs: ArchBaseSkillValuePairs;
            let ArchBaseValue: ArchBaseValue;
            let ArchBaseValueBasic: ArchBaseValueBasic;
            let ArchBaseValueCollection: ArchBaseValueCollection;
            let ArchBaseValueCollectionBasic: ArchBaseValueCollectionBasic;
            let ArchBaseValueContainer: ArchBaseValueContainer;
            let ArchBaseValueSingleton: ArchBaseValueSingleton;
            let ArchBaseVariable: ArchBaseVariable;
            let ArchBaseVariableCollection: ArchBaseVariableCollection;
            let ArchBaseVariableSingleton: ArchBaseVariableSingleton;
            let ArchBaseVariableValuePair: ArchBaseVariableValuePair;
            let ArchBaseVariableValuePairs: ArchBaseVariableValuePairs;
        }
        /**
         * This namespace contains Architect Scripting definition related view models
         * which provide meta data about different Architect Scripting object types.
         */
        namespace definitions {
            let ArchDefinitionAction: ArchDefinitionAction;
            let ArchDefinitionFlow: ArchDefinitionFlow;
            let ArchDefinitionMenu: ArchDefinitionMenu;
            let ArchDefinitionValue: ArchDefinitionValue;
            let ArchDefinitionVariable: ArchDefinitionVariable;
        }
        /**
         * This namespace contains Architect Scripting filter related view models.
         */
        namespace filters {
            let ArchFilterClauseContainer: ArchFilterClauseContainer;
            let ArchFilterClausePropertyCallback: ArchFilterClausePropertyCallback;
            let ArchFilterClausePropertyValueEquals: ArchFilterClausePropertyValueEquals;
            let ArchFilterClausePropertyValueNotEquals: ArchFilterClausePropertyValueNotEquals;
            let ArchFilterObject: ArchFilterObject;
        }
        /**
         * This namespace contains Architect Scripting flow related view models.
         */
        namespace flows {
            let ArchFlowBot: ArchFlowBot;
            let ArchFlowCommonModule: ArchFlowCommonModule;
            let ArchFlowInboundCall: ArchFlowInboundCall;
            let ArchFlowInboundChat: ArchFlowInboundChat;
            let ArchFlowInfo: ArchFlowInfo;
            let ArchFlowInfoVersion: ArchFlowInfoVersion;
            let ArchFlowInfoBasic: ArchFlowInfoBasic;
            let ArchFlowInQueueCall: ArchFlowInQueueCall;
            let ArchFlowOutboundCall: ArchFlowOutboundCall;
            let ArchFlowSecureCall: ArchFlowSecureCall;
            let ArchFlowInboundEmail: ArchFlowInboundEmail;
            let ArchFlowInboundShortMessage: ArchFlowInboundShortMessage;
            let ArchFlowSurveyInvite: ArchFlowSurveyInvite;
            let ArchFlowWorkflow: ArchFlowWorkflow;
        }
        /**
         * This namespace contains Architect Scripting menu related view models.
         */
        namespace menus {
            let ArchMenu: ArchMenu;
            let ArchMenuDialByExtension: ArchMenuDialByExtension;
            let ArchMenuDisconnect: ArchMenuDisconnect;
            let ArchMenuJumpToMenu: ArchMenuJumpToMenu;
            let ArchMenuJumpToTask: ArchMenuJumpToTask;
            let ArchMenuPreviousMenu: ArchMenuPreviousMenu;
            let ArchMenuRepeatMenu: ArchMenuRepeatMenu;
            let ArchMenuReturnToAgent: ArchMenuReturnToAgent;
            let ArchMenuSubMenu: ArchMenuSubMenu;
            let ArchMenuTask: ArchMenuTask;
            let ArchMenuTransferToAcd: ArchMenuTransferToAcd;
            let ArchMenuTransferToFlow: ArchMenuTransferToFlow;
            let ArchMenuTransferToFlowSecure: ArchMenuTransferToFlowSecure;
            let ArchMenuTransferToGroup: ArchMenuTransferToGroup;
            let ArchMenuTransferToNumber: ArchMenuTransferToNumber;
            let ArchMenuTransferToUser: ArchMenuTransferToUser;
            let ArchMenuTransferToVoicemail: ArchMenuTransferToVoicemail;
        }
        /**
         * This namespace contains Architect Scripting action output related view models.
         */
        namespace outputs {
            let ArchActionOutput: ArchActionOutput;
            let ArchBranch: ArchBranch;
        }
        /**
         * This namespace contains Architect Scripting prompt related view models.
         */
        namespace prompts {
            let ArchPromptSystem: ArchActionOutput;
            let ArchPromptUser: ArchActionOutput;
        }
        /**
         * This namespace contains Architect Scripting flow setting related view models.
         */
        namespace settings {
            let ArchSettingActionPropertyDefault: ArchSettingActionPropertyDefault;
            let ArchSettingsActionDefaults: ArchSettingsActionDefaults;
            let ArchSettingsBotFlow: ArchSettingsBotFlow;
            let ArchSettingsCommonModuleFlow: ArchSettingsCommonModuleFlow;
            let ArchSettingsEventErrorFlow: ArchSettingsEventErrorFlow;
            let ArchSettingsEventErrorFlowBot: ArchSettingsEventErrorFlowBot;
            let ArchSettingsInboundEmailFlow: ArchSettingsOutboundCallFlow;
            let ArchSettingsInQueueCallFlow: ArchSettingsInQueueCallFlow;
            let ArchSettingsNluIntent: ArchSettingsNluIntent;
            let ArchSettingsNluKnowledge: ArchSettingsNluKnowledge;
            let ArchSettingsMenu: ArchSettingsMenu;
            let ArchSettingsMenuFlow: ArchSettingsMenuFlow;
            let ArchSettingsOutboundCallFlow: ArchSettingsOutboundCallFlow;
            let ArchSettingsPromptsFlow: ArchSettingsPromptsFlow;
            let ArchSettingsSpeechRec: ArchSettingsSpeechRec;
            let ArchSettingsSpeechRecFlow: ArchSettingsSpeechRecFlow;
            let ArchSettingsSupportedLanguage: ArchSettingsSupportedLanguage;
            let ArchSettingsSupportedLanguagesFlow: ArchSettingsSupportedLanguagesFlow;
            let ArchSettingsUserInput: ArchSettingsUserInput;
        }
        /**
         * This namespace contains Architect Scripting flow speech recognition related view models.
         */
        namespace speechRec {
            let ArchSpeechRecTermContainer: ArchSpeechRecTermContainer;
            let ArchSpeechRecTermContainers: ArchSpeechRecTermContainers;
        }
        /**
         * This namespace contains Architect Scripting task related view models.
         */
        namespace tasks {
            let ArchTask: ArchTask;
            let ArchTaskCommonModule: ArchTaskCommonModule;
            let ArchTaskLoop: ArchTaskLoop;
            let ArchState: ArchState;
            let ArchStateBot: ArchStateBot;
        }
        /**
         * This namespace contains Architect Scripting text to speech related view models.
         */
        namespace textToSpeech {
            let ArchTtsEngine: ArchTtsEngine;
            let archTtsEngines: ArchTtsEngines;
            let ArchTtsVoice: ArchTtsVoice;
        }
        /**
         * This namespace contains Architect Scripting traverse related view models.
         */
        namespace traverse {
            let ArchTraverseContext: ArchTraverseContext;
            let ArchTraverseHierarchyItem: ArchTraverseHierarchyItem;
            let ArchTraverseInfo: ArchTraverseInfo;
            let ArchTraverseSettings: ArchTraverseSettings;
        }
        /**
         * This namespace contains Architect Scripting flow validation related view models.
         */
        namespace validation {
            let ArchValidationIssue: ArchValidationIssue;
            let ArchValidationResults: ArchValidationResults;
        }
        /**
         * This namespace contains Architect Scripting value related view models.  The main Architect
         * Scripting readme page has more information about values and what they are in Architect Scripting.
         */
        namespace values {
            let ArchValueAgentScorePair: ArchValueAgentScorePair;
            let ArchValueAgentScorePairCollection: ArchValueAgentScorePairCollection;
            let ArchNamedValue: ArchNamedValue;
            let ArchNamedValueList: ArchNamedValueList;
            let ArchValueAny: ArchValueAny;
            let ArchValueAnyCollection: ArchValueAnyCollection;
            let ArchValueAudio: ArchValueAudio;
            let ArchValueBoolean: ArchValueBoolean;
            let ArchValueBooleanCollection: ArchValueBooleanCollection;
            let ArchValueContactList: ArchValueContactList;
            let ArchValueCommunication: ArchValueCommunication;
            let ArchValueCurrency: ArchValueCurrency;
            let ArchValueCurrencyCollection: ArchValueCurrencyCollection;
            let ArchValueDate: ArchValueDate;
            let ArchValueDateCollection: ArchValueDateCollection;
            let ArchValueDateTime: ArchValueDateTime;
            let ArchValueDateTimeCollection: ArchValueDateTimeCollection;
            let ArchValueDecimal: ArchValueDecimal;
            let ArchValueDecimalCollection: ArchValueDecimalCollection;
            let ArchValueDuration: ArchValueDuration;
            let ArchValueDurationCollection: ArchValueDurationCollection;
            let ArchValueEmailAddress: ArchValueEmailAddress;
            let ArchValueEmailAddressCollection: ArchValueEmailAddressCollection;
            let ArchValueExternalContact: ArchValueExternalContact;
            let ArchValueExternalContactCollection: ArchValueExternalContactCollection;
            let ArchValueExternalOrganization: ArchValueExternalOrganization;
            let ArchValueExternalOrganizationCollection: ArchValueExternalOrganizationCollection;
            let ArchValueGroup: ArchValueGroup;
            let ArchValueGroupCollection: ArchValueGroupCollection;
            let ArchValueInteger: ArchValueInteger;
            let ArchValueIntegerCollection: ArchValueIntegerCollection;
            let ArchValueJourneyOutcome: ArchValueJourneyOutcome;
            let ArchValueJourneyOutcomeScore: ArchValueJourneyOutcome;
            let ArchValueJourneyOutcomeScoreCollection: ArchValueJourneyOutcomeScoreCollection;
            let ArchValueJourneySegment: ArchValueJourneySegment;
            let ArchValueJourneySession: ArchValueJourneySession;
            let ArchValueJourneySessionCollection: ArchValueJourneySessionCollection;
            let ArchValueLanguageSkill: ArchValueLanguageSkill;
            let ArchValueLanguageSkillCollection: ArchValueLanguageSkillCollection;
            let ArchValuePhoneNumber: ArchValuePhoneNumber;
            let ArchValuePhoneNumberCollection: ArchValuePhoneNumberCollection;
            let ArchValuePrompt: ArchValuePrompt;
            let ArchValuePromptCollection: ArchValuePromptCollection;
            let ArchValueQueue: ArchValueQueue;
            let ArchValueQueueCollection: ArchValueQueueCollection;
            let ArchValueSettings: ArchValueSettings;
            let ArchValueSkill: ArchValueSkill;
            let ArchValueSkillCollection: ArchValueSkillCollection;
            let ArchValueString: ArchValueString;
            let ArchValueStringCollection: ArchValueStringCollection;
            let ArchValueTime: ArchValueTime;
            let ArchValueTimeCollection: ArchValueTimeCollection;
            let ArchValueUser: ArchValueUser;
            let ArchValueUserCollection: ArchValueUserCollection;
            let ArchValueWrapupCode: ArchValueWrapupCode;
            let ArchValueWrapupCodeCollection: ArchValueWrapupCodeCollection;
        }
        /**
         * This namespace contains Architect Scripting flow variable related view models.
         */
        namespace variables {
            let ArchVariableAgentScorePair: ArchVariableAgentScorePair;
            let ArchVariableAgentScorePairCollection: ArchVariableAgentScorePairCollection;
            let ArchVariableBoolean: ArchVariableBoolean;
            let ArchVariableBooleanCollection: ArchVariableBooleanCollection;
            let ArchVariableCommunication: ArchVariableCommunication;
            let ArchVariableCommunicationCollection: ArchVariableCommunicationCollection;
            let ArchVariableCurrency: ArchVariableCurrency;
            let ArchVariableCurrencyCollection: ArchVariableCurrencyCollection;
            let ArchVariableDate: ArchVariableDate;
            let ArchVariableDateCollection: ArchVariableDateCollection;
            let ArchVariableDateTime: ArchVariableDateTime;
            let ArchVariableDateTimeCollection: ArchVariableDateTimeCollection;
            let ArchVariableDecimal: ArchVariableDecimal;
            let ArchVariableDecimalCollection: ArchVariableDecimalCollection;
            let ArchVariableDuration: ArchVariableDuration;
            let ArchVariableDurationCollection: ArchVariableDurationCollection;
            let ArchVariableEmailAddress: ArchVariableEmailAddress;
            let ArchVariableEmailAddressCollection: ArchVariableEmailAddressCollection;
            let ArchVariableGroup: ArchVariableGroup;
            let ArchVariableGroupCollection: ArchVariableGroupCollection;
            let ArchVariableInteger: ArchVariableInteger;
            let ArchVariableIntegerCollection: ArchVariableIntegerCollection;
            let ArchVariableJourneyOutcome: ArchVariableJourneyOutcome;
            let ArchVariableJourneyOutcomeCollection: ArchVariableJourneyOutcomeCollection;
            let ArchVariableJourneyOutcomeScore: ArchVariableJourneyOutcomeScore;
            let ArchVariableJourneyOutcomeScoreCollection: ArchVariableJourneyOutcomeScoreCollection;
            let ArchVariableJourneySegment: ArchVariableJourneySegment;
            let ArchVariableJourneySegmentCollection: ArchVariableJourneySegmentCollection;
            let ArchVariableJourneySession: ArchVariableJourneySession;
            let ArchVariableJourneySessionCollection: ArchVariableJourneySessionCollection;
            let ArchVariableLanguageSkill: ArchVariableSkill;
            let ArchVariableLanguageSkillCollection: ArchVariableSkillCollection;
            let ArchVariablePhoneNumber: ArchVariablePhoneNumber;
            let ArchVariablePhoneNumberCollection: ArchVariablePhoneNumberCollection;
            let ArchVariablePrompt: ArchVariablePrompt;
            let ArchVariablePromptCollection: ArchVariablePromptCollection;
            let ArchVariableQueue: ArchVariableQueue;
            let ArchVariableQueueCollection: ArchVariableQueueCollection;
            let ArchVariableSettings: ArchVariableSettings;
            let ArchVariableSkill: ArchVariableSkill;
            let ArchVariableSkillCollection: ArchVariableSkillCollection;
            let ArchVariableString: ArchVariableString;
            let ArchVariableStringCollection: ArchVariableStringCollection;
            let ArchVariableTime: ArchVariableTime;
            let ArchVariableTimeCollection: ArchVariableTimeCollection;
            let ArchVariableUser: ArchVariableUser;
            let ArchVariableUserCollection: ArchVariableUserCollection;
            let ArchVariableWrapupCode: ArchVariableWrapupCode;
            let ArchVariableWrapupCodeCollection: ArchVariableWrapupCodeCollection;
        }
    }
}

