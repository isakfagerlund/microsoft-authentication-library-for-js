/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { PerformanceEvent, PerformanceEvents } from "./PerformanceEvent";
import { IPerformanceMeasurement } from "./IPerformanceMeasurement";

export type PerformanceCallbackFunction = (events: PerformanceEvent[]) => void;

export interface IPerformanceClient {
    startMeasurement(measureName: PerformanceEvents, correlationId?: string): (event?: Partial<PerformanceEvent>) => PerformanceEvent;
    endMeasurement(performanceMeasure: IPerformanceMeasurement, additionalEventData: Partial<PerformanceEvent>, measureName: PerformanceEvents, correlationId?: string): PerformanceEvent;
    flushMeasurements(measureName: PerformanceEvents, correlationId?: string): void;
    discardMeasurements(measureName: PerformanceEvents, correlationId?: string): void;
    removePerformanceCallback(callbackId: string): boolean;
    emitEvents(events: PerformanceEvent[], correlationId?: string): void;
}
