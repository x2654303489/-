/* tslint:disable */
/* eslint-disable */
/**
 * 崩坏晓店
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SysRole
 */
export interface SysRole {
    /**
     * 
     * @type {number}
     * @memberof SysRole
     */
    'id'?: number | null;
    /**
     * 菜单名
     * @type {string}
     * @memberof SysRole
     */
    'roleName'?: string | null;
    /**
     * 菜单状态（0正常 1停用）
     * @type {boolean}
     * @memberof SysRole
     */
    'status'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SysRole
     */
    'createTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SysRole
     */
    'updateTime'?: string | null;
}

