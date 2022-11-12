/**
 * @description       : 
 * @author            : esteban@incompany.cr
 * @group             : 
 * @last modified on  : 11-11-2022
 * @last modified by  : esteban@incompany.cr
**/
public with sharing class ContactManager {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Integer numberOfRecords){
        return [SELECT Id,LastName,Phone FROM Contact LIMIT :numberOfRecords];
    }
}
