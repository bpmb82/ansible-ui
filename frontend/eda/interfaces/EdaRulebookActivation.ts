/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface EdaRulebookActivation {
  id: number;
  name: string;
  description?: string;
  decision_environment?: string;
  rulebook?: { id: string; name: string };
  restart_policy?: string;
  project?: { id: string; name: string };
  working_directory?: string;
  status?: string;
  is_enabled?: boolean;
  throttle?: boolean;
  variables_template?: string;
  instances_count?: number;
  rules_count?: number;
  last_restarted?: string;
  restarted_count?: number;
  fired_count?: number;
  created_at?: string;
  modified_at?: string;
  extra_var?: { id: string; name: string };
}
