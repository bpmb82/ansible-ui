/* tslint:disable */
import { FiredStats } from './EdaRule';

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EdaRuleset {
  id: number;
  name: string;
  status: string;
  rule_count: number;
  fired_stats?: FiredStats;
}
