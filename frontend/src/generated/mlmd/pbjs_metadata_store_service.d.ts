import * as $protobuf from "protobufjs";
/** Namespace ml_metadata. */
export namespace ml_metadata {

    /** Properties of an ArtifactAndType. */
    interface IArtifactAndType {

        /** ArtifactAndType artifact */
        artifact?: (ml_metadata.IArtifact|null);

        /** ArtifactAndType type */
        type?: (ml_metadata.IArtifactType|null);
    }

    /** Represents an ArtifactAndType. */
    class ArtifactAndType implements IArtifactAndType {

        /**
         * Constructs a new ArtifactAndType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactAndType);

        /** ArtifactAndType artifact. */
        public artifact?: (ml_metadata.IArtifact|null);

        /** ArtifactAndType type. */
        public type?: (ml_metadata.IArtifactType|null);

        /**
         * Creates a new ArtifactAndType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactAndType instance
         */
        public static create(properties?: ml_metadata.IArtifactAndType): ml_metadata.ArtifactAndType;

        /**
         * Encodes the specified ArtifactAndType message. Does not implicitly {@link ml_metadata.ArtifactAndType.verify|verify} messages.
         * @param message ArtifactAndType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactAndType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactAndType message, length delimited. Does not implicitly {@link ml_metadata.ArtifactAndType.verify|verify} messages.
         * @param message ArtifactAndType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactAndType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactAndType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactAndType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactAndType;

        /**
         * Decodes an ArtifactAndType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactAndType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactAndType;

        /**
         * Verifies an ArtifactAndType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactAndType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactAndType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactAndType;

        /**
         * Creates a plain object from an ArtifactAndType message. Also converts values to other types if specified.
         * @param message ArtifactAndType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactAndType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactAndType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactStructMap. */
    interface IArtifactStructMap {

        /** ArtifactStructMap properties */
        properties?: ({ [k: string]: ml_metadata.IArtifactStruct }|null);
    }

    /** Represents an ArtifactStructMap. */
    class ArtifactStructMap implements IArtifactStructMap {

        /**
         * Constructs a new ArtifactStructMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactStructMap);

        /** ArtifactStructMap properties. */
        public properties: { [k: string]: ml_metadata.IArtifactStruct };

        /**
         * Creates a new ArtifactStructMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactStructMap instance
         */
        public static create(properties?: ml_metadata.IArtifactStructMap): ml_metadata.ArtifactStructMap;

        /**
         * Encodes the specified ArtifactStructMap message. Does not implicitly {@link ml_metadata.ArtifactStructMap.verify|verify} messages.
         * @param message ArtifactStructMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactStructMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactStructMap message, length delimited. Does not implicitly {@link ml_metadata.ArtifactStructMap.verify|verify} messages.
         * @param message ArtifactStructMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactStructMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactStructMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactStructMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactStructMap;

        /**
         * Decodes an ArtifactStructMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactStructMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactStructMap;

        /**
         * Verifies an ArtifactStructMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactStructMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactStructMap
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactStructMap;

        /**
         * Creates a plain object from an ArtifactStructMap message. Also converts values to other types if specified.
         * @param message ArtifactStructMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactStructMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactStructMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactStructList. */
    interface IArtifactStructList {

        /** ArtifactStructList elements */
        elements?: (ml_metadata.IArtifactStruct[]|null);
    }

    /** Represents an ArtifactStructList. */
    class ArtifactStructList implements IArtifactStructList {

        /**
         * Constructs a new ArtifactStructList.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactStructList);

        /** ArtifactStructList elements. */
        public elements: ml_metadata.IArtifactStruct[];

        /**
         * Creates a new ArtifactStructList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactStructList instance
         */
        public static create(properties?: ml_metadata.IArtifactStructList): ml_metadata.ArtifactStructList;

        /**
         * Encodes the specified ArtifactStructList message. Does not implicitly {@link ml_metadata.ArtifactStructList.verify|verify} messages.
         * @param message ArtifactStructList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactStructList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactStructList message, length delimited. Does not implicitly {@link ml_metadata.ArtifactStructList.verify|verify} messages.
         * @param message ArtifactStructList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactStructList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactStructList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactStructList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactStructList;

        /**
         * Decodes an ArtifactStructList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactStructList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactStructList;

        /**
         * Verifies an ArtifactStructList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactStructList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactStructList
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactStructList;

        /**
         * Creates a plain object from an ArtifactStructList message. Also converts values to other types if specified.
         * @param message ArtifactStructList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactStructList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactStructList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactStruct. */
    interface IArtifactStruct {

        /** ArtifactStruct artifact */
        artifact?: (ml_metadata.IArtifactAndType|null);

        /** ArtifactStruct map */
        map?: (ml_metadata.IArtifactStructMap|null);

        /** ArtifactStruct list */
        list?: (ml_metadata.IArtifactStructList|null);
    }

    /** Represents an ArtifactStruct. */
    class ArtifactStruct implements IArtifactStruct {

        /**
         * Constructs a new ArtifactStruct.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactStruct);

        /** ArtifactStruct artifact. */
        public artifact?: (ml_metadata.IArtifactAndType|null);

        /** ArtifactStruct map. */
        public map?: (ml_metadata.IArtifactStructMap|null);

        /** ArtifactStruct list. */
        public list?: (ml_metadata.IArtifactStructList|null);

        /** ArtifactStruct value. */
        public value?: ("artifact"|"map"|"list");

        /**
         * Creates a new ArtifactStruct instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactStruct instance
         */
        public static create(properties?: ml_metadata.IArtifactStruct): ml_metadata.ArtifactStruct;

        /**
         * Encodes the specified ArtifactStruct message. Does not implicitly {@link ml_metadata.ArtifactStruct.verify|verify} messages.
         * @param message ArtifactStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactStruct message, length delimited. Does not implicitly {@link ml_metadata.ArtifactStruct.verify|verify} messages.
         * @param message ArtifactStruct message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactStruct, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactStruct message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactStruct;

        /**
         * Decodes an ArtifactStruct message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactStruct;

        /**
         * Verifies an ArtifactStruct message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactStruct message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactStruct
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactStruct;

        /**
         * Creates a plain object from an ArtifactStruct message. Also converts values to other types if specified.
         * @param message ArtifactStruct
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactStruct, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactStruct to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutArtifactsRequest. */
    interface IPutArtifactsRequest {

        /** PutArtifactsRequest artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);

        /** PutArtifactsRequest options */
        options?: (ml_metadata.PutArtifactsRequest.IOptions|null);
    }

    /** Represents a PutArtifactsRequest. */
    class PutArtifactsRequest implements IPutArtifactsRequest {

        /**
         * Constructs a new PutArtifactsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutArtifactsRequest);

        /** PutArtifactsRequest artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /** PutArtifactsRequest options. */
        public options?: (ml_metadata.PutArtifactsRequest.IOptions|null);

        /**
         * Creates a new PutArtifactsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutArtifactsRequest instance
         */
        public static create(properties?: ml_metadata.IPutArtifactsRequest): ml_metadata.PutArtifactsRequest;

        /**
         * Encodes the specified PutArtifactsRequest message. Does not implicitly {@link ml_metadata.PutArtifactsRequest.verify|verify} messages.
         * @param message PutArtifactsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutArtifactsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutArtifactsRequest.verify|verify} messages.
         * @param message PutArtifactsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutArtifactsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutArtifactsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutArtifactsRequest;

        /**
         * Decodes a PutArtifactsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutArtifactsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutArtifactsRequest;

        /**
         * Verifies a PutArtifactsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutArtifactsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutArtifactsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutArtifactsRequest;

        /**
         * Creates a plain object from a PutArtifactsRequest message. Also converts values to other types if specified.
         * @param message PutArtifactsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutArtifactsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PutArtifactsRequest {

        /** Properties of an Options. */
        interface IOptions {

            /** Options abortIfLatestUpdatedTimeChanged */
            abortIfLatestUpdatedTimeChanged?: (boolean|null);
        }

        /** Represents an Options. */
        class Options implements IOptions {

            /**
             * Constructs a new Options.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.PutArtifactsRequest.IOptions);

            /** Options abortIfLatestUpdatedTimeChanged. */
            public abortIfLatestUpdatedTimeChanged: boolean;

            /**
             * Creates a new Options instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Options instance
             */
            public static create(properties?: ml_metadata.PutArtifactsRequest.IOptions): ml_metadata.PutArtifactsRequest.Options;

            /**
             * Encodes the specified Options message. Does not implicitly {@link ml_metadata.PutArtifactsRequest.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.PutArtifactsRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link ml_metadata.PutArtifactsRequest.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.PutArtifactsRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutArtifactsRequest.Options;

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutArtifactsRequest.Options;

            /**
             * Verifies an Options message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Options
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.PutArtifactsRequest.Options;

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @param message Options
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.PutArtifactsRequest.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Options to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PutArtifactsResponse. */
    interface IPutArtifactsResponse {

        /** PutArtifactsResponse artifactIds */
        artifactIds?: ((number|Long)[]|null);
    }

    /** Represents a PutArtifactsResponse. */
    class PutArtifactsResponse implements IPutArtifactsResponse {

        /**
         * Constructs a new PutArtifactsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutArtifactsResponse);

        /** PutArtifactsResponse artifactIds. */
        public artifactIds: (number|Long)[];

        /**
         * Creates a new PutArtifactsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutArtifactsResponse instance
         */
        public static create(properties?: ml_metadata.IPutArtifactsResponse): ml_metadata.PutArtifactsResponse;

        /**
         * Encodes the specified PutArtifactsResponse message. Does not implicitly {@link ml_metadata.PutArtifactsResponse.verify|verify} messages.
         * @param message PutArtifactsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutArtifactsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutArtifactsResponse.verify|verify} messages.
         * @param message PutArtifactsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutArtifactsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutArtifactsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutArtifactsResponse;

        /**
         * Decodes a PutArtifactsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutArtifactsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutArtifactsResponse;

        /**
         * Verifies a PutArtifactsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutArtifactsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutArtifactsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutArtifactsResponse;

        /**
         * Creates a plain object from a PutArtifactsResponse message. Also converts values to other types if specified.
         * @param message PutArtifactsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutArtifactsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutArtifactTypeRequest. */
    interface IPutArtifactTypeRequest {

        /** PutArtifactTypeRequest artifactType */
        artifactType?: (ml_metadata.IArtifactType|null);

        /** PutArtifactTypeRequest canAddFields */
        canAddFields?: (boolean|null);

        /** PutArtifactTypeRequest canOmitFields */
        canOmitFields?: (boolean|null);

        /** PutArtifactTypeRequest canDeleteFields */
        canDeleteFields?: (boolean|null);

        /** PutArtifactTypeRequest allFieldsMatch */
        allFieldsMatch?: (boolean|null);
    }

    /** Represents a PutArtifactTypeRequest. */
    class PutArtifactTypeRequest implements IPutArtifactTypeRequest {

        /**
         * Constructs a new PutArtifactTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutArtifactTypeRequest);

        /** PutArtifactTypeRequest artifactType. */
        public artifactType?: (ml_metadata.IArtifactType|null);

        /** PutArtifactTypeRequest canAddFields. */
        public canAddFields: boolean;

        /** PutArtifactTypeRequest canOmitFields. */
        public canOmitFields: boolean;

        /** PutArtifactTypeRequest canDeleteFields. */
        public canDeleteFields: boolean;

        /** PutArtifactTypeRequest allFieldsMatch. */
        public allFieldsMatch: boolean;

        /**
         * Creates a new PutArtifactTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutArtifactTypeRequest instance
         */
        public static create(properties?: ml_metadata.IPutArtifactTypeRequest): ml_metadata.PutArtifactTypeRequest;

        /**
         * Encodes the specified PutArtifactTypeRequest message. Does not implicitly {@link ml_metadata.PutArtifactTypeRequest.verify|verify} messages.
         * @param message PutArtifactTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutArtifactTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutArtifactTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.PutArtifactTypeRequest.verify|verify} messages.
         * @param message PutArtifactTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutArtifactTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutArtifactTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutArtifactTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutArtifactTypeRequest;

        /**
         * Decodes a PutArtifactTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutArtifactTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutArtifactTypeRequest;

        /**
         * Verifies a PutArtifactTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutArtifactTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutArtifactTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutArtifactTypeRequest;

        /**
         * Creates a plain object from a PutArtifactTypeRequest message. Also converts values to other types if specified.
         * @param message PutArtifactTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutArtifactTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutArtifactTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutArtifactTypeResponse. */
    interface IPutArtifactTypeResponse {

        /** PutArtifactTypeResponse typeId */
        typeId?: (number|Long|null);
    }

    /** Represents a PutArtifactTypeResponse. */
    class PutArtifactTypeResponse implements IPutArtifactTypeResponse {

        /**
         * Constructs a new PutArtifactTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutArtifactTypeResponse);

        /** PutArtifactTypeResponse typeId. */
        public typeId: (number|Long);

        /**
         * Creates a new PutArtifactTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutArtifactTypeResponse instance
         */
        public static create(properties?: ml_metadata.IPutArtifactTypeResponse): ml_metadata.PutArtifactTypeResponse;

        /**
         * Encodes the specified PutArtifactTypeResponse message. Does not implicitly {@link ml_metadata.PutArtifactTypeResponse.verify|verify} messages.
         * @param message PutArtifactTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutArtifactTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutArtifactTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.PutArtifactTypeResponse.verify|verify} messages.
         * @param message PutArtifactTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutArtifactTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutArtifactTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutArtifactTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutArtifactTypeResponse;

        /**
         * Decodes a PutArtifactTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutArtifactTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutArtifactTypeResponse;

        /**
         * Verifies a PutArtifactTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutArtifactTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutArtifactTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutArtifactTypeResponse;

        /**
         * Creates a plain object from a PutArtifactTypeResponse message. Also converts values to other types if specified.
         * @param message PutArtifactTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutArtifactTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutArtifactTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutExecutionsRequest. */
    interface IPutExecutionsRequest {

        /** PutExecutionsRequest executions */
        executions?: (ml_metadata.IExecution[]|null);
    }

    /** Represents a PutExecutionsRequest. */
    class PutExecutionsRequest implements IPutExecutionsRequest {

        /**
         * Constructs a new PutExecutionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionsRequest);

        /** PutExecutionsRequest executions. */
        public executions: ml_metadata.IExecution[];

        /**
         * Creates a new PutExecutionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionsRequest instance
         */
        public static create(properties?: ml_metadata.IPutExecutionsRequest): ml_metadata.PutExecutionsRequest;

        /**
         * Encodes the specified PutExecutionsRequest message. Does not implicitly {@link ml_metadata.PutExecutionsRequest.verify|verify} messages.
         * @param message PutExecutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionsRequest.verify|verify} messages.
         * @param message PutExecutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionsRequest;

        /**
         * Decodes a PutExecutionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionsRequest;

        /**
         * Verifies a PutExecutionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionsRequest;

        /**
         * Creates a plain object from a PutExecutionsRequest message. Also converts values to other types if specified.
         * @param message PutExecutionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutExecutionsResponse. */
    interface IPutExecutionsResponse {

        /** PutExecutionsResponse executionIds */
        executionIds?: ((number|Long)[]|null);
    }

    /** Represents a PutExecutionsResponse. */
    class PutExecutionsResponse implements IPutExecutionsResponse {

        /**
         * Constructs a new PutExecutionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionsResponse);

        /** PutExecutionsResponse executionIds. */
        public executionIds: (number|Long)[];

        /**
         * Creates a new PutExecutionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionsResponse instance
         */
        public static create(properties?: ml_metadata.IPutExecutionsResponse): ml_metadata.PutExecutionsResponse;

        /**
         * Encodes the specified PutExecutionsResponse message. Does not implicitly {@link ml_metadata.PutExecutionsResponse.verify|verify} messages.
         * @param message PutExecutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionsResponse.verify|verify} messages.
         * @param message PutExecutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionsResponse;

        /**
         * Decodes a PutExecutionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionsResponse;

        /**
         * Verifies a PutExecutionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionsResponse;

        /**
         * Creates a plain object from a PutExecutionsResponse message. Also converts values to other types if specified.
         * @param message PutExecutionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutExecutionTypeRequest. */
    interface IPutExecutionTypeRequest {

        /** PutExecutionTypeRequest executionType */
        executionType?: (ml_metadata.IExecutionType|null);

        /** PutExecutionTypeRequest canAddFields */
        canAddFields?: (boolean|null);

        /** PutExecutionTypeRequest canOmitFields */
        canOmitFields?: (boolean|null);

        /** PutExecutionTypeRequest canDeleteFields */
        canDeleteFields?: (boolean|null);

        /** PutExecutionTypeRequest allFieldsMatch */
        allFieldsMatch?: (boolean|null);
    }

    /** Represents a PutExecutionTypeRequest. */
    class PutExecutionTypeRequest implements IPutExecutionTypeRequest {

        /**
         * Constructs a new PutExecutionTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionTypeRequest);

        /** PutExecutionTypeRequest executionType. */
        public executionType?: (ml_metadata.IExecutionType|null);

        /** PutExecutionTypeRequest canAddFields. */
        public canAddFields: boolean;

        /** PutExecutionTypeRequest canOmitFields. */
        public canOmitFields: boolean;

        /** PutExecutionTypeRequest canDeleteFields. */
        public canDeleteFields: boolean;

        /** PutExecutionTypeRequest allFieldsMatch. */
        public allFieldsMatch: boolean;

        /**
         * Creates a new PutExecutionTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionTypeRequest instance
         */
        public static create(properties?: ml_metadata.IPutExecutionTypeRequest): ml_metadata.PutExecutionTypeRequest;

        /**
         * Encodes the specified PutExecutionTypeRequest message. Does not implicitly {@link ml_metadata.PutExecutionTypeRequest.verify|verify} messages.
         * @param message PutExecutionTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionTypeRequest.verify|verify} messages.
         * @param message PutExecutionTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionTypeRequest;

        /**
         * Decodes a PutExecutionTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionTypeRequest;

        /**
         * Verifies a PutExecutionTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionTypeRequest;

        /**
         * Creates a plain object from a PutExecutionTypeRequest message. Also converts values to other types if specified.
         * @param message PutExecutionTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutExecutionTypeResponse. */
    interface IPutExecutionTypeResponse {

        /** PutExecutionTypeResponse typeId */
        typeId?: (number|Long|null);
    }

    /** Represents a PutExecutionTypeResponse. */
    class PutExecutionTypeResponse implements IPutExecutionTypeResponse {

        /**
         * Constructs a new PutExecutionTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionTypeResponse);

        /** PutExecutionTypeResponse typeId. */
        public typeId: (number|Long);

        /**
         * Creates a new PutExecutionTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionTypeResponse instance
         */
        public static create(properties?: ml_metadata.IPutExecutionTypeResponse): ml_metadata.PutExecutionTypeResponse;

        /**
         * Encodes the specified PutExecutionTypeResponse message. Does not implicitly {@link ml_metadata.PutExecutionTypeResponse.verify|verify} messages.
         * @param message PutExecutionTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionTypeResponse.verify|verify} messages.
         * @param message PutExecutionTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionTypeResponse;

        /**
         * Decodes a PutExecutionTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionTypeResponse;

        /**
         * Verifies a PutExecutionTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionTypeResponse;

        /**
         * Creates a plain object from a PutExecutionTypeResponse message. Also converts values to other types if specified.
         * @param message PutExecutionTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutEventsRequest. */
    interface IPutEventsRequest {

        /** PutEventsRequest events */
        events?: (ml_metadata.IEvent[]|null);
    }

    /** Represents a PutEventsRequest. */
    class PutEventsRequest implements IPutEventsRequest {

        /**
         * Constructs a new PutEventsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutEventsRequest);

        /** PutEventsRequest events. */
        public events: ml_metadata.IEvent[];

        /**
         * Creates a new PutEventsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutEventsRequest instance
         */
        public static create(properties?: ml_metadata.IPutEventsRequest): ml_metadata.PutEventsRequest;

        /**
         * Encodes the specified PutEventsRequest message. Does not implicitly {@link ml_metadata.PutEventsRequest.verify|verify} messages.
         * @param message PutEventsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutEventsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutEventsRequest.verify|verify} messages.
         * @param message PutEventsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutEventsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutEventsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutEventsRequest;

        /**
         * Decodes a PutEventsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutEventsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutEventsRequest;

        /**
         * Verifies a PutEventsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutEventsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutEventsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutEventsRequest;

        /**
         * Creates a plain object from a PutEventsRequest message. Also converts values to other types if specified.
         * @param message PutEventsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutEventsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutEventsResponse. */
    interface IPutEventsResponse {
    }

    /** Represents a PutEventsResponse. */
    class PutEventsResponse implements IPutEventsResponse {

        /**
         * Constructs a new PutEventsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutEventsResponse);

        /**
         * Creates a new PutEventsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutEventsResponse instance
         */
        public static create(properties?: ml_metadata.IPutEventsResponse): ml_metadata.PutEventsResponse;

        /**
         * Encodes the specified PutEventsResponse message. Does not implicitly {@link ml_metadata.PutEventsResponse.verify|verify} messages.
         * @param message PutEventsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutEventsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutEventsResponse.verify|verify} messages.
         * @param message PutEventsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutEventsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutEventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutEventsResponse;

        /**
         * Decodes a PutEventsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutEventsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutEventsResponse;

        /**
         * Verifies a PutEventsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutEventsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutEventsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutEventsResponse;

        /**
         * Creates a plain object from a PutEventsResponse message. Also converts values to other types if specified.
         * @param message PutEventsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutEventsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutExecutionRequest. */
    interface IPutExecutionRequest {

        /** PutExecutionRequest execution */
        execution?: (ml_metadata.IExecution|null);

        /** PutExecutionRequest artifactEventPairs */
        artifactEventPairs?: (ml_metadata.PutExecutionRequest.IArtifactAndEvent[]|null);

        /** PutExecutionRequest contexts */
        contexts?: (ml_metadata.IContext[]|null);

        /** PutExecutionRequest options */
        options?: (ml_metadata.PutExecutionRequest.IOptions|null);
    }

    /** Represents a PutExecutionRequest. */
    class PutExecutionRequest implements IPutExecutionRequest {

        /**
         * Constructs a new PutExecutionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionRequest);

        /** PutExecutionRequest execution. */
        public execution?: (ml_metadata.IExecution|null);

        /** PutExecutionRequest artifactEventPairs. */
        public artifactEventPairs: ml_metadata.PutExecutionRequest.IArtifactAndEvent[];

        /** PutExecutionRequest contexts. */
        public contexts: ml_metadata.IContext[];

        /** PutExecutionRequest options. */
        public options?: (ml_metadata.PutExecutionRequest.IOptions|null);

        /**
         * Creates a new PutExecutionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionRequest instance
         */
        public static create(properties?: ml_metadata.IPutExecutionRequest): ml_metadata.PutExecutionRequest;

        /**
         * Encodes the specified PutExecutionRequest message. Does not implicitly {@link ml_metadata.PutExecutionRequest.verify|verify} messages.
         * @param message PutExecutionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionRequest message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionRequest.verify|verify} messages.
         * @param message PutExecutionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionRequest;

        /**
         * Decodes a PutExecutionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionRequest;

        /**
         * Verifies a PutExecutionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionRequest;

        /**
         * Creates a plain object from a PutExecutionRequest message. Also converts values to other types if specified.
         * @param message PutExecutionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PutExecutionRequest {

        /** Properties of an ArtifactAndEvent. */
        interface IArtifactAndEvent {

            /** ArtifactAndEvent artifact */
            artifact?: (ml_metadata.IArtifact|null);

            /** ArtifactAndEvent event */
            event?: (ml_metadata.IEvent|null);
        }

        /** Represents an ArtifactAndEvent. */
        class ArtifactAndEvent implements IArtifactAndEvent {

            /**
             * Constructs a new ArtifactAndEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.PutExecutionRequest.IArtifactAndEvent);

            /** ArtifactAndEvent artifact. */
            public artifact?: (ml_metadata.IArtifact|null);

            /** ArtifactAndEvent event. */
            public event?: (ml_metadata.IEvent|null);

            /**
             * Creates a new ArtifactAndEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ArtifactAndEvent instance
             */
            public static create(properties?: ml_metadata.PutExecutionRequest.IArtifactAndEvent): ml_metadata.PutExecutionRequest.ArtifactAndEvent;

            /**
             * Encodes the specified ArtifactAndEvent message. Does not implicitly {@link ml_metadata.PutExecutionRequest.ArtifactAndEvent.verify|verify} messages.
             * @param message ArtifactAndEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.PutExecutionRequest.IArtifactAndEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ArtifactAndEvent message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionRequest.ArtifactAndEvent.verify|verify} messages.
             * @param message ArtifactAndEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.PutExecutionRequest.IArtifactAndEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ArtifactAndEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ArtifactAndEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionRequest.ArtifactAndEvent;

            /**
             * Decodes an ArtifactAndEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ArtifactAndEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionRequest.ArtifactAndEvent;

            /**
             * Verifies an ArtifactAndEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ArtifactAndEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ArtifactAndEvent
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionRequest.ArtifactAndEvent;

            /**
             * Creates a plain object from an ArtifactAndEvent message. Also converts values to other types if specified.
             * @param message ArtifactAndEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.PutExecutionRequest.ArtifactAndEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ArtifactAndEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Options. */
        interface IOptions {

            /** Options reuseContextIfAlreadyExist */
            reuseContextIfAlreadyExist?: (boolean|null);
        }

        /** Represents an Options. */
        class Options implements IOptions {

            /**
             * Constructs a new Options.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.PutExecutionRequest.IOptions);

            /** Options reuseContextIfAlreadyExist. */
            public reuseContextIfAlreadyExist: boolean;

            /**
             * Creates a new Options instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Options instance
             */
            public static create(properties?: ml_metadata.PutExecutionRequest.IOptions): ml_metadata.PutExecutionRequest.Options;

            /**
             * Encodes the specified Options message. Does not implicitly {@link ml_metadata.PutExecutionRequest.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.PutExecutionRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Options message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionRequest.Options.verify|verify} messages.
             * @param message Options message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.PutExecutionRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Options message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionRequest.Options;

            /**
             * Decodes an Options message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Options
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionRequest.Options;

            /**
             * Verifies an Options message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Options message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Options
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionRequest.Options;

            /**
             * Creates a plain object from an Options message. Also converts values to other types if specified.
             * @param message Options
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.PutExecutionRequest.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Options to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PutExecutionResponse. */
    interface IPutExecutionResponse {

        /** PutExecutionResponse executionId */
        executionId?: (number|Long|null);

        /** PutExecutionResponse artifactIds */
        artifactIds?: ((number|Long)[]|null);

        /** PutExecutionResponse contextIds */
        contextIds?: ((number|Long)[]|null);
    }

    /** Represents a PutExecutionResponse. */
    class PutExecutionResponse implements IPutExecutionResponse {

        /**
         * Constructs a new PutExecutionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutExecutionResponse);

        /** PutExecutionResponse executionId. */
        public executionId: (number|Long);

        /** PutExecutionResponse artifactIds. */
        public artifactIds: (number|Long)[];

        /** PutExecutionResponse contextIds. */
        public contextIds: (number|Long)[];

        /**
         * Creates a new PutExecutionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutExecutionResponse instance
         */
        public static create(properties?: ml_metadata.IPutExecutionResponse): ml_metadata.PutExecutionResponse;

        /**
         * Encodes the specified PutExecutionResponse message. Does not implicitly {@link ml_metadata.PutExecutionResponse.verify|verify} messages.
         * @param message PutExecutionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutExecutionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutExecutionResponse message, length delimited. Does not implicitly {@link ml_metadata.PutExecutionResponse.verify|verify} messages.
         * @param message PutExecutionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutExecutionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutExecutionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutExecutionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutExecutionResponse;

        /**
         * Decodes a PutExecutionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutExecutionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutExecutionResponse;

        /**
         * Verifies a PutExecutionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutExecutionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutExecutionResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutExecutionResponse;

        /**
         * Creates a plain object from a PutExecutionResponse message. Also converts values to other types if specified.
         * @param message PutExecutionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutExecutionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutExecutionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutTypesRequest. */
    interface IPutTypesRequest {

        /** PutTypesRequest artifactTypes */
        artifactTypes?: (ml_metadata.IArtifactType[]|null);

        /** PutTypesRequest executionTypes */
        executionTypes?: (ml_metadata.IExecutionType[]|null);

        /** PutTypesRequest contextTypes */
        contextTypes?: (ml_metadata.IContextType[]|null);

        /** PutTypesRequest canAddFields */
        canAddFields?: (boolean|null);

        /** PutTypesRequest canOmitFields */
        canOmitFields?: (boolean|null);

        /** PutTypesRequest canDeleteFields */
        canDeleteFields?: (boolean|null);

        /** PutTypesRequest allFieldsMatch */
        allFieldsMatch?: (boolean|null);
    }

    /** Represents a PutTypesRequest. */
    class PutTypesRequest implements IPutTypesRequest {

        /**
         * Constructs a new PutTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutTypesRequest);

        /** PutTypesRequest artifactTypes. */
        public artifactTypes: ml_metadata.IArtifactType[];

        /** PutTypesRequest executionTypes. */
        public executionTypes: ml_metadata.IExecutionType[];

        /** PutTypesRequest contextTypes. */
        public contextTypes: ml_metadata.IContextType[];

        /** PutTypesRequest canAddFields. */
        public canAddFields: boolean;

        /** PutTypesRequest canOmitFields. */
        public canOmitFields: boolean;

        /** PutTypesRequest canDeleteFields. */
        public canDeleteFields: boolean;

        /** PutTypesRequest allFieldsMatch. */
        public allFieldsMatch: boolean;

        /**
         * Creates a new PutTypesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutTypesRequest instance
         */
        public static create(properties?: ml_metadata.IPutTypesRequest): ml_metadata.PutTypesRequest;

        /**
         * Encodes the specified PutTypesRequest message. Does not implicitly {@link ml_metadata.PutTypesRequest.verify|verify} messages.
         * @param message PutTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutTypesRequest message, length delimited. Does not implicitly {@link ml_metadata.PutTypesRequest.verify|verify} messages.
         * @param message PutTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutTypesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutTypesRequest;

        /**
         * Decodes a PutTypesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutTypesRequest;

        /**
         * Verifies a PutTypesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutTypesRequest;

        /**
         * Creates a plain object from a PutTypesRequest message. Also converts values to other types if specified.
         * @param message PutTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutTypesResponse. */
    interface IPutTypesResponse {

        /** PutTypesResponse artifactTypeIds */
        artifactTypeIds?: ((number|Long)[]|null);

        /** PutTypesResponse executionTypeIds */
        executionTypeIds?: ((number|Long)[]|null);

        /** PutTypesResponse contextTypeIds */
        contextTypeIds?: ((number|Long)[]|null);
    }

    /** Represents a PutTypesResponse. */
    class PutTypesResponse implements IPutTypesResponse {

        /**
         * Constructs a new PutTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutTypesResponse);

        /** PutTypesResponse artifactTypeIds. */
        public artifactTypeIds: (number|Long)[];

        /** PutTypesResponse executionTypeIds. */
        public executionTypeIds: (number|Long)[];

        /** PutTypesResponse contextTypeIds. */
        public contextTypeIds: (number|Long)[];

        /**
         * Creates a new PutTypesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutTypesResponse instance
         */
        public static create(properties?: ml_metadata.IPutTypesResponse): ml_metadata.PutTypesResponse;

        /**
         * Encodes the specified PutTypesResponse message. Does not implicitly {@link ml_metadata.PutTypesResponse.verify|verify} messages.
         * @param message PutTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutTypesResponse message, length delimited. Does not implicitly {@link ml_metadata.PutTypesResponse.verify|verify} messages.
         * @param message PutTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutTypesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutTypesResponse;

        /**
         * Decodes a PutTypesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutTypesResponse;

        /**
         * Verifies a PutTypesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutTypesResponse;

        /**
         * Creates a plain object from a PutTypesResponse message. Also converts values to other types if specified.
         * @param message PutTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutContextTypeRequest. */
    interface IPutContextTypeRequest {

        /** PutContextTypeRequest contextType */
        contextType?: (ml_metadata.IContextType|null);

        /** PutContextTypeRequest canAddFields */
        canAddFields?: (boolean|null);

        /** PutContextTypeRequest canOmitFields */
        canOmitFields?: (boolean|null);

        /** PutContextTypeRequest canDeleteFields */
        canDeleteFields?: (boolean|null);

        /** PutContextTypeRequest allFieldsMatch */
        allFieldsMatch?: (boolean|null);
    }

    /** Represents a PutContextTypeRequest. */
    class PutContextTypeRequest implements IPutContextTypeRequest {

        /**
         * Constructs a new PutContextTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutContextTypeRequest);

        /** PutContextTypeRequest contextType. */
        public contextType?: (ml_metadata.IContextType|null);

        /** PutContextTypeRequest canAddFields. */
        public canAddFields: boolean;

        /** PutContextTypeRequest canOmitFields. */
        public canOmitFields: boolean;

        /** PutContextTypeRequest canDeleteFields. */
        public canDeleteFields: boolean;

        /** PutContextTypeRequest allFieldsMatch. */
        public allFieldsMatch: boolean;

        /**
         * Creates a new PutContextTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutContextTypeRequest instance
         */
        public static create(properties?: ml_metadata.IPutContextTypeRequest): ml_metadata.PutContextTypeRequest;

        /**
         * Encodes the specified PutContextTypeRequest message. Does not implicitly {@link ml_metadata.PutContextTypeRequest.verify|verify} messages.
         * @param message PutContextTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutContextTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutContextTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.PutContextTypeRequest.verify|verify} messages.
         * @param message PutContextTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutContextTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutContextTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutContextTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutContextTypeRequest;

        /**
         * Decodes a PutContextTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutContextTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutContextTypeRequest;

        /**
         * Verifies a PutContextTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutContextTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutContextTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutContextTypeRequest;

        /**
         * Creates a plain object from a PutContextTypeRequest message. Also converts values to other types if specified.
         * @param message PutContextTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutContextTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutContextTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutContextTypeResponse. */
    interface IPutContextTypeResponse {

        /** PutContextTypeResponse typeId */
        typeId?: (number|Long|null);
    }

    /** Represents a PutContextTypeResponse. */
    class PutContextTypeResponse implements IPutContextTypeResponse {

        /**
         * Constructs a new PutContextTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutContextTypeResponse);

        /** PutContextTypeResponse typeId. */
        public typeId: (number|Long);

        /**
         * Creates a new PutContextTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutContextTypeResponse instance
         */
        public static create(properties?: ml_metadata.IPutContextTypeResponse): ml_metadata.PutContextTypeResponse;

        /**
         * Encodes the specified PutContextTypeResponse message. Does not implicitly {@link ml_metadata.PutContextTypeResponse.verify|verify} messages.
         * @param message PutContextTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutContextTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutContextTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.PutContextTypeResponse.verify|verify} messages.
         * @param message PutContextTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutContextTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutContextTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutContextTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutContextTypeResponse;

        /**
         * Decodes a PutContextTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutContextTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutContextTypeResponse;

        /**
         * Verifies a PutContextTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutContextTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutContextTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutContextTypeResponse;

        /**
         * Creates a plain object from a PutContextTypeResponse message. Also converts values to other types if specified.
         * @param message PutContextTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutContextTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutContextTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutContextsRequest. */
    interface IPutContextsRequest {

        /** PutContextsRequest contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a PutContextsRequest. */
    class PutContextsRequest implements IPutContextsRequest {

        /**
         * Constructs a new PutContextsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutContextsRequest);

        /** PutContextsRequest contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new PutContextsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutContextsRequest instance
         */
        public static create(properties?: ml_metadata.IPutContextsRequest): ml_metadata.PutContextsRequest;

        /**
         * Encodes the specified PutContextsRequest message. Does not implicitly {@link ml_metadata.PutContextsRequest.verify|verify} messages.
         * @param message PutContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutContextsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutContextsRequest.verify|verify} messages.
         * @param message PutContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutContextsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutContextsRequest;

        /**
         * Decodes a PutContextsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutContextsRequest;

        /**
         * Verifies a PutContextsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutContextsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutContextsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutContextsRequest;

        /**
         * Creates a plain object from a PutContextsRequest message. Also converts values to other types if specified.
         * @param message PutContextsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutContextsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutContextsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutContextsResponse. */
    interface IPutContextsResponse {

        /** PutContextsResponse contextIds */
        contextIds?: ((number|Long)[]|null);
    }

    /** Represents a PutContextsResponse. */
    class PutContextsResponse implements IPutContextsResponse {

        /**
         * Constructs a new PutContextsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutContextsResponse);

        /** PutContextsResponse contextIds. */
        public contextIds: (number|Long)[];

        /**
         * Creates a new PutContextsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutContextsResponse instance
         */
        public static create(properties?: ml_metadata.IPutContextsResponse): ml_metadata.PutContextsResponse;

        /**
         * Encodes the specified PutContextsResponse message. Does not implicitly {@link ml_metadata.PutContextsResponse.verify|verify} messages.
         * @param message PutContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutContextsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutContextsResponse.verify|verify} messages.
         * @param message PutContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutContextsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutContextsResponse;

        /**
         * Decodes a PutContextsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutContextsResponse;

        /**
         * Verifies a PutContextsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutContextsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutContextsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutContextsResponse;

        /**
         * Creates a plain object from a PutContextsResponse message. Also converts values to other types if specified.
         * @param message PutContextsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutContextsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutContextsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutAttributionsAndAssociationsRequest. */
    interface IPutAttributionsAndAssociationsRequest {

        /** PutAttributionsAndAssociationsRequest attributions */
        attributions?: (ml_metadata.IAttribution[]|null);

        /** PutAttributionsAndAssociationsRequest associations */
        associations?: (ml_metadata.IAssociation[]|null);
    }

    /** Represents a PutAttributionsAndAssociationsRequest. */
    class PutAttributionsAndAssociationsRequest implements IPutAttributionsAndAssociationsRequest {

        /**
         * Constructs a new PutAttributionsAndAssociationsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutAttributionsAndAssociationsRequest);

        /** PutAttributionsAndAssociationsRequest attributions. */
        public attributions: ml_metadata.IAttribution[];

        /** PutAttributionsAndAssociationsRequest associations. */
        public associations: ml_metadata.IAssociation[];

        /**
         * Creates a new PutAttributionsAndAssociationsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutAttributionsAndAssociationsRequest instance
         */
        public static create(properties?: ml_metadata.IPutAttributionsAndAssociationsRequest): ml_metadata.PutAttributionsAndAssociationsRequest;

        /**
         * Encodes the specified PutAttributionsAndAssociationsRequest message. Does not implicitly {@link ml_metadata.PutAttributionsAndAssociationsRequest.verify|verify} messages.
         * @param message PutAttributionsAndAssociationsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutAttributionsAndAssociationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutAttributionsAndAssociationsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutAttributionsAndAssociationsRequest.verify|verify} messages.
         * @param message PutAttributionsAndAssociationsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutAttributionsAndAssociationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutAttributionsAndAssociationsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutAttributionsAndAssociationsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutAttributionsAndAssociationsRequest;

        /**
         * Decodes a PutAttributionsAndAssociationsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutAttributionsAndAssociationsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutAttributionsAndAssociationsRequest;

        /**
         * Verifies a PutAttributionsAndAssociationsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutAttributionsAndAssociationsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutAttributionsAndAssociationsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutAttributionsAndAssociationsRequest;

        /**
         * Creates a plain object from a PutAttributionsAndAssociationsRequest message. Also converts values to other types if specified.
         * @param message PutAttributionsAndAssociationsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutAttributionsAndAssociationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutAttributionsAndAssociationsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutAttributionsAndAssociationsResponse. */
    interface IPutAttributionsAndAssociationsResponse {
    }

    /** Represents a PutAttributionsAndAssociationsResponse. */
    class PutAttributionsAndAssociationsResponse implements IPutAttributionsAndAssociationsResponse {

        /**
         * Constructs a new PutAttributionsAndAssociationsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutAttributionsAndAssociationsResponse);

        /**
         * Creates a new PutAttributionsAndAssociationsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutAttributionsAndAssociationsResponse instance
         */
        public static create(properties?: ml_metadata.IPutAttributionsAndAssociationsResponse): ml_metadata.PutAttributionsAndAssociationsResponse;

        /**
         * Encodes the specified PutAttributionsAndAssociationsResponse message. Does not implicitly {@link ml_metadata.PutAttributionsAndAssociationsResponse.verify|verify} messages.
         * @param message PutAttributionsAndAssociationsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutAttributionsAndAssociationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutAttributionsAndAssociationsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutAttributionsAndAssociationsResponse.verify|verify} messages.
         * @param message PutAttributionsAndAssociationsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutAttributionsAndAssociationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutAttributionsAndAssociationsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutAttributionsAndAssociationsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutAttributionsAndAssociationsResponse;

        /**
         * Decodes a PutAttributionsAndAssociationsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutAttributionsAndAssociationsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutAttributionsAndAssociationsResponse;

        /**
         * Verifies a PutAttributionsAndAssociationsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutAttributionsAndAssociationsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutAttributionsAndAssociationsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutAttributionsAndAssociationsResponse;

        /**
         * Creates a plain object from a PutAttributionsAndAssociationsResponse message. Also converts values to other types if specified.
         * @param message PutAttributionsAndAssociationsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutAttributionsAndAssociationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutAttributionsAndAssociationsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutParentContextsRequest. */
    interface IPutParentContextsRequest {

        /** PutParentContextsRequest parentContexts */
        parentContexts?: (ml_metadata.IParentContext[]|null);
    }

    /** Represents a PutParentContextsRequest. */
    class PutParentContextsRequest implements IPutParentContextsRequest {

        /**
         * Constructs a new PutParentContextsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutParentContextsRequest);

        /** PutParentContextsRequest parentContexts. */
        public parentContexts: ml_metadata.IParentContext[];

        /**
         * Creates a new PutParentContextsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutParentContextsRequest instance
         */
        public static create(properties?: ml_metadata.IPutParentContextsRequest): ml_metadata.PutParentContextsRequest;

        /**
         * Encodes the specified PutParentContextsRequest message. Does not implicitly {@link ml_metadata.PutParentContextsRequest.verify|verify} messages.
         * @param message PutParentContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutParentContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutParentContextsRequest message, length delimited. Does not implicitly {@link ml_metadata.PutParentContextsRequest.verify|verify} messages.
         * @param message PutParentContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutParentContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutParentContextsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutParentContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutParentContextsRequest;

        /**
         * Decodes a PutParentContextsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutParentContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutParentContextsRequest;

        /**
         * Verifies a PutParentContextsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutParentContextsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutParentContextsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutParentContextsRequest;

        /**
         * Creates a plain object from a PutParentContextsRequest message. Also converts values to other types if specified.
         * @param message PutParentContextsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutParentContextsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutParentContextsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PutParentContextsResponse. */
    interface IPutParentContextsResponse {
    }

    /** Represents a PutParentContextsResponse. */
    class PutParentContextsResponse implements IPutParentContextsResponse {

        /**
         * Constructs a new PutParentContextsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IPutParentContextsResponse);

        /**
         * Creates a new PutParentContextsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PutParentContextsResponse instance
         */
        public static create(properties?: ml_metadata.IPutParentContextsResponse): ml_metadata.PutParentContextsResponse;

        /**
         * Encodes the specified PutParentContextsResponse message. Does not implicitly {@link ml_metadata.PutParentContextsResponse.verify|verify} messages.
         * @param message PutParentContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IPutParentContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PutParentContextsResponse message, length delimited. Does not implicitly {@link ml_metadata.PutParentContextsResponse.verify|verify} messages.
         * @param message PutParentContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IPutParentContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PutParentContextsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PutParentContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.PutParentContextsResponse;

        /**
         * Decodes a PutParentContextsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PutParentContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.PutParentContextsResponse;

        /**
         * Verifies a PutParentContextsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PutParentContextsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PutParentContextsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.PutParentContextsResponse;

        /**
         * Creates a plain object from a PutParentContextsResponse message. Also converts values to other types if specified.
         * @param message PutParentContextsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.PutParentContextsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PutParentContextsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByTypeRequest. */
    interface IGetArtifactsByTypeRequest {

        /** GetArtifactsByTypeRequest typeName */
        typeName?: (string|null);

        /** GetArtifactsByTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetArtifactsByTypeRequest. */
    class GetArtifactsByTypeRequest implements IGetArtifactsByTypeRequest {

        /**
         * Constructs a new GetArtifactsByTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByTypeRequest);

        /** GetArtifactsByTypeRequest typeName. */
        public typeName: string;

        /** GetArtifactsByTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetArtifactsByTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByTypeRequest): ml_metadata.GetArtifactsByTypeRequest;

        /**
         * Encodes the specified GetArtifactsByTypeRequest message. Does not implicitly {@link ml_metadata.GetArtifactsByTypeRequest.verify|verify} messages.
         * @param message GetArtifactsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByTypeRequest.verify|verify} messages.
         * @param message GetArtifactsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByTypeRequest;

        /**
         * Decodes a GetArtifactsByTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByTypeRequest;

        /**
         * Verifies a GetArtifactsByTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByTypeRequest;

        /**
         * Creates a plain object from a GetArtifactsByTypeRequest message. Also converts values to other types if specified.
         * @param message GetArtifactsByTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByTypeResponse. */
    interface IGetArtifactsByTypeResponse {

        /** GetArtifactsByTypeResponse artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);
    }

    /** Represents a GetArtifactsByTypeResponse. */
    class GetArtifactsByTypeResponse implements IGetArtifactsByTypeResponse {

        /**
         * Constructs a new GetArtifactsByTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByTypeResponse);

        /** GetArtifactsByTypeResponse artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /**
         * Creates a new GetArtifactsByTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByTypeResponse): ml_metadata.GetArtifactsByTypeResponse;

        /**
         * Encodes the specified GetArtifactsByTypeResponse message. Does not implicitly {@link ml_metadata.GetArtifactsByTypeResponse.verify|verify} messages.
         * @param message GetArtifactsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByTypeResponse.verify|verify} messages.
         * @param message GetArtifactsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByTypeResponse;

        /**
         * Decodes a GetArtifactsByTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByTypeResponse;

        /**
         * Verifies a GetArtifactsByTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByTypeResponse;

        /**
         * Creates a plain object from a GetArtifactsByTypeResponse message. Also converts values to other types if specified.
         * @param message GetArtifactsByTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactByTypeAndNameRequest. */
    interface IGetArtifactByTypeAndNameRequest {

        /** GetArtifactByTypeAndNameRequest typeName */
        typeName?: (string|null);

        /** GetArtifactByTypeAndNameRequest typeVersion */
        typeVersion?: (string|null);

        /** GetArtifactByTypeAndNameRequest artifactName */
        artifactName?: (string|null);
    }

    /** Represents a GetArtifactByTypeAndNameRequest. */
    class GetArtifactByTypeAndNameRequest implements IGetArtifactByTypeAndNameRequest {

        /**
         * Constructs a new GetArtifactByTypeAndNameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactByTypeAndNameRequest);

        /** GetArtifactByTypeAndNameRequest typeName. */
        public typeName: string;

        /** GetArtifactByTypeAndNameRequest typeVersion. */
        public typeVersion: string;

        /** GetArtifactByTypeAndNameRequest artifactName. */
        public artifactName: string;

        /**
         * Creates a new GetArtifactByTypeAndNameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactByTypeAndNameRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactByTypeAndNameRequest): ml_metadata.GetArtifactByTypeAndNameRequest;

        /**
         * Encodes the specified GetArtifactByTypeAndNameRequest message. Does not implicitly {@link ml_metadata.GetArtifactByTypeAndNameRequest.verify|verify} messages.
         * @param message GetArtifactByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactByTypeAndNameRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactByTypeAndNameRequest.verify|verify} messages.
         * @param message GetArtifactByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactByTypeAndNameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactByTypeAndNameRequest;

        /**
         * Decodes a GetArtifactByTypeAndNameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactByTypeAndNameRequest;

        /**
         * Verifies a GetArtifactByTypeAndNameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactByTypeAndNameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactByTypeAndNameRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactByTypeAndNameRequest;

        /**
         * Creates a plain object from a GetArtifactByTypeAndNameRequest message. Also converts values to other types if specified.
         * @param message GetArtifactByTypeAndNameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactByTypeAndNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactByTypeAndNameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactByTypeAndNameResponse. */
    interface IGetArtifactByTypeAndNameResponse {

        /** GetArtifactByTypeAndNameResponse artifact */
        artifact?: (ml_metadata.IArtifact|null);
    }

    /** Represents a GetArtifactByTypeAndNameResponse. */
    class GetArtifactByTypeAndNameResponse implements IGetArtifactByTypeAndNameResponse {

        /**
         * Constructs a new GetArtifactByTypeAndNameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactByTypeAndNameResponse);

        /** GetArtifactByTypeAndNameResponse artifact. */
        public artifact?: (ml_metadata.IArtifact|null);

        /**
         * Creates a new GetArtifactByTypeAndNameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactByTypeAndNameResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactByTypeAndNameResponse): ml_metadata.GetArtifactByTypeAndNameResponse;

        /**
         * Encodes the specified GetArtifactByTypeAndNameResponse message. Does not implicitly {@link ml_metadata.GetArtifactByTypeAndNameResponse.verify|verify} messages.
         * @param message GetArtifactByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactByTypeAndNameResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactByTypeAndNameResponse.verify|verify} messages.
         * @param message GetArtifactByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactByTypeAndNameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactByTypeAndNameResponse;

        /**
         * Decodes a GetArtifactByTypeAndNameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactByTypeAndNameResponse;

        /**
         * Verifies a GetArtifactByTypeAndNameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactByTypeAndNameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactByTypeAndNameResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactByTypeAndNameResponse;

        /**
         * Creates a plain object from a GetArtifactByTypeAndNameResponse message. Also converts values to other types if specified.
         * @param message GetArtifactByTypeAndNameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactByTypeAndNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactByTypeAndNameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByIDRequest. */
    interface IGetArtifactsByIDRequest {

        /** GetArtifactsByIDRequest artifactIds */
        artifactIds?: ((number|Long)[]|null);
    }

    /** Represents a GetArtifactsByIDRequest. */
    class GetArtifactsByIDRequest implements IGetArtifactsByIDRequest {

        /**
         * Constructs a new GetArtifactsByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByIDRequest);

        /** GetArtifactsByIDRequest artifactIds. */
        public artifactIds: (number|Long)[];

        /**
         * Creates a new GetArtifactsByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByIDRequest): ml_metadata.GetArtifactsByIDRequest;

        /**
         * Encodes the specified GetArtifactsByIDRequest message. Does not implicitly {@link ml_metadata.GetArtifactsByIDRequest.verify|verify} messages.
         * @param message GetArtifactsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByIDRequest.verify|verify} messages.
         * @param message GetArtifactsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByIDRequest;

        /**
         * Decodes a GetArtifactsByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByIDRequest;

        /**
         * Verifies a GetArtifactsByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByIDRequest;

        /**
         * Creates a plain object from a GetArtifactsByIDRequest message. Also converts values to other types if specified.
         * @param message GetArtifactsByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByIDResponse. */
    interface IGetArtifactsByIDResponse {

        /** GetArtifactsByIDResponse artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);
    }

    /** Represents a GetArtifactsByIDResponse. */
    class GetArtifactsByIDResponse implements IGetArtifactsByIDResponse {

        /**
         * Constructs a new GetArtifactsByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByIDResponse);

        /** GetArtifactsByIDResponse artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /**
         * Creates a new GetArtifactsByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByIDResponse): ml_metadata.GetArtifactsByIDResponse;

        /**
         * Encodes the specified GetArtifactsByIDResponse message. Does not implicitly {@link ml_metadata.GetArtifactsByIDResponse.verify|verify} messages.
         * @param message GetArtifactsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByIDResponse.verify|verify} messages.
         * @param message GetArtifactsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByIDResponse;

        /**
         * Decodes a GetArtifactsByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByIDResponse;

        /**
         * Verifies a GetArtifactsByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByIDResponse;

        /**
         * Creates a plain object from a GetArtifactsByIDResponse message. Also converts values to other types if specified.
         * @param message GetArtifactsByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsRequest. */
    interface IGetArtifactsRequest {

        /** GetArtifactsRequest options */
        options?: (ml_metadata.IListOperationOptions|null);
    }

    /** Represents a GetArtifactsRequest. */
    class GetArtifactsRequest implements IGetArtifactsRequest {

        /**
         * Constructs a new GetArtifactsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsRequest);

        /** GetArtifactsRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /**
         * Creates a new GetArtifactsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsRequest): ml_metadata.GetArtifactsRequest;

        /**
         * Encodes the specified GetArtifactsRequest message. Does not implicitly {@link ml_metadata.GetArtifactsRequest.verify|verify} messages.
         * @param message GetArtifactsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsRequest.verify|verify} messages.
         * @param message GetArtifactsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsRequest;

        /**
         * Decodes a GetArtifactsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsRequest;

        /**
         * Verifies a GetArtifactsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsRequest;

        /**
         * Creates a plain object from a GetArtifactsRequest message. Also converts values to other types if specified.
         * @param message GetArtifactsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsResponse. */
    interface IGetArtifactsResponse {

        /** GetArtifactsResponse artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);

        /** GetArtifactsResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetArtifactsResponse. */
    class GetArtifactsResponse implements IGetArtifactsResponse {

        /**
         * Constructs a new GetArtifactsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsResponse);

        /** GetArtifactsResponse artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /** GetArtifactsResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetArtifactsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsResponse): ml_metadata.GetArtifactsResponse;

        /**
         * Encodes the specified GetArtifactsResponse message. Does not implicitly {@link ml_metadata.GetArtifactsResponse.verify|verify} messages.
         * @param message GetArtifactsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsResponse.verify|verify} messages.
         * @param message GetArtifactsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsResponse;

        /**
         * Decodes a GetArtifactsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsResponse;

        /**
         * Verifies a GetArtifactsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsResponse;

        /**
         * Creates a plain object from a GetArtifactsResponse message. Also converts values to other types if specified.
         * @param message GetArtifactsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByURIRequest. */
    interface IGetArtifactsByURIRequest {

        /** GetArtifactsByURIRequest uris */
        uris?: (string[]|null);
    }

    /** Represents a GetArtifactsByURIRequest. */
    class GetArtifactsByURIRequest implements IGetArtifactsByURIRequest {

        /**
         * Constructs a new GetArtifactsByURIRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByURIRequest);

        /** GetArtifactsByURIRequest uris. */
        public uris: string[];

        /**
         * Creates a new GetArtifactsByURIRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByURIRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByURIRequest): ml_metadata.GetArtifactsByURIRequest;

        /**
         * Encodes the specified GetArtifactsByURIRequest message. Does not implicitly {@link ml_metadata.GetArtifactsByURIRequest.verify|verify} messages.
         * @param message GetArtifactsByURIRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByURIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByURIRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByURIRequest.verify|verify} messages.
         * @param message GetArtifactsByURIRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByURIRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByURIRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByURIRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByURIRequest;

        /**
         * Decodes a GetArtifactsByURIRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByURIRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByURIRequest;

        /**
         * Verifies a GetArtifactsByURIRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByURIRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByURIRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByURIRequest;

        /**
         * Creates a plain object from a GetArtifactsByURIRequest message. Also converts values to other types if specified.
         * @param message GetArtifactsByURIRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByURIRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByURIRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByURIResponse. */
    interface IGetArtifactsByURIResponse {

        /** GetArtifactsByURIResponse artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);
    }

    /** Represents a GetArtifactsByURIResponse. */
    class GetArtifactsByURIResponse implements IGetArtifactsByURIResponse {

        /**
         * Constructs a new GetArtifactsByURIResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByURIResponse);

        /** GetArtifactsByURIResponse artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /**
         * Creates a new GetArtifactsByURIResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByURIResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByURIResponse): ml_metadata.GetArtifactsByURIResponse;

        /**
         * Encodes the specified GetArtifactsByURIResponse message. Does not implicitly {@link ml_metadata.GetArtifactsByURIResponse.verify|verify} messages.
         * @param message GetArtifactsByURIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByURIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByURIResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByURIResponse.verify|verify} messages.
         * @param message GetArtifactsByURIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByURIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByURIResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByURIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByURIResponse;

        /**
         * Decodes a GetArtifactsByURIResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByURIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByURIResponse;

        /**
         * Verifies a GetArtifactsByURIResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByURIResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByURIResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByURIResponse;

        /**
         * Creates a plain object from a GetArtifactsByURIResponse message. Also converts values to other types if specified.
         * @param message GetArtifactsByURIResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByURIResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByURIResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsRequest. */
    interface IGetExecutionsRequest {

        /** GetExecutionsRequest options */
        options?: (ml_metadata.IListOperationOptions|null);
    }

    /** Represents a GetExecutionsRequest. */
    class GetExecutionsRequest implements IGetExecutionsRequest {

        /**
         * Constructs a new GetExecutionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsRequest);

        /** GetExecutionsRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /**
         * Creates a new GetExecutionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsRequest): ml_metadata.GetExecutionsRequest;

        /**
         * Encodes the specified GetExecutionsRequest message. Does not implicitly {@link ml_metadata.GetExecutionsRequest.verify|verify} messages.
         * @param message GetExecutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsRequest.verify|verify} messages.
         * @param message GetExecutionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsRequest;

        /**
         * Decodes a GetExecutionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsRequest;

        /**
         * Verifies a GetExecutionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsRequest;

        /**
         * Creates a plain object from a GetExecutionsRequest message. Also converts values to other types if specified.
         * @param message GetExecutionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsResponse. */
    interface IGetExecutionsResponse {

        /** GetExecutionsResponse executions */
        executions?: (ml_metadata.IExecution[]|null);

        /** GetExecutionsResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetExecutionsResponse. */
    class GetExecutionsResponse implements IGetExecutionsResponse {

        /**
         * Constructs a new GetExecutionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsResponse);

        /** GetExecutionsResponse executions. */
        public executions: ml_metadata.IExecution[];

        /** GetExecutionsResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetExecutionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsResponse): ml_metadata.GetExecutionsResponse;

        /**
         * Encodes the specified GetExecutionsResponse message. Does not implicitly {@link ml_metadata.GetExecutionsResponse.verify|verify} messages.
         * @param message GetExecutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsResponse.verify|verify} messages.
         * @param message GetExecutionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsResponse;

        /**
         * Decodes a GetExecutionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsResponse;

        /**
         * Verifies a GetExecutionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsResponse;

        /**
         * Creates a plain object from a GetExecutionsResponse message. Also converts values to other types if specified.
         * @param message GetExecutionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypeRequest. */
    interface IGetArtifactTypeRequest {

        /** GetArtifactTypeRequest typeName */
        typeName?: (string|null);

        /** GetArtifactTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetArtifactTypeRequest. */
    class GetArtifactTypeRequest implements IGetArtifactTypeRequest {

        /**
         * Constructs a new GetArtifactTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypeRequest);

        /** GetArtifactTypeRequest typeName. */
        public typeName: string;

        /** GetArtifactTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetArtifactTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypeRequest): ml_metadata.GetArtifactTypeRequest;

        /**
         * Encodes the specified GetArtifactTypeRequest message. Does not implicitly {@link ml_metadata.GetArtifactTypeRequest.verify|verify} messages.
         * @param message GetArtifactTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypeRequest.verify|verify} messages.
         * @param message GetArtifactTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypeRequest;

        /**
         * Decodes a GetArtifactTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypeRequest;

        /**
         * Verifies a GetArtifactTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypeRequest;

        /**
         * Creates a plain object from a GetArtifactTypeRequest message. Also converts values to other types if specified.
         * @param message GetArtifactTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypeResponse. */
    interface IGetArtifactTypeResponse {

        /** GetArtifactTypeResponse artifactType */
        artifactType?: (ml_metadata.IArtifactType|null);
    }

    /** Represents a GetArtifactTypeResponse. */
    class GetArtifactTypeResponse implements IGetArtifactTypeResponse {

        /**
         * Constructs a new GetArtifactTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypeResponse);

        /** GetArtifactTypeResponse artifactType. */
        public artifactType?: (ml_metadata.IArtifactType|null);

        /**
         * Creates a new GetArtifactTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypeResponse): ml_metadata.GetArtifactTypeResponse;

        /**
         * Encodes the specified GetArtifactTypeResponse message. Does not implicitly {@link ml_metadata.GetArtifactTypeResponse.verify|verify} messages.
         * @param message GetArtifactTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypeResponse.verify|verify} messages.
         * @param message GetArtifactTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypeResponse;

        /**
         * Decodes a GetArtifactTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypeResponse;

        /**
         * Verifies a GetArtifactTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypeResponse;

        /**
         * Creates a plain object from a GetArtifactTypeResponse message. Also converts values to other types if specified.
         * @param message GetArtifactTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypesRequest. */
    interface IGetArtifactTypesRequest {
    }

    /** Represents a GetArtifactTypesRequest. */
    class GetArtifactTypesRequest implements IGetArtifactTypesRequest {

        /**
         * Constructs a new GetArtifactTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypesRequest);

        /**
         * Creates a new GetArtifactTypesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypesRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypesRequest): ml_metadata.GetArtifactTypesRequest;

        /**
         * Encodes the specified GetArtifactTypesRequest message. Does not implicitly {@link ml_metadata.GetArtifactTypesRequest.verify|verify} messages.
         * @param message GetArtifactTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypesRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypesRequest.verify|verify} messages.
         * @param message GetArtifactTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypesRequest;

        /**
         * Decodes a GetArtifactTypesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypesRequest;

        /**
         * Verifies a GetArtifactTypesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypesRequest;

        /**
         * Creates a plain object from a GetArtifactTypesRequest message. Also converts values to other types if specified.
         * @param message GetArtifactTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypesResponse. */
    interface IGetArtifactTypesResponse {

        /** GetArtifactTypesResponse artifactTypes */
        artifactTypes?: (ml_metadata.IArtifactType[]|null);
    }

    /** Represents a GetArtifactTypesResponse. */
    class GetArtifactTypesResponse implements IGetArtifactTypesResponse {

        /**
         * Constructs a new GetArtifactTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypesResponse);

        /** GetArtifactTypesResponse artifactTypes. */
        public artifactTypes: ml_metadata.IArtifactType[];

        /**
         * Creates a new GetArtifactTypesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypesResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypesResponse): ml_metadata.GetArtifactTypesResponse;

        /**
         * Encodes the specified GetArtifactTypesResponse message. Does not implicitly {@link ml_metadata.GetArtifactTypesResponse.verify|verify} messages.
         * @param message GetArtifactTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypesResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypesResponse.verify|verify} messages.
         * @param message GetArtifactTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypesResponse;

        /**
         * Decodes a GetArtifactTypesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypesResponse;

        /**
         * Verifies a GetArtifactTypesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypesResponse;

        /**
         * Creates a plain object from a GetArtifactTypesResponse message. Also converts values to other types if specified.
         * @param message GetArtifactTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypesRequest. */
    interface IGetExecutionTypesRequest {
    }

    /** Represents a GetExecutionTypesRequest. */
    class GetExecutionTypesRequest implements IGetExecutionTypesRequest {

        /**
         * Constructs a new GetExecutionTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypesRequest);

        /**
         * Creates a new GetExecutionTypesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypesRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypesRequest): ml_metadata.GetExecutionTypesRequest;

        /**
         * Encodes the specified GetExecutionTypesRequest message. Does not implicitly {@link ml_metadata.GetExecutionTypesRequest.verify|verify} messages.
         * @param message GetExecutionTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypesRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypesRequest.verify|verify} messages.
         * @param message GetExecutionTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypesRequest;

        /**
         * Decodes a GetExecutionTypesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypesRequest;

        /**
         * Verifies a GetExecutionTypesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypesRequest;

        /**
         * Creates a plain object from a GetExecutionTypesRequest message. Also converts values to other types if specified.
         * @param message GetExecutionTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypesResponse. */
    interface IGetExecutionTypesResponse {

        /** GetExecutionTypesResponse executionTypes */
        executionTypes?: (ml_metadata.IExecutionType[]|null);
    }

    /** Represents a GetExecutionTypesResponse. */
    class GetExecutionTypesResponse implements IGetExecutionTypesResponse {

        /**
         * Constructs a new GetExecutionTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypesResponse);

        /** GetExecutionTypesResponse executionTypes. */
        public executionTypes: ml_metadata.IExecutionType[];

        /**
         * Creates a new GetExecutionTypesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypesResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypesResponse): ml_metadata.GetExecutionTypesResponse;

        /**
         * Encodes the specified GetExecutionTypesResponse message. Does not implicitly {@link ml_metadata.GetExecutionTypesResponse.verify|verify} messages.
         * @param message GetExecutionTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypesResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypesResponse.verify|verify} messages.
         * @param message GetExecutionTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypesResponse;

        /**
         * Decodes a GetExecutionTypesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypesResponse;

        /**
         * Verifies a GetExecutionTypesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypesResponse;

        /**
         * Creates a plain object from a GetExecutionTypesResponse message. Also converts values to other types if specified.
         * @param message GetExecutionTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypesRequest. */
    interface IGetContextTypesRequest {
    }

    /** Represents a GetContextTypesRequest. */
    class GetContextTypesRequest implements IGetContextTypesRequest {

        /**
         * Constructs a new GetContextTypesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypesRequest);

        /**
         * Creates a new GetContextTypesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypesRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextTypesRequest): ml_metadata.GetContextTypesRequest;

        /**
         * Encodes the specified GetContextTypesRequest message. Does not implicitly {@link ml_metadata.GetContextTypesRequest.verify|verify} messages.
         * @param message GetContextTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypesRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypesRequest.verify|verify} messages.
         * @param message GetContextTypesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypesRequest;

        /**
         * Decodes a GetContextTypesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypesRequest;

        /**
         * Verifies a GetContextTypesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypesRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypesRequest;

        /**
         * Creates a plain object from a GetContextTypesRequest message. Also converts values to other types if specified.
         * @param message GetContextTypesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypesResponse. */
    interface IGetContextTypesResponse {

        /** GetContextTypesResponse contextTypes */
        contextTypes?: (ml_metadata.IContextType[]|null);
    }

    /** Represents a GetContextTypesResponse. */
    class GetContextTypesResponse implements IGetContextTypesResponse {

        /**
         * Constructs a new GetContextTypesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypesResponse);

        /** GetContextTypesResponse contextTypes. */
        public contextTypes: ml_metadata.IContextType[];

        /**
         * Creates a new GetContextTypesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypesResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextTypesResponse): ml_metadata.GetContextTypesResponse;

        /**
         * Encodes the specified GetContextTypesResponse message. Does not implicitly {@link ml_metadata.GetContextTypesResponse.verify|verify} messages.
         * @param message GetContextTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypesResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypesResponse.verify|verify} messages.
         * @param message GetContextTypesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypesResponse;

        /**
         * Decodes a GetContextTypesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypesResponse;

        /**
         * Verifies a GetContextTypesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypesResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypesResponse;

        /**
         * Creates a plain object from a GetContextTypesResponse message. Also converts values to other types if specified.
         * @param message GetContextTypesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByTypeRequest. */
    interface IGetExecutionsByTypeRequest {

        /** GetExecutionsByTypeRequest typeName */
        typeName?: (string|null);

        /** GetExecutionsByTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetExecutionsByTypeRequest. */
    class GetExecutionsByTypeRequest implements IGetExecutionsByTypeRequest {

        /**
         * Constructs a new GetExecutionsByTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByTypeRequest);

        /** GetExecutionsByTypeRequest typeName. */
        public typeName: string;

        /** GetExecutionsByTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetExecutionsByTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByTypeRequest): ml_metadata.GetExecutionsByTypeRequest;

        /**
         * Encodes the specified GetExecutionsByTypeRequest message. Does not implicitly {@link ml_metadata.GetExecutionsByTypeRequest.verify|verify} messages.
         * @param message GetExecutionsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByTypeRequest.verify|verify} messages.
         * @param message GetExecutionsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByTypeRequest;

        /**
         * Decodes a GetExecutionsByTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByTypeRequest;

        /**
         * Verifies a GetExecutionsByTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByTypeRequest;

        /**
         * Creates a plain object from a GetExecutionsByTypeRequest message. Also converts values to other types if specified.
         * @param message GetExecutionsByTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByTypeResponse. */
    interface IGetExecutionsByTypeResponse {

        /** GetExecutionsByTypeResponse executions */
        executions?: (ml_metadata.IExecution[]|null);
    }

    /** Represents a GetExecutionsByTypeResponse. */
    class GetExecutionsByTypeResponse implements IGetExecutionsByTypeResponse {

        /**
         * Constructs a new GetExecutionsByTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByTypeResponse);

        /** GetExecutionsByTypeResponse executions. */
        public executions: ml_metadata.IExecution[];

        /**
         * Creates a new GetExecutionsByTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByTypeResponse): ml_metadata.GetExecutionsByTypeResponse;

        /**
         * Encodes the specified GetExecutionsByTypeResponse message. Does not implicitly {@link ml_metadata.GetExecutionsByTypeResponse.verify|verify} messages.
         * @param message GetExecutionsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByTypeResponse.verify|verify} messages.
         * @param message GetExecutionsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByTypeResponse;

        /**
         * Decodes a GetExecutionsByTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByTypeResponse;

        /**
         * Verifies a GetExecutionsByTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByTypeResponse;

        /**
         * Creates a plain object from a GetExecutionsByTypeResponse message. Also converts values to other types if specified.
         * @param message GetExecutionsByTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionByTypeAndNameRequest. */
    interface IGetExecutionByTypeAndNameRequest {

        /** GetExecutionByTypeAndNameRequest typeName */
        typeName?: (string|null);

        /** GetExecutionByTypeAndNameRequest typeVersion */
        typeVersion?: (string|null);

        /** GetExecutionByTypeAndNameRequest executionName */
        executionName?: (string|null);
    }

    /** Represents a GetExecutionByTypeAndNameRequest. */
    class GetExecutionByTypeAndNameRequest implements IGetExecutionByTypeAndNameRequest {

        /**
         * Constructs a new GetExecutionByTypeAndNameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionByTypeAndNameRequest);

        /** GetExecutionByTypeAndNameRequest typeName. */
        public typeName: string;

        /** GetExecutionByTypeAndNameRequest typeVersion. */
        public typeVersion: string;

        /** GetExecutionByTypeAndNameRequest executionName. */
        public executionName: string;

        /**
         * Creates a new GetExecutionByTypeAndNameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionByTypeAndNameRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionByTypeAndNameRequest): ml_metadata.GetExecutionByTypeAndNameRequest;

        /**
         * Encodes the specified GetExecutionByTypeAndNameRequest message. Does not implicitly {@link ml_metadata.GetExecutionByTypeAndNameRequest.verify|verify} messages.
         * @param message GetExecutionByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionByTypeAndNameRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionByTypeAndNameRequest.verify|verify} messages.
         * @param message GetExecutionByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionByTypeAndNameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionByTypeAndNameRequest;

        /**
         * Decodes a GetExecutionByTypeAndNameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionByTypeAndNameRequest;

        /**
         * Verifies a GetExecutionByTypeAndNameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionByTypeAndNameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionByTypeAndNameRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionByTypeAndNameRequest;

        /**
         * Creates a plain object from a GetExecutionByTypeAndNameRequest message. Also converts values to other types if specified.
         * @param message GetExecutionByTypeAndNameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionByTypeAndNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionByTypeAndNameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionByTypeAndNameResponse. */
    interface IGetExecutionByTypeAndNameResponse {

        /** GetExecutionByTypeAndNameResponse execution */
        execution?: (ml_metadata.IExecution|null);
    }

    /** Represents a GetExecutionByTypeAndNameResponse. */
    class GetExecutionByTypeAndNameResponse implements IGetExecutionByTypeAndNameResponse {

        /**
         * Constructs a new GetExecutionByTypeAndNameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionByTypeAndNameResponse);

        /** GetExecutionByTypeAndNameResponse execution. */
        public execution?: (ml_metadata.IExecution|null);

        /**
         * Creates a new GetExecutionByTypeAndNameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionByTypeAndNameResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionByTypeAndNameResponse): ml_metadata.GetExecutionByTypeAndNameResponse;

        /**
         * Encodes the specified GetExecutionByTypeAndNameResponse message. Does not implicitly {@link ml_metadata.GetExecutionByTypeAndNameResponse.verify|verify} messages.
         * @param message GetExecutionByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionByTypeAndNameResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionByTypeAndNameResponse.verify|verify} messages.
         * @param message GetExecutionByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionByTypeAndNameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionByTypeAndNameResponse;

        /**
         * Decodes a GetExecutionByTypeAndNameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionByTypeAndNameResponse;

        /**
         * Verifies a GetExecutionByTypeAndNameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionByTypeAndNameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionByTypeAndNameResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionByTypeAndNameResponse;

        /**
         * Creates a plain object from a GetExecutionByTypeAndNameResponse message. Also converts values to other types if specified.
         * @param message GetExecutionByTypeAndNameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionByTypeAndNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionByTypeAndNameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByIDRequest. */
    interface IGetExecutionsByIDRequest {

        /** GetExecutionsByIDRequest executionIds */
        executionIds?: ((number|Long)[]|null);
    }

    /** Represents a GetExecutionsByIDRequest. */
    class GetExecutionsByIDRequest implements IGetExecutionsByIDRequest {

        /**
         * Constructs a new GetExecutionsByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByIDRequest);

        /** GetExecutionsByIDRequest executionIds. */
        public executionIds: (number|Long)[];

        /**
         * Creates a new GetExecutionsByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByIDRequest): ml_metadata.GetExecutionsByIDRequest;

        /**
         * Encodes the specified GetExecutionsByIDRequest message. Does not implicitly {@link ml_metadata.GetExecutionsByIDRequest.verify|verify} messages.
         * @param message GetExecutionsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByIDRequest.verify|verify} messages.
         * @param message GetExecutionsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByIDRequest;

        /**
         * Decodes a GetExecutionsByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByIDRequest;

        /**
         * Verifies a GetExecutionsByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByIDRequest;

        /**
         * Creates a plain object from a GetExecutionsByIDRequest message. Also converts values to other types if specified.
         * @param message GetExecutionsByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByIDResponse. */
    interface IGetExecutionsByIDResponse {

        /** GetExecutionsByIDResponse executions */
        executions?: (ml_metadata.IExecution[]|null);
    }

    /** Represents a GetExecutionsByIDResponse. */
    class GetExecutionsByIDResponse implements IGetExecutionsByIDResponse {

        /**
         * Constructs a new GetExecutionsByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByIDResponse);

        /** GetExecutionsByIDResponse executions. */
        public executions: ml_metadata.IExecution[];

        /**
         * Creates a new GetExecutionsByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByIDResponse): ml_metadata.GetExecutionsByIDResponse;

        /**
         * Encodes the specified GetExecutionsByIDResponse message. Does not implicitly {@link ml_metadata.GetExecutionsByIDResponse.verify|verify} messages.
         * @param message GetExecutionsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByIDResponse.verify|verify} messages.
         * @param message GetExecutionsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByIDResponse;

        /**
         * Decodes a GetExecutionsByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByIDResponse;

        /**
         * Verifies a GetExecutionsByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByIDResponse;

        /**
         * Creates a plain object from a GetExecutionsByIDResponse message. Also converts values to other types if specified.
         * @param message GetExecutionsByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypeRequest. */
    interface IGetExecutionTypeRequest {

        /** GetExecutionTypeRequest typeName */
        typeName?: (string|null);

        /** GetExecutionTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetExecutionTypeRequest. */
    class GetExecutionTypeRequest implements IGetExecutionTypeRequest {

        /**
         * Constructs a new GetExecutionTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypeRequest);

        /** GetExecutionTypeRequest typeName. */
        public typeName: string;

        /** GetExecutionTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetExecutionTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypeRequest): ml_metadata.GetExecutionTypeRequest;

        /**
         * Encodes the specified GetExecutionTypeRequest message. Does not implicitly {@link ml_metadata.GetExecutionTypeRequest.verify|verify} messages.
         * @param message GetExecutionTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypeRequest.verify|verify} messages.
         * @param message GetExecutionTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypeRequest;

        /**
         * Decodes a GetExecutionTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypeRequest;

        /**
         * Verifies a GetExecutionTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypeRequest;

        /**
         * Creates a plain object from a GetExecutionTypeRequest message. Also converts values to other types if specified.
         * @param message GetExecutionTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypeResponse. */
    interface IGetExecutionTypeResponse {

        /** GetExecutionTypeResponse executionType */
        executionType?: (ml_metadata.IExecutionType|null);
    }

    /** Represents a GetExecutionTypeResponse. */
    class GetExecutionTypeResponse implements IGetExecutionTypeResponse {

        /**
         * Constructs a new GetExecutionTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypeResponse);

        /** GetExecutionTypeResponse executionType. */
        public executionType?: (ml_metadata.IExecutionType|null);

        /**
         * Creates a new GetExecutionTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypeResponse): ml_metadata.GetExecutionTypeResponse;

        /**
         * Encodes the specified GetExecutionTypeResponse message. Does not implicitly {@link ml_metadata.GetExecutionTypeResponse.verify|verify} messages.
         * @param message GetExecutionTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypeResponse.verify|verify} messages.
         * @param message GetExecutionTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypeResponse;

        /**
         * Decodes a GetExecutionTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypeResponse;

        /**
         * Verifies a GetExecutionTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypeResponse;

        /**
         * Creates a plain object from a GetExecutionTypeResponse message. Also converts values to other types if specified.
         * @param message GetExecutionTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByExecutionIDsRequest. */
    interface IGetEventsByExecutionIDsRequest {

        /** GetEventsByExecutionIDsRequest executionIds */
        executionIds?: ((number|Long)[]|null);
    }

    /** Represents a GetEventsByExecutionIDsRequest. */
    class GetEventsByExecutionIDsRequest implements IGetEventsByExecutionIDsRequest {

        /**
         * Constructs a new GetEventsByExecutionIDsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetEventsByExecutionIDsRequest);

        /** GetEventsByExecutionIDsRequest executionIds. */
        public executionIds: (number|Long)[];

        /**
         * Creates a new GetEventsByExecutionIDsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByExecutionIDsRequest instance
         */
        public static create(properties?: ml_metadata.IGetEventsByExecutionIDsRequest): ml_metadata.GetEventsByExecutionIDsRequest;

        /**
         * Encodes the specified GetEventsByExecutionIDsRequest message. Does not implicitly {@link ml_metadata.GetEventsByExecutionIDsRequest.verify|verify} messages.
         * @param message GetEventsByExecutionIDsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetEventsByExecutionIDsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByExecutionIDsRequest message, length delimited. Does not implicitly {@link ml_metadata.GetEventsByExecutionIDsRequest.verify|verify} messages.
         * @param message GetEventsByExecutionIDsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetEventsByExecutionIDsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByExecutionIDsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByExecutionIDsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetEventsByExecutionIDsRequest;

        /**
         * Decodes a GetEventsByExecutionIDsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByExecutionIDsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetEventsByExecutionIDsRequest;

        /**
         * Verifies a GetEventsByExecutionIDsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByExecutionIDsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByExecutionIDsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetEventsByExecutionIDsRequest;

        /**
         * Creates a plain object from a GetEventsByExecutionIDsRequest message. Also converts values to other types if specified.
         * @param message GetEventsByExecutionIDsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetEventsByExecutionIDsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByExecutionIDsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByExecutionIDsResponse. */
    interface IGetEventsByExecutionIDsResponse {

        /** GetEventsByExecutionIDsResponse events */
        events?: (ml_metadata.IEvent[]|null);
    }

    /** Represents a GetEventsByExecutionIDsResponse. */
    class GetEventsByExecutionIDsResponse implements IGetEventsByExecutionIDsResponse {

        /**
         * Constructs a new GetEventsByExecutionIDsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetEventsByExecutionIDsResponse);

        /** GetEventsByExecutionIDsResponse events. */
        public events: ml_metadata.IEvent[];

        /**
         * Creates a new GetEventsByExecutionIDsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByExecutionIDsResponse instance
         */
        public static create(properties?: ml_metadata.IGetEventsByExecutionIDsResponse): ml_metadata.GetEventsByExecutionIDsResponse;

        /**
         * Encodes the specified GetEventsByExecutionIDsResponse message. Does not implicitly {@link ml_metadata.GetEventsByExecutionIDsResponse.verify|verify} messages.
         * @param message GetEventsByExecutionIDsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetEventsByExecutionIDsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByExecutionIDsResponse message, length delimited. Does not implicitly {@link ml_metadata.GetEventsByExecutionIDsResponse.verify|verify} messages.
         * @param message GetEventsByExecutionIDsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetEventsByExecutionIDsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByExecutionIDsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByExecutionIDsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetEventsByExecutionIDsResponse;

        /**
         * Decodes a GetEventsByExecutionIDsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByExecutionIDsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetEventsByExecutionIDsResponse;

        /**
         * Verifies a GetEventsByExecutionIDsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByExecutionIDsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByExecutionIDsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetEventsByExecutionIDsResponse;

        /**
         * Creates a plain object from a GetEventsByExecutionIDsResponse message. Also converts values to other types if specified.
         * @param message GetEventsByExecutionIDsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetEventsByExecutionIDsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByExecutionIDsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByArtifactIDsRequest. */
    interface IGetEventsByArtifactIDsRequest {

        /** GetEventsByArtifactIDsRequest artifactIds */
        artifactIds?: ((number|Long)[]|null);
    }

    /** Represents a GetEventsByArtifactIDsRequest. */
    class GetEventsByArtifactIDsRequest implements IGetEventsByArtifactIDsRequest {

        /**
         * Constructs a new GetEventsByArtifactIDsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetEventsByArtifactIDsRequest);

        /** GetEventsByArtifactIDsRequest artifactIds. */
        public artifactIds: (number|Long)[];

        /**
         * Creates a new GetEventsByArtifactIDsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByArtifactIDsRequest instance
         */
        public static create(properties?: ml_metadata.IGetEventsByArtifactIDsRequest): ml_metadata.GetEventsByArtifactIDsRequest;

        /**
         * Encodes the specified GetEventsByArtifactIDsRequest message. Does not implicitly {@link ml_metadata.GetEventsByArtifactIDsRequest.verify|verify} messages.
         * @param message GetEventsByArtifactIDsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetEventsByArtifactIDsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByArtifactIDsRequest message, length delimited. Does not implicitly {@link ml_metadata.GetEventsByArtifactIDsRequest.verify|verify} messages.
         * @param message GetEventsByArtifactIDsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetEventsByArtifactIDsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByArtifactIDsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByArtifactIDsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetEventsByArtifactIDsRequest;

        /**
         * Decodes a GetEventsByArtifactIDsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByArtifactIDsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetEventsByArtifactIDsRequest;

        /**
         * Verifies a GetEventsByArtifactIDsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByArtifactIDsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByArtifactIDsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetEventsByArtifactIDsRequest;

        /**
         * Creates a plain object from a GetEventsByArtifactIDsRequest message. Also converts values to other types if specified.
         * @param message GetEventsByArtifactIDsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetEventsByArtifactIDsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByArtifactIDsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsByArtifactIDsResponse. */
    interface IGetEventsByArtifactIDsResponse {

        /** GetEventsByArtifactIDsResponse events */
        events?: (ml_metadata.IEvent[]|null);
    }

    /** Represents a GetEventsByArtifactIDsResponse. */
    class GetEventsByArtifactIDsResponse implements IGetEventsByArtifactIDsResponse {

        /**
         * Constructs a new GetEventsByArtifactIDsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetEventsByArtifactIDsResponse);

        /** GetEventsByArtifactIDsResponse events. */
        public events: ml_metadata.IEvent[];

        /**
         * Creates a new GetEventsByArtifactIDsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsByArtifactIDsResponse instance
         */
        public static create(properties?: ml_metadata.IGetEventsByArtifactIDsResponse): ml_metadata.GetEventsByArtifactIDsResponse;

        /**
         * Encodes the specified GetEventsByArtifactIDsResponse message. Does not implicitly {@link ml_metadata.GetEventsByArtifactIDsResponse.verify|verify} messages.
         * @param message GetEventsByArtifactIDsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetEventsByArtifactIDsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsByArtifactIDsResponse message, length delimited. Does not implicitly {@link ml_metadata.GetEventsByArtifactIDsResponse.verify|verify} messages.
         * @param message GetEventsByArtifactIDsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetEventsByArtifactIDsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsByArtifactIDsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsByArtifactIDsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetEventsByArtifactIDsResponse;

        /**
         * Decodes a GetEventsByArtifactIDsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsByArtifactIDsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetEventsByArtifactIDsResponse;

        /**
         * Verifies a GetEventsByArtifactIDsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsByArtifactIDsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsByArtifactIDsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetEventsByArtifactIDsResponse;

        /**
         * Creates a plain object from a GetEventsByArtifactIDsResponse message. Also converts values to other types if specified.
         * @param message GetEventsByArtifactIDsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetEventsByArtifactIDsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsByArtifactIDsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypesByIDRequest. */
    interface IGetArtifactTypesByIDRequest {

        /** GetArtifactTypesByIDRequest typeIds */
        typeIds?: ((number|Long)[]|null);
    }

    /** Represents a GetArtifactTypesByIDRequest. */
    class GetArtifactTypesByIDRequest implements IGetArtifactTypesByIDRequest {

        /**
         * Constructs a new GetArtifactTypesByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypesByIDRequest);

        /** GetArtifactTypesByIDRequest typeIds. */
        public typeIds: (number|Long)[];

        /**
         * Creates a new GetArtifactTypesByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypesByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypesByIDRequest): ml_metadata.GetArtifactTypesByIDRequest;

        /**
         * Encodes the specified GetArtifactTypesByIDRequest message. Does not implicitly {@link ml_metadata.GetArtifactTypesByIDRequest.verify|verify} messages.
         * @param message GetArtifactTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypesByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypesByIDRequest.verify|verify} messages.
         * @param message GetArtifactTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypesByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypesByIDRequest;

        /**
         * Decodes a GetArtifactTypesByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypesByIDRequest;

        /**
         * Verifies a GetArtifactTypesByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypesByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypesByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypesByIDRequest;

        /**
         * Creates a plain object from a GetArtifactTypesByIDRequest message. Also converts values to other types if specified.
         * @param message GetArtifactTypesByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypesByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypesByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactTypesByIDResponse. */
    interface IGetArtifactTypesByIDResponse {

        /** GetArtifactTypesByIDResponse artifactTypes */
        artifactTypes?: (ml_metadata.IArtifactType[]|null);
    }

    /** Represents a GetArtifactTypesByIDResponse. */
    class GetArtifactTypesByIDResponse implements IGetArtifactTypesByIDResponse {

        /**
         * Constructs a new GetArtifactTypesByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactTypesByIDResponse);

        /** GetArtifactTypesByIDResponse artifactTypes. */
        public artifactTypes: ml_metadata.IArtifactType[];

        /**
         * Creates a new GetArtifactTypesByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactTypesByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactTypesByIDResponse): ml_metadata.GetArtifactTypesByIDResponse;

        /**
         * Encodes the specified GetArtifactTypesByIDResponse message. Does not implicitly {@link ml_metadata.GetArtifactTypesByIDResponse.verify|verify} messages.
         * @param message GetArtifactTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactTypesByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactTypesByIDResponse.verify|verify} messages.
         * @param message GetArtifactTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactTypesByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactTypesByIDResponse;

        /**
         * Decodes a GetArtifactTypesByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactTypesByIDResponse;

        /**
         * Verifies a GetArtifactTypesByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactTypesByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactTypesByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactTypesByIDResponse;

        /**
         * Creates a plain object from a GetArtifactTypesByIDResponse message. Also converts values to other types if specified.
         * @param message GetArtifactTypesByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactTypesByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactTypesByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypesByIDRequest. */
    interface IGetExecutionTypesByIDRequest {

        /** GetExecutionTypesByIDRequest typeIds */
        typeIds?: ((number|Long)[]|null);
    }

    /** Represents a GetExecutionTypesByIDRequest. */
    class GetExecutionTypesByIDRequest implements IGetExecutionTypesByIDRequest {

        /**
         * Constructs a new GetExecutionTypesByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypesByIDRequest);

        /** GetExecutionTypesByIDRequest typeIds. */
        public typeIds: (number|Long)[];

        /**
         * Creates a new GetExecutionTypesByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypesByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypesByIDRequest): ml_metadata.GetExecutionTypesByIDRequest;

        /**
         * Encodes the specified GetExecutionTypesByIDRequest message. Does not implicitly {@link ml_metadata.GetExecutionTypesByIDRequest.verify|verify} messages.
         * @param message GetExecutionTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypesByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypesByIDRequest.verify|verify} messages.
         * @param message GetExecutionTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypesByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypesByIDRequest;

        /**
         * Decodes a GetExecutionTypesByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypesByIDRequest;

        /**
         * Verifies a GetExecutionTypesByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypesByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypesByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypesByIDRequest;

        /**
         * Creates a plain object from a GetExecutionTypesByIDRequest message. Also converts values to other types if specified.
         * @param message GetExecutionTypesByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypesByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypesByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionTypesByIDResponse. */
    interface IGetExecutionTypesByIDResponse {

        /** GetExecutionTypesByIDResponse executionTypes */
        executionTypes?: (ml_metadata.IExecutionType[]|null);
    }

    /** Represents a GetExecutionTypesByIDResponse. */
    class GetExecutionTypesByIDResponse implements IGetExecutionTypesByIDResponse {

        /**
         * Constructs a new GetExecutionTypesByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionTypesByIDResponse);

        /** GetExecutionTypesByIDResponse executionTypes. */
        public executionTypes: ml_metadata.IExecutionType[];

        /**
         * Creates a new GetExecutionTypesByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionTypesByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionTypesByIDResponse): ml_metadata.GetExecutionTypesByIDResponse;

        /**
         * Encodes the specified GetExecutionTypesByIDResponse message. Does not implicitly {@link ml_metadata.GetExecutionTypesByIDResponse.verify|verify} messages.
         * @param message GetExecutionTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionTypesByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionTypesByIDResponse.verify|verify} messages.
         * @param message GetExecutionTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionTypesByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionTypesByIDResponse;

        /**
         * Decodes a GetExecutionTypesByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionTypesByIDResponse;

        /**
         * Verifies a GetExecutionTypesByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionTypesByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionTypesByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionTypesByIDResponse;

        /**
         * Creates a plain object from a GetExecutionTypesByIDResponse message. Also converts values to other types if specified.
         * @param message GetExecutionTypesByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionTypesByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionTypesByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypeRequest. */
    interface IGetContextTypeRequest {

        /** GetContextTypeRequest typeName */
        typeName?: (string|null);

        /** GetContextTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetContextTypeRequest. */
    class GetContextTypeRequest implements IGetContextTypeRequest {

        /**
         * Constructs a new GetContextTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypeRequest);

        /** GetContextTypeRequest typeName. */
        public typeName: string;

        /** GetContextTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetContextTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextTypeRequest): ml_metadata.GetContextTypeRequest;

        /**
         * Encodes the specified GetContextTypeRequest message. Does not implicitly {@link ml_metadata.GetContextTypeRequest.verify|verify} messages.
         * @param message GetContextTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypeRequest.verify|verify} messages.
         * @param message GetContextTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypeRequest;

        /**
         * Decodes a GetContextTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypeRequest;

        /**
         * Verifies a GetContextTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypeRequest;

        /**
         * Creates a plain object from a GetContextTypeRequest message. Also converts values to other types if specified.
         * @param message GetContextTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypeResponse. */
    interface IGetContextTypeResponse {

        /** GetContextTypeResponse contextType */
        contextType?: (ml_metadata.IContextType|null);
    }

    /** Represents a GetContextTypeResponse. */
    class GetContextTypeResponse implements IGetContextTypeResponse {

        /**
         * Constructs a new GetContextTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypeResponse);

        /** GetContextTypeResponse contextType. */
        public contextType?: (ml_metadata.IContextType|null);

        /**
         * Creates a new GetContextTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextTypeResponse): ml_metadata.GetContextTypeResponse;

        /**
         * Encodes the specified GetContextTypeResponse message. Does not implicitly {@link ml_metadata.GetContextTypeResponse.verify|verify} messages.
         * @param message GetContextTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypeResponse.verify|verify} messages.
         * @param message GetContextTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypeResponse;

        /**
         * Decodes a GetContextTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypeResponse;

        /**
         * Verifies a GetContextTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypeResponse;

        /**
         * Creates a plain object from a GetContextTypeResponse message. Also converts values to other types if specified.
         * @param message GetContextTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypesByIDRequest. */
    interface IGetContextTypesByIDRequest {

        /** GetContextTypesByIDRequest typeIds */
        typeIds?: ((number|Long)[]|null);
    }

    /** Represents a GetContextTypesByIDRequest. */
    class GetContextTypesByIDRequest implements IGetContextTypesByIDRequest {

        /**
         * Constructs a new GetContextTypesByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypesByIDRequest);

        /** GetContextTypesByIDRequest typeIds. */
        public typeIds: (number|Long)[];

        /**
         * Creates a new GetContextTypesByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypesByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextTypesByIDRequest): ml_metadata.GetContextTypesByIDRequest;

        /**
         * Encodes the specified GetContextTypesByIDRequest message. Does not implicitly {@link ml_metadata.GetContextTypesByIDRequest.verify|verify} messages.
         * @param message GetContextTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypesByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypesByIDRequest.verify|verify} messages.
         * @param message GetContextTypesByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypesByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypesByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypesByIDRequest;

        /**
         * Decodes a GetContextTypesByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypesByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypesByIDRequest;

        /**
         * Verifies a GetContextTypesByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypesByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypesByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypesByIDRequest;

        /**
         * Creates a plain object from a GetContextTypesByIDRequest message. Also converts values to other types if specified.
         * @param message GetContextTypesByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypesByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypesByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextTypesByIDResponse. */
    interface IGetContextTypesByIDResponse {

        /** GetContextTypesByIDResponse contextTypes */
        contextTypes?: (ml_metadata.IContextType[]|null);
    }

    /** Represents a GetContextTypesByIDResponse. */
    class GetContextTypesByIDResponse implements IGetContextTypesByIDResponse {

        /**
         * Constructs a new GetContextTypesByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextTypesByIDResponse);

        /** GetContextTypesByIDResponse contextTypes. */
        public contextTypes: ml_metadata.IContextType[];

        /**
         * Creates a new GetContextTypesByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextTypesByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextTypesByIDResponse): ml_metadata.GetContextTypesByIDResponse;

        /**
         * Encodes the specified GetContextTypesByIDResponse message. Does not implicitly {@link ml_metadata.GetContextTypesByIDResponse.verify|verify} messages.
         * @param message GetContextTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextTypesByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextTypesByIDResponse.verify|verify} messages.
         * @param message GetContextTypesByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextTypesByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextTypesByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextTypesByIDResponse;

        /**
         * Decodes a GetContextTypesByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextTypesByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextTypesByIDResponse;

        /**
         * Verifies a GetContextTypesByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextTypesByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextTypesByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextTypesByIDResponse;

        /**
         * Creates a plain object from a GetContextTypesByIDResponse message. Also converts values to other types if specified.
         * @param message GetContextTypesByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextTypesByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextTypesByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsRequest. */
    interface IGetContextsRequest {

        /** GetContextsRequest options */
        options?: (ml_metadata.IListOperationOptions|null);
    }

    /** Represents a GetContextsRequest. */
    class GetContextsRequest implements IGetContextsRequest {

        /**
         * Constructs a new GetContextsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsRequest);

        /** GetContextsRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /**
         * Creates a new GetContextsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextsRequest): ml_metadata.GetContextsRequest;

        /**
         * Encodes the specified GetContextsRequest message. Does not implicitly {@link ml_metadata.GetContextsRequest.verify|verify} messages.
         * @param message GetContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextsRequest.verify|verify} messages.
         * @param message GetContextsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsRequest;

        /**
         * Decodes a GetContextsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsRequest;

        /**
         * Verifies a GetContextsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsRequest;

        /**
         * Creates a plain object from a GetContextsRequest message. Also converts values to other types if specified.
         * @param message GetContextsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsResponse. */
    interface IGetContextsResponse {

        /** GetContextsResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);

        /** GetContextsResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetContextsResponse. */
    class GetContextsResponse implements IGetContextsResponse {

        /**
         * Constructs a new GetContextsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsResponse);

        /** GetContextsResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /** GetContextsResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetContextsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextsResponse): ml_metadata.GetContextsResponse;

        /**
         * Encodes the specified GetContextsResponse message. Does not implicitly {@link ml_metadata.GetContextsResponse.verify|verify} messages.
         * @param message GetContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextsResponse.verify|verify} messages.
         * @param message GetContextsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsResponse;

        /**
         * Decodes a GetContextsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsResponse;

        /**
         * Verifies a GetContextsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsResponse;

        /**
         * Creates a plain object from a GetContextsResponse message. Also converts values to other types if specified.
         * @param message GetContextsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByTypeRequest. */
    interface IGetContextsByTypeRequest {

        /** GetContextsByTypeRequest typeName */
        typeName?: (string|null);

        /** GetContextsByTypeRequest options */
        options?: (ml_metadata.IListOperationOptions|null);

        /** GetContextsByTypeRequest typeVersion */
        typeVersion?: (string|null);
    }

    /** Represents a GetContextsByTypeRequest. */
    class GetContextsByTypeRequest implements IGetContextsByTypeRequest {

        /**
         * Constructs a new GetContextsByTypeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByTypeRequest);

        /** GetContextsByTypeRequest typeName. */
        public typeName: string;

        /** GetContextsByTypeRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /** GetContextsByTypeRequest typeVersion. */
        public typeVersion: string;

        /**
         * Creates a new GetContextsByTypeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByTypeRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextsByTypeRequest): ml_metadata.GetContextsByTypeRequest;

        /**
         * Encodes the specified GetContextsByTypeRequest message. Does not implicitly {@link ml_metadata.GetContextsByTypeRequest.verify|verify} messages.
         * @param message GetContextsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByTypeRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByTypeRequest.verify|verify} messages.
         * @param message GetContextsByTypeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByTypeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByTypeRequest;

        /**
         * Decodes a GetContextsByTypeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByTypeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByTypeRequest;

        /**
         * Verifies a GetContextsByTypeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByTypeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByTypeRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByTypeRequest;

        /**
         * Creates a plain object from a GetContextsByTypeRequest message. Also converts values to other types if specified.
         * @param message GetContextsByTypeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByTypeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByTypeResponse. */
    interface IGetContextsByTypeResponse {

        /** GetContextsByTypeResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);

        /** GetContextsByTypeResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetContextsByTypeResponse. */
    class GetContextsByTypeResponse implements IGetContextsByTypeResponse {

        /**
         * Constructs a new GetContextsByTypeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByTypeResponse);

        /** GetContextsByTypeResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /** GetContextsByTypeResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetContextsByTypeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByTypeResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextsByTypeResponse): ml_metadata.GetContextsByTypeResponse;

        /**
         * Encodes the specified GetContextsByTypeResponse message. Does not implicitly {@link ml_metadata.GetContextsByTypeResponse.verify|verify} messages.
         * @param message GetContextsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByTypeResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByTypeResponse.verify|verify} messages.
         * @param message GetContextsByTypeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByTypeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByTypeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByTypeResponse;

        /**
         * Decodes a GetContextsByTypeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByTypeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByTypeResponse;

        /**
         * Verifies a GetContextsByTypeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByTypeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByTypeResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByTypeResponse;

        /**
         * Creates a plain object from a GetContextsByTypeResponse message. Also converts values to other types if specified.
         * @param message GetContextsByTypeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByTypeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByTypeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextByTypeAndNameRequest. */
    interface IGetContextByTypeAndNameRequest {

        /** GetContextByTypeAndNameRequest typeName */
        typeName?: (string|null);

        /** GetContextByTypeAndNameRequest typeVersion */
        typeVersion?: (string|null);

        /** GetContextByTypeAndNameRequest contextName */
        contextName?: (string|null);
    }

    /** Represents a GetContextByTypeAndNameRequest. */
    class GetContextByTypeAndNameRequest implements IGetContextByTypeAndNameRequest {

        /**
         * Constructs a new GetContextByTypeAndNameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextByTypeAndNameRequest);

        /** GetContextByTypeAndNameRequest typeName. */
        public typeName: string;

        /** GetContextByTypeAndNameRequest typeVersion. */
        public typeVersion: string;

        /** GetContextByTypeAndNameRequest contextName. */
        public contextName: string;

        /**
         * Creates a new GetContextByTypeAndNameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextByTypeAndNameRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextByTypeAndNameRequest): ml_metadata.GetContextByTypeAndNameRequest;

        /**
         * Encodes the specified GetContextByTypeAndNameRequest message. Does not implicitly {@link ml_metadata.GetContextByTypeAndNameRequest.verify|verify} messages.
         * @param message GetContextByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextByTypeAndNameRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextByTypeAndNameRequest.verify|verify} messages.
         * @param message GetContextByTypeAndNameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextByTypeAndNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextByTypeAndNameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextByTypeAndNameRequest;

        /**
         * Decodes a GetContextByTypeAndNameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextByTypeAndNameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextByTypeAndNameRequest;

        /**
         * Verifies a GetContextByTypeAndNameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextByTypeAndNameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextByTypeAndNameRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextByTypeAndNameRequest;

        /**
         * Creates a plain object from a GetContextByTypeAndNameRequest message. Also converts values to other types if specified.
         * @param message GetContextByTypeAndNameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextByTypeAndNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextByTypeAndNameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextByTypeAndNameResponse. */
    interface IGetContextByTypeAndNameResponse {

        /** GetContextByTypeAndNameResponse context */
        context?: (ml_metadata.IContext|null);
    }

    /** Represents a GetContextByTypeAndNameResponse. */
    class GetContextByTypeAndNameResponse implements IGetContextByTypeAndNameResponse {

        /**
         * Constructs a new GetContextByTypeAndNameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextByTypeAndNameResponse);

        /** GetContextByTypeAndNameResponse context. */
        public context?: (ml_metadata.IContext|null);

        /**
         * Creates a new GetContextByTypeAndNameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextByTypeAndNameResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextByTypeAndNameResponse): ml_metadata.GetContextByTypeAndNameResponse;

        /**
         * Encodes the specified GetContextByTypeAndNameResponse message. Does not implicitly {@link ml_metadata.GetContextByTypeAndNameResponse.verify|verify} messages.
         * @param message GetContextByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextByTypeAndNameResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextByTypeAndNameResponse.verify|verify} messages.
         * @param message GetContextByTypeAndNameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextByTypeAndNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextByTypeAndNameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextByTypeAndNameResponse;

        /**
         * Decodes a GetContextByTypeAndNameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextByTypeAndNameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextByTypeAndNameResponse;

        /**
         * Verifies a GetContextByTypeAndNameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextByTypeAndNameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextByTypeAndNameResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextByTypeAndNameResponse;

        /**
         * Creates a plain object from a GetContextByTypeAndNameResponse message. Also converts values to other types if specified.
         * @param message GetContextByTypeAndNameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextByTypeAndNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextByTypeAndNameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByIDRequest. */
    interface IGetContextsByIDRequest {

        /** GetContextsByIDRequest contextIds */
        contextIds?: ((number|Long)[]|null);
    }

    /** Represents a GetContextsByIDRequest. */
    class GetContextsByIDRequest implements IGetContextsByIDRequest {

        /**
         * Constructs a new GetContextsByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByIDRequest);

        /** GetContextsByIDRequest contextIds. */
        public contextIds: (number|Long)[];

        /**
         * Creates a new GetContextsByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByIDRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextsByIDRequest): ml_metadata.GetContextsByIDRequest;

        /**
         * Encodes the specified GetContextsByIDRequest message. Does not implicitly {@link ml_metadata.GetContextsByIDRequest.verify|verify} messages.
         * @param message GetContextsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByIDRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByIDRequest.verify|verify} messages.
         * @param message GetContextsByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByIDRequest;

        /**
         * Decodes a GetContextsByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByIDRequest;

        /**
         * Verifies a GetContextsByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByIDRequest;

        /**
         * Creates a plain object from a GetContextsByIDRequest message. Also converts values to other types if specified.
         * @param message GetContextsByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByIDResponse. */
    interface IGetContextsByIDResponse {

        /** GetContextsByIDResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a GetContextsByIDResponse. */
    class GetContextsByIDResponse implements IGetContextsByIDResponse {

        /**
         * Constructs a new GetContextsByIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByIDResponse);

        /** GetContextsByIDResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new GetContextsByIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByIDResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextsByIDResponse): ml_metadata.GetContextsByIDResponse;

        /**
         * Encodes the specified GetContextsByIDResponse message. Does not implicitly {@link ml_metadata.GetContextsByIDResponse.verify|verify} messages.
         * @param message GetContextsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByIDResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByIDResponse.verify|verify} messages.
         * @param message GetContextsByIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByIDResponse;

        /**
         * Decodes a GetContextsByIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByIDResponse;

        /**
         * Verifies a GetContextsByIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByIDResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByIDResponse;

        /**
         * Creates a plain object from a GetContextsByIDResponse message. Also converts values to other types if specified.
         * @param message GetContextsByIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByArtifactRequest. */
    interface IGetContextsByArtifactRequest {

        /** GetContextsByArtifactRequest artifactId */
        artifactId?: (number|Long|null);
    }

    /** Represents a GetContextsByArtifactRequest. */
    class GetContextsByArtifactRequest implements IGetContextsByArtifactRequest {

        /**
         * Constructs a new GetContextsByArtifactRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByArtifactRequest);

        /** GetContextsByArtifactRequest artifactId. */
        public artifactId: (number|Long);

        /**
         * Creates a new GetContextsByArtifactRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByArtifactRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextsByArtifactRequest): ml_metadata.GetContextsByArtifactRequest;

        /**
         * Encodes the specified GetContextsByArtifactRequest message. Does not implicitly {@link ml_metadata.GetContextsByArtifactRequest.verify|verify} messages.
         * @param message GetContextsByArtifactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByArtifactRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByArtifactRequest.verify|verify} messages.
         * @param message GetContextsByArtifactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByArtifactRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByArtifactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByArtifactRequest;

        /**
         * Decodes a GetContextsByArtifactRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByArtifactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByArtifactRequest;

        /**
         * Verifies a GetContextsByArtifactRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByArtifactRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByArtifactRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByArtifactRequest;

        /**
         * Creates a plain object from a GetContextsByArtifactRequest message. Also converts values to other types if specified.
         * @param message GetContextsByArtifactRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByArtifactRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByArtifactResponse. */
    interface IGetContextsByArtifactResponse {

        /** GetContextsByArtifactResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a GetContextsByArtifactResponse. */
    class GetContextsByArtifactResponse implements IGetContextsByArtifactResponse {

        /**
         * Constructs a new GetContextsByArtifactResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByArtifactResponse);

        /** GetContextsByArtifactResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new GetContextsByArtifactResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByArtifactResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextsByArtifactResponse): ml_metadata.GetContextsByArtifactResponse;

        /**
         * Encodes the specified GetContextsByArtifactResponse message. Does not implicitly {@link ml_metadata.GetContextsByArtifactResponse.verify|verify} messages.
         * @param message GetContextsByArtifactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByArtifactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByArtifactResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByArtifactResponse.verify|verify} messages.
         * @param message GetContextsByArtifactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByArtifactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByArtifactResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByArtifactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByArtifactResponse;

        /**
         * Decodes a GetContextsByArtifactResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByArtifactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByArtifactResponse;

        /**
         * Verifies a GetContextsByArtifactResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByArtifactResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByArtifactResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByArtifactResponse;

        /**
         * Creates a plain object from a GetContextsByArtifactResponse message. Also converts values to other types if specified.
         * @param message GetContextsByArtifactResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByArtifactResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByArtifactResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByExecutionRequest. */
    interface IGetContextsByExecutionRequest {

        /** GetContextsByExecutionRequest executionId */
        executionId?: (number|Long|null);
    }

    /** Represents a GetContextsByExecutionRequest. */
    class GetContextsByExecutionRequest implements IGetContextsByExecutionRequest {

        /**
         * Constructs a new GetContextsByExecutionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByExecutionRequest);

        /** GetContextsByExecutionRequest executionId. */
        public executionId: (number|Long);

        /**
         * Creates a new GetContextsByExecutionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByExecutionRequest instance
         */
        public static create(properties?: ml_metadata.IGetContextsByExecutionRequest): ml_metadata.GetContextsByExecutionRequest;

        /**
         * Encodes the specified GetContextsByExecutionRequest message. Does not implicitly {@link ml_metadata.GetContextsByExecutionRequest.verify|verify} messages.
         * @param message GetContextsByExecutionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByExecutionRequest message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByExecutionRequest.verify|verify} messages.
         * @param message GetContextsByExecutionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByExecutionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByExecutionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByExecutionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByExecutionRequest;

        /**
         * Decodes a GetContextsByExecutionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByExecutionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByExecutionRequest;

        /**
         * Verifies a GetContextsByExecutionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByExecutionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByExecutionRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByExecutionRequest;

        /**
         * Creates a plain object from a GetContextsByExecutionRequest message. Also converts values to other types if specified.
         * @param message GetContextsByExecutionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByExecutionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByExecutionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContextsByExecutionResponse. */
    interface IGetContextsByExecutionResponse {

        /** GetContextsByExecutionResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a GetContextsByExecutionResponse. */
    class GetContextsByExecutionResponse implements IGetContextsByExecutionResponse {

        /**
         * Constructs a new GetContextsByExecutionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetContextsByExecutionResponse);

        /** GetContextsByExecutionResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new GetContextsByExecutionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContextsByExecutionResponse instance
         */
        public static create(properties?: ml_metadata.IGetContextsByExecutionResponse): ml_metadata.GetContextsByExecutionResponse;

        /**
         * Encodes the specified GetContextsByExecutionResponse message. Does not implicitly {@link ml_metadata.GetContextsByExecutionResponse.verify|verify} messages.
         * @param message GetContextsByExecutionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetContextsByExecutionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContextsByExecutionResponse message, length delimited. Does not implicitly {@link ml_metadata.GetContextsByExecutionResponse.verify|verify} messages.
         * @param message GetContextsByExecutionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetContextsByExecutionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContextsByExecutionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContextsByExecutionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetContextsByExecutionResponse;

        /**
         * Decodes a GetContextsByExecutionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContextsByExecutionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetContextsByExecutionResponse;

        /**
         * Verifies a GetContextsByExecutionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContextsByExecutionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContextsByExecutionResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetContextsByExecutionResponse;

        /**
         * Creates a plain object from a GetContextsByExecutionResponse message. Also converts values to other types if specified.
         * @param message GetContextsByExecutionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetContextsByExecutionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContextsByExecutionResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParentContextsByContextRequest. */
    interface IGetParentContextsByContextRequest {

        /** GetParentContextsByContextRequest contextId */
        contextId?: (number|Long|null);
    }

    /** Represents a GetParentContextsByContextRequest. */
    class GetParentContextsByContextRequest implements IGetParentContextsByContextRequest {

        /**
         * Constructs a new GetParentContextsByContextRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetParentContextsByContextRequest);

        /** GetParentContextsByContextRequest contextId. */
        public contextId: (number|Long);

        /**
         * Creates a new GetParentContextsByContextRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParentContextsByContextRequest instance
         */
        public static create(properties?: ml_metadata.IGetParentContextsByContextRequest): ml_metadata.GetParentContextsByContextRequest;

        /**
         * Encodes the specified GetParentContextsByContextRequest message. Does not implicitly {@link ml_metadata.GetParentContextsByContextRequest.verify|verify} messages.
         * @param message GetParentContextsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetParentContextsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParentContextsByContextRequest message, length delimited. Does not implicitly {@link ml_metadata.GetParentContextsByContextRequest.verify|verify} messages.
         * @param message GetParentContextsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetParentContextsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParentContextsByContextRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParentContextsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetParentContextsByContextRequest;

        /**
         * Decodes a GetParentContextsByContextRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParentContextsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetParentContextsByContextRequest;

        /**
         * Verifies a GetParentContextsByContextRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParentContextsByContextRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParentContextsByContextRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetParentContextsByContextRequest;

        /**
         * Creates a plain object from a GetParentContextsByContextRequest message. Also converts values to other types if specified.
         * @param message GetParentContextsByContextRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetParentContextsByContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParentContextsByContextRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetParentContextsByContextResponse. */
    interface IGetParentContextsByContextResponse {

        /** GetParentContextsByContextResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a GetParentContextsByContextResponse. */
    class GetParentContextsByContextResponse implements IGetParentContextsByContextResponse {

        /**
         * Constructs a new GetParentContextsByContextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetParentContextsByContextResponse);

        /** GetParentContextsByContextResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new GetParentContextsByContextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetParentContextsByContextResponse instance
         */
        public static create(properties?: ml_metadata.IGetParentContextsByContextResponse): ml_metadata.GetParentContextsByContextResponse;

        /**
         * Encodes the specified GetParentContextsByContextResponse message. Does not implicitly {@link ml_metadata.GetParentContextsByContextResponse.verify|verify} messages.
         * @param message GetParentContextsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetParentContextsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetParentContextsByContextResponse message, length delimited. Does not implicitly {@link ml_metadata.GetParentContextsByContextResponse.verify|verify} messages.
         * @param message GetParentContextsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetParentContextsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetParentContextsByContextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetParentContextsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetParentContextsByContextResponse;

        /**
         * Decodes a GetParentContextsByContextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetParentContextsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetParentContextsByContextResponse;

        /**
         * Verifies a GetParentContextsByContextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetParentContextsByContextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetParentContextsByContextResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetParentContextsByContextResponse;

        /**
         * Creates a plain object from a GetParentContextsByContextResponse message. Also converts values to other types if specified.
         * @param message GetParentContextsByContextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetParentContextsByContextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetParentContextsByContextResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetChildrenContextsByContextRequest. */
    interface IGetChildrenContextsByContextRequest {

        /** GetChildrenContextsByContextRequest contextId */
        contextId?: (number|Long|null);
    }

    /** Represents a GetChildrenContextsByContextRequest. */
    class GetChildrenContextsByContextRequest implements IGetChildrenContextsByContextRequest {

        /**
         * Constructs a new GetChildrenContextsByContextRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetChildrenContextsByContextRequest);

        /** GetChildrenContextsByContextRequest contextId. */
        public contextId: (number|Long);

        /**
         * Creates a new GetChildrenContextsByContextRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChildrenContextsByContextRequest instance
         */
        public static create(properties?: ml_metadata.IGetChildrenContextsByContextRequest): ml_metadata.GetChildrenContextsByContextRequest;

        /**
         * Encodes the specified GetChildrenContextsByContextRequest message. Does not implicitly {@link ml_metadata.GetChildrenContextsByContextRequest.verify|verify} messages.
         * @param message GetChildrenContextsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetChildrenContextsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChildrenContextsByContextRequest message, length delimited. Does not implicitly {@link ml_metadata.GetChildrenContextsByContextRequest.verify|verify} messages.
         * @param message GetChildrenContextsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetChildrenContextsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChildrenContextsByContextRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChildrenContextsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetChildrenContextsByContextRequest;

        /**
         * Decodes a GetChildrenContextsByContextRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChildrenContextsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetChildrenContextsByContextRequest;

        /**
         * Verifies a GetChildrenContextsByContextRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChildrenContextsByContextRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChildrenContextsByContextRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetChildrenContextsByContextRequest;

        /**
         * Creates a plain object from a GetChildrenContextsByContextRequest message. Also converts values to other types if specified.
         * @param message GetChildrenContextsByContextRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetChildrenContextsByContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChildrenContextsByContextRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetChildrenContextsByContextResponse. */
    interface IGetChildrenContextsByContextResponse {

        /** GetChildrenContextsByContextResponse contexts */
        contexts?: (ml_metadata.IContext[]|null);
    }

    /** Represents a GetChildrenContextsByContextResponse. */
    class GetChildrenContextsByContextResponse implements IGetChildrenContextsByContextResponse {

        /**
         * Constructs a new GetChildrenContextsByContextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetChildrenContextsByContextResponse);

        /** GetChildrenContextsByContextResponse contexts. */
        public contexts: ml_metadata.IContext[];

        /**
         * Creates a new GetChildrenContextsByContextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChildrenContextsByContextResponse instance
         */
        public static create(properties?: ml_metadata.IGetChildrenContextsByContextResponse): ml_metadata.GetChildrenContextsByContextResponse;

        /**
         * Encodes the specified GetChildrenContextsByContextResponse message. Does not implicitly {@link ml_metadata.GetChildrenContextsByContextResponse.verify|verify} messages.
         * @param message GetChildrenContextsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetChildrenContextsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChildrenContextsByContextResponse message, length delimited. Does not implicitly {@link ml_metadata.GetChildrenContextsByContextResponse.verify|verify} messages.
         * @param message GetChildrenContextsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetChildrenContextsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChildrenContextsByContextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChildrenContextsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetChildrenContextsByContextResponse;

        /**
         * Decodes a GetChildrenContextsByContextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChildrenContextsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetChildrenContextsByContextResponse;

        /**
         * Verifies a GetChildrenContextsByContextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChildrenContextsByContextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChildrenContextsByContextResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetChildrenContextsByContextResponse;

        /**
         * Creates a plain object from a GetChildrenContextsByContextResponse message. Also converts values to other types if specified.
         * @param message GetChildrenContextsByContextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetChildrenContextsByContextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChildrenContextsByContextResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByContextRequest. */
    interface IGetArtifactsByContextRequest {

        /** GetArtifactsByContextRequest contextId */
        contextId?: (number|Long|null);

        /** GetArtifactsByContextRequest options */
        options?: (ml_metadata.IListOperationOptions|null);
    }

    /** Represents a GetArtifactsByContextRequest. */
    class GetArtifactsByContextRequest implements IGetArtifactsByContextRequest {

        /**
         * Constructs a new GetArtifactsByContextRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByContextRequest);

        /** GetArtifactsByContextRequest contextId. */
        public contextId: (number|Long);

        /** GetArtifactsByContextRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /**
         * Creates a new GetArtifactsByContextRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByContextRequest instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByContextRequest): ml_metadata.GetArtifactsByContextRequest;

        /**
         * Encodes the specified GetArtifactsByContextRequest message. Does not implicitly {@link ml_metadata.GetArtifactsByContextRequest.verify|verify} messages.
         * @param message GetArtifactsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByContextRequest message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByContextRequest.verify|verify} messages.
         * @param message GetArtifactsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByContextRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByContextRequest;

        /**
         * Decodes a GetArtifactsByContextRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByContextRequest;

        /**
         * Verifies a GetArtifactsByContextRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByContextRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByContextRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByContextRequest;

        /**
         * Creates a plain object from a GetArtifactsByContextRequest message. Also converts values to other types if specified.
         * @param message GetArtifactsByContextRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByContextRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetArtifactsByContextResponse. */
    interface IGetArtifactsByContextResponse {

        /** GetArtifactsByContextResponse artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);

        /** GetArtifactsByContextResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetArtifactsByContextResponse. */
    class GetArtifactsByContextResponse implements IGetArtifactsByContextResponse {

        /**
         * Constructs a new GetArtifactsByContextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetArtifactsByContextResponse);

        /** GetArtifactsByContextResponse artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /** GetArtifactsByContextResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetArtifactsByContextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetArtifactsByContextResponse instance
         */
        public static create(properties?: ml_metadata.IGetArtifactsByContextResponse): ml_metadata.GetArtifactsByContextResponse;

        /**
         * Encodes the specified GetArtifactsByContextResponse message. Does not implicitly {@link ml_metadata.GetArtifactsByContextResponse.verify|verify} messages.
         * @param message GetArtifactsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetArtifactsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetArtifactsByContextResponse message, length delimited. Does not implicitly {@link ml_metadata.GetArtifactsByContextResponse.verify|verify} messages.
         * @param message GetArtifactsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetArtifactsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetArtifactsByContextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetArtifactsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetArtifactsByContextResponse;

        /**
         * Decodes a GetArtifactsByContextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetArtifactsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetArtifactsByContextResponse;

        /**
         * Verifies a GetArtifactsByContextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetArtifactsByContextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetArtifactsByContextResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetArtifactsByContextResponse;

        /**
         * Creates a plain object from a GetArtifactsByContextResponse message. Also converts values to other types if specified.
         * @param message GetArtifactsByContextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetArtifactsByContextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetArtifactsByContextResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByContextRequest. */
    interface IGetExecutionsByContextRequest {

        /** GetExecutionsByContextRequest contextId */
        contextId?: (number|Long|null);

        /** GetExecutionsByContextRequest options */
        options?: (ml_metadata.IListOperationOptions|null);
    }

    /** Represents a GetExecutionsByContextRequest. */
    class GetExecutionsByContextRequest implements IGetExecutionsByContextRequest {

        /**
         * Constructs a new GetExecutionsByContextRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByContextRequest);

        /** GetExecutionsByContextRequest contextId. */
        public contextId: (number|Long);

        /** GetExecutionsByContextRequest options. */
        public options?: (ml_metadata.IListOperationOptions|null);

        /**
         * Creates a new GetExecutionsByContextRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByContextRequest instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByContextRequest): ml_metadata.GetExecutionsByContextRequest;

        /**
         * Encodes the specified GetExecutionsByContextRequest message. Does not implicitly {@link ml_metadata.GetExecutionsByContextRequest.verify|verify} messages.
         * @param message GetExecutionsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByContextRequest message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByContextRequest.verify|verify} messages.
         * @param message GetExecutionsByContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByContextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByContextRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByContextRequest;

        /**
         * Decodes a GetExecutionsByContextRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByContextRequest;

        /**
         * Verifies a GetExecutionsByContextRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByContextRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByContextRequest
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByContextRequest;

        /**
         * Creates a plain object from a GetExecutionsByContextRequest message. Also converts values to other types if specified.
         * @param message GetExecutionsByContextRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByContextRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetExecutionsByContextResponse. */
    interface IGetExecutionsByContextResponse {

        /** GetExecutionsByContextResponse executions */
        executions?: (ml_metadata.IExecution[]|null);

        /** GetExecutionsByContextResponse nextPageToken */
        nextPageToken?: (string|null);
    }

    /** Represents a GetExecutionsByContextResponse. */
    class GetExecutionsByContextResponse implements IGetExecutionsByContextResponse {

        /**
         * Constructs a new GetExecutionsByContextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGetExecutionsByContextResponse);

        /** GetExecutionsByContextResponse executions. */
        public executions: ml_metadata.IExecution[];

        /** GetExecutionsByContextResponse nextPageToken. */
        public nextPageToken: string;

        /**
         * Creates a new GetExecutionsByContextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetExecutionsByContextResponse instance
         */
        public static create(properties?: ml_metadata.IGetExecutionsByContextResponse): ml_metadata.GetExecutionsByContextResponse;

        /**
         * Encodes the specified GetExecutionsByContextResponse message. Does not implicitly {@link ml_metadata.GetExecutionsByContextResponse.verify|verify} messages.
         * @param message GetExecutionsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGetExecutionsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetExecutionsByContextResponse message, length delimited. Does not implicitly {@link ml_metadata.GetExecutionsByContextResponse.verify|verify} messages.
         * @param message GetExecutionsByContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGetExecutionsByContextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetExecutionsByContextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetExecutionsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GetExecutionsByContextResponse;

        /**
         * Decodes a GetExecutionsByContextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetExecutionsByContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GetExecutionsByContextResponse;

        /**
         * Verifies a GetExecutionsByContextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetExecutionsByContextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetExecutionsByContextResponse
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GetExecutionsByContextResponse;

        /**
         * Creates a plain object from a GetExecutionsByContextResponse message. Also converts values to other types if specified.
         * @param message GetExecutionsByContextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GetExecutionsByContextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetExecutionsByContextResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a MetadataStoreService */
    class MetadataStoreService extends $protobuf.rpc.Service {

        /**
         * Constructs a new MetadataStoreService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new MetadataStoreService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): MetadataStoreService;

        /**
         * Calls PutArtifactType.
         * @param request PutArtifactTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutArtifactTypeResponse
         */
        public putArtifactType(request: ml_metadata.IPutArtifactTypeRequest, callback: ml_metadata.MetadataStoreService.PutArtifactTypeCallback): void;

        /**
         * Calls PutArtifactType.
         * @param request PutArtifactTypeRequest message or plain object
         * @returns Promise
         */
        public putArtifactType(request: ml_metadata.IPutArtifactTypeRequest): Promise<ml_metadata.PutArtifactTypeResponse>;

        /**
         * Calls PutExecutionType.
         * @param request PutExecutionTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutExecutionTypeResponse
         */
        public putExecutionType(request: ml_metadata.IPutExecutionTypeRequest, callback: ml_metadata.MetadataStoreService.PutExecutionTypeCallback): void;

        /**
         * Calls PutExecutionType.
         * @param request PutExecutionTypeRequest message or plain object
         * @returns Promise
         */
        public putExecutionType(request: ml_metadata.IPutExecutionTypeRequest): Promise<ml_metadata.PutExecutionTypeResponse>;

        /**
         * Calls PutContextType.
         * @param request PutContextTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutContextTypeResponse
         */
        public putContextType(request: ml_metadata.IPutContextTypeRequest, callback: ml_metadata.MetadataStoreService.PutContextTypeCallback): void;

        /**
         * Calls PutContextType.
         * @param request PutContextTypeRequest message or plain object
         * @returns Promise
         */
        public putContextType(request: ml_metadata.IPutContextTypeRequest): Promise<ml_metadata.PutContextTypeResponse>;

        /**
         * Calls PutTypes.
         * @param request PutTypesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutTypesResponse
         */
        public putTypes(request: ml_metadata.IPutTypesRequest, callback: ml_metadata.MetadataStoreService.PutTypesCallback): void;

        /**
         * Calls PutTypes.
         * @param request PutTypesRequest message or plain object
         * @returns Promise
         */
        public putTypes(request: ml_metadata.IPutTypesRequest): Promise<ml_metadata.PutTypesResponse>;

        /**
         * Calls PutArtifacts.
         * @param request PutArtifactsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutArtifactsResponse
         */
        public putArtifacts(request: ml_metadata.IPutArtifactsRequest, callback: ml_metadata.MetadataStoreService.PutArtifactsCallback): void;

        /**
         * Calls PutArtifacts.
         * @param request PutArtifactsRequest message or plain object
         * @returns Promise
         */
        public putArtifacts(request: ml_metadata.IPutArtifactsRequest): Promise<ml_metadata.PutArtifactsResponse>;

        /**
         * Calls PutExecutions.
         * @param request PutExecutionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutExecutionsResponse
         */
        public putExecutions(request: ml_metadata.IPutExecutionsRequest, callback: ml_metadata.MetadataStoreService.PutExecutionsCallback): void;

        /**
         * Calls PutExecutions.
         * @param request PutExecutionsRequest message or plain object
         * @returns Promise
         */
        public putExecutions(request: ml_metadata.IPutExecutionsRequest): Promise<ml_metadata.PutExecutionsResponse>;

        /**
         * Calls PutEvents.
         * @param request PutEventsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutEventsResponse
         */
        public putEvents(request: ml_metadata.IPutEventsRequest, callback: ml_metadata.MetadataStoreService.PutEventsCallback): void;

        /**
         * Calls PutEvents.
         * @param request PutEventsRequest message or plain object
         * @returns Promise
         */
        public putEvents(request: ml_metadata.IPutEventsRequest): Promise<ml_metadata.PutEventsResponse>;

        /**
         * Calls PutExecution.
         * @param request PutExecutionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutExecutionResponse
         */
        public putExecution(request: ml_metadata.IPutExecutionRequest, callback: ml_metadata.MetadataStoreService.PutExecutionCallback): void;

        /**
         * Calls PutExecution.
         * @param request PutExecutionRequest message or plain object
         * @returns Promise
         */
        public putExecution(request: ml_metadata.IPutExecutionRequest): Promise<ml_metadata.PutExecutionResponse>;

        /**
         * Calls PutContexts.
         * @param request PutContextsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutContextsResponse
         */
        public putContexts(request: ml_metadata.IPutContextsRequest, callback: ml_metadata.MetadataStoreService.PutContextsCallback): void;

        /**
         * Calls PutContexts.
         * @param request PutContextsRequest message or plain object
         * @returns Promise
         */
        public putContexts(request: ml_metadata.IPutContextsRequest): Promise<ml_metadata.PutContextsResponse>;

        /**
         * Calls PutAttributionsAndAssociations.
         * @param request PutAttributionsAndAssociationsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutAttributionsAndAssociationsResponse
         */
        public putAttributionsAndAssociations(request: ml_metadata.IPutAttributionsAndAssociationsRequest, callback: ml_metadata.MetadataStoreService.PutAttributionsAndAssociationsCallback): void;

        /**
         * Calls PutAttributionsAndAssociations.
         * @param request PutAttributionsAndAssociationsRequest message or plain object
         * @returns Promise
         */
        public putAttributionsAndAssociations(request: ml_metadata.IPutAttributionsAndAssociationsRequest): Promise<ml_metadata.PutAttributionsAndAssociationsResponse>;

        /**
         * Calls PutParentContexts.
         * @param request PutParentContextsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PutParentContextsResponse
         */
        public putParentContexts(request: ml_metadata.IPutParentContextsRequest, callback: ml_metadata.MetadataStoreService.PutParentContextsCallback): void;

        /**
         * Calls PutParentContexts.
         * @param request PutParentContextsRequest message or plain object
         * @returns Promise
         */
        public putParentContexts(request: ml_metadata.IPutParentContextsRequest): Promise<ml_metadata.PutParentContextsResponse>;

        /**
         * Calls GetArtifactType.
         * @param request GetArtifactTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactTypeResponse
         */
        public getArtifactType(request: ml_metadata.IGetArtifactTypeRequest, callback: ml_metadata.MetadataStoreService.GetArtifactTypeCallback): void;

        /**
         * Calls GetArtifactType.
         * @param request GetArtifactTypeRequest message or plain object
         * @returns Promise
         */
        public getArtifactType(request: ml_metadata.IGetArtifactTypeRequest): Promise<ml_metadata.GetArtifactTypeResponse>;

        /**
         * Calls GetArtifactTypesByID.
         * @param request GetArtifactTypesByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactTypesByIDResponse
         */
        public getArtifactTypesByID(request: ml_metadata.IGetArtifactTypesByIDRequest, callback: ml_metadata.MetadataStoreService.GetArtifactTypesByIDCallback): void;

        /**
         * Calls GetArtifactTypesByID.
         * @param request GetArtifactTypesByIDRequest message or plain object
         * @returns Promise
         */
        public getArtifactTypesByID(request: ml_metadata.IGetArtifactTypesByIDRequest): Promise<ml_metadata.GetArtifactTypesByIDResponse>;

        /**
         * Calls GetArtifactTypes.
         * @param request GetArtifactTypesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactTypesResponse
         */
        public getArtifactTypes(request: ml_metadata.IGetArtifactTypesRequest, callback: ml_metadata.MetadataStoreService.GetArtifactTypesCallback): void;

        /**
         * Calls GetArtifactTypes.
         * @param request GetArtifactTypesRequest message or plain object
         * @returns Promise
         */
        public getArtifactTypes(request: ml_metadata.IGetArtifactTypesRequest): Promise<ml_metadata.GetArtifactTypesResponse>;

        /**
         * Calls GetExecutionType.
         * @param request GetExecutionTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionTypeResponse
         */
        public getExecutionType(request: ml_metadata.IGetExecutionTypeRequest, callback: ml_metadata.MetadataStoreService.GetExecutionTypeCallback): void;

        /**
         * Calls GetExecutionType.
         * @param request GetExecutionTypeRequest message or plain object
         * @returns Promise
         */
        public getExecutionType(request: ml_metadata.IGetExecutionTypeRequest): Promise<ml_metadata.GetExecutionTypeResponse>;

        /**
         * Calls GetExecutionTypesByID.
         * @param request GetExecutionTypesByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionTypesByIDResponse
         */
        public getExecutionTypesByID(request: ml_metadata.IGetExecutionTypesByIDRequest, callback: ml_metadata.MetadataStoreService.GetExecutionTypesByIDCallback): void;

        /**
         * Calls GetExecutionTypesByID.
         * @param request GetExecutionTypesByIDRequest message or plain object
         * @returns Promise
         */
        public getExecutionTypesByID(request: ml_metadata.IGetExecutionTypesByIDRequest): Promise<ml_metadata.GetExecutionTypesByIDResponse>;

        /**
         * Calls GetExecutionTypes.
         * @param request GetExecutionTypesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionTypesResponse
         */
        public getExecutionTypes(request: ml_metadata.IGetExecutionTypesRequest, callback: ml_metadata.MetadataStoreService.GetExecutionTypesCallback): void;

        /**
         * Calls GetExecutionTypes.
         * @param request GetExecutionTypesRequest message or plain object
         * @returns Promise
         */
        public getExecutionTypes(request: ml_metadata.IGetExecutionTypesRequest): Promise<ml_metadata.GetExecutionTypesResponse>;

        /**
         * Calls GetContextType.
         * @param request GetContextTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextTypeResponse
         */
        public getContextType(request: ml_metadata.IGetContextTypeRequest, callback: ml_metadata.MetadataStoreService.GetContextTypeCallback): void;

        /**
         * Calls GetContextType.
         * @param request GetContextTypeRequest message or plain object
         * @returns Promise
         */
        public getContextType(request: ml_metadata.IGetContextTypeRequest): Promise<ml_metadata.GetContextTypeResponse>;

        /**
         * Calls GetContextTypesByID.
         * @param request GetContextTypesByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextTypesByIDResponse
         */
        public getContextTypesByID(request: ml_metadata.IGetContextTypesByIDRequest, callback: ml_metadata.MetadataStoreService.GetContextTypesByIDCallback): void;

        /**
         * Calls GetContextTypesByID.
         * @param request GetContextTypesByIDRequest message or plain object
         * @returns Promise
         */
        public getContextTypesByID(request: ml_metadata.IGetContextTypesByIDRequest): Promise<ml_metadata.GetContextTypesByIDResponse>;

        /**
         * Calls GetContextTypes.
         * @param request GetContextTypesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextTypesResponse
         */
        public getContextTypes(request: ml_metadata.IGetContextTypesRequest, callback: ml_metadata.MetadataStoreService.GetContextTypesCallback): void;

        /**
         * Calls GetContextTypes.
         * @param request GetContextTypesRequest message or plain object
         * @returns Promise
         */
        public getContextTypes(request: ml_metadata.IGetContextTypesRequest): Promise<ml_metadata.GetContextTypesResponse>;

        /**
         * Calls GetArtifacts.
         * @param request GetArtifactsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactsResponse
         */
        public getArtifacts(request: ml_metadata.IGetArtifactsRequest, callback: ml_metadata.MetadataStoreService.GetArtifactsCallback): void;

        /**
         * Calls GetArtifacts.
         * @param request GetArtifactsRequest message or plain object
         * @returns Promise
         */
        public getArtifacts(request: ml_metadata.IGetArtifactsRequest): Promise<ml_metadata.GetArtifactsResponse>;

        /**
         * Calls GetExecutions.
         * @param request GetExecutionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionsResponse
         */
        public getExecutions(request: ml_metadata.IGetExecutionsRequest, callback: ml_metadata.MetadataStoreService.GetExecutionsCallback): void;

        /**
         * Calls GetExecutions.
         * @param request GetExecutionsRequest message or plain object
         * @returns Promise
         */
        public getExecutions(request: ml_metadata.IGetExecutionsRequest): Promise<ml_metadata.GetExecutionsResponse>;

        /**
         * Calls GetContexts.
         * @param request GetContextsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextsResponse
         */
        public getContexts(request: ml_metadata.IGetContextsRequest, callback: ml_metadata.MetadataStoreService.GetContextsCallback): void;

        /**
         * Calls GetContexts.
         * @param request GetContextsRequest message or plain object
         * @returns Promise
         */
        public getContexts(request: ml_metadata.IGetContextsRequest): Promise<ml_metadata.GetContextsResponse>;

        /**
         * Calls GetArtifactsByID.
         * @param request GetArtifactsByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactsByIDResponse
         */
        public getArtifactsByID(request: ml_metadata.IGetArtifactsByIDRequest, callback: ml_metadata.MetadataStoreService.GetArtifactsByIDCallback): void;

        /**
         * Calls GetArtifactsByID.
         * @param request GetArtifactsByIDRequest message or plain object
         * @returns Promise
         */
        public getArtifactsByID(request: ml_metadata.IGetArtifactsByIDRequest): Promise<ml_metadata.GetArtifactsByIDResponse>;

        /**
         * Calls GetExecutionsByID.
         * @param request GetExecutionsByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionsByIDResponse
         */
        public getExecutionsByID(request: ml_metadata.IGetExecutionsByIDRequest, callback: ml_metadata.MetadataStoreService.GetExecutionsByIDCallback): void;

        /**
         * Calls GetExecutionsByID.
         * @param request GetExecutionsByIDRequest message or plain object
         * @returns Promise
         */
        public getExecutionsByID(request: ml_metadata.IGetExecutionsByIDRequest): Promise<ml_metadata.GetExecutionsByIDResponse>;

        /**
         * Calls GetContextsByID.
         * @param request GetContextsByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextsByIDResponse
         */
        public getContextsByID(request: ml_metadata.IGetContextsByIDRequest, callback: ml_metadata.MetadataStoreService.GetContextsByIDCallback): void;

        /**
         * Calls GetContextsByID.
         * @param request GetContextsByIDRequest message or plain object
         * @returns Promise
         */
        public getContextsByID(request: ml_metadata.IGetContextsByIDRequest): Promise<ml_metadata.GetContextsByIDResponse>;

        /**
         * Calls GetArtifactsByType.
         * @param request GetArtifactsByTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactsByTypeResponse
         */
        public getArtifactsByType(request: ml_metadata.IGetArtifactsByTypeRequest, callback: ml_metadata.MetadataStoreService.GetArtifactsByTypeCallback): void;

        /**
         * Calls GetArtifactsByType.
         * @param request GetArtifactsByTypeRequest message or plain object
         * @returns Promise
         */
        public getArtifactsByType(request: ml_metadata.IGetArtifactsByTypeRequest): Promise<ml_metadata.GetArtifactsByTypeResponse>;

        /**
         * Calls GetExecutionsByType.
         * @param request GetExecutionsByTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionsByTypeResponse
         */
        public getExecutionsByType(request: ml_metadata.IGetExecutionsByTypeRequest, callback: ml_metadata.MetadataStoreService.GetExecutionsByTypeCallback): void;

        /**
         * Calls GetExecutionsByType.
         * @param request GetExecutionsByTypeRequest message or plain object
         * @returns Promise
         */
        public getExecutionsByType(request: ml_metadata.IGetExecutionsByTypeRequest): Promise<ml_metadata.GetExecutionsByTypeResponse>;

        /**
         * Calls GetContextsByType.
         * @param request GetContextsByTypeRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextsByTypeResponse
         */
        public getContextsByType(request: ml_metadata.IGetContextsByTypeRequest, callback: ml_metadata.MetadataStoreService.GetContextsByTypeCallback): void;

        /**
         * Calls GetContextsByType.
         * @param request GetContextsByTypeRequest message or plain object
         * @returns Promise
         */
        public getContextsByType(request: ml_metadata.IGetContextsByTypeRequest): Promise<ml_metadata.GetContextsByTypeResponse>;

        /**
         * Calls GetArtifactByTypeAndName.
         * @param request GetArtifactByTypeAndNameRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactByTypeAndNameResponse
         */
        public getArtifactByTypeAndName(request: ml_metadata.IGetArtifactByTypeAndNameRequest, callback: ml_metadata.MetadataStoreService.GetArtifactByTypeAndNameCallback): void;

        /**
         * Calls GetArtifactByTypeAndName.
         * @param request GetArtifactByTypeAndNameRequest message or plain object
         * @returns Promise
         */
        public getArtifactByTypeAndName(request: ml_metadata.IGetArtifactByTypeAndNameRequest): Promise<ml_metadata.GetArtifactByTypeAndNameResponse>;

        /**
         * Calls GetExecutionByTypeAndName.
         * @param request GetExecutionByTypeAndNameRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionByTypeAndNameResponse
         */
        public getExecutionByTypeAndName(request: ml_metadata.IGetExecutionByTypeAndNameRequest, callback: ml_metadata.MetadataStoreService.GetExecutionByTypeAndNameCallback): void;

        /**
         * Calls GetExecutionByTypeAndName.
         * @param request GetExecutionByTypeAndNameRequest message or plain object
         * @returns Promise
         */
        public getExecutionByTypeAndName(request: ml_metadata.IGetExecutionByTypeAndNameRequest): Promise<ml_metadata.GetExecutionByTypeAndNameResponse>;

        /**
         * Calls GetContextByTypeAndName.
         * @param request GetContextByTypeAndNameRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextByTypeAndNameResponse
         */
        public getContextByTypeAndName(request: ml_metadata.IGetContextByTypeAndNameRequest, callback: ml_metadata.MetadataStoreService.GetContextByTypeAndNameCallback): void;

        /**
         * Calls GetContextByTypeAndName.
         * @param request GetContextByTypeAndNameRequest message or plain object
         * @returns Promise
         */
        public getContextByTypeAndName(request: ml_metadata.IGetContextByTypeAndNameRequest): Promise<ml_metadata.GetContextByTypeAndNameResponse>;

        /**
         * Calls GetArtifactsByURI.
         * @param request GetArtifactsByURIRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactsByURIResponse
         */
        public getArtifactsByURI(request: ml_metadata.IGetArtifactsByURIRequest, callback: ml_metadata.MetadataStoreService.GetArtifactsByURICallback): void;

        /**
         * Calls GetArtifactsByURI.
         * @param request GetArtifactsByURIRequest message or plain object
         * @returns Promise
         */
        public getArtifactsByURI(request: ml_metadata.IGetArtifactsByURIRequest): Promise<ml_metadata.GetArtifactsByURIResponse>;

        /**
         * Calls GetEventsByExecutionIDs.
         * @param request GetEventsByExecutionIDsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEventsByExecutionIDsResponse
         */
        public getEventsByExecutionIDs(request: ml_metadata.IGetEventsByExecutionIDsRequest, callback: ml_metadata.MetadataStoreService.GetEventsByExecutionIDsCallback): void;

        /**
         * Calls GetEventsByExecutionIDs.
         * @param request GetEventsByExecutionIDsRequest message or plain object
         * @returns Promise
         */
        public getEventsByExecutionIDs(request: ml_metadata.IGetEventsByExecutionIDsRequest): Promise<ml_metadata.GetEventsByExecutionIDsResponse>;

        /**
         * Calls GetEventsByArtifactIDs.
         * @param request GetEventsByArtifactIDsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEventsByArtifactIDsResponse
         */
        public getEventsByArtifactIDs(request: ml_metadata.IGetEventsByArtifactIDsRequest, callback: ml_metadata.MetadataStoreService.GetEventsByArtifactIDsCallback): void;

        /**
         * Calls GetEventsByArtifactIDs.
         * @param request GetEventsByArtifactIDsRequest message or plain object
         * @returns Promise
         */
        public getEventsByArtifactIDs(request: ml_metadata.IGetEventsByArtifactIDsRequest): Promise<ml_metadata.GetEventsByArtifactIDsResponse>;

        /**
         * Calls GetContextsByArtifact.
         * @param request GetContextsByArtifactRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextsByArtifactResponse
         */
        public getContextsByArtifact(request: ml_metadata.IGetContextsByArtifactRequest, callback: ml_metadata.MetadataStoreService.GetContextsByArtifactCallback): void;

        /**
         * Calls GetContextsByArtifact.
         * @param request GetContextsByArtifactRequest message or plain object
         * @returns Promise
         */
        public getContextsByArtifact(request: ml_metadata.IGetContextsByArtifactRequest): Promise<ml_metadata.GetContextsByArtifactResponse>;

        /**
         * Calls GetContextsByExecution.
         * @param request GetContextsByExecutionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContextsByExecutionResponse
         */
        public getContextsByExecution(request: ml_metadata.IGetContextsByExecutionRequest, callback: ml_metadata.MetadataStoreService.GetContextsByExecutionCallback): void;

        /**
         * Calls GetContextsByExecution.
         * @param request GetContextsByExecutionRequest message or plain object
         * @returns Promise
         */
        public getContextsByExecution(request: ml_metadata.IGetContextsByExecutionRequest): Promise<ml_metadata.GetContextsByExecutionResponse>;

        /**
         * Calls GetParentContextsByContext.
         * @param request GetParentContextsByContextRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetParentContextsByContextResponse
         */
        public getParentContextsByContext(request: ml_metadata.IGetParentContextsByContextRequest, callback: ml_metadata.MetadataStoreService.GetParentContextsByContextCallback): void;

        /**
         * Calls GetParentContextsByContext.
         * @param request GetParentContextsByContextRequest message or plain object
         * @returns Promise
         */
        public getParentContextsByContext(request: ml_metadata.IGetParentContextsByContextRequest): Promise<ml_metadata.GetParentContextsByContextResponse>;

        /**
         * Calls GetChildrenContextsByContext.
         * @param request GetChildrenContextsByContextRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetChildrenContextsByContextResponse
         */
        public getChildrenContextsByContext(request: ml_metadata.IGetChildrenContextsByContextRequest, callback: ml_metadata.MetadataStoreService.GetChildrenContextsByContextCallback): void;

        /**
         * Calls GetChildrenContextsByContext.
         * @param request GetChildrenContextsByContextRequest message or plain object
         * @returns Promise
         */
        public getChildrenContextsByContext(request: ml_metadata.IGetChildrenContextsByContextRequest): Promise<ml_metadata.GetChildrenContextsByContextResponse>;

        /**
         * Calls GetArtifactsByContext.
         * @param request GetArtifactsByContextRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetArtifactsByContextResponse
         */
        public getArtifactsByContext(request: ml_metadata.IGetArtifactsByContextRequest, callback: ml_metadata.MetadataStoreService.GetArtifactsByContextCallback): void;

        /**
         * Calls GetArtifactsByContext.
         * @param request GetArtifactsByContextRequest message or plain object
         * @returns Promise
         */
        public getArtifactsByContext(request: ml_metadata.IGetArtifactsByContextRequest): Promise<ml_metadata.GetArtifactsByContextResponse>;

        /**
         * Calls GetExecutionsByContext.
         * @param request GetExecutionsByContextRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetExecutionsByContextResponse
         */
        public getExecutionsByContext(request: ml_metadata.IGetExecutionsByContextRequest, callback: ml_metadata.MetadataStoreService.GetExecutionsByContextCallback): void;

        /**
         * Calls GetExecutionsByContext.
         * @param request GetExecutionsByContextRequest message or plain object
         * @returns Promise
         */
        public getExecutionsByContext(request: ml_metadata.IGetExecutionsByContextRequest): Promise<ml_metadata.GetExecutionsByContextResponse>;
    }

    namespace MetadataStoreService {

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putArtifactType}.
         * @param error Error, if any
         * @param [response] PutArtifactTypeResponse
         */
        type PutArtifactTypeCallback = (error: (Error|null), response?: ml_metadata.PutArtifactTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putExecutionType}.
         * @param error Error, if any
         * @param [response] PutExecutionTypeResponse
         */
        type PutExecutionTypeCallback = (error: (Error|null), response?: ml_metadata.PutExecutionTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putContextType}.
         * @param error Error, if any
         * @param [response] PutContextTypeResponse
         */
        type PutContextTypeCallback = (error: (Error|null), response?: ml_metadata.PutContextTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putTypes}.
         * @param error Error, if any
         * @param [response] PutTypesResponse
         */
        type PutTypesCallback = (error: (Error|null), response?: ml_metadata.PutTypesResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putArtifacts}.
         * @param error Error, if any
         * @param [response] PutArtifactsResponse
         */
        type PutArtifactsCallback = (error: (Error|null), response?: ml_metadata.PutArtifactsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putExecutions}.
         * @param error Error, if any
         * @param [response] PutExecutionsResponse
         */
        type PutExecutionsCallback = (error: (Error|null), response?: ml_metadata.PutExecutionsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putEvents}.
         * @param error Error, if any
         * @param [response] PutEventsResponse
         */
        type PutEventsCallback = (error: (Error|null), response?: ml_metadata.PutEventsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putExecution}.
         * @param error Error, if any
         * @param [response] PutExecutionResponse
         */
        type PutExecutionCallback = (error: (Error|null), response?: ml_metadata.PutExecutionResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putContexts}.
         * @param error Error, if any
         * @param [response] PutContextsResponse
         */
        type PutContextsCallback = (error: (Error|null), response?: ml_metadata.PutContextsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putAttributionsAndAssociations}.
         * @param error Error, if any
         * @param [response] PutAttributionsAndAssociationsResponse
         */
        type PutAttributionsAndAssociationsCallback = (error: (Error|null), response?: ml_metadata.PutAttributionsAndAssociationsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#putParentContexts}.
         * @param error Error, if any
         * @param [response] PutParentContextsResponse
         */
        type PutParentContextsCallback = (error: (Error|null), response?: ml_metadata.PutParentContextsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactType}.
         * @param error Error, if any
         * @param [response] GetArtifactTypeResponse
         */
        type GetArtifactTypeCallback = (error: (Error|null), response?: ml_metadata.GetArtifactTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactTypesByID}.
         * @param error Error, if any
         * @param [response] GetArtifactTypesByIDResponse
         */
        type GetArtifactTypesByIDCallback = (error: (Error|null), response?: ml_metadata.GetArtifactTypesByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactTypes}.
         * @param error Error, if any
         * @param [response] GetArtifactTypesResponse
         */
        type GetArtifactTypesCallback = (error: (Error|null), response?: ml_metadata.GetArtifactTypesResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionType}.
         * @param error Error, if any
         * @param [response] GetExecutionTypeResponse
         */
        type GetExecutionTypeCallback = (error: (Error|null), response?: ml_metadata.GetExecutionTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionTypesByID}.
         * @param error Error, if any
         * @param [response] GetExecutionTypesByIDResponse
         */
        type GetExecutionTypesByIDCallback = (error: (Error|null), response?: ml_metadata.GetExecutionTypesByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionTypes}.
         * @param error Error, if any
         * @param [response] GetExecutionTypesResponse
         */
        type GetExecutionTypesCallback = (error: (Error|null), response?: ml_metadata.GetExecutionTypesResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextType}.
         * @param error Error, if any
         * @param [response] GetContextTypeResponse
         */
        type GetContextTypeCallback = (error: (Error|null), response?: ml_metadata.GetContextTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextTypesByID}.
         * @param error Error, if any
         * @param [response] GetContextTypesByIDResponse
         */
        type GetContextTypesByIDCallback = (error: (Error|null), response?: ml_metadata.GetContextTypesByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextTypes}.
         * @param error Error, if any
         * @param [response] GetContextTypesResponse
         */
        type GetContextTypesCallback = (error: (Error|null), response?: ml_metadata.GetContextTypesResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifacts}.
         * @param error Error, if any
         * @param [response] GetArtifactsResponse
         */
        type GetArtifactsCallback = (error: (Error|null), response?: ml_metadata.GetArtifactsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutions}.
         * @param error Error, if any
         * @param [response] GetExecutionsResponse
         */
        type GetExecutionsCallback = (error: (Error|null), response?: ml_metadata.GetExecutionsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContexts}.
         * @param error Error, if any
         * @param [response] GetContextsResponse
         */
        type GetContextsCallback = (error: (Error|null), response?: ml_metadata.GetContextsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactsByID}.
         * @param error Error, if any
         * @param [response] GetArtifactsByIDResponse
         */
        type GetArtifactsByIDCallback = (error: (Error|null), response?: ml_metadata.GetArtifactsByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionsByID}.
         * @param error Error, if any
         * @param [response] GetExecutionsByIDResponse
         */
        type GetExecutionsByIDCallback = (error: (Error|null), response?: ml_metadata.GetExecutionsByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextsByID}.
         * @param error Error, if any
         * @param [response] GetContextsByIDResponse
         */
        type GetContextsByIDCallback = (error: (Error|null), response?: ml_metadata.GetContextsByIDResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactsByType}.
         * @param error Error, if any
         * @param [response] GetArtifactsByTypeResponse
         */
        type GetArtifactsByTypeCallback = (error: (Error|null), response?: ml_metadata.GetArtifactsByTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionsByType}.
         * @param error Error, if any
         * @param [response] GetExecutionsByTypeResponse
         */
        type GetExecutionsByTypeCallback = (error: (Error|null), response?: ml_metadata.GetExecutionsByTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextsByType}.
         * @param error Error, if any
         * @param [response] GetContextsByTypeResponse
         */
        type GetContextsByTypeCallback = (error: (Error|null), response?: ml_metadata.GetContextsByTypeResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactByTypeAndName}.
         * @param error Error, if any
         * @param [response] GetArtifactByTypeAndNameResponse
         */
        type GetArtifactByTypeAndNameCallback = (error: (Error|null), response?: ml_metadata.GetArtifactByTypeAndNameResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionByTypeAndName}.
         * @param error Error, if any
         * @param [response] GetExecutionByTypeAndNameResponse
         */
        type GetExecutionByTypeAndNameCallback = (error: (Error|null), response?: ml_metadata.GetExecutionByTypeAndNameResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextByTypeAndName}.
         * @param error Error, if any
         * @param [response] GetContextByTypeAndNameResponse
         */
        type GetContextByTypeAndNameCallback = (error: (Error|null), response?: ml_metadata.GetContextByTypeAndNameResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactsByURI}.
         * @param error Error, if any
         * @param [response] GetArtifactsByURIResponse
         */
        type GetArtifactsByURICallback = (error: (Error|null), response?: ml_metadata.GetArtifactsByURIResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getEventsByExecutionIDs}.
         * @param error Error, if any
         * @param [response] GetEventsByExecutionIDsResponse
         */
        type GetEventsByExecutionIDsCallback = (error: (Error|null), response?: ml_metadata.GetEventsByExecutionIDsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getEventsByArtifactIDs}.
         * @param error Error, if any
         * @param [response] GetEventsByArtifactIDsResponse
         */
        type GetEventsByArtifactIDsCallback = (error: (Error|null), response?: ml_metadata.GetEventsByArtifactIDsResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextsByArtifact}.
         * @param error Error, if any
         * @param [response] GetContextsByArtifactResponse
         */
        type GetContextsByArtifactCallback = (error: (Error|null), response?: ml_metadata.GetContextsByArtifactResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getContextsByExecution}.
         * @param error Error, if any
         * @param [response] GetContextsByExecutionResponse
         */
        type GetContextsByExecutionCallback = (error: (Error|null), response?: ml_metadata.GetContextsByExecutionResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getParentContextsByContext}.
         * @param error Error, if any
         * @param [response] GetParentContextsByContextResponse
         */
        type GetParentContextsByContextCallback = (error: (Error|null), response?: ml_metadata.GetParentContextsByContextResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getChildrenContextsByContext}.
         * @param error Error, if any
         * @param [response] GetChildrenContextsByContextResponse
         */
        type GetChildrenContextsByContextCallback = (error: (Error|null), response?: ml_metadata.GetChildrenContextsByContextResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getArtifactsByContext}.
         * @param error Error, if any
         * @param [response] GetArtifactsByContextResponse
         */
        type GetArtifactsByContextCallback = (error: (Error|null), response?: ml_metadata.GetArtifactsByContextResponse) => void;

        /**
         * Callback as used by {@link ml_metadata.MetadataStoreService#getExecutionsByContext}.
         * @param error Error, if any
         * @param [response] GetExecutionsByContextResponse
         */
        type GetExecutionsByContextCallback = (error: (Error|null), response?: ml_metadata.GetExecutionsByContextResponse) => void;
    }

    /** Properties of a Value. */
    interface IValue {

        /** Value intValue */
        intValue?: (number|Long|null);

        /** Value doubleValue */
        doubleValue?: (number|null);

        /** Value stringValue */
        stringValue?: (string|null);

        /** Value structValue */
        structValue?: (google.protobuf.IStruct|null);
    }

    /** Represents a Value. */
    class Value implements IValue {

        /**
         * Constructs a new Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IValue);

        /** Value intValue. */
        public intValue?: (number|Long|null);

        /** Value doubleValue. */
        public doubleValue?: (number|null);

        /** Value stringValue. */
        public stringValue?: (string|null);

        /** Value structValue. */
        public structValue?: (google.protobuf.IStruct|null);

        /** Value value. */
        public value?: ("intValue"|"doubleValue"|"stringValue"|"structValue");

        /**
         * Creates a new Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Value instance
         */
        public static create(properties?: ml_metadata.IValue): ml_metadata.Value;

        /**
         * Encodes the specified Value message. Does not implicitly {@link ml_metadata.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link ml_metadata.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Value;

        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Value;

        /**
         * Verifies a Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Value
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Value;

        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @param message Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Artifact. */
    interface IArtifact {

        /** Artifact id */
        id?: (number|Long|null);

        /** Artifact name */
        name?: (string|null);

        /** Artifact typeId */
        typeId?: (number|Long|null);

        /** Artifact type */
        type?: (string|null);

        /** Artifact uri */
        uri?: (string|null);

        /** Artifact properties */
        properties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Artifact customProperties */
        customProperties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Artifact state */
        state?: (ml_metadata.Artifact.State|null);

        /** Artifact createTimeSinceEpoch */
        createTimeSinceEpoch?: (number|Long|null);

        /** Artifact lastUpdateTimeSinceEpoch */
        lastUpdateTimeSinceEpoch?: (number|Long|null);
    }

    /** Represents an Artifact. */
    class Artifact implements IArtifact {

        /**
         * Constructs a new Artifact.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifact);

        /** Artifact id. */
        public id: (number|Long);

        /** Artifact name. */
        public name: string;

        /** Artifact typeId. */
        public typeId: (number|Long);

        /** Artifact type. */
        public type: string;

        /** Artifact uri. */
        public uri: string;

        /** Artifact properties. */
        public properties: { [k: string]: ml_metadata.IValue };

        /** Artifact customProperties. */
        public customProperties: { [k: string]: ml_metadata.IValue };

        /** Artifact state. */
        public state: ml_metadata.Artifact.State;

        /** Artifact createTimeSinceEpoch. */
        public createTimeSinceEpoch: (number|Long);

        /** Artifact lastUpdateTimeSinceEpoch. */
        public lastUpdateTimeSinceEpoch: (number|Long);

        /**
         * Creates a new Artifact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Artifact instance
         */
        public static create(properties?: ml_metadata.IArtifact): ml_metadata.Artifact;

        /**
         * Encodes the specified Artifact message. Does not implicitly {@link ml_metadata.Artifact.verify|verify} messages.
         * @param message Artifact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Artifact message, length delimited. Does not implicitly {@link ml_metadata.Artifact.verify|verify} messages.
         * @param message Artifact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Artifact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Artifact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Artifact;

        /**
         * Decodes an Artifact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Artifact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Artifact;

        /**
         * Verifies an Artifact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Artifact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Artifact
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Artifact;

        /**
         * Creates a plain object from an Artifact message. Also converts values to other types if specified.
         * @param message Artifact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Artifact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Artifact {

        /** State enum. */
        enum State {
            UNKNOWN = 0,
            PENDING = 1,
            LIVE = 2,
            MARKED_FOR_DELETION = 3,
            DELETED = 4
        }
    }

    /** PropertyType enum. */
    enum PropertyType {
        UNKNOWN = 0,
        INT = 1,
        DOUBLE = 2,
        STRING = 3,
        STRUCT = 4
    }

    /** Properties of an ArtifactType. */
    interface IArtifactType {

        /** ArtifactType id */
        id?: (number|Long|null);

        /** ArtifactType name */
        name?: (string|null);

        /** ArtifactType version */
        version?: (string|null);

        /** ArtifactType description */
        description?: (string|null);

        /** ArtifactType properties */
        properties?: ({ [k: string]: ml_metadata.PropertyType }|null);
    }

    /** Represents an ArtifactType. */
    class ArtifactType implements IArtifactType {

        /**
         * Constructs a new ArtifactType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactType);

        /** ArtifactType id. */
        public id: (number|Long);

        /** ArtifactType name. */
        public name: string;

        /** ArtifactType version. */
        public version: string;

        /** ArtifactType description. */
        public description: string;

        /** ArtifactType properties. */
        public properties: { [k: string]: ml_metadata.PropertyType };

        /**
         * Creates a new ArtifactType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactType instance
         */
        public static create(properties?: ml_metadata.IArtifactType): ml_metadata.ArtifactType;

        /**
         * Encodes the specified ArtifactType message. Does not implicitly {@link ml_metadata.ArtifactType.verify|verify} messages.
         * @param message ArtifactType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactType message, length delimited. Does not implicitly {@link ml_metadata.ArtifactType.verify|verify} messages.
         * @param message ArtifactType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactType;

        /**
         * Decodes an ArtifactType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactType;

        /**
         * Verifies an ArtifactType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactType;

        /**
         * Creates a plain object from an ArtifactType message. Also converts values to other types if specified.
         * @param message ArtifactType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event artifactId */
        artifactId?: (number|Long|null);

        /** Event executionId */
        executionId?: (number|Long|null);

        /** Event path */
        path?: (ml_metadata.Event.IPath|null);

        /** Event type */
        type?: (ml_metadata.Event.Type|null);

        /** Event millisecondsSinceEpoch */
        millisecondsSinceEpoch?: (number|Long|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IEvent);

        /** Event artifactId. */
        public artifactId: (number|Long);

        /** Event executionId. */
        public executionId: (number|Long);

        /** Event path. */
        public path?: (ml_metadata.Event.IPath|null);

        /** Event type. */
        public type: ml_metadata.Event.Type;

        /** Event millisecondsSinceEpoch. */
        public millisecondsSinceEpoch: (number|Long);

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: ml_metadata.IEvent): ml_metadata.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link ml_metadata.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link ml_metadata.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Event {

        /** Properties of a Path. */
        interface IPath {

            /** Path steps */
            steps?: (ml_metadata.Event.Path.IStep[]|null);
        }

        /** Represents a Path. */
        class Path implements IPath {

            /**
             * Constructs a new Path.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.Event.IPath);

            /** Path steps. */
            public steps: ml_metadata.Event.Path.IStep[];

            /**
             * Creates a new Path instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Path instance
             */
            public static create(properties?: ml_metadata.Event.IPath): ml_metadata.Event.Path;

            /**
             * Encodes the specified Path message. Does not implicitly {@link ml_metadata.Event.Path.verify|verify} messages.
             * @param message Path message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.Event.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Path message, length delimited. Does not implicitly {@link ml_metadata.Event.Path.verify|verify} messages.
             * @param message Path message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.Event.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Path message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Path
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Event.Path;

            /**
             * Decodes a Path message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Path
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Event.Path;

            /**
             * Verifies a Path message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Path message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Path
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.Event.Path;

            /**
             * Creates a plain object from a Path message. Also converts values to other types if specified.
             * @param message Path
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.Event.Path, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Path to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Path {

            /** Properties of a Step. */
            interface IStep {

                /** Step index */
                index?: (number|Long|null);

                /** Step key */
                key?: (string|null);
            }

            /** Represents a Step. */
            class Step implements IStep {

                /**
                 * Constructs a new Step.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ml_metadata.Event.Path.IStep);

                /** Step index. */
                public index?: (number|Long|null);

                /** Step key. */
                public key?: (string|null);

                /** Step value. */
                public value?: ("index"|"key");

                /**
                 * Creates a new Step instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Step instance
                 */
                public static create(properties?: ml_metadata.Event.Path.IStep): ml_metadata.Event.Path.Step;

                /**
                 * Encodes the specified Step message. Does not implicitly {@link ml_metadata.Event.Path.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ml_metadata.Event.Path.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Step message, length delimited. Does not implicitly {@link ml_metadata.Event.Path.Step.verify|verify} messages.
                 * @param message Step message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ml_metadata.Event.Path.IStep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Step message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Event.Path.Step;

                /**
                 * Decodes a Step message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Step
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Event.Path.Step;

                /**
                 * Verifies a Step message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Step message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Step
                 */
                public static fromObject(object: { [k: string]: any }): ml_metadata.Event.Path.Step;

                /**
                 * Creates a plain object from a Step message. Also converts values to other types if specified.
                 * @param message Step
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ml_metadata.Event.Path.Step, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Step to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            DECLARED_OUTPUT = 1,
            DECLARED_INPUT = 2,
            INPUT = 3,
            OUTPUT = 4,
            INTERNAL_INPUT = 5,
            INTERNAL_OUTPUT = 6
        }
    }

    /** Properties of an Execution. */
    interface IExecution {

        /** Execution id */
        id?: (number|Long|null);

        /** Execution name */
        name?: (string|null);

        /** Execution typeId */
        typeId?: (number|Long|null);

        /** Execution type */
        type?: (string|null);

        /** Execution lastKnownState */
        lastKnownState?: (ml_metadata.Execution.State|null);

        /** Execution properties */
        properties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Execution customProperties */
        customProperties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Execution createTimeSinceEpoch */
        createTimeSinceEpoch?: (number|Long|null);

        /** Execution lastUpdateTimeSinceEpoch */
        lastUpdateTimeSinceEpoch?: (number|Long|null);
    }

    /** Represents an Execution. */
    class Execution implements IExecution {

        /**
         * Constructs a new Execution.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IExecution);

        /** Execution id. */
        public id: (number|Long);

        /** Execution name. */
        public name: string;

        /** Execution typeId. */
        public typeId: (number|Long);

        /** Execution type. */
        public type: string;

        /** Execution lastKnownState. */
        public lastKnownState: ml_metadata.Execution.State;

        /** Execution properties. */
        public properties: { [k: string]: ml_metadata.IValue };

        /** Execution customProperties. */
        public customProperties: { [k: string]: ml_metadata.IValue };

        /** Execution createTimeSinceEpoch. */
        public createTimeSinceEpoch: (number|Long);

        /** Execution lastUpdateTimeSinceEpoch. */
        public lastUpdateTimeSinceEpoch: (number|Long);

        /**
         * Creates a new Execution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Execution instance
         */
        public static create(properties?: ml_metadata.IExecution): ml_metadata.Execution;

        /**
         * Encodes the specified Execution message. Does not implicitly {@link ml_metadata.Execution.verify|verify} messages.
         * @param message Execution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Execution message, length delimited. Does not implicitly {@link ml_metadata.Execution.verify|verify} messages.
         * @param message Execution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Execution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Execution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Execution;

        /**
         * Decodes an Execution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Execution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Execution;

        /**
         * Verifies an Execution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Execution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Execution
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Execution;

        /**
         * Creates a plain object from an Execution message. Also converts values to other types if specified.
         * @param message Execution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Execution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Execution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Execution {

        /** State enum. */
        enum State {
            UNKNOWN = 0,
            NEW = 1,
            RUNNING = 2,
            COMPLETE = 3,
            FAILED = 4,
            CACHED = 5,
            CANCELED = 6
        }
    }

    /** Properties of an ExecutionType. */
    interface IExecutionType {

        /** ExecutionType id */
        id?: (number|Long|null);

        /** ExecutionType name */
        name?: (string|null);

        /** ExecutionType version */
        version?: (string|null);

        /** ExecutionType description */
        description?: (string|null);

        /** ExecutionType properties */
        properties?: ({ [k: string]: ml_metadata.PropertyType }|null);

        /** ExecutionType inputType */
        inputType?: (ml_metadata.IArtifactStructType|null);

        /** ExecutionType outputType */
        outputType?: (ml_metadata.IArtifactStructType|null);
    }

    /** Represents an ExecutionType. */
    class ExecutionType implements IExecutionType {

        /**
         * Constructs a new ExecutionType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IExecutionType);

        /** ExecutionType id. */
        public id: (number|Long);

        /** ExecutionType name. */
        public name: string;

        /** ExecutionType version. */
        public version: string;

        /** ExecutionType description. */
        public description: string;

        /** ExecutionType properties. */
        public properties: { [k: string]: ml_metadata.PropertyType };

        /** ExecutionType inputType. */
        public inputType?: (ml_metadata.IArtifactStructType|null);

        /** ExecutionType outputType. */
        public outputType?: (ml_metadata.IArtifactStructType|null);

        /**
         * Creates a new ExecutionType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecutionType instance
         */
        public static create(properties?: ml_metadata.IExecutionType): ml_metadata.ExecutionType;

        /**
         * Encodes the specified ExecutionType message. Does not implicitly {@link ml_metadata.ExecutionType.verify|verify} messages.
         * @param message ExecutionType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IExecutionType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecutionType message, length delimited. Does not implicitly {@link ml_metadata.ExecutionType.verify|verify} messages.
         * @param message ExecutionType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IExecutionType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecutionType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecutionType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ExecutionType;

        /**
         * Decodes an ExecutionType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecutionType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ExecutionType;

        /**
         * Verifies an ExecutionType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecutionType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecutionType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ExecutionType;

        /**
         * Creates a plain object from an ExecutionType message. Also converts values to other types if specified.
         * @param message ExecutionType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ExecutionType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecutionType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContextType. */
    interface IContextType {

        /** ContextType id */
        id?: (number|Long|null);

        /** ContextType name */
        name?: (string|null);

        /** ContextType version */
        version?: (string|null);

        /** ContextType description */
        description?: (string|null);

        /** ContextType properties */
        properties?: ({ [k: string]: ml_metadata.PropertyType }|null);
    }

    /** Represents a ContextType. */
    class ContextType implements IContextType {

        /**
         * Constructs a new ContextType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IContextType);

        /** ContextType id. */
        public id: (number|Long);

        /** ContextType name. */
        public name: string;

        /** ContextType version. */
        public version: string;

        /** ContextType description. */
        public description: string;

        /** ContextType properties. */
        public properties: { [k: string]: ml_metadata.PropertyType };

        /**
         * Creates a new ContextType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContextType instance
         */
        public static create(properties?: ml_metadata.IContextType): ml_metadata.ContextType;

        /**
         * Encodes the specified ContextType message. Does not implicitly {@link ml_metadata.ContextType.verify|verify} messages.
         * @param message ContextType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IContextType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContextType message, length delimited. Does not implicitly {@link ml_metadata.ContextType.verify|verify} messages.
         * @param message ContextType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IContextType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContextType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContextType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ContextType;

        /**
         * Decodes a ContextType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContextType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ContextType;

        /**
         * Verifies a ContextType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContextType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContextType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ContextType;

        /**
         * Creates a plain object from a ContextType message. Also converts values to other types if specified.
         * @param message ContextType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ContextType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContextType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Context. */
    interface IContext {

        /** Context id */
        id?: (number|Long|null);

        /** Context name */
        name?: (string|null);

        /** Context typeId */
        typeId?: (number|Long|null);

        /** Context type */
        type?: (string|null);

        /** Context properties */
        properties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Context customProperties */
        customProperties?: ({ [k: string]: ml_metadata.IValue }|null);

        /** Context createTimeSinceEpoch */
        createTimeSinceEpoch?: (number|Long|null);

        /** Context lastUpdateTimeSinceEpoch */
        lastUpdateTimeSinceEpoch?: (number|Long|null);
    }

    /** Represents a Context. */
    class Context implements IContext {

        /**
         * Constructs a new Context.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IContext);

        /** Context id. */
        public id: (number|Long);

        /** Context name. */
        public name: string;

        /** Context typeId. */
        public typeId: (number|Long);

        /** Context type. */
        public type: string;

        /** Context properties. */
        public properties: { [k: string]: ml_metadata.IValue };

        /** Context customProperties. */
        public customProperties: { [k: string]: ml_metadata.IValue };

        /** Context createTimeSinceEpoch. */
        public createTimeSinceEpoch: (number|Long);

        /** Context lastUpdateTimeSinceEpoch. */
        public lastUpdateTimeSinceEpoch: (number|Long);

        /**
         * Creates a new Context instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Context instance
         */
        public static create(properties?: ml_metadata.IContext): ml_metadata.Context;

        /**
         * Encodes the specified Context message. Does not implicitly {@link ml_metadata.Context.verify|verify} messages.
         * @param message Context message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Context message, length delimited. Does not implicitly {@link ml_metadata.Context.verify|verify} messages.
         * @param message Context message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Context message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Context
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Context;

        /**
         * Decodes a Context message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Context
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Context;

        /**
         * Verifies a Context message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Context message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Context
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Context;

        /**
         * Creates a plain object from a Context message. Also converts values to other types if specified.
         * @param message Context
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Context, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Context to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attribution. */
    interface IAttribution {

        /** Attribution artifactId */
        artifactId?: (number|Long|null);

        /** Attribution contextId */
        contextId?: (number|Long|null);
    }

    /** Represents an Attribution. */
    class Attribution implements IAttribution {

        /**
         * Constructs a new Attribution.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IAttribution);

        /** Attribution artifactId. */
        public artifactId: (number|Long);

        /** Attribution contextId. */
        public contextId: (number|Long);

        /**
         * Creates a new Attribution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attribution instance
         */
        public static create(properties?: ml_metadata.IAttribution): ml_metadata.Attribution;

        /**
         * Encodes the specified Attribution message. Does not implicitly {@link ml_metadata.Attribution.verify|verify} messages.
         * @param message Attribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attribution message, length delimited. Does not implicitly {@link ml_metadata.Attribution.verify|verify} messages.
         * @param message Attribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attribution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Attribution;

        /**
         * Decodes an Attribution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Attribution;

        /**
         * Verifies an Attribution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attribution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attribution
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Attribution;

        /**
         * Creates a plain object from an Attribution message. Also converts values to other types if specified.
         * @param message Attribution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Attribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attribution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Association. */
    interface IAssociation {

        /** Association executionId */
        executionId?: (number|Long|null);

        /** Association contextId */
        contextId?: (number|Long|null);
    }

    /** Represents an Association. */
    class Association implements IAssociation {

        /**
         * Constructs a new Association.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IAssociation);

        /** Association executionId. */
        public executionId: (number|Long);

        /** Association contextId. */
        public contextId: (number|Long);

        /**
         * Creates a new Association instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Association instance
         */
        public static create(properties?: ml_metadata.IAssociation): ml_metadata.Association;

        /**
         * Encodes the specified Association message. Does not implicitly {@link ml_metadata.Association.verify|verify} messages.
         * @param message Association message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Association message, length delimited. Does not implicitly {@link ml_metadata.Association.verify|verify} messages.
         * @param message Association message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Association message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Association
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.Association;

        /**
         * Decodes an Association message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Association
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.Association;

        /**
         * Verifies an Association message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Association message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Association
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.Association;

        /**
         * Creates a plain object from an Association message. Also converts values to other types if specified.
         * @param message Association
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.Association, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Association to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParentContext. */
    interface IParentContext {

        /** ParentContext childId */
        childId?: (number|Long|null);

        /** ParentContext parentId */
        parentId?: (number|Long|null);
    }

    /** Represents a ParentContext. */
    class ParentContext implements IParentContext {

        /**
         * Constructs a new ParentContext.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IParentContext);

        /** ParentContext childId. */
        public childId: (number|Long);

        /** ParentContext parentId. */
        public parentId: (number|Long);

        /**
         * Creates a new ParentContext instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParentContext instance
         */
        public static create(properties?: ml_metadata.IParentContext): ml_metadata.ParentContext;

        /**
         * Encodes the specified ParentContext message. Does not implicitly {@link ml_metadata.ParentContext.verify|verify} messages.
         * @param message ParentContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IParentContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParentContext message, length delimited. Does not implicitly {@link ml_metadata.ParentContext.verify|verify} messages.
         * @param message ParentContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IParentContext, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParentContext message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParentContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ParentContext;

        /**
         * Decodes a ParentContext message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParentContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ParentContext;

        /**
         * Verifies a ParentContext message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParentContext message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParentContext
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ParentContext;

        /**
         * Creates a plain object from a ParentContext message. Also converts values to other types if specified.
         * @param message ParentContext
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ParentContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParentContext to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LineageGraph. */
    interface ILineageGraph {

        /** LineageGraph artifactTypes */
        artifactTypes?: (ml_metadata.IArtifactType[]|null);

        /** LineageGraph executionTypes */
        executionTypes?: (ml_metadata.IExecutionType[]|null);

        /** LineageGraph contextTypes */
        contextTypes?: (ml_metadata.IContextType[]|null);

        /** LineageGraph artifacts */
        artifacts?: (ml_metadata.IArtifact[]|null);

        /** LineageGraph executions */
        executions?: (ml_metadata.IExecution[]|null);

        /** LineageGraph contexts */
        contexts?: (ml_metadata.IContext[]|null);

        /** LineageGraph events */
        events?: (ml_metadata.IEvent[]|null);

        /** LineageGraph attributions */
        attributions?: (ml_metadata.IAttribution[]|null);

        /** LineageGraph associations */
        associations?: (ml_metadata.IAssociation[]|null);
    }

    /** Represents a LineageGraph. */
    class LineageGraph implements ILineageGraph {

        /**
         * Constructs a new LineageGraph.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.ILineageGraph);

        /** LineageGraph artifactTypes. */
        public artifactTypes: ml_metadata.IArtifactType[];

        /** LineageGraph executionTypes. */
        public executionTypes: ml_metadata.IExecutionType[];

        /** LineageGraph contextTypes. */
        public contextTypes: ml_metadata.IContextType[];

        /** LineageGraph artifacts. */
        public artifacts: ml_metadata.IArtifact[];

        /** LineageGraph executions. */
        public executions: ml_metadata.IExecution[];

        /** LineageGraph contexts. */
        public contexts: ml_metadata.IContext[];

        /** LineageGraph events. */
        public events: ml_metadata.IEvent[];

        /** LineageGraph attributions. */
        public attributions: ml_metadata.IAttribution[];

        /** LineageGraph associations. */
        public associations: ml_metadata.IAssociation[];

        /**
         * Creates a new LineageGraph instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LineageGraph instance
         */
        public static create(properties?: ml_metadata.ILineageGraph): ml_metadata.LineageGraph;

        /**
         * Encodes the specified LineageGraph message. Does not implicitly {@link ml_metadata.LineageGraph.verify|verify} messages.
         * @param message LineageGraph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.ILineageGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LineageGraph message, length delimited. Does not implicitly {@link ml_metadata.LineageGraph.verify|verify} messages.
         * @param message LineageGraph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.ILineageGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LineageGraph message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LineageGraph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.LineageGraph;

        /**
         * Decodes a LineageGraph message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LineageGraph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.LineageGraph;

        /**
         * Verifies a LineageGraph message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LineageGraph message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LineageGraph
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.LineageGraph;

        /**
         * Creates a plain object from a LineageGraph message. Also converts values to other types if specified.
         * @param message LineageGraph
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.LineageGraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LineageGraph to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArtifactStructType. */
    interface IArtifactStructType {

        /** ArtifactStructType simple */
        simple?: (ml_metadata.IArtifactType|null);

        /** ArtifactStructType unionType */
        unionType?: (ml_metadata.IUnionArtifactStructType|null);

        /** ArtifactStructType intersection */
        intersection?: (ml_metadata.IIntersectionArtifactStructType|null);

        /** ArtifactStructType list */
        list?: (ml_metadata.IListArtifactStructType|null);

        /** ArtifactStructType none */
        none?: (ml_metadata.INoneArtifactStructType|null);

        /** ArtifactStructType any */
        any?: (ml_metadata.IAnyArtifactStructType|null);

        /** ArtifactStructType tuple */
        tuple?: (ml_metadata.ITupleArtifactStructType|null);

        /** ArtifactStructType dict */
        dict?: (ml_metadata.IDictArtifactStructType|null);
    }

    /** Represents an ArtifactStructType. */
    class ArtifactStructType implements IArtifactStructType {

        /**
         * Constructs a new ArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IArtifactStructType);

        /** ArtifactStructType simple. */
        public simple?: (ml_metadata.IArtifactType|null);

        /** ArtifactStructType unionType. */
        public unionType?: (ml_metadata.IUnionArtifactStructType|null);

        /** ArtifactStructType intersection. */
        public intersection?: (ml_metadata.IIntersectionArtifactStructType|null);

        /** ArtifactStructType list. */
        public list?: (ml_metadata.IListArtifactStructType|null);

        /** ArtifactStructType none. */
        public none?: (ml_metadata.INoneArtifactStructType|null);

        /** ArtifactStructType any. */
        public any?: (ml_metadata.IAnyArtifactStructType|null);

        /** ArtifactStructType tuple. */
        public tuple?: (ml_metadata.ITupleArtifactStructType|null);

        /** ArtifactStructType dict. */
        public dict?: (ml_metadata.IDictArtifactStructType|null);

        /** ArtifactStructType kind. */
        public kind?: ("simple"|"unionType"|"intersection"|"list"|"none"|"any"|"tuple"|"dict");

        /**
         * Creates a new ArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IArtifactStructType): ml_metadata.ArtifactStructType;

        /**
         * Encodes the specified ArtifactStructType message. Does not implicitly {@link ml_metadata.ArtifactStructType.verify|verify} messages.
         * @param message ArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.ArtifactStructType.verify|verify} messages.
         * @param message ArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ArtifactStructType;

        /**
         * Decodes an ArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ArtifactStructType;

        /**
         * Verifies an ArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ArtifactStructType;

        /**
         * Creates a plain object from an ArtifactStructType message. Also converts values to other types if specified.
         * @param message ArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnionArtifactStructType. */
    interface IUnionArtifactStructType {

        /** UnionArtifactStructType candidates */
        candidates?: (ml_metadata.IArtifactStructType[]|null);
    }

    /** Represents an UnionArtifactStructType. */
    class UnionArtifactStructType implements IUnionArtifactStructType {

        /**
         * Constructs a new UnionArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IUnionArtifactStructType);

        /** UnionArtifactStructType candidates. */
        public candidates: ml_metadata.IArtifactStructType[];

        /**
         * Creates a new UnionArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnionArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IUnionArtifactStructType): ml_metadata.UnionArtifactStructType;

        /**
         * Encodes the specified UnionArtifactStructType message. Does not implicitly {@link ml_metadata.UnionArtifactStructType.verify|verify} messages.
         * @param message UnionArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IUnionArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnionArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.UnionArtifactStructType.verify|verify} messages.
         * @param message UnionArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IUnionArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnionArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnionArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.UnionArtifactStructType;

        /**
         * Decodes an UnionArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnionArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.UnionArtifactStructType;

        /**
         * Verifies an UnionArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnionArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnionArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.UnionArtifactStructType;

        /**
         * Creates a plain object from an UnionArtifactStructType message. Also converts values to other types if specified.
         * @param message UnionArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.UnionArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnionArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntersectionArtifactStructType. */
    interface IIntersectionArtifactStructType {

        /** IntersectionArtifactStructType constraints */
        constraints?: (ml_metadata.IArtifactStructType[]|null);
    }

    /** Represents an IntersectionArtifactStructType. */
    class IntersectionArtifactStructType implements IIntersectionArtifactStructType {

        /**
         * Constructs a new IntersectionArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IIntersectionArtifactStructType);

        /** IntersectionArtifactStructType constraints. */
        public constraints: ml_metadata.IArtifactStructType[];

        /**
         * Creates a new IntersectionArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntersectionArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IIntersectionArtifactStructType): ml_metadata.IntersectionArtifactStructType;

        /**
         * Encodes the specified IntersectionArtifactStructType message. Does not implicitly {@link ml_metadata.IntersectionArtifactStructType.verify|verify} messages.
         * @param message IntersectionArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IIntersectionArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntersectionArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.IntersectionArtifactStructType.verify|verify} messages.
         * @param message IntersectionArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IIntersectionArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntersectionArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntersectionArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.IntersectionArtifactStructType;

        /**
         * Decodes an IntersectionArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntersectionArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.IntersectionArtifactStructType;

        /**
         * Verifies an IntersectionArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntersectionArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntersectionArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.IntersectionArtifactStructType;

        /**
         * Creates a plain object from an IntersectionArtifactStructType message. Also converts values to other types if specified.
         * @param message IntersectionArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.IntersectionArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntersectionArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListArtifactStructType. */
    interface IListArtifactStructType {

        /** ListArtifactStructType element */
        element?: (ml_metadata.IArtifactStructType|null);
    }

    /** Represents a ListArtifactStructType. */
    class ListArtifactStructType implements IListArtifactStructType {

        /**
         * Constructs a new ListArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IListArtifactStructType);

        /** ListArtifactStructType element. */
        public element?: (ml_metadata.IArtifactStructType|null);

        /**
         * Creates a new ListArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IListArtifactStructType): ml_metadata.ListArtifactStructType;

        /**
         * Encodes the specified ListArtifactStructType message. Does not implicitly {@link ml_metadata.ListArtifactStructType.verify|verify} messages.
         * @param message ListArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IListArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.ListArtifactStructType.verify|verify} messages.
         * @param message ListArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IListArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ListArtifactStructType;

        /**
         * Decodes a ListArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ListArtifactStructType;

        /**
         * Verifies a ListArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ListArtifactStructType;

        /**
         * Creates a plain object from a ListArtifactStructType message. Also converts values to other types if specified.
         * @param message ListArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ListArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoneArtifactStructType. */
    interface INoneArtifactStructType {
    }

    /** Represents a NoneArtifactStructType. */
    class NoneArtifactStructType implements INoneArtifactStructType {

        /**
         * Constructs a new NoneArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.INoneArtifactStructType);

        /**
         * Creates a new NoneArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoneArtifactStructType instance
         */
        public static create(properties?: ml_metadata.INoneArtifactStructType): ml_metadata.NoneArtifactStructType;

        /**
         * Encodes the specified NoneArtifactStructType message. Does not implicitly {@link ml_metadata.NoneArtifactStructType.verify|verify} messages.
         * @param message NoneArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.INoneArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoneArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.NoneArtifactStructType.verify|verify} messages.
         * @param message NoneArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.INoneArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoneArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoneArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.NoneArtifactStructType;

        /**
         * Decodes a NoneArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoneArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.NoneArtifactStructType;

        /**
         * Verifies a NoneArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoneArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoneArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.NoneArtifactStructType;

        /**
         * Creates a plain object from a NoneArtifactStructType message. Also converts values to other types if specified.
         * @param message NoneArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.NoneArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoneArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnyArtifactStructType. */
    interface IAnyArtifactStructType {
    }

    /** Represents an AnyArtifactStructType. */
    class AnyArtifactStructType implements IAnyArtifactStructType {

        /**
         * Constructs a new AnyArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IAnyArtifactStructType);

        /**
         * Creates a new AnyArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnyArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IAnyArtifactStructType): ml_metadata.AnyArtifactStructType;

        /**
         * Encodes the specified AnyArtifactStructType message. Does not implicitly {@link ml_metadata.AnyArtifactStructType.verify|verify} messages.
         * @param message AnyArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IAnyArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnyArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.AnyArtifactStructType.verify|verify} messages.
         * @param message AnyArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IAnyArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnyArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnyArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.AnyArtifactStructType;

        /**
         * Decodes an AnyArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnyArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.AnyArtifactStructType;

        /**
         * Verifies an AnyArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnyArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnyArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.AnyArtifactStructType;

        /**
         * Creates a plain object from an AnyArtifactStructType message. Also converts values to other types if specified.
         * @param message AnyArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.AnyArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnyArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TupleArtifactStructType. */
    interface ITupleArtifactStructType {

        /** TupleArtifactStructType elements */
        elements?: (ml_metadata.IArtifactStructType[]|null);
    }

    /** Represents a TupleArtifactStructType. */
    class TupleArtifactStructType implements ITupleArtifactStructType {

        /**
         * Constructs a new TupleArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.ITupleArtifactStructType);

        /** TupleArtifactStructType elements. */
        public elements: ml_metadata.IArtifactStructType[];

        /**
         * Creates a new TupleArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TupleArtifactStructType instance
         */
        public static create(properties?: ml_metadata.ITupleArtifactStructType): ml_metadata.TupleArtifactStructType;

        /**
         * Encodes the specified TupleArtifactStructType message. Does not implicitly {@link ml_metadata.TupleArtifactStructType.verify|verify} messages.
         * @param message TupleArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.ITupleArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TupleArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.TupleArtifactStructType.verify|verify} messages.
         * @param message TupleArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.ITupleArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TupleArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TupleArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.TupleArtifactStructType;

        /**
         * Decodes a TupleArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TupleArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.TupleArtifactStructType;

        /**
         * Verifies a TupleArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TupleArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TupleArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.TupleArtifactStructType;

        /**
         * Creates a plain object from a TupleArtifactStructType message. Also converts values to other types if specified.
         * @param message TupleArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.TupleArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TupleArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DictArtifactStructType. */
    interface IDictArtifactStructType {

        /** DictArtifactStructType properties */
        properties?: ({ [k: string]: ml_metadata.IArtifactStructType }|null);

        /** DictArtifactStructType noneTypeNotRequired */
        noneTypeNotRequired?: (boolean|null);

        /** DictArtifactStructType extraPropertiesType */
        extraPropertiesType?: (ml_metadata.IArtifactStructType|null);
    }

    /** Represents a DictArtifactStructType. */
    class DictArtifactStructType implements IDictArtifactStructType {

        /**
         * Constructs a new DictArtifactStructType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IDictArtifactStructType);

        /** DictArtifactStructType properties. */
        public properties: { [k: string]: ml_metadata.IArtifactStructType };

        /** DictArtifactStructType noneTypeNotRequired. */
        public noneTypeNotRequired: boolean;

        /** DictArtifactStructType extraPropertiesType. */
        public extraPropertiesType?: (ml_metadata.IArtifactStructType|null);

        /**
         * Creates a new DictArtifactStructType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DictArtifactStructType instance
         */
        public static create(properties?: ml_metadata.IDictArtifactStructType): ml_metadata.DictArtifactStructType;

        /**
         * Encodes the specified DictArtifactStructType message. Does not implicitly {@link ml_metadata.DictArtifactStructType.verify|verify} messages.
         * @param message DictArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IDictArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DictArtifactStructType message, length delimited. Does not implicitly {@link ml_metadata.DictArtifactStructType.verify|verify} messages.
         * @param message DictArtifactStructType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IDictArtifactStructType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DictArtifactStructType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DictArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.DictArtifactStructType;

        /**
         * Decodes a DictArtifactStructType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DictArtifactStructType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.DictArtifactStructType;

        /**
         * Verifies a DictArtifactStructType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DictArtifactStructType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DictArtifactStructType
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.DictArtifactStructType;

        /**
         * Creates a plain object from a DictArtifactStructType message. Also converts values to other types if specified.
         * @param message DictArtifactStructType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.DictArtifactStructType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DictArtifactStructType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FakeDatabaseConfig. */
    interface IFakeDatabaseConfig {
    }

    /** Represents a FakeDatabaseConfig. */
    class FakeDatabaseConfig implements IFakeDatabaseConfig {

        /**
         * Constructs a new FakeDatabaseConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IFakeDatabaseConfig);

        /**
         * Creates a new FakeDatabaseConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FakeDatabaseConfig instance
         */
        public static create(properties?: ml_metadata.IFakeDatabaseConfig): ml_metadata.FakeDatabaseConfig;

        /**
         * Encodes the specified FakeDatabaseConfig message. Does not implicitly {@link ml_metadata.FakeDatabaseConfig.verify|verify} messages.
         * @param message FakeDatabaseConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IFakeDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FakeDatabaseConfig message, length delimited. Does not implicitly {@link ml_metadata.FakeDatabaseConfig.verify|verify} messages.
         * @param message FakeDatabaseConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IFakeDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FakeDatabaseConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FakeDatabaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.FakeDatabaseConfig;

        /**
         * Decodes a FakeDatabaseConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FakeDatabaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.FakeDatabaseConfig;

        /**
         * Verifies a FakeDatabaseConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FakeDatabaseConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FakeDatabaseConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.FakeDatabaseConfig;

        /**
         * Creates a plain object from a FakeDatabaseConfig message. Also converts values to other types if specified.
         * @param message FakeDatabaseConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.FakeDatabaseConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FakeDatabaseConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MySQLDatabaseConfig. */
    interface IMySQLDatabaseConfig {

        /** MySQLDatabaseConfig host */
        host?: (string|null);

        /** MySQLDatabaseConfig port */
        port?: (number|null);

        /** MySQLDatabaseConfig database */
        database?: (string|null);

        /** MySQLDatabaseConfig user */
        user?: (string|null);

        /** MySQLDatabaseConfig password */
        password?: (string|null);

        /** MySQLDatabaseConfig socket */
        socket?: (string|null);

        /** MySQLDatabaseConfig sslOptions */
        sslOptions?: (ml_metadata.MySQLDatabaseConfig.ISSLOptions|null);

        /** MySQLDatabaseConfig skipDbCreation */
        skipDbCreation?: (boolean|null);
    }

    /** Represents a MySQLDatabaseConfig. */
    class MySQLDatabaseConfig implements IMySQLDatabaseConfig {

        /**
         * Constructs a new MySQLDatabaseConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IMySQLDatabaseConfig);

        /** MySQLDatabaseConfig host. */
        public host: string;

        /** MySQLDatabaseConfig port. */
        public port: number;

        /** MySQLDatabaseConfig database. */
        public database: string;

        /** MySQLDatabaseConfig user. */
        public user: string;

        /** MySQLDatabaseConfig password. */
        public password: string;

        /** MySQLDatabaseConfig socket. */
        public socket: string;

        /** MySQLDatabaseConfig sslOptions. */
        public sslOptions?: (ml_metadata.MySQLDatabaseConfig.ISSLOptions|null);

        /** MySQLDatabaseConfig skipDbCreation. */
        public skipDbCreation: boolean;

        /**
         * Creates a new MySQLDatabaseConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MySQLDatabaseConfig instance
         */
        public static create(properties?: ml_metadata.IMySQLDatabaseConfig): ml_metadata.MySQLDatabaseConfig;

        /**
         * Encodes the specified MySQLDatabaseConfig message. Does not implicitly {@link ml_metadata.MySQLDatabaseConfig.verify|verify} messages.
         * @param message MySQLDatabaseConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IMySQLDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MySQLDatabaseConfig message, length delimited. Does not implicitly {@link ml_metadata.MySQLDatabaseConfig.verify|verify} messages.
         * @param message MySQLDatabaseConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IMySQLDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MySQLDatabaseConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MySQLDatabaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MySQLDatabaseConfig;

        /**
         * Decodes a MySQLDatabaseConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MySQLDatabaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MySQLDatabaseConfig;

        /**
         * Verifies a MySQLDatabaseConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MySQLDatabaseConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MySQLDatabaseConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.MySQLDatabaseConfig;

        /**
         * Creates a plain object from a MySQLDatabaseConfig message. Also converts values to other types if specified.
         * @param message MySQLDatabaseConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.MySQLDatabaseConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MySQLDatabaseConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MySQLDatabaseConfig {

        /** Properties of a SSLOptions. */
        interface ISSLOptions {

            /** SSLOptions key */
            key?: (string|null);

            /** SSLOptions cert */
            cert?: (string|null);

            /** SSLOptions ca */
            ca?: (string|null);

            /** SSLOptions capath */
            capath?: (string|null);

            /** SSLOptions cipher */
            cipher?: (string|null);

            /** SSLOptions verifyServerCert */
            verifyServerCert?: (boolean|null);
        }

        /** Represents a SSLOptions. */
        class SSLOptions implements ISSLOptions {

            /**
             * Constructs a new SSLOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.MySQLDatabaseConfig.ISSLOptions);

            /** SSLOptions key. */
            public key: string;

            /** SSLOptions cert. */
            public cert: string;

            /** SSLOptions ca. */
            public ca: string;

            /** SSLOptions capath. */
            public capath: string;

            /** SSLOptions cipher. */
            public cipher: string;

            /** SSLOptions verifyServerCert. */
            public verifyServerCert: boolean;

            /**
             * Creates a new SSLOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SSLOptions instance
             */
            public static create(properties?: ml_metadata.MySQLDatabaseConfig.ISSLOptions): ml_metadata.MySQLDatabaseConfig.SSLOptions;

            /**
             * Encodes the specified SSLOptions message. Does not implicitly {@link ml_metadata.MySQLDatabaseConfig.SSLOptions.verify|verify} messages.
             * @param message SSLOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.MySQLDatabaseConfig.ISSLOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SSLOptions message, length delimited. Does not implicitly {@link ml_metadata.MySQLDatabaseConfig.SSLOptions.verify|verify} messages.
             * @param message SSLOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.MySQLDatabaseConfig.ISSLOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SSLOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SSLOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MySQLDatabaseConfig.SSLOptions;

            /**
             * Decodes a SSLOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SSLOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MySQLDatabaseConfig.SSLOptions;

            /**
             * Verifies a SSLOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SSLOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SSLOptions
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.MySQLDatabaseConfig.SSLOptions;

            /**
             * Creates a plain object from a SSLOptions message. Also converts values to other types if specified.
             * @param message SSLOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.MySQLDatabaseConfig.SSLOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SSLOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SqliteMetadataSourceConfig. */
    interface ISqliteMetadataSourceConfig {

        /** SqliteMetadataSourceConfig filenameUri */
        filenameUri?: (string|null);

        /** SqliteMetadataSourceConfig connectionMode */
        connectionMode?: (ml_metadata.SqliteMetadataSourceConfig.ConnectionMode|null);
    }

    /** Represents a SqliteMetadataSourceConfig. */
    class SqliteMetadataSourceConfig implements ISqliteMetadataSourceConfig {

        /**
         * Constructs a new SqliteMetadataSourceConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.ISqliteMetadataSourceConfig);

        /** SqliteMetadataSourceConfig filenameUri. */
        public filenameUri: string;

        /** SqliteMetadataSourceConfig connectionMode. */
        public connectionMode: ml_metadata.SqliteMetadataSourceConfig.ConnectionMode;

        /**
         * Creates a new SqliteMetadataSourceConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SqliteMetadataSourceConfig instance
         */
        public static create(properties?: ml_metadata.ISqliteMetadataSourceConfig): ml_metadata.SqliteMetadataSourceConfig;

        /**
         * Encodes the specified SqliteMetadataSourceConfig message. Does not implicitly {@link ml_metadata.SqliteMetadataSourceConfig.verify|verify} messages.
         * @param message SqliteMetadataSourceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.ISqliteMetadataSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SqliteMetadataSourceConfig message, length delimited. Does not implicitly {@link ml_metadata.SqliteMetadataSourceConfig.verify|verify} messages.
         * @param message SqliteMetadataSourceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.ISqliteMetadataSourceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SqliteMetadataSourceConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SqliteMetadataSourceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.SqliteMetadataSourceConfig;

        /**
         * Decodes a SqliteMetadataSourceConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SqliteMetadataSourceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.SqliteMetadataSourceConfig;

        /**
         * Verifies a SqliteMetadataSourceConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SqliteMetadataSourceConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SqliteMetadataSourceConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.SqliteMetadataSourceConfig;

        /**
         * Creates a plain object from a SqliteMetadataSourceConfig message. Also converts values to other types if specified.
         * @param message SqliteMetadataSourceConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.SqliteMetadataSourceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SqliteMetadataSourceConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SqliteMetadataSourceConfig {

        /** ConnectionMode enum. */
        enum ConnectionMode {
            UNKNOWN = 0,
            READONLY = 1,
            READWRITE = 2,
            READWRITE_OPENCREATE = 3
        }
    }

    /** Properties of a MigrationOptions. */
    interface IMigrationOptions {

        /** MigrationOptions enableUpgradeMigration */
        enableUpgradeMigration?: (boolean|null);

        /** MigrationOptions downgradeToSchemaVersion */
        downgradeToSchemaVersion?: (number|Long|null);
    }

    /** Represents a MigrationOptions. */
    class MigrationOptions implements IMigrationOptions {

        /**
         * Constructs a new MigrationOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IMigrationOptions);

        /** MigrationOptions enableUpgradeMigration. */
        public enableUpgradeMigration: boolean;

        /** MigrationOptions downgradeToSchemaVersion. */
        public downgradeToSchemaVersion: (number|Long);

        /**
         * Creates a new MigrationOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MigrationOptions instance
         */
        public static create(properties?: ml_metadata.IMigrationOptions): ml_metadata.MigrationOptions;

        /**
         * Encodes the specified MigrationOptions message. Does not implicitly {@link ml_metadata.MigrationOptions.verify|verify} messages.
         * @param message MigrationOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IMigrationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MigrationOptions message, length delimited. Does not implicitly {@link ml_metadata.MigrationOptions.verify|verify} messages.
         * @param message MigrationOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IMigrationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MigrationOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MigrationOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MigrationOptions;

        /**
         * Decodes a MigrationOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MigrationOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MigrationOptions;

        /**
         * Verifies a MigrationOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MigrationOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MigrationOptions
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.MigrationOptions;

        /**
         * Creates a plain object from a MigrationOptions message. Also converts values to other types if specified.
         * @param message MigrationOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.MigrationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MigrationOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RetryOptions. */
    interface IRetryOptions {

        /** RetryOptions maxNumRetries */
        maxNumRetries?: (number|Long|null);
    }

    /** Represents a RetryOptions. */
    class RetryOptions implements IRetryOptions {

        /**
         * Constructs a new RetryOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IRetryOptions);

        /** RetryOptions maxNumRetries. */
        public maxNumRetries: (number|Long);

        /**
         * Creates a new RetryOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RetryOptions instance
         */
        public static create(properties?: ml_metadata.IRetryOptions): ml_metadata.RetryOptions;

        /**
         * Encodes the specified RetryOptions message. Does not implicitly {@link ml_metadata.RetryOptions.verify|verify} messages.
         * @param message RetryOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IRetryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RetryOptions message, length delimited. Does not implicitly {@link ml_metadata.RetryOptions.verify|verify} messages.
         * @param message RetryOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IRetryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RetryOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RetryOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.RetryOptions;

        /**
         * Decodes a RetryOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RetryOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.RetryOptions;

        /**
         * Verifies a RetryOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RetryOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RetryOptions
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.RetryOptions;

        /**
         * Creates a plain object from a RetryOptions message. Also converts values to other types if specified.
         * @param message RetryOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.RetryOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RetryOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectionConfig. */
    interface IConnectionConfig {

        /** ConnectionConfig fakeDatabase */
        fakeDatabase?: (ml_metadata.IFakeDatabaseConfig|null);

        /** ConnectionConfig mysql */
        mysql?: (ml_metadata.IMySQLDatabaseConfig|null);

        /** ConnectionConfig sqlite */
        sqlite?: (ml_metadata.ISqliteMetadataSourceConfig|null);

        /** ConnectionConfig retryOptions */
        retryOptions?: (ml_metadata.IRetryOptions|null);
    }

    /** Represents a ConnectionConfig. */
    class ConnectionConfig implements IConnectionConfig {

        /**
         * Constructs a new ConnectionConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IConnectionConfig);

        /** ConnectionConfig fakeDatabase. */
        public fakeDatabase?: (ml_metadata.IFakeDatabaseConfig|null);

        /** ConnectionConfig mysql. */
        public mysql?: (ml_metadata.IMySQLDatabaseConfig|null);

        /** ConnectionConfig sqlite. */
        public sqlite?: (ml_metadata.ISqliteMetadataSourceConfig|null);

        /** ConnectionConfig retryOptions. */
        public retryOptions?: (ml_metadata.IRetryOptions|null);

        /** ConnectionConfig config. */
        public config?: ("fakeDatabase"|"mysql"|"sqlite");

        /**
         * Creates a new ConnectionConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectionConfig instance
         */
        public static create(properties?: ml_metadata.IConnectionConfig): ml_metadata.ConnectionConfig;

        /**
         * Encodes the specified ConnectionConfig message. Does not implicitly {@link ml_metadata.ConnectionConfig.verify|verify} messages.
         * @param message ConnectionConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IConnectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectionConfig message, length delimited. Does not implicitly {@link ml_metadata.ConnectionConfig.verify|verify} messages.
         * @param message ConnectionConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IConnectionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectionConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectionConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ConnectionConfig;

        /**
         * Decodes a ConnectionConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectionConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ConnectionConfig;

        /**
         * Verifies a ConnectionConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectionConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectionConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ConnectionConfig;

        /**
         * Creates a plain object from a ConnectionConfig message. Also converts values to other types if specified.
         * @param message ConnectionConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ConnectionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectionConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GrpcChannelArguments. */
    interface IGrpcChannelArguments {

        /** GrpcChannelArguments maxReceiveMessageLength */
        maxReceiveMessageLength?: (number|Long|null);

        /** GrpcChannelArguments http2MaxPingStrikes */
        http2MaxPingStrikes?: (number|Long|null);
    }

    /** Represents a GrpcChannelArguments. */
    class GrpcChannelArguments implements IGrpcChannelArguments {

        /**
         * Constructs a new GrpcChannelArguments.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IGrpcChannelArguments);

        /** GrpcChannelArguments maxReceiveMessageLength. */
        public maxReceiveMessageLength: (number|Long);

        /** GrpcChannelArguments http2MaxPingStrikes. */
        public http2MaxPingStrikes: (number|Long);

        /**
         * Creates a new GrpcChannelArguments instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrpcChannelArguments instance
         */
        public static create(properties?: ml_metadata.IGrpcChannelArguments): ml_metadata.GrpcChannelArguments;

        /**
         * Encodes the specified GrpcChannelArguments message. Does not implicitly {@link ml_metadata.GrpcChannelArguments.verify|verify} messages.
         * @param message GrpcChannelArguments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IGrpcChannelArguments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GrpcChannelArguments message, length delimited. Does not implicitly {@link ml_metadata.GrpcChannelArguments.verify|verify} messages.
         * @param message GrpcChannelArguments message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IGrpcChannelArguments, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GrpcChannelArguments message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrpcChannelArguments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.GrpcChannelArguments;

        /**
         * Decodes a GrpcChannelArguments message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrpcChannelArguments
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.GrpcChannelArguments;

        /**
         * Verifies a GrpcChannelArguments message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrpcChannelArguments message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrpcChannelArguments
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.GrpcChannelArguments;

        /**
         * Creates a plain object from a GrpcChannelArguments message. Also converts values to other types if specified.
         * @param message GrpcChannelArguments
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.GrpcChannelArguments, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrpcChannelArguments to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MetadataStoreClientConfig. */
    interface IMetadataStoreClientConfig {

        /** MetadataStoreClientConfig host */
        host?: (string|null);

        /** MetadataStoreClientConfig port */
        port?: (number|null);

        /** MetadataStoreClientConfig sslConfig */
        sslConfig?: (ml_metadata.MetadataStoreClientConfig.ISSLConfig|null);

        /** MetadataStoreClientConfig channelArguments */
        channelArguments?: (ml_metadata.IGrpcChannelArguments|null);

        /** MetadataStoreClientConfig clientTimeoutSec */
        clientTimeoutSec?: (number|null);
    }

    /** Represents a MetadataStoreClientConfig. */
    class MetadataStoreClientConfig implements IMetadataStoreClientConfig {

        /**
         * Constructs a new MetadataStoreClientConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IMetadataStoreClientConfig);

        /** MetadataStoreClientConfig host. */
        public host: string;

        /** MetadataStoreClientConfig port. */
        public port: number;

        /** MetadataStoreClientConfig sslConfig. */
        public sslConfig?: (ml_metadata.MetadataStoreClientConfig.ISSLConfig|null);

        /** MetadataStoreClientConfig channelArguments. */
        public channelArguments?: (ml_metadata.IGrpcChannelArguments|null);

        /** MetadataStoreClientConfig clientTimeoutSec. */
        public clientTimeoutSec: number;

        /**
         * Creates a new MetadataStoreClientConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MetadataStoreClientConfig instance
         */
        public static create(properties?: ml_metadata.IMetadataStoreClientConfig): ml_metadata.MetadataStoreClientConfig;

        /**
         * Encodes the specified MetadataStoreClientConfig message. Does not implicitly {@link ml_metadata.MetadataStoreClientConfig.verify|verify} messages.
         * @param message MetadataStoreClientConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IMetadataStoreClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MetadataStoreClientConfig message, length delimited. Does not implicitly {@link ml_metadata.MetadataStoreClientConfig.verify|verify} messages.
         * @param message MetadataStoreClientConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IMetadataStoreClientConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MetadataStoreClientConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MetadataStoreClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MetadataStoreClientConfig;

        /**
         * Decodes a MetadataStoreClientConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MetadataStoreClientConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MetadataStoreClientConfig;

        /**
         * Verifies a MetadataStoreClientConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MetadataStoreClientConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MetadataStoreClientConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.MetadataStoreClientConfig;

        /**
         * Creates a plain object from a MetadataStoreClientConfig message. Also converts values to other types if specified.
         * @param message MetadataStoreClientConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.MetadataStoreClientConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MetadataStoreClientConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MetadataStoreClientConfig {

        /** Properties of a SSLConfig. */
        interface ISSLConfig {

            /** SSLConfig clientKey */
            clientKey?: (string|null);

            /** SSLConfig serverCert */
            serverCert?: (string|null);

            /** SSLConfig customCa */
            customCa?: (string|null);
        }

        /** Represents a SSLConfig. */
        class SSLConfig implements ISSLConfig {

            /**
             * Constructs a new SSLConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.MetadataStoreClientConfig.ISSLConfig);

            /** SSLConfig clientKey. */
            public clientKey: string;

            /** SSLConfig serverCert. */
            public serverCert: string;

            /** SSLConfig customCa. */
            public customCa: string;

            /**
             * Creates a new SSLConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SSLConfig instance
             */
            public static create(properties?: ml_metadata.MetadataStoreClientConfig.ISSLConfig): ml_metadata.MetadataStoreClientConfig.SSLConfig;

            /**
             * Encodes the specified SSLConfig message. Does not implicitly {@link ml_metadata.MetadataStoreClientConfig.SSLConfig.verify|verify} messages.
             * @param message SSLConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.MetadataStoreClientConfig.ISSLConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SSLConfig message, length delimited. Does not implicitly {@link ml_metadata.MetadataStoreClientConfig.SSLConfig.verify|verify} messages.
             * @param message SSLConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.MetadataStoreClientConfig.ISSLConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SSLConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SSLConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MetadataStoreClientConfig.SSLConfig;

            /**
             * Decodes a SSLConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SSLConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MetadataStoreClientConfig.SSLConfig;

            /**
             * Verifies a SSLConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SSLConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SSLConfig
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.MetadataStoreClientConfig.SSLConfig;

            /**
             * Creates a plain object from a SSLConfig message. Also converts values to other types if specified.
             * @param message SSLConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.MetadataStoreClientConfig.SSLConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SSLConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a MetadataStoreServerConfig. */
    interface IMetadataStoreServerConfig {

        /** MetadataStoreServerConfig connectionConfig */
        connectionConfig?: (ml_metadata.IConnectionConfig|null);

        /** MetadataStoreServerConfig migrationOptions */
        migrationOptions?: (ml_metadata.IMigrationOptions|null);

        /** MetadataStoreServerConfig sslConfig */
        sslConfig?: (ml_metadata.MetadataStoreServerConfig.ISSLConfig|null);
    }

    /** Represents a MetadataStoreServerConfig. */
    class MetadataStoreServerConfig implements IMetadataStoreServerConfig {

        /**
         * Constructs a new MetadataStoreServerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IMetadataStoreServerConfig);

        /** MetadataStoreServerConfig connectionConfig. */
        public connectionConfig?: (ml_metadata.IConnectionConfig|null);

        /** MetadataStoreServerConfig migrationOptions. */
        public migrationOptions?: (ml_metadata.IMigrationOptions|null);

        /** MetadataStoreServerConfig sslConfig. */
        public sslConfig?: (ml_metadata.MetadataStoreServerConfig.ISSLConfig|null);

        /**
         * Creates a new MetadataStoreServerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MetadataStoreServerConfig instance
         */
        public static create(properties?: ml_metadata.IMetadataStoreServerConfig): ml_metadata.MetadataStoreServerConfig;

        /**
         * Encodes the specified MetadataStoreServerConfig message. Does not implicitly {@link ml_metadata.MetadataStoreServerConfig.verify|verify} messages.
         * @param message MetadataStoreServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IMetadataStoreServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MetadataStoreServerConfig message, length delimited. Does not implicitly {@link ml_metadata.MetadataStoreServerConfig.verify|verify} messages.
         * @param message MetadataStoreServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IMetadataStoreServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MetadataStoreServerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MetadataStoreServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MetadataStoreServerConfig;

        /**
         * Decodes a MetadataStoreServerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MetadataStoreServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MetadataStoreServerConfig;

        /**
         * Verifies a MetadataStoreServerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MetadataStoreServerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MetadataStoreServerConfig
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.MetadataStoreServerConfig;

        /**
         * Creates a plain object from a MetadataStoreServerConfig message. Also converts values to other types if specified.
         * @param message MetadataStoreServerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.MetadataStoreServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MetadataStoreServerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MetadataStoreServerConfig {

        /** Properties of a SSLConfig. */
        interface ISSLConfig {

            /** SSLConfig serverKey */
            serverKey?: (string|null);

            /** SSLConfig serverCert */
            serverCert?: (string|null);

            /** SSLConfig customCa */
            customCa?: (string|null);

            /** SSLConfig clientVerify */
            clientVerify?: (boolean|null);
        }

        /** Represents a SSLConfig. */
        class SSLConfig implements ISSLConfig {

            /**
             * Constructs a new SSLConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.MetadataStoreServerConfig.ISSLConfig);

            /** SSLConfig serverKey. */
            public serverKey: string;

            /** SSLConfig serverCert. */
            public serverCert: string;

            /** SSLConfig customCa. */
            public customCa: string;

            /** SSLConfig clientVerify. */
            public clientVerify: boolean;

            /**
             * Creates a new SSLConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SSLConfig instance
             */
            public static create(properties?: ml_metadata.MetadataStoreServerConfig.ISSLConfig): ml_metadata.MetadataStoreServerConfig.SSLConfig;

            /**
             * Encodes the specified SSLConfig message. Does not implicitly {@link ml_metadata.MetadataStoreServerConfig.SSLConfig.verify|verify} messages.
             * @param message SSLConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.MetadataStoreServerConfig.ISSLConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SSLConfig message, length delimited. Does not implicitly {@link ml_metadata.MetadataStoreServerConfig.SSLConfig.verify|verify} messages.
             * @param message SSLConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.MetadataStoreServerConfig.ISSLConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SSLConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SSLConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.MetadataStoreServerConfig.SSLConfig;

            /**
             * Decodes a SSLConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SSLConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.MetadataStoreServerConfig.SSLConfig;

            /**
             * Verifies a SSLConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SSLConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SSLConfig
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.MetadataStoreServerConfig.SSLConfig;

            /**
             * Creates a plain object from a SSLConfig message. Also converts values to other types if specified.
             * @param message SSLConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.MetadataStoreServerConfig.SSLConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SSLConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ListOperationOptions. */
    interface IListOperationOptions {

        /** ListOperationOptions maxResultSize */
        maxResultSize?: (number|null);

        /** ListOperationOptions orderByField */
        orderByField?: (ml_metadata.ListOperationOptions.IOrderByField|null);

        /** ListOperationOptions nextPageToken */
        nextPageToken?: (string|null);

        /** ListOperationOptions filterQuery */
        filterQuery?: (string|null);
    }

    /** Represents a ListOperationOptions. */
    class ListOperationOptions implements IListOperationOptions {

        /**
         * Constructs a new ListOperationOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IListOperationOptions);

        /** ListOperationOptions maxResultSize. */
        public maxResultSize: number;

        /** ListOperationOptions orderByField. */
        public orderByField?: (ml_metadata.ListOperationOptions.IOrderByField|null);

        /** ListOperationOptions nextPageToken. */
        public nextPageToken: string;

        /** ListOperationOptions filterQuery. */
        public filterQuery: string;

        /**
         * Creates a new ListOperationOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListOperationOptions instance
         */
        public static create(properties?: ml_metadata.IListOperationOptions): ml_metadata.ListOperationOptions;

        /**
         * Encodes the specified ListOperationOptions message. Does not implicitly {@link ml_metadata.ListOperationOptions.verify|verify} messages.
         * @param message ListOperationOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IListOperationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListOperationOptions message, length delimited. Does not implicitly {@link ml_metadata.ListOperationOptions.verify|verify} messages.
         * @param message ListOperationOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IListOperationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListOperationOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListOperationOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ListOperationOptions;

        /**
         * Decodes a ListOperationOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListOperationOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ListOperationOptions;

        /**
         * Verifies a ListOperationOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListOperationOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListOperationOptions
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ListOperationOptions;

        /**
         * Creates a plain object from a ListOperationOptions message. Also converts values to other types if specified.
         * @param message ListOperationOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ListOperationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListOperationOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ListOperationOptions {

        /** Properties of an OrderByField. */
        interface IOrderByField {

            /** OrderByField field */
            field?: (ml_metadata.ListOperationOptions.OrderByField.Field|null);

            /** OrderByField isAsc */
            isAsc?: (boolean|null);
        }

        /** Represents an OrderByField. */
        class OrderByField implements IOrderByField {

            /**
             * Constructs a new OrderByField.
             * @param [properties] Properties to set
             */
            constructor(properties?: ml_metadata.ListOperationOptions.IOrderByField);

            /** OrderByField field. */
            public field: ml_metadata.ListOperationOptions.OrderByField.Field;

            /** OrderByField isAsc. */
            public isAsc: boolean;

            /**
             * Creates a new OrderByField instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderByField instance
             */
            public static create(properties?: ml_metadata.ListOperationOptions.IOrderByField): ml_metadata.ListOperationOptions.OrderByField;

            /**
             * Encodes the specified OrderByField message. Does not implicitly {@link ml_metadata.ListOperationOptions.OrderByField.verify|verify} messages.
             * @param message OrderByField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ml_metadata.ListOperationOptions.IOrderByField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderByField message, length delimited. Does not implicitly {@link ml_metadata.ListOperationOptions.OrderByField.verify|verify} messages.
             * @param message OrderByField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ml_metadata.ListOperationOptions.IOrderByField, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderByField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderByField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ListOperationOptions.OrderByField;

            /**
             * Decodes an OrderByField message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderByField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ListOperationOptions.OrderByField;

            /**
             * Verifies an OrderByField message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderByField message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderByField
             */
            public static fromObject(object: { [k: string]: any }): ml_metadata.ListOperationOptions.OrderByField;

            /**
             * Creates a plain object from an OrderByField message. Also converts values to other types if specified.
             * @param message OrderByField
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ml_metadata.ListOperationOptions.OrderByField, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderByField to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace OrderByField {

            /** Field enum. */
            enum Field {
                FIELD_UNSPECIFIED = 0,
                CREATE_TIME = 1,
                LAST_UPDATE_TIME = 2,
                ID = 3
            }
        }
    }

    /** Properties of a ListOperationNextPageToken. */
    interface IListOperationNextPageToken {

        /** ListOperationNextPageToken idOffset */
        idOffset?: (number|Long|null);

        /** ListOperationNextPageToken fieldOffset */
        fieldOffset?: (number|Long|null);

        /** ListOperationNextPageToken setOptions */
        setOptions?: (ml_metadata.IListOperationOptions|null);

        /** ListOperationNextPageToken listedIds */
        listedIds?: ((number|Long)[]|null);
    }

    /** Represents a ListOperationNextPageToken. */
    class ListOperationNextPageToken implements IListOperationNextPageToken {

        /**
         * Constructs a new ListOperationNextPageToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: ml_metadata.IListOperationNextPageToken);

        /** ListOperationNextPageToken idOffset. */
        public idOffset: (number|Long);

        /** ListOperationNextPageToken fieldOffset. */
        public fieldOffset: (number|Long);

        /** ListOperationNextPageToken setOptions. */
        public setOptions?: (ml_metadata.IListOperationOptions|null);

        /** ListOperationNextPageToken listedIds. */
        public listedIds: (number|Long)[];

        /**
         * Creates a new ListOperationNextPageToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListOperationNextPageToken instance
         */
        public static create(properties?: ml_metadata.IListOperationNextPageToken): ml_metadata.ListOperationNextPageToken;

        /**
         * Encodes the specified ListOperationNextPageToken message. Does not implicitly {@link ml_metadata.ListOperationNextPageToken.verify|verify} messages.
         * @param message ListOperationNextPageToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ml_metadata.IListOperationNextPageToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListOperationNextPageToken message, length delimited. Does not implicitly {@link ml_metadata.ListOperationNextPageToken.verify|verify} messages.
         * @param message ListOperationNextPageToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ml_metadata.IListOperationNextPageToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListOperationNextPageToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListOperationNextPageToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ml_metadata.ListOperationNextPageToken;

        /**
         * Decodes a ListOperationNextPageToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListOperationNextPageToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ml_metadata.ListOperationNextPageToken;

        /**
         * Verifies a ListOperationNextPageToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListOperationNextPageToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListOperationNextPageToken
         */
        public static fromObject(object: { [k: string]: any }): ml_metadata.ListOperationNextPageToken;

        /**
         * Creates a plain object from a ListOperationNextPageToken message. Also converts values to other types if specified.
         * @param message ListOperationNextPageToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ml_metadata.ListOperationNextPageToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListOperationNextPageToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
