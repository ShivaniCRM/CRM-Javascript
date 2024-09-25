var CRB = CRB || {};
CRB.CRM = CRB.CRM || {};
CRB.CRM.PJ = CRB.CRM.PJ || {};
CRB.CRM.PJ.Onboarding = CRB.CRM.PJ.Onboarding || {};
CRB.CRM.PJ.Onboarding = {
    Attributes: {
        PartnerName: "crb_partnername1",
        Website:"crb_websiteurl",
        Partner:"crb_partner",
        Engagementid: "crb_engagementid",
        opportunity: "crb_opportunity",
        owner: "ownerid",
        comments: "crb_comments1",
        commentHistory: "crb_commentshistory",
        ImpGRStatus: "crb_impgrstatus",
        ImpCOSStatus: "crb_impcosstatus",
        crrmscore1: 'crb_crrmscore1',
        secondOccurance_crrmscore1: 'crb_crrmscore11',
        crrmscore_bsaaml: 'crb_crrmscore_bsaaml',
        crrmscore_implementationTeam: 'crb_crrmscore_implementationteam',
        crrmscore_generalDueDiligence: 'crb_crrmscore_generalduediligence',//Not in Use
        comment_crrm: 'crb_comment_crrm',
        comment_bsaaml: 'crb_comment_bsaaml',
        comment_implementationTeam: 'crb_comment_implementationteam',
        comment_generalDueDiligence: 'crb_comment_generalduediligence',
        commentHistory_crrm: 'crb_commenthistorycrrm',
        commentHistory_bsaaml: 'crb_commenthistorybsaaml',
        commentHistory_implementationTeam: 'crb_commenthistoryimplementationteam',
        commentHistory_generalDueDiligence: 'crb_commenthistorygeneralduediligence',
        crrmscreeningdate1: "crb_crrmscreeningdate",
        functionalBusinessReview: "crb_businessreviewoutcome",
        achBusinessReview: "crb_whatistheoutcomeoftheachoperationsreview",
        itComplianceReview: "",
        regComplianceReview: "crb_whatistheoutcomeoftheregcompliancereview",
        bsaamlReview: "crb_whatistheoutcomeofthebsaamlreview",
        rtpOperationReview: "crb_whatistheoutcomeofthertpoperationsreview",
        wireOperationReview: "crb_whatistheoutcomeofthewireoperation",
        legalReview: "crb_whatistheoutcomeofthelegalreview",
        cardPaymentOpsReview: "",
        creditRiskReview: "crb_whatistheoutcomeofthecreditreview",
        ddReview: "crb_wasentityapprovedordeniedatcommittee",
        businessReviewSummaryandAssessment: "crb_businessreviewsummaryandassessment",
        businessReviewAssessmentCompletedate: "crb_businessreviewassessmentcompletedate",
        achOperationsReviewandAssessmentCompletedate: "crb_achoperationsreviewandassessmentcompleted",
        regComplianceReviewandAssessmentCompletedate: "",
        describe: "crb_describe",
        bsaamlReviewandAssessmentCompletedate: "crb_bsaamlreviewandassessmentcompletedate",
        rtpOperationsReviewandAssessmentCompletedate: "crb_rtpperationseviewandssessmentcompletedate",
        wireOperationsReviewandAssessmentCompletedate: "",
        cardPaymentOpsReviewandAssessmentCompletedate: "crb_cardpaymentopsreviewsummaryandassessment",
        creditReviewandAssessmentCompletedate: "crb_creditreviewandassessmentcompletedate",
        dateOfCommitteeReview: "crb_dateofcommitteereview",
        targetGoLivedate: "crb_targetgolivedate",
        whichCRRMScoreChanged: 'crb_whichcrrmscoreisupdated',
        ddMemoUrl : "crb_ddmemourl",
        itComplianceReviewOutcome : "crb_outcomeoftheinfosecreview",
        itComplianceReviewAssComplDate : "crb_itcompliancereviewandassessmentcompletedate",
        regComplianceReview : "crb_whatistheoutcomeoftheregcompliancereview",
        regComplianceReviewAssComplDate : "crb_regcompliancereviewandassessmentcompleted",
        wireOpsReviewandAssesmentdate:"crb_wireopsreviewandassessmentcompletedate",
        BSAAMLReviewOutcome : "crb_whatistheoutcomeofthebsaamlreview",
        BSAAMLReviewAssmentDate : "crb_bsaamlreviewandassessmentcompletedate",
        CardPaymentOperationsReviewOutcome : "crb_outcomeofthecardpaymentopsreview",
        CardPaymentOperationsReviewAssmentDate : "crb_cardpymtsopsreviewassessmentcompletedate",
        DDReviewCommittee : "crb_wasentityapprovedordeniedatcommittee",
        DateOfCommitteereview : "crb_dateofcommitteereview",
        TargetGoLiveDate : "crb_targetgolivedate",
        applicationwalktroughstatus : "crb_applicationwalkthroughstatus",
        AMLWalkthrough : "crb_amlwalkthroughfollowupneeded",
		ApplicationWalkthrough : "crb_applicationwalkthroughfollowupneeded",
		CIPWalkthrough : "crb_cipwalkthroughfollowupneeded",
		Typeofwalkthrough : "crb_typeofwlakthrough",
        isBSAAMLcommitteapprovalcompleted:"crb_isbsaamlapprovalcompleted",
        functionalReviewName:"crb_name1",
        attachsupplementfielfunctional:"crb_attachsupplementaldocumentation",
        attachsupplementfielach:"crb_achattachsupplementaldocumentation",
        Authorized: "crb_authorizedsignerformbaascardsonly",
        Beneficia: "crb_beneficialownersbaascardsonly",
        commentsOnPartnerWebsite: "crb_commentsonpartnerwebsite",
		commentsOnBackgroundCheckGDD: "crb_commentsonbackgroundcheckgdd",
		objectionOnWebsite: "crb_objectiononwebsite",
		reasonForObjection: "crb_reasonforobjection",
        arewereceivingreportsfromthepartner:"crb_arewereceivingreportsfromthepartner",
		sharepointlinkreportingandservicingtape:"crb_sharepointlinkreportingandservicingtap",
		arewereceivingservicingtapesfromthepartner:"crb_arewereceivingservicingtapesfromthepartner",
        isafollowupneeded: "crb_isafollowupneeded",
        frstatus: "crb_frstatus",
        engagementid: "crb_engagementid",
        gddstatus: "crb_gddstatus",
        arixrulesapproved: "crb_arixrulesapproved",
        summary: "crb_axisqrulesapprovedsummary",
        supportTicketURLGl:"crb_supportticketurlgl",
        ticketIDNumberGl:"crb_ticketidnumbergl",
        dateOfTicketCreationGl:"crb_dateofticketcreationgl",
        statusGl:"crb_statusgl",
        dateOfTicketCompletionGl:"crb_dateofticketcompletiongl",
        durationGl:"crb_duration",
        notesGl:"crb_notesgl",
        rollupGLAccount:"crb_rollupglaccountgl",
        supportTicketURLProduct:"crb_supportticketurlproduct",
        ticketIDNumberProduct:"crb_ticketidnumberproduct",
        dateOfTicketCreationProduct:"crb_dateofticketcreationproduct",
        statusProduct:"crb_statusproduct",
        dateOfTicketCompletionProduct:"crb_dateofticketcompletionproduct",
        durationProduct:"crb_durationproduct",
        notesProduct:"crb_notesproduct",
        gLDepositAccountRequisitionType:"crb_gldepositaccountrequisitiontype",
        TicketIDNumber: "crb_ticketidnumber",
        OnboardingStatus: "crb_tabstatus",
        crossriversystem:"crb_crossriversystem",
        accuralStartDate: "crb_accuralstartdate",
		accuralMethod: "crb_accrualmethod",
		InterestedICM: "crb_interestcalculationmethod",
		pleaseSpecifyAm: "crb_ifotherpleasespecifyam",
		pleaseSpecifyICM: "crb_ifotherpleasespecifyicm",
        generateTemplate1:"crb_generatetemplate",
        crbstatussandbox: "crb_statussandbox1",
        crbtestplanandresultsservicenowlink: "crb_testplanandresultsservicenowlink",
        crbsupportticketlink: "crb_supportticketlink",
        crbticketidnumbersandbox: "crb_ticketidnumbersandbox",
        crbdateofticketcreationsandbox: "crb_dateofticketcreationsandbox",
        crbdateofticketcompletionsandbox: "crb_dateofticketcompletionsandbox",
        crbdurationsandbox:"crb_durationsandbox",
        crbnotessandbox: "crb_notessandbox",
        crbdateofsandboxaccountapprovalsandbox: "crb_dateofsandboxaccountapprovalsandbox",
        crbdateofproductionaccountapproval: "crb_dateofproductionaccountapproval",
        crbnotapplicable: "crb_notapplicablesandbox",
        FairLendingDueDiligence: "crb_fairlendingduediligence",
        FairLendingDataManagement: "crb_fairlendingdatamanagement",
        ReviewStatus: "crb_reviewstatus",
        SendToMRM: "crb_senttomrm",
        MRMApproval: "crb_mrmapproval",
        SentToSASApproval: "crb_sasamlapproval",
        SentToSASAML: "crb_senttosasaml",
        newbinpartnerorsharedbinpartner: "crb_isthisanewbinpartnerorsharedbinpartner",
        DebitNetwork4MerchAcq: "crb_debitnetwork4merchacq",
        DebitNetwork4CardIssuing: "crb_debitnetworkforcardissuing",
        CreditNetwork: "crb_creditnetwork",
        creditNetwork4MerchAcq: "crb_creditnetworkformerchacq",
        notApplicable: "crb_notapplicableciqform",
        documentUpload: "crb_documentupload",
        ciqForm: "crb_ciqform",
        completionDate: "crb_completiondate",
        notApplicableForVISABilling: "crb_notapplicablevisabilling",
        documentUploadForVISABilling: "crb_documentuploadvisabilling",
        VISABillingForm: "crb_visabillingmappingandsettlementvbmssmart",
        completionDateForVISABilling: "crb_completiondatevisabilling",
        notapplicablereportciq: "crb_notapplicablereportciq",
        reportciqformciqreport: "crb_reportciqformciqreport",
        completiondateciqreport: "crb_completiondateciqreport",
        documentuploadciqreport: "crb_documentuploadciqreport",
        notApplicableVlorRidRequest : "crb_notapplicablevrolridrequest",
        vrolRidRequestForm:"crb_vrolridrequestform",
        vroldRidCompletionDate : "crb_completiondatevrolridrequest",
        notApplicableForBINRequest: "crb_notapplicable",
        documentUploadForBINRequest: "crb_documentuploadimplementation",
        binRequestForm: "crb_binrequestformimplementation",
        completionDateForBINRequest:"crb_completiondatebinrequest",
        notApplicableForSFTForm: "crb_notapplicablesftform",
        documentUploadForSFTForm: "crb_documentuploadsftform",
        SFTForm: "crb_sftform",
        completionDateForSFTForm: "crb_completiondatesftform",
        creditnetworkMA:"crb_creditnetworkformerchacq",
        FairlendingReviewDate: "crb_fairlendingduediligencereviewdate",
        FairlendingDataManagementReviewdate: "crb_fairlendingdatamanagementreviewdate",
        BINNumber: "crb_binnumber",
        ICA : "crb_ica",
        SponsorID: "crb_sponsorid",
        OutcomeoftheACHOperationsReview: "crb_whatistheoutcomeoftheachoperationsreview",
        ACHOperationsReviewSummaryandAssessment: "crb_achoperationsreviewsummaryandassessment",
        FinanceApproval: "crb_financeapproval",
        SalesLeadApproval: "crb_salesleadapproval",
        FairLendingReviewStatus: "crb_flrstatus",
        TransactionMonitoringReviewStatus: "crb_tmrstatus",
        BSAAMLReviewStatus: "crb_bsa_amlreviewstatus",
        HighRiskApprovalStatus: "crb_highriskapprovalstatus",
        DebitNetwork: "crb_debitnetworkforcardissuing",
        isentitydesignationclassifiedcorrectly :"crb_istheentitysdesignationclassifiedcorrectly",
        arethereturnratesauditreportssatisfactory:" crb_arethereturnratesauditreportssatisfactory",
        reviewedrecordofauthorizationforseccodes :" crb_reviewedrecordofauthorizationforseccodes",
        describetheregulatorycompliancereview : "crb_describetheregulatorycompliancereview",
        wereanyconcernsidentifiedduringthereview : "crb_wereanyconcernsidentifiedduringthereview",
        identifiedconcernsandmigitations : "crb_identifiedconcernsandmitigations",
        regulatorycompliancename : "crb_regname",
        employeename : "crb_employeename",
        bsaamlfunction: "crb_function",
        bsaamldate : "crb_date",
        supplementaldiscussionregardingamlprogram : "crb_supplementaldiscussionregardingtheamlprogram",
        rtpoperationreviewsummaryandassessment : "crb_rtpoperationsreviewsummaryandassessment",
        outcomeofrtpoperationreview : "crb_whatistheoutcomeofthertpoperationsreview",
        wireoperationreviewsummaryandassessment :"crb_wireoperationsreviewsummaryandassessment",
        outcomeofwireoperationreview : "crb_whatistheoutcomeofthewireoperation",
        legalreviewsummaryandassessment: "-crb_legalreviewsummaryandassessment",
        outcomeoflegalreview : "crb_whatistheoutcomeofthelegalreview",
        legalreviewassessmentcompletedate : "crb_legalreviewandassessmentcompletedate",
        cradpaymentopsreviewandsummary : "crb_cardpaymentopsreviewsummaryandassessment",
        outcomeofcradpaymentopsreview : "crb_outcomeofthecardpaymentopsreview",
        cardpaymentopsreviewsummaryassessmentcompletiondate : "crb_cardpymtsopsreviewassessmentcompletedate",
        creditofficerreviewsummaryandassessment : "crb_creditofficerreviewsummaryandassessment",
        doescreditofficerrequireadditionalinfo : "crb_doescreditofficerrequireadditionalinfo",
        whatadditionaldocumentationisrequired : " crb_whatadditionaldocumentationisrequired",
        creditriskdescribe : "crb_crb_describe1",
        outcomeofthecreditreview : "crb_whatistheoutcomeofthecreditreview",
        summaryofcustomerprofileandassessment : "crb_summaryofcustomersprofileandassessment",
        arethereanyconcerns : "crb_arethereanyconcerns ",
        ddreviewdescribe : "crb_ddreviewdescribe",
        duediligenceriskreviewassessmentcomplete : "crb_duediligenceriskreviewandassessment",
        hasentitybeednreviewedbyappropriatecommittee : "crb_hasentitybeenreviewedbyappropriatecommitt",
        ddrationale : "crb_rationale",
        wasentityapprovedordeniedatcommittee : "crb_wasentityapprovedordeniedatcommittee",
        ddreviewdescribe2 : "crb_dddescribe",
        asofdate : "crb_asofdate",
        approvedby : "crb_approvedby",
        transactiontype : " crb_transactiontype",
        subledgers : "crb_subledgers",
        appendixsummary : "crb_summary",
        redflags : "crb_redflags",
        appendixaccounttype : "crb_accounttype",
        productrisk : "crb_productrisk",
        geographicrisk : " crb_geographicrisk",
        partnerrisk : "crb_partnerrisk",
        scenariosselected : "crb_scenariosselected",
        functionalreviewstatus : "crb_functionalreviewstatus", 
        achoperationreviewstatus:  "crb_achreviewstatus",
        regulatorycompliancereviewstatus:"crb_regulatoryreviewstatus",
        ddbsaamlreviewstatus: "crb_bsaamlreviewstatus",
        rtpoperationreviewstatus:"crb_rtpreviewstatus",
        wireoperationreviewstatus: "crb_wirereviewstatus",
        legalreviewstatus: "crb_legalreviewstatus",
        cardpaymentstatus : "crb_cardpaymentreviewstatus",
        creditriskstatus : "crb_creditriskreviewstatus",
        ddstatus: "crb_ddreviewstatus",
        appendixstatus : "crb_appendixtransactionreviewstatus",
        bsaamlreviewstatus : "crb_bsa_amlreviewstatus",
        impcossupportstatus : "crb_statuscos",
        COSTestAccountRequest: "crb_costestaccountrequest",
        

    },
    Section: {
        CreditBureauSetup: "creditbureausetup",
        PRASection: "PRA Section",
        gdd: "General Due Diligence",
        crrm: "Due Diligence _section_13",
        bsaaml: "BSA/AML Review",
        functionalApproval: "FunctionalReview",
        achReview: "ACHOperationsReview",
        itcompliancereview: "IT Compliance Review",
        regulatoryComplianceReview: "Regulatory Compliance Review",
        bsaamlReview: "BSA/AMLReview",
        rtpOperationsReview: "RTPOperationsReview",
        wireOpsReview: "WireOperationsReview",
        cardPaymentOperationReview: "CardPaymentOperationsReview",
        creditRiskReviewsec: "CreditRiskReview",
        ddReviewSec: "DDReview",
        DueDiligenceMemoSlide: "DueDiligenceMemoSlide",
         legalReview :"LegalReview",
         transactionMonitoringReview:"AppendixTransactionMonitoringScenarios",
         finalDecision : "FinalDecision",
         RegulatoryComplianceReviewDD:"Regulatory Compliance Review DD",
         CreditReviewReportingandServicingTape:"Credit Review : Reporting and Servicing Tape",
         GLDepositAccountRequisition:"GL_Deposit_Account_Requisition",
         regulatoryComplianceReview2:"RC_Quick_View_2",
         regulatoryComplianceReview3: "RC_Quick_View_3",
         COSsupportsection: "COS Support Section",
         COSaccountsetup: "ImplementationCOSAccountSetupandApprovals",
         CardIssuing: "ImplementationCardIssuing",
         fairLending:"Fair Lending Review",
         APRValidationInterestCalculationAccrualMethod: "APR Validation/Interest Calculation Accrual Method",
         BinRequestForm: "Implementation_section_24",
        SFTForm: "SFTForm",
        VROLRIDRequest: "Implementation_VROL RID Request_Section", 
        VISABillingMappingandSettlementSmartForm: "Implementation_section_23",
        CIQForm: "CIQ Form",
        ReportCIQForm: "Implementation_Report CIQ Form_Section",
        NewBinPartnerVisa: "NewBinPartnerVisa",
        NewBinPartnerMasterCard: "NewBINpartnerMastercard",
        NewBinPartnerAmericanExpress: "NewBINPartnerAmericanExpress",
        SharedBinPartnerVisa:  "SharedBinPartnerVisa",
        SharedBinPartnerMasterCard: "SharedBINPartnerMastercard",
        SharedBinPartnerAmericanExpress: "SharedBINPartnerAmericanExpress",
        AmericanExpressTreasury: "Implementation_section_26",
        ICARequestForm: "ICARequestForm",
        NetSettlementInformation: "NetSettlementInformation",
        DebitAuthorizationLetter: "DebitAuthorizationLetter",
        TransferFundsThreshold: "TransferFundsThreshold",
        BillingForm: "BillingForm",
        APW: "APW",
        ProvisioningofServices: "ProvisioningofServices",
        MerchantAcquiring: "Implementation - Merchant Acquiring",
        FairLendingGoNoGo:"GoNoGo",
        VROLEnrollmentFormDisputes: "VROLEnrollmentSharedBinVisa",
        PPRMandTPARegistrations: "PRMandTPASharedBinVisa",
        IDInformation: "IDInformation",
        ContractSetupAndApprovals: "Contract Setup and Approvals",
        ContractComment: "Contract Setup and Comments",
        BillingSetUp: "Billing Setup Form",
        HighRiskApproval: "TESTtoLIVEHighRiskApproval",
        CreditReview:"Credit Review",
        fraud:"Fraud Review",
        transactionMontoring:"Transaction Monitoring Review",
        CreditReviewFinancialReview:"Financial Review",
        CreditReviewMoodysRiskCalculation:"Moodys Risk Calculation",
		CreditReviewDetermineReserves:"Determine Reserves",
        FairLendingReview:"Due Diligence_section_23",
        SubmittedDocuments:"Due Diligence_section_10",
		ArcherSetupAndEngagementInformation:"Due Diligence_section_11",
		PreliminaryRiskAssessmentTemplate : "PRA Section",
		DDMemoSlide : "DueDiligenceMemoSlide",
    },
    lineOfBusiness: {
        BaaSCards: "BaaS/Cards",
        Marketplace_Lending: "Marketplace Lending",
        Payments: "Payments",
        
    },
    productNames: {
        ConsumerCreditCard: "Consumer Credit Card",
        ConsumerSavingsAccount: "Consumer Savings Account",
        ConsumerCheckingAccount: "Consumer Checking Account",
        CommercialCreditCard: "Commercial Credit Card",
        CommercialSavingsAccount: "Commercial Savings Account",
        CommercialCheckingAccount: "Commercial Checking Account",
        ConsumerLineOfCredit: "Consumer Line of Credit",
        CommercialLoan: "Commercial Loan",
        ConsumerInstallmentLoan: "Consumer Installment Loan",
        ACHDomestic: "ACH Domestic",
        ACHInternational: "ACH International",
        FedNow: "FedNow",
        MerchantAcquiring: "Merchant Acquiring",
        PushToCard: "Push to Card",
        RTP: "RTP",
        WireDomestic: "Wires Domestic",
        WireInternational: "Wires International",
        Xpay: "Xpay"
    },
    TabName: {
        DueDiligence: "Due Diligence",
        ImplementationTeam: "Implementation",
        Payments:"Payments",
        Screening : "Screening",
        Implementation: "Implementation",
        Contract: "Contract",
      
    },
    SubGrid: {
        ACHOperationsReview: "ACHOperationsReview",
        FunctionalReviewConditions: "FunctionalReviewConditions",
        CreditRiskReview : "CreditRiskReview",
        ITComplianceReview : "ITComplianceReview",
        RegulatoryComplianceReview : "RegulatoryComplianceReview",
        wireproductsReview:"WireOperationsReview",
        BSAAMLReviews: "BSAAMLReviews",
        CardPaymentOperationsView : "CardPaymentOperationsView",
        DDReview : "DDReview",
        rtpOperationsReview:"RTPOperationsReview",
        CRBDocuments:"CRBDocumetnsSubgrid",
        CreditReviewTask:"Credit_Review_Tasks_Subgrid",
        MerchantAcquiringDebitNetwork : "MerchantAcquiringDebitNetwork",
        CardIssuingVISA : "Subgrid_new_4",
        CardIssuingMasterCard : "Subgrid_new_5",
        CardIssuingAmericanExpress : "Subgrid_new_6",
        CardIssingDebitNetwork: "Subgrid_new_7",
        
    },
    LOV :{
        CreditNetwork: {
            Visa: 100000000,
            MasterCard: 100000001,
            AmericanExpress: 100000002,
        },
        IsThisANewBINPartnerOrSharedBINPartner: {
            NewBINPartner: 100000000,
            SharedBINPartner: 100000001,
        }       
        

    },
    QuickViewForms:{
		Opportuntiy_Implementation_QuickView:"Opportuntiy_Implementation_QuickView",
	},
    QuickViewElements: {
		partnername: "crb_partnername",
		targetgolivedate: "crb_targetgolivedate",
		preonboardingapprovalconcurrencedate: "crb_preonboardingapprovalconcurrencedate",
		companydescription: "crb_companydescription",
		industry: "crb_industry",
		productdescription: "crb_productdescription",
		listofproductswithintheopportunity: "crb_listofproductswithintheopportunity",
		flowoffundonopportunity: "crb_flowoffundonopportunity",
		commentsfromimplementationslead1: "crb_commentsfromimplementationslead1",
		chiefcomplianceofficerorutilize: "crb_chiefcomplianceofficerorutilize",
		doesyourcompanyhaveamlpolicyorequivalent: "crb_doesyourcompanyhaveamlpolicyorequivalent",
		overviewofteaminvestorfunding: "crb_overviewofteaminvestorfunding",

	},
    otherGroups: {
        features: {
            BINSponsorship: "BIN Sponsorship",
            DebitCard: "Debit Card",
        },
    },
    onLoadOfOnboarding: async function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        //this.HideDocumentUpload(executionContext);
        this.lockunlockonboardingstatus(executionContext);
        this.ShowHideSections(executionContext);         
        this.ImpementationTab(executionContext);
        this.getLoginUserTeam(executionContext);
        this.showHide_Implemenatation_MerchantAcquiringSection(executionContext);
        //this.showAndHideSectionsForMastercard(executionContext);
        //this.showAndHideImplemenatationCardIssungMastercardSharedBinPartner(executionContext);
        this.showHide_Implemenatation_CardIssungSection_Mastercard(executionContext);
        this.showHide_Implemenatation_Debit(executionContext);
       // this.showAndHideSectionsForAmericanExpress(executionContext);
        //this.ShowHideFunctionalReview(executionContext);
        this.makeCRRMScoreReadONlyByUser(executionContext);
        this.showandhideCOS(executionContext);
        this.lockandunlockofsandboxfields(executionContext);
        //this.showNotificationonScreeningDate(executionContext);
        this.hideSubGrids(executionContext);
        await this.paymentSectionsBasedonRoles(executionContext);
        this.showHidefunctionalReviewSection(executionContext);               
        this.showAndHideWalkthroughApprovalStatus(executionContext);        
        
        this.showHideBasedOnAreWeReceivingReportsFromThePartner(executionContext);
        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.CIQForm).setVisible(false);
        this.ShowAndHideScreeningTab(executionContext);
        //this.HideAndShowGLDepositAccountRequisition(executionContext);
        this.showPleaseSpecifyICM(executionContext);
        this.showPleaseSpecifyAM(executionContext);
        this.MakeFieldsNone(executionContext);
        this.FieldsMandatoryOnTabChange(executionContext);
        this.showandhidecardissuingsection(executionContext);
        this.FairLendingReviewCompleted(executionContext);
        this.editFieldsAfterTaskApproved(executionContext);
        this.hideFieldsInImplementationQuickView(executionContext);
        this.enableanddisablenewbinorsharedbinfieldincardissuing(executionContext);
        this.showAndHideDebitandCreditNetworks(executionContext);
        //this.showAndHideBasedOnNotApplicable(executionContext);
        //this.showAndHideFieldsForVISABillingBasedOnNotApplicable(executionContext);
        //this.showAndHideFieldsofReportCIQsection(executionContext);
        //this.HideDocumentUploadForReportCIQ(executionContext);
        //this.showAndHideFieldsForBINRequestBasedOnNotApplicable(executionContext);
        //this.HideDocumentUploadForVBMSForm(executionContext);
        this.showAndHideSectionsForVisaBinPartner(executionContext);
        //this.showAndHideFieldsForSFTFormBasedOnNotApplicable(executionContext);
        //this.HideDocumentUploadForSFTForm(executionContext);  
        this.HideAndShowSubgridCreditNetwork(executionContext); 
        this.showHIdeFairLendingGoNoGoSection(executionContext); 
        //this.updateFiarlendingDueDiligenceDataManagemet(executionContext);
        //this.updateFiarlendingDueDiligenceDate(executionContext);
        this.showFairLendingDueDiligenceDataManagementDate(executionContext);
		this.showFairLendingDueDiligenceDate(executionContext);
        this.HideAndShowSubgridMercgACDebitNetwork(executionContext);
        this.showAndHidefieldsForIcaBinSponsor(executionContext);
        this.setOpportunityStatusValue(executionContext);
        this.EnableDisableIDInformation(executionContext);
       // this.fieldsrequiredpayment(executionContext);
        this.showAndHideSectionsForSharedVisa(executionContext);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).addTabStateChange(this.RefreshRibbonOfOnboardingOnTabChange);
        this.setLabelbasedOnNetwork(executionContext);
        this.ShowAndHideContractSections(executionContext);
        this.lockUnlockSectionContractSetup(formContext);
        this.SetWebsiteURLFromPartner(executionContext);
        this.showHideSectionHighRiskApproval(executionContext);
        this.EnableDisableHighSectionRiskApprovalOnRoles(executionContext);
        //this.showHideEnableDisableSectionsOfDueDiligenceTab(executionContext);
        this.showHideEnableDisableSections(executionContext);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).addTabStateChange(this.RefreshRibbonOfOnboardingOnTabChange);
        //this.editableFairLendingDueDiligience(executionContext);
        //this.DisableDDTabFields(executionContext);
        this.checksectionstatusmandatoryfields(executionContext);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).addTabStateChange(this.RefreshRibbonOfOnboardingOnTabChange);
        this.ShowAllSectionsOnPaymentTab(executionContext);    
},
    onSaveOfOnboarding: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        this.syncAllCRRMScores(executionContext);
        this.updateCommentHistory(executionContext);
        this.checkStatusFields(executionContext);
       // this.editFieldsAfterTaskApproved(executionContext);    
    },

    onTabChangeOfOnboarding: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        this.getLoginUserTeam(executionContext);
        //this.RefreshRibbonOfOnboardingOnTabChange(executionContext);

    },
    onChangeOfFairLendingDueDiligenceGoNoGo: function (executionContext) {
		var formContext = executionContext.getFormContext();
		this.updateFiarlendingDueDiligenceDate(executionContext);
        this.showFairLendingDueDiligenceDate(executionContext);
		this.FairLendingReviewCompleted(executionContext);
	},
	onChangeOfFairLendingDataManagementGoNoGo: function (executionContext) {
		var formContext = executionContext.getFormContext();
		this.updateFiarlendingDueDiligenceDataManagemet(executionContext);
        this.showFairLendingDueDiligenceDataManagementDate(executionContext);
		this.FairLendingReviewCompleted(executionContext);
	},
    ShowHideSections: async function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var opportunity = formContext.getAttribute(this.Attributes.opportunity).getValue();
        var optyid = opportunity[0].id;
        var flag = false;
        
        var paymentsFlag = false;

        await Xrm.WebApi.retrieveRecord("opportunity", optyid, "?$select=opportunityid&$expand=crb_Opportunity_Opportunity_crb_product($select=_crb_lineofbusiness_value)").then(
            function success(result) {
                var opportunityid = result["opportunityid"];
                for (var j = 0; j < result.crb_Opportunity_Opportunity_crb_product.length; j++) {
                    var lob = result.crb_Opportunity_Opportunity_crb_product[j]["_crb_lineofbusiness_value@OData.Community.Display.V1.FormattedValue"];
                    if (lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.BaaSCards) {
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.CreditBureauSetup).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.DueDiligenceMemoSlide).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.fairLending).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.APRValidationInterestCalculationAccrualMethod).setVisible(true);
                        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.Authorized).setVisible(true);
                        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.Beneficia).setVisible(true);
                        
                    } else if (lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.Marketplace_Lending) {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.CreditBureauSetup).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.DueDiligenceMemoSlide).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.fairLending).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.PRASection).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.APRValidationInterestCalculationAccrualMethod).setVisible(true);
                    } else {
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).setVisible(true);                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.DueDiligenceMemoSlide).setVisible(false);
                    }
                    
                    if(lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.Payments){
						paymentsFlag = true;
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview2).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.APRValidationInterestCalculationAccrualMethod).setVisible(false);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview3).setVisible(true);
					}
                    if(lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.Payments && lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.BaaSCards && lob === CRB.CRM.PJ.Onboarding.lineOfBusiness.Marketplace_Lending){
						paymentsFlag = true;
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview2).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.APRValidationInterestCalculationAccrualMethod).setVisible(true);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview3).setVisible(true);
					}
                }

            },
            function (error) { }
        );
        
        if(paymentsFlag){
			//formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).setVisible(true);
            this.showBasedOnObjectionOnWebsite(executionContext);
            this.makeRegulatoryComplianceReviewDDReadOnly(executionContext);
		}
		else{
		//formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).setVisible(false);
		}

    },
    ValidateEngID: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var fieldText = formContext.getAttribute(this.Attributes.Engagementid).getValue();
        if (fieldText === null) return;
        if (!fieldText.match("^[a-zA-Z]+$")) {
            formContext.getControl(this.Attributes.Engagementid).setNotification("Please enter only alphabetic character.", 101);
            return false;
        } else {
            formContext.getControl(this.Attributes.Engagementid).clearNotification(101);
            return true;
        }
    },
    onchangeOfComments: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var comment = formContext.getAttribute(this.Attributes.comments).getValue();
        var user = Xrm.Utility.getGlobalContext().userSettings;
        var userName = user.userName;
        var appendComment = userName + " : " + comment;
        var value = "";
        var commentHistory = formContext.getAttribute(this.Attributes.commentHistory_crrm).getValue();
        if (commentHistory !== null) {
            value = commentHistory + "\n" + appendComment;
        } else {
            value = appendComment;
        }

        formContext.getAttribute(this.Attributes.commentHistory_crrm).setValue(value);
    },


    getLoginUserTeam: function (executionContext) {
        var userSettings = Xrm.Utility.getGlobalContext().userSettings; // userSettings is an object with user information.
        var current_User_Id = userSettings.userId; // The user's unique id
        var newid = current_User_Id.slice(1, -1);
        var res;
        var req = new XMLHttpRequest();
        req.open("GET", Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.2/teams?$select=name&$expand=teammembership_association($filter=systemuserid eq " + newid + ")", true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Prefer", "odata.include-annotations=*");
        req.onreadystatechange = function () {

            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var results = JSON.parse(this.response);
                    console.log(results);
                    for (var i = 0; i < results.value.length; i++) {
                        // let teammembership = results.value[i].teammembership_association;

                        // for (var k = 0; k < teammembership.length; k++) {
                        //	var teammembership_association_teamid = teammembership[k]["teamid"]; // Guid
                        //	var teammembership_association_name = teammembership[k]["name"]; // Text

                        var teammembership_association_teamid = results.value[i]["teamid"]; // Guid
                        var teammembership_association_name = results.value[i]["name"]; // Text

                        if (teammembership_association_name === "General Due Diligence" || teammembership_association_name === "BSA/AML") {
                            return true;
                        }

                        if (i === (results.value.length - 1)) {
                            return false;
                        }
                        //}
                        /*
                if(results.value[0].teammembership_association[i] > 0)
                {
                    var result = results.value[i];
                    var systemuserid = result.teammembership_association[0]["systemuserid"]; // Guid
                    var fullname = result.teammembership_association[0]["fullname"]; // Text
                var internalemailaddress = result.teammembership_association[0]["internalemailaddress"]; // Text
                // Many To Many Relationships
                for (var j = 0; j < result.teammembership_association.length; j++) {
                    var teammembership_association_teamid = result.teammembership_association[j]["teamid"]; // Guid
                    var teammembership_association_name = result.teammembership_association[j]["name"]; // Text
                    if(teammembership_association_name === "General Due Diligence" || teammembership_association_name === "BSA/AML")
                    {
                        return true;
                    }
                }
                } */

                    }
                } else {
                    console.log(this.responseText);
                }
            }
        };

        req.send();
        //return false;
    },

    ImpementationTab: async function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var ImpGRStatus = formContext.getControl(this.Attributes.ImpGRStatus);
        var ImpCOSStatus = formContext.getControl(this.Attributes.ImpCOSStatus);
        if (ImpGRStatus !== null) {
            ImpGRStatus.removeOption(3);
        }
        if (ImpCOSStatus !== null) {
            ImpCOSStatus.removeOption(1);
        }
    },
    onChangeOfCrrmScore: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var triggeredBy = executionContext.getEventSource().getName();
        formContext.getAttribute(this.Attributes.whichCRRMScoreChanged).setValue(triggeredBy);
        this.showReasonForUpdateField(executionContext, triggeredBy);
        if(triggeredBy === this.Attributes.crrmscore_implementationTeam)
                 formContext.ui.refreshRibbon();
        //this.EnableDisableHighSectionRiskApprovalOnRoles(executionContext);
        this.showHideSectionHighRiskApproval(executionContext);
        //this.syncAllCRRMScoresFromCRRMOnChange(executionContext, triggeredBy);	
    },
    updateCommentHistory: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var username = Xrm.Utility.getGlobalContext().userSettings.userName;
        var dateTime = new Date().toString().split(" ");
        var date = dateTime[1] + "-" + dateTime[2] + "-" + dateTime[3];
        var time = dateTime[4];
        if (formContext.getAttribute(this.Attributes.comment_crrm).getValue() !== null && formContext.getAttribute(this.Attributes.comment_crrm).getValue() !== "") {
            var comment = formContext.getAttribute(this.Attributes.comment_crrm).getValue();
            var crrm_score_Label = formContext.getAttribute(this.Attributes.crrmscore1).getText();
            var commentHistory = formContext.getAttribute(this.Attributes.commentHistory_crrm).getValue()

            if (commentHistory === null || commentHistory === "")
                commentHistory = "-" + username + ": " + comment + "\t'" + crrm_score_Label + "' \t" + date + " " + time;
            else
                commentHistory = "-" + username + ": " + comment + "\t'" + crrm_score_Label + "' \t" + date + " " + time + '\n' + commentHistory;
            formContext.getAttribute(this.Attributes.commentHistory_crrm).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_bsaaml).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_implementationTeam).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_generalDueDiligence).setValue(commentHistory);
        }
        if (formContext.getAttribute(this.Attributes.comment_bsaaml).getValue() !== null && formContext.getAttribute(this.Attributes.comment_bsaaml).getValue() !== "") {
            var comment = formContext.getAttribute(this.Attributes.comment_bsaaml).getValue();
            var crrmbsaaml_score_Label = formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getText();
            var commentHistory = formContext.getAttribute(this.Attributes.commentHistory_crrm).getValue()

            if (commentHistory === null || commentHistory === "")
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmbsaaml_score_Label + "' \t" + date + " " + time;
            else
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmbsaaml_score_Label + "' \t" + date + " " + time + '\n' + commentHistory;
            formContext.getAttribute(this.Attributes.commentHistory_crrm).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_bsaaml).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_implementationTeam).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_generalDueDiligence).setValue(commentHistory);
        }
        if (formContext.getAttribute(this.Attributes.comment_implementationTeam).getValue() !== null && formContext.getAttribute(this.Attributes.comment_implementationTeam).getValue() !== "") {
            var comment = formContext.getAttribute(this.Attributes.comment_implementationTeam).getValue();
            var commentHistory = formContext.getAttribute(this.Attributes.commentHistory_crrm).getValue();
            var crrmImplementationTeam_score_Label = formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getText();

            if (commentHistory === null || commentHistory === "")
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmImplementationTeam_score_Label + "' \t" + date + " " + time;
            else
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmImplementationTeam_score_Label + "' \t" + date + " " + time + '\n' + commentHistory;
            formContext.getAttribute(this.Attributes.commentHistory_crrm).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_bsaaml).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_implementationTeam).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_generalDueDiligence).setValue(commentHistory);
        }
        if (formContext.getAttribute(this.Attributes.comment_generalDueDiligence).getValue() !== null && formContext.getAttribute(this.Attributes.comment_generalDueDiligence).getValue() !== "") {
            var comment = formContext.getAttribute(this.Attributes.comment_generalDueDiligence).getValue();
            var commentHistory = formContext.getAttribute(this.Attributes.commentHistory_crrm).getValue();
            var crrmGeneralDueDiligence_score_Label = formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).getText();

            if (commentHistory === null || commentHistory === "")
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmGeneralDueDiligence_score_Label + "' \t" + date + " " + time;
            else
                commentHistory = "-" + username + ": " + comment + "\t'" + crrmGeneralDueDiligence_score_Label + "' \t" + date + " " + time + '\n' + commentHistory;
            formContext.getAttribute(this.Attributes.commentHistory_crrm).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_bsaaml).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_implementationTeam).setValue(commentHistory);
            formContext.getAttribute(this.Attributes.commentHistory_generalDueDiligence).setValue(commentHistory);
        }
        this.hideAllCommentsFields(executionContext);

    },
    syncAllCRRMScores: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var whichFieldChanged = formContext.getAttribute(this.Attributes.whichCRRMScoreChanged).getValue();
        switch (whichFieldChanged) {
            case this.Attributes.crrmscore1:
                formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
                break;
            case this.Attributes.crrmscore_bsaaml:
                formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
                break;
            case this.Attributes.crrmscore_implementationTeam:
                formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
                break;
        }
    },
    syncAllCRRMScoresFromCRRMOnChange: function (executionContext, triggeredBy) {
        var formContext = executionContext.getFormContext();
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        switch (triggeredBy) {
            case this.Attributes.crrmscore1:
                formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
                break;
            case this.Attributes.crrmscore_bsaaml:
                formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
                break;
            case this.Attributes.crrmscore_implementationTeam:
                formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
                formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
                break;
        }
    },
    showReasonForUpdateField: function (executionContext, triggeredBy) {
        var formContext = executionContext.getFormContext();
        if (triggeredBy === this.Attributes.crrmscore1) {

            formContext.getControl(this.Attributes.comment_crrm).setVisible(true);
            formContext.getAttribute(this.Attributes.comment_crrm).setValue("");
            if (formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue() !== null || formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue() !== null) {
                formContext.getAttribute(this.Attributes.comment_crrm).setRequiredLevel("required");
            }


            //formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).setValue(formContext.getAttribute(this.Attributes.crrmscore1).getValue());

        }
        if (triggeredBy === this.Attributes.crrmscore_bsaaml) {

            formContext.getControl(this.Attributes.comment_bsaaml).setVisible(true);
            formContext.getAttribute(this.Attributes.comment_bsaaml).setValue("");
            if (formContext.getAttribute(this.Attributes.crrmscore1).getValue() !== null || formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue() !== null) {

                formContext.getAttribute(this.Attributes.comment_bsaaml).setRequiredLevel("required");
            }


            //formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).setValue(formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue());

        }
        if (triggeredBy === this.Attributes.crrmscore_implementationTeam) {

            formContext.getControl(this.Attributes.comment_implementationTeam).setVisible(true);
            formContext.getAttribute(this.Attributes.comment_implementationTeam).setValue("");
            if (formContext.getAttribute(this.Attributes.crrmscore1).getValue() !== null || formContext.getAttribute(this.Attributes.crrmscore_bsaaml).getValue() !== null) {

                formContext.getAttribute(this.Attributes.comment_implementationTeam).setRequiredLevel("required");
            }


            //formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());
            //formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).setValue(formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue());

        }
        // if (triggeredBy === this.Attributes.crrmscore_generalDueDiligence) {		// this condtion is not being used anyway
        // 	formContext.getAttribute(this.Attributes.crrmscore1).setValue(formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).getValue());
        // 	formContext.getAttribute(this.Attributes.crrmscore_bsaaml).setValue(formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).getValue());
        // 	formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).setValue(formContext.getAttribute(this.Attributes.crrmscore_generalDueDiligence).getValue());

        // 	formContext.getControl(this.Attributes.comment_generalDueDiligence).setVisible(true);
        // 	formContext.getAttribute(this.Attributes.comment_generalDueDiligence).setRequiredLevel("required");
        // 	formContext.getAttribute(this.Attributes.comment_generalDueDiligence).setValue("");
        // }
    },
    hideAllCommentsFields: function (executionContext) {
        var formContext = executionContext.getFormContext();

        formContext.getAttribute(this.Attributes.comment_crrm).setValue("");
        formContext.getControl(this.Attributes.comment_crrm).setVisible(false);
        formContext.getAttribute(this.Attributes.comment_crrm).setRequiredLevel("none");

        formContext.getAttribute(this.Attributes.comment_bsaaml).setValue("");
        formContext.getControl(this.Attributes.comment_bsaaml).setVisible(false);
        formContext.getAttribute(this.Attributes.comment_bsaaml).setRequiredLevel("none");

        formContext.getAttribute(this.Attributes.comment_implementationTeam).setValue("");
        formContext.getControl(this.Attributes.comment_implementationTeam).setVisible(false);
        formContext.getAttribute(this.Attributes.comment_implementationTeam).setRequiredLevel("none");

        formContext.getAttribute(this.Attributes.comment_generalDueDiligence).setValue("");
        formContext.getControl(this.Attributes.comment_generalDueDiligence).setVisible(false);
        formContext.getAttribute(this.Attributes.comment_generalDueDiligence).setRequiredLevel("none");
    },

    hideAndShowNewButtonOnScreening: async function () {
        var userName = Xrm.Utility.getGlobalContext().userSettings.userName;
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        let show = false;
        show = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "General Due Diligence,BSA/AML");
        return show;
    },
    checkIfUserIdIsPartOfTeams: async function (userId, teamNames) {
        userId = userId.replace("{", "").replace("}", "");
        let result = false;

        let options = "?$select=name,teammembership_association&$expand=teammembership_association($select=systemuserid,fullname;$filter=systemuserid eq " + userId + ")";

        let outputTeams = [];
        await Xrm.WebApi.retrieveMultipleRecords("team", options).then(
            (results) => {
                outputTeams = results.entities;
            })
            .catch((error) => {
                //console.error(error.message);
            });

        outputTeams = outputTeams.filter((team) => {
            return team.teammembership_association.length > 0;
        })

        let teamNamesArray = teamNames.split(",");
        for (var i = 0; i < outputTeams.length; i++) {
            if (teamNamesArray.includes(outputTeams[i].name)) {
                result = true;
                break;
            }
        }
        return result;
    },
    makeCRRMScoreReadONlyByUser: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var userName = Xrm.Utility.getGlobalContext().userSettings.userName;
        var isGDDMember = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "General Due Diligence");
        if (!isGDDMember) {
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.secondOccurance_crrmscore1).setDisabled(true);
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.comment_crrm).setDisabled(true);
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.ddMemoUrl).setDisabled(true);
        }

        var isBSAAMLMemeber = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "BSA/AML");
        if (!isBSAAMLMemeber) {
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crrmscore_bsaaml).setDisabled(true);
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.comment_bsaaml).setDisabled(true);

        }

        var isImplementationTeamMember = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "Implementation Team");
        if (!isImplementationTeamMember) {
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crrmscore_implementationTeam).setDisabled(true);
            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.comment_implementationTeam).setDisabled(true);

        }
    },
    onChangeOfOwner: function (executionContext) {
        this.checkIfOwnerISGDDMemeber(executionContext);
    },
    checkIfOwnerISGDDMemeber: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var owner = formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.owner).getValue();
        //checking if owner field is null or not
        if (owner) {
            var ownerName = owner[0].name;
            var ownerType = owner[0].entityType;
            var ownerID = owner[0].id;

            var isGDDMember = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(ownerID, "General Due Diligence");
            if (!isGDDMember) {
                let alertStrings = {
                    confirmButtonLabel: 'Ok',
                    text: 'Selected Owner is not General Due Diligence Team Member'
                };
                let alertOptions = {
                    height: 120,
                    width: 260
                };

                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
                let option = '?$select=_ownerid_value';
                var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
                await Xrm.WebApi.retrieveRecord('crb_onboarding', onboardingId, option).then(
                    function success(result) {
                        let owner = result['_ownerid_value'];
                        let ownerName = result['_ownerid_value@OData.Community.Display.V1.FormattedValue'];
                        let ownerType = result['_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname'];
                        formContext.getAttribute('ownerid').setValue([{
                            id: owner,
                            name: ownerName,
                            entityType: ownerType
                        }]);

                    },
                    function (error) {
                        Xrm.Navigation.openAlertDialog(error.message);
                    }
                );
            }
        }
    },    
    
//    showNotificationonScreeningDate: function (executionContext) {
//    "use strict";
//    var formContext = executionContext.getFormContext();
//    var crrmScreenigDate = formContext.getControl(this.Attributes.CRRMExpireDate);
//    var crrmScreenigDateValue = formContext.getAttribute(this.Attributes.CRRMExpireDate).getValue();
//    var currentDate = new Date()
//    if (crrmScreenigDateValue > currentDate) {
//        var actionsCol = {
//            message: 'CRRM Expiration Date',
//            actions: null
//        };
//        actionsCol.actions = [function () {
//            //quantity.setValue(100);
//            crrmScreenigDate.clearNotification('2002');
//        }];           
//        crrmScreenigDate.addNotification({
//            messages: ["CRRM Expiration Date has expired"],
//            notificationLevel: 'ERROR',
//            uniqueId: '2002',
//            actions: [actionsCol]
//        });
//    }
//    else
//        console.log("Notification not set");
//
//},

DisablePaymentsTabFields : function (executionContext) {
    var formContext = executionContext.getFormContext();
    var summaryObj = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments);
    var summarySections = summaryObj.sections.get()
    for (var i = 0; i < summarySections.length; i  ) {
        var sectionFields = summarySections[i].controls.get();
        for (var j = 0; j < sectionFields.length; j  ) {
            sectionFields[j].setDisabled(true);
        }
    }
},
    paymentSectionsBasedonRoles: async function(executionContext){
    var formContext = executionContext.getFormContext();
    var currentUser = Xrm.Utility.getGlobalContext().userSettings;
    var userRole = currentUser.securityRoles;
    var userId = currentUser.userId.replace("{", "").replace("}", "");
    var opportunity = formContext.getAttribute(this.Attributes.opportunity).getValue();
    var Isbsaamlapprovalcompleted = formContext.getAttribute(this.Attributes.isBSAAMLcommitteapprovalcompleted).getValue();
    var optyid = opportunity[0].id;
    var flag = false;
    var teamsPaymentTab = [];
    teamsPaymentTab = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
    var product1 =[];
    var keys = ["crb_whatistheoutcomeoftheachoperationsreview","crb_achoperationsreviewsummaryandassessment","crb_achoperationsreviewandassessmentcompleted","crb_achattachsupplementaldocumentation",
                            "crb_achreviewstatus","crb_istheentitysdesignationclassifiedcorrectly","crb_arethereturnratesauditreportssatisfactory","crb_reviewedrecordofauthorizationforseccodes",
                            "crb_outcomeoftheinfosecreview","crb_summaryassessment","crb_itcompliancereviewandassessmentcompletedate","crb_itcompliancestatus","crb_whatistheoutcomeoftheregcompliancereview","crb_wereanyconcernsidentifiedduringthereview",
                            "crb_describetheregulatorycompliancereview","crb_regname","crb_regulatoryreviewstatus","crb_identifiedconcernsandmitigations","crb_regcompliancereviewandassessmentcompleted","crb_whatistheoutcomeofthebsaamlreview",
                            "crb_employeename","crb_function","crb_date","crb_bsaamlreviewsummaryandassessment","crb_bsaamlreviewandassessmentcompletedate","crb_describeanydiscussionsonamlsanctionspolicy","crb_bsaamlreviewstatus","crb_supplementaldiscussionregardingtheamlprogram",
                            "crb_arethereanyconcernsfromabsaamlperspective","crb_describe","crb_selectconcerns","crb_whatistheoutcomeofthertpoperationsreview","crb_rtpperationseviewandssessmentcompletedate","crb_rtpreviewstatus","crb_rtpoperationsreviewsummaryandassessment",
                            "crb_whatistheoutcomeofthewireoperation","crb_wireopsreviewandassessmentcompletedate","crb_wirereviewstatus","crb_wireoperationsreviewsummaryandassessment","crb_whatistheoutcomeofthelegalreview","crb_legalreviewandassessmentcompletedate","crb_legalreviewstatus",
                            "crb_legalreviewsummaryandassessment","crb_outcomeofthecardpaymentopsreview","crb_cardpymtsopsreviewassessmentcompletedate","crb_cardpaymentreviewstatus","crb_cardpaymentopsreviewsummaryandassessment","crb_whatistheoutcomeofthecreditreview","crb_whatadditionaldocumentationisrequired","crb_crb_describe1",
                            "crb_creditriskreviewstatus","crb_creditofficerreviewsummaryandassessment","crb_doescreditofficerrequireadditionalinfo","crb_creditreviewandassessmentcompletedate","crb_wasentityapprovedordeniedatcommittee","crb_summaryofcustomersprofileandassessment","crb_rationale",
                            "crb_duediligenceriskreviewandassessment","crb_arethereanyconcerns","crb_dddescribe","crb_ddreviewstatus","crb_ddreviewdescribe","crb_hasentitybeenreviewedbyappropriatecommitt","crb_dateofcommitteereview","crb_targetgolivedate",
                            "crb_asofdate","crb_approvedby","crb_transactiontype","crb_subledgers","crb_summary","crb_scenariosselected","crb_appendixflag","crb_appendixtransactionreviewstatus","crb_redflags","crb_accounttype","crb_productrisk","crb_geographicrisk","crb_partnerrisk","crb_isbsaamlapprovalcompleted","crb_finaldecision",
                            "crb_businessreviewoutcome","crb_name1","crb_attachsupplementaldocumentation","crb_functionalreviewstatus","crb_businessreviewsummaryandassessment","crb_businessreviewassessmentcompletedate"
                        ];
        await Xrm.WebApi.retrieveRecord("opportunity", optyid, "?$select=opportunityid&$expand=crb_Opportunity_Opportunity_crb_product($select=_crb_productname_value,_crb_lineofbusiness_value)").then(
            function success(result) {
                var opportunityid = result["opportunityid"];
                for (var j = 0; j < result.crb_Opportunity_Opportunity_crb_product.length; j++) {
                    var lob1 = result.crb_Opportunity_Opportunity_crb_product[j]["_crb_lineofbusiness_value@OData.Community.Display.V1.FormattedValue"];
                    product1 = result.crb_Opportunity_Opportunity_crb_product[j]["_crb_productname_value@OData.Community.Display.V1.FormattedValue"];
                    //teamsPaymentTab = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
                    
                   // CRB.CRM.PJ.Onboarding.DisablePaymentsTabFields(executionContext);
                    
                    teamsPaymentTab.forEach(function(team){   
                    
                    if(team.name === "ACH Operations" && lob1 === CRB.CRM.PJ.Onboarding.lineOfBusiness.Payments && (product1 === CRB.CRM.PJ.Onboarding.productNames.ACHDomestic || product1 === CRB.CRM.PJ.Onboarding.productNames.ACHInternational) ){
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.achReview).setVisible(true);
                        
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.achReview).setVisible(true);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.itcompliancereview).setVisible(true);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview).setVisible(true);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.bsaamlReview).setVisible(true);
                       // formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.rtpOperationsReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.wireOpsReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.legalReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.cardPaymentOperationReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.creditRiskReviewsec).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.ddReviewSec).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.transactionMonitoringReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.FinalDecision).setVisible(true);  
                        
                        CRB.CRM.PJ.Onboarding.SHowAndHideACHOperationsReview(executionContext);
                       
                    }
                    else if(team.name === "BSA/AML")
                    {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.bsaamlReview).setVisible(true);                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.ddReviewSec).setVisible(true);                       
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.transactionMonitoringReview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHideBsaAmlReview(executionContext);
                        if(Isbsaamlapprovalcompleted === true){
                            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.finalDecision).setVisible(true);
                        }
                        
        
                    }
                    else if(team.name === "IT Compliance")
                    {
                       
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.itcompliancereview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHideItComplianceReview(executionContext);
                       

                    }
                    else if(team.name === "Regulatory Compliance")
                    {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHideRegulatoryComplianceReview(executionContext);
                        
                    }
                    else if(team.name === "Transaction Monitoring")
                    {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.transactionMonitoringReview).setVisible(true);
                        

                    }
                    else if(team.name === "Legal Team")
                    {
                       
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.legalReview).setVisible(true);
                        
                       
                    }            
                    else if(team.name === "Credit Review Team")
                    {
                       
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.creditRiskReviewsec).setVisible(true);
                        CRB.CRM.PJ.Onboarding.SHowAndHideCreditRiskReview(executionContext);
                        
                    }
                    else if(team.name === "Card Payment Operations")
                    {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.cardPaymentOperationReview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHideCardPaymentOperationsReview(executionContext);
                        
                    }
                    else if(team.name === "Wire Operations" && lob1 === CRB.CRM.PJ.Onboarding.lineOfBusiness.Payments && (product1 === CRB.CRM.PJ.Onboarding.productNames.WireDomestic || product1 === CRB.CRM.PJ.Onboarding.productNames.WireInternational))
                    {
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.wireOpsReview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.SHowAndHideWireOperationReview(executionContext);
                       
                        
                    }
                    else if(team.name === "RTP Operations" && lob1 === CRB.CRM.PJ.Onboarding.lineOfBusiness.Payments && (product1 === CRB.CRM.PJ.Onboarding.productNames.RTP))
                    {
        
        
                        
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.rtpOperationsReview).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHidertpOperationReview(executionContext);
                        
                    }                    
                    else if(team.name === "General Due Diligence"){                       
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.achReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.functionalApproval).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.bsaamlReview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.itcompliancereview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.rtpOperationsReview).setVisible(true);
                        //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.wireOpsReview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.cardPaymentOperationReview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.creditRiskReviewsec).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.ddReviewSec).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.legalReview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.transactionMonitoringReview).setVisible(true);
                        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.finalDecision).setVisible(true);
                        CRB.CRM.PJ.Onboarding.ShowAndHideItComplianceReview(executionContext);
                        CRB.CRM.PJ.Onboarding.ShowAndHideRegulatoryComplianceReview(executionContext);
                        CRB.CRM.PJ.Onboarding.ShowAndHideBsaAmlReview(executionContext);
                        CRB.CRM.PJ.Onboarding.ShowAndHideCardPaymentOperationsReview(executionContext);
                        CRB.CRM.PJ.Onboarding.ShowAndHideDDReview(executionContext);
                        CRB.CRM.PJ.Onboarding.SHowAndHideCreditRiskReview(executionContext);
                        CRB.CRM.PJ.Onboarding.ShowHideFunctionalReview(executionContext);
                        CRB.CRM.PJ.Onboarding.disableFields(formContext,keys);
                        formContext.getControl("crb_summary").setDisabled(true);
                        if(product1 === CRB.CRM.PJ.Onboarding.productNames.ACHDomestic || product1 === CRB.CRM.PJ.Onboarding.productNames.ACHInternational){
                            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.achReview).setVisible(true);
                            CRB.CRM.PJ.Onboarding.SHowAndHideACHOperationsReview(executionContext);
                        }
                        if(product1 === CRB.CRM.PJ.Onboarding.productNames.WireDomestic || product1 === CRB.CRM.PJ.Onboarding.productNames.WireInternational){
                            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.wireOpsReview).setVisible(true);
                            CRB.CRM.PJ.Onboarding.SHowAndHideWireOperationReview(executionContext);
                        }
                        if(product1 === CRB.CRM.PJ.Onboarding.productNames.RTP){
                            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.rtpOperationsReview).setVisible(true);
                            CRB.CRM.PJ.Onboarding.ShowAndHidertpOperationReview(executionContext);
                        }                        
                        
                       
                    }
                    
                }) 
            } 
        },
        function (error) { }
    );
},
    showHidefunctionalReviewSection: async function(executionContext){
        "use strict";
        var formContext = executionContext.getFormContext();
        var userSettings = Xrm.Utility.getGlobalContext().userSettings;
        var currentuserid = userSettings.userId.replace("{", "").replace("}", "").toLowerCase();
        var opportunity = formContext.getAttribute(this.Attributes.opportunity).getValue();
        var optyid = opportunity[0].id.replace("{", "").replace("}", "");   
        await Xrm.WebApi.retrieveMultipleRecords("opportunity", "?$select=_ownerid_value&$expand=crb_Opportunity_Opportunity_crb_OpportunityTe($select=_crb_employeename_value,crb_role)&$filter=opportunityid eq "+ optyid).then(
            function success(results) {
                console.log(results);
                for (var i = 0; i < results.entities.length; i++) {
                    var result = results.entities[i];
                    // Columns
                    var opportunityid = result["opportunityid"]; // Guid
                    var ownerid = result["_ownerid_value"]; // Owner
                    //var ownerid_formatted = result["_ownerid_value@OData.Community.Display.V1.FormattedValue"];
                    //var ownerid_lookuplogicalname = result["_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            
                    // One To Many Relationships
                    for (var j = 0; j < result.crb_Opportunity_Opportunity_crb_OpportunityTe.length; j++) {
                        var oppoEmployeeId = result.crb_Opportunity_Opportunity_crb_OpportunityTe[j]["_crb_employeename_value"]; // Lookup
                        //var crb_Opportunity_Opportunity_crb_OpportunityTe_crb_employeename_formatted = result.crb_Opportunity_Opportunity_crb_OpportunityTe[j]["_crb_employeename_value@OData.Community.Display.V1.FormattedValue"];
                        //var crb_Opportunity_Opportunity_crb_OpportunityTe_crb_employeename_lookuplogicalname = result.crb_Opportunity_Opportunity_crb_OpportunityTe[j]["_crb_employeename_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                        var crbROle = result.crb_Opportunity_Opportunity_crb_OpportunityTe[j]["crb_role"]; // Choice
                        //var crb_Opportunity_Opportunity_crb_OpportunityTe_crb_role_formatted = result.crb_Opportunity_Opportunity_crb_OpportunityTe[j]["crb_role@OData.Community.Display.V1.FormattedValue"];
                        if((currentuserid === ownerid) || (currentuserid === oppoEmployeeId && crbROle === 6)){
                            //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.functionalApproval).setVisible(true);
                            formContext.getControl("crb_businessreviewoutcome").setDisabled(false);
                            formContext.getControl("crb_name1").setDisabled(false);
                            formContext.getControl("crb_attachsupplementaldocumentation").setDisabled(false);
                            formContext.getControl("crb_functionalreviewstatus").setDisabled(false);
                            formContext.getControl("crb_businessreviewsummaryandassessment").setDisabled(false);
                            formContext.getControl("crb_businessreviewassessmentcompletedate").setDisabled(false);
                            CRB.CRM.PJ.Onboarding.ShowHideFunctionalReview(executionContext);
                            break;
                        }
                    }
                }
            },
            function(error) {
                console.log(error.message);
            }
        );       

    },
    disableFields: function (formContext,keys){
        for (i = 0; i < keys.length; i++) {
             var attribute = formContext.getControl(keys[i]);
             if (attribute !== null) {
             attribute.setDisabled(true);
             }
        }
    },
    ShowHideFunctionalReview: async function (executionContext) {
    "use strict";
        var formContext = executionContext.getFormContext();
        var functionalOutcomeReview = formContext.getAttribute(this.Attributes.functionalBusinessReview).getValue();
        if (functionalOutcomeReview !== null && functionalOutcomeReview === 100000001) {
            formContext.getControl(this.Attributes.businessReviewSummaryandAssessment).setVisible(true);
            formContext.getControl(this.Attributes.businessReviewAssessmentCompletedate).setVisible(true);
            formContext.getControl(this.Attributes.attachsupplementfielfunctional).setVisible(false);
            formContext.getControl(this.Attributes.functionalReviewName).setVisible(true);
            formContext.getAttribute(this.Attributes.businessReviewSummaryandAssessment).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.businessReviewAssessmentCompletedate).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.functionalReviewName).setRequiredLevel("required");
            formContext.getControl(this.SubGrid.FunctionalReviewConditions).setVisible(false);
        }
        if (functionalOutcomeReview === 100000002) {
            formContext.getControl(this.Attributes.businessReviewSummaryandAssessment).setVisible(true);
            formContext.getControl(this.Attributes.businessReviewAssessmentCompletedate).setVisible(true);
            formContext.getControl(this.Attributes.functionalReviewName).setVisible(true);
            formContext.getControl(this.Attributes.attachsupplementfielfunctional).setVisible(true);
            formContext.getAttribute(this.Attributes.businessReviewSummaryandAssessment).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.businessReviewAssessmentCompletedate).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.attachsupplementfielfunctional).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.functionalReviewName).setRequiredLevel("required");
            formContext.getControl(this.SubGrid.FunctionalReviewConditions).setVisible(true);
        } else if (functionalOutcomeReview === null || functionalOutcomeReview === 100000000) {
            formContext.getControl(this.Attributes.businessReviewSummaryandAssessment).setVisible(false);
            formContext.getControl(this.Attributes.businessReviewAssessmentCompletedate).setVisible(false);
            formContext.getControl(this.Attributes.attachsupplementfielfunctional).setVisible(false);
            formContext.getControl(this.Attributes.functionalReviewName).setVisible(false);
            formContext.getAttribute(this.Attributes.businessReviewSummaryandAssessment).setRequiredLevel("none");
            formContext.getAttribute(this.Attributes.businessReviewAssessmentCompletedate).setRequiredLevel("none");
            formContext.getAttribute(this.Attributes.attachsupplementfielfunctional).setRequiredLevel("none");
            formContext.getAttribute(this.Attributes.functionalReviewName).setRequiredLevel("none");//required
            formContext.getControl(this.SubGrid.FunctionalReviewConditions).setVisible(false);
        }
    },
    SHowAndHideACHOperationsReview: async function (executionContext) {
    "use strict";
        var formContext = executionContext.getFormContext();
        var achBusinessReview = formContext.getAttribute(this.Attributes.achBusinessReview).getValue();
        if (achBusinessReview !== null && achBusinessReview === 100000001) {
            formContext.getControl(this.Attributes.achOperationsReviewandAssessmentCompletedate).setVisible(true);
            formContext.getControl(this.Attributes.attachsupplementfielach).setVisible(false);
            formContext.getAttribute(this.Attributes.attachsupplementfielach).setRequiredLevel("none");
            formContext.getControl(this.SubGrid.ACHOperationsReview).setVisible(false);
        }
        if (achBusinessReview === 100000002) {
            formContext.getControl(this.Attributes.achOperationsReviewandAssessmentCompletedate).setVisible(true);
            formContext.getControl(this.Attributes.attachsupplementfielach).setVisible(true);
            formContext.getAttribute(this.Attributes.attachsupplementfielach).setRequiredLevel("none");
            formContext.getControl(this.SubGrid.ACHOperationsReview).setVisible(true);//attachsupplementfielach

        } else if (achBusinessReview === null || achBusinessReview === 100000000){
            formContext.getControl(this.Attributes.achOperationsReviewandAssessmentCompletedate).setVisible(false);
            formContext.getControl(this.Attributes.attachsupplementfielach).setVisible(false);
            formContext.getAttribute(this.Attributes.attachsupplementfielach).setRequiredLevel("none");
            formContext.getControl(this.SubGrid.ACHOperationsReview).setVisible(false);
        }

    },
    SHowAndHideCreditRiskReview: function (executionContext) {
    "use strict";
    var formContext = executionContext.getFormContext();
    var creditRiskReview = formContext.getAttribute(this.Attributes.creditRiskReview).getValue();
    if (creditRiskReview === 100000002) {
        formContext.getControl(this.Attributes.creditReviewandAssessmentCompletedate).setVisible(true);
        formContext.getAttribute(this.Attributes.creditReviewandAssessmentCompletedate).setRequiredLevel("required");
        formContext.getControl(this.SubGrid.CreditRiskReview).setVisible(true);
    } else if (creditRiskReview === null || creditRiskReview === 100000000 || creditRiskReview === 100000001) {
        formContext.getAttribute(this.Attributes.creditReviewandAssessmentCompletedate).setRequiredLevel("none");
        formContext.getControl(this.Attributes.creditReviewandAssessmentCompletedate).setVisible(false);
        formContext.getControl(this.SubGrid.CreditRiskReview).setVisible(false);
    }
    },
    ShowAndHideItComplianceReview: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var itComplianceReview = formContext.getAttribute(this.Attributes.itComplianceReviewOutcome).getValue();
        if (itComplianceReview === 100000001) {
            formContext.getControl(this.Attributes.itComplianceReviewAssComplDate).setVisible(true);
            formContext.getControl(this.SubGrid.ITComplianceReview).setVisible(false);
        }
        if (itComplianceReview === 100000002) {
            formContext.getControl(this.Attributes.itComplianceReviewAssComplDate).setVisible(true);
            formContext.getControl(this.SubGrid.ITComplianceReview).setVisible(true);
        } else if (itComplianceReview === null || itComplianceReview === 100000000) {
            formContext.getControl(this.Attributes.itComplianceReviewAssComplDate).setVisible(false);
            formContext.getControl(this.SubGrid.ITComplianceReview).setVisible(false);
        }
    },
    ShowAndHideRegulatoryComplianceReview: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var regulatoryComplianceReview = formContext.getAttribute(this.Attributes.regComplianceReview).getValue();
        if (regulatoryComplianceReview === 100000001) {
            formContext.getControl(this.Attributes.regComplianceReviewAssComplDate).setVisible(true);
            formContext.getControl(this.SubGrid.RegulatoryComplianceReview).setVisible(false);
        }
        if (regulatoryComplianceReview === 100000002) {
            formContext.getControl(this.Attributes.regComplianceReviewAssComplDate).setVisible(true);
            formContext.getControl(this.SubGrid.RegulatoryComplianceReview).setVisible(true);
        } else if (regulatoryComplianceReview === null || regulatoryComplianceReview === 100000000) {
            formContext.getControl(this.Attributes.regComplianceReviewAssComplDate).setVisible(false);
            formContext.getControl(this.SubGrid.RegulatoryComplianceReview).setVisible(false);
        }
    },
    SHowAndHideWireOperationReview: function (executionContext) {
    "use strict";
    var formContext = executionContext.getFormContext();
    var wireOpsReview = formContext.getAttribute(this.Attributes.wireOperationReview).getValue();
    if (wireOpsReview === 100000002) {
        formContext.getControl(this.Attributes.wireOpsReviewandAssesmentdate).setVisible(true);
        formContext.getControl(this.SubGrid.wireproductsReview).setVisible(true);
    } else {
        formContext.getControl(this.Attributes.wireOpsReviewandAssesmentdate).setVisible(false);
        formContext.getControl(this.SubGrid.wireproductsReview).setVisible(false);
    }
	},
    ShowAndHideBsaAmlReview: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var bsaAmlReview = formContext.getAttribute(this.Attributes.BSAAMLReviewOutcome).getValue();
        if (bsaAmlReview === 100000002) {
            formContext.getControl(this.Attributes.BSAAMLReviewAssmentDate).setVisible(true);
            formContext.getControl(this.SubGrid.BSAAMLReviews).setVisible(true);
        } else {
            formContext.getControl(this.Attributes.BSAAMLReviewAssmentDate).setVisible(false);
            formContext.getControl(this.SubGrid.BSAAMLReviews).setVisible(false);
        }
    },
    ShowAndHideCardPaymentOperationsReview: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var cardPaymentOperationsReview = formContext.getAttribute(this.Attributes.CardPaymentOperationsReviewOutcome).getValue();
        if (cardPaymentOperationsReview === 100000002) {
            formContext.getControl(this.Attributes.CardPaymentOperationsReviewAssmentDate).setVisible(true);
            formContext.getControl(this.SubGrid.CardPaymentOperationsView).setVisible(true);
        } else {formContext.getControl(this.Attributes.CardPaymentOperationsReviewAssmentDate).setVisible(false);
            formContext.getControl(this.SubGrid.CardPaymentOperationsView).setVisible(false);
        }
    },
    ShowAndHideDDReview: function (executionContext) {
    "use strict";
        var formContext = executionContext.getFormContext();
        var ddReview = formContext.getAttribute(this.Attributes.DDReviewCommittee).getValue();
        if (ddReview === 100000001) {
            formContext.getControl(this.Attributes.DateOfCommitteereview).setVisible(true);
            formContext.getControl(this.Attributes.TargetGoLiveDate).setVisible(true);
            formContext.getAttribute(this.Attributes.DateOfCommitteereview).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.TargetGoLiveDate).setRequiredLevel("required");
            formContext.getControl(this.SubGrid.DDReview).setVisible(true);
        } else {
            formContext.getControl(this.Attributes.DateOfCommitteereview).setVisible(false);
            formContext.getControl(this.Attributes.TargetGoLiveDate).setVisible(false);
            formContext.getAttribute(this.Attributes.DateOfCommitteereview).setRequiredLevel("none");
            formContext.getAttribute(this.Attributes.TargetGoLiveDate).setRequiredLevel("none");
            formContext.getControl(this.SubGrid.DDReview).setVisible(false);
        }
    },
    ShowAndHidertpOperationReview: function (executionContext) {
    "use strict";
    var formContext = executionContext.getFormContext();
    var wireOpsReview = formContext.getAttribute(this.Attributes.rtpOperationReview).getValue();
    if (wireOpsReview === 100000002) {
        formContext.getControl(this.Attributes.rtpOperationsReviewandAssessmentCompletedate).setVisible(true);
        formContext.getControl(this.SubGrid.rtpOperationsReview).setVisible(true);
    } else {
        formContext.getControl(this.Attributes.rtpOperationsReviewandAssessmentCompletedate).setVisible(false);
        formContext.getControl(this.SubGrid.rtpOperationsReview).setVisible(false);
    }
	},
    showAndHideWalkthroughApprovalStatus : async function(executionContext){
        var formContext = executionContext.getFormContext();
        var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
        var flag = false;
        //check the communication record of Type walktrought application type crearted or not
        await Xrm.WebApi.retrieveRecord("crb_onboarding", onboardingId, "?$select=crb_onboardingid,crb_name&$expand=crb_onboarding_crb_communications($select=crb_typeofwalkthrough)").then(
            function success(result) {
                // Columns
                var crb_onboardingid = result["crb_onboardingid"]; // Guid
                var crb_name = result["crb_name"]; // Text
                // One To Many Relationships
                for (var j = 0; j < result.crb_onboarding_crb_communications.length; j++) {
                    var crb_typeofwalkthrough = result.crb_onboarding_crb_communications[j]["crb_typeofwalkthrough"]; // Choice
                    var crb_typeofwalkthroughValue = result.crb_onboarding_crb_communications[j]["crb_typeofwalkthrough@OData.Community.Display.V1.FormattedValue"];
                    if(crb_typeofwalkthrough === 100000001)//Application Walk Through
                    {
                        flag = true;
                    }
                }
            },
            function(error) {
                
            }
        );
        if(flag){
            formContext.getControl(this.Attributes.applicationwalktroughstatus).setVisible(true);
        }
        
    },    
//	OnchangeofAMLWalkthroughFollowupneeded:function (executionContext) {
//		"use strict";
//		var formContext = executionContext.getFormContext();
//		var AMLnWalkthrough = formContext.getAttribute(this.Attributes.AMLWalkthrough).getValue();
//		if(AMLnWalkthrough !==null && AMLnWalkthrough === true ){
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(1);
//		}
//		else{
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(null);
//		}
//	},
//	OnchangeofApplicationWalkthroughFollowupneeded:function (executionContext) {
//		"use strict";
//		var formContext = executionContext.getFormContext();
//		var ApplicationWalkthrough = formContext.getAttribute(this.Attributes.ApplicationWalkthrough).getValue();
//		if(ApplicationWalkthrough !==null && ApplicationWalkthrough === true ){
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(2);
//		}
//		else{
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(null);
//		}
//	},
//	OnchangeofCIPWalkthroughFollowupneeded:function (executionContext) {
//		"use strict";
//		var formContext = executionContext.getFormContext();
//		var CIPWalkthrough = formContext.getAttribute(this.Attributes.CIPWalkthrough).getValue();
//		if(CIPWalkthrough !==null && CIPWalkthrough === true ){
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(4);
//		}
//		else{
//			formContext.getAttribute(this.Attributes.Typeofwalkthrough).setValue(null);
//		}
//	},
    
    showBasedOnObjectionOnWebsite: function (executionContext) {
		var formContext = executionContext.getFormContext();
		var objectionOnWebsite = formContext.getAttribute(this.Attributes.objectionOnWebsite).getValue();
		if (objectionOnWebsite) {
			formContext.getControl(this.Attributes.reasonForObjection).setVisible(true);
		}
		else {
			formContext.getControl(this.Attributes.reasonForObjection).setVisible(false);
		}
	},
    showHideBasedOnAreWeReceivingReportsFromThePartner: function (executionContext) {
		var formContext = executionContext.getFormContext();
		var areWeReceivingReportsFromThePartner = formContext.getAttribute(this.Attributes.arewereceivingreportsfromthepartner).getValue();
		if (areWeReceivingReportsFromThePartner) {
			formContext.getControl(this.Attributes.sharepointlinkreportingandservicingtape).setVisible(true);
		}
		else {
			formContext.getControl(this.Attributes.sharepointlinkreportingandservicingtape).setVisible(false);
		}
	},
    setfdstatusvalue: function (executionContext) {
	var formContext = executionContext.getFormContext();
	var followupneeded = formContext.getAttribute(this.Attributes.isafollowupneeded).getValue();
	var arixrule = formContext.getAttribute(this.Attributes.arixrulesapproved).getValue();
	var fdsummary = formContext.getAttribute(this.Attributes.summary).getValue();
	if (followupneeded != null || arixrule != null || fdsummary != null) {
		formContext.getAttribute(this.Attributes.frstatus).setValue(2);
	}
    },
    setgddstatusvalue: function (executionContext) {
	var formContext = executionContext.getFormContext();
	var GDDengagementid = formContext.getAttribute(this.Attributes.engagementid).getValue();
	
	if (GDDengagementid != null) {
		formContext.getAttribute(this.Attributes.gddstatus).setValue(2);
	}
    if (GDDengagementid == null) {
		formContext.getAttribute(this.Attributes.gddstatus).setValue(1);
	}
    
    },
     setImpGRStatusValue: function (executionContext) {
     var formContext = executionContext.getFormContext();
     var ticketIDNumber = formContext.getAttribute(this.Attributes.TicketIDNumber).getValue();
     if (ticketIDNumber != null) {
         formContext.getAttribute(this.Attributes.ImpGRStatus).setValue(2);
     }

    },
    setBSAAMLReviewStatusValue: function (executionContext) {
     var formContext = executionContext.getFormContext();
     var CRRMscreeningdate = formContext.getAttribute(this.Attributes.crrmscreeningdate1).getValue();
     if (CRRMscreeningdate != null) {
         formContext.getAttribute(this.Attributes.BSAAMLReviewStatus).setValue(2);
     }
     if (CRRMscreeningdate == null) {
         formContext.getAttribute(this.Attributes.BSAAMLReviewStatus).setValue(1);
     }

    },
    setTransactionMonitoringReviewStatusValue: function (executionContext) {
     var formContext = executionContext.getFormContext();
     var sendtomrm = formContext.getAttribute(this.Attributes.SendToMRM).getValue();
     if (sendtomrm != null) {
         formContext.getAttribute(this.Attributes.TransactionMonitoringReviewStatus).setValue(2);
     }
     if (sendtomrm == null) {
         formContext.getAttribute(this.Attributes.TransactionMonitoringReviewStatus).setValue(1);
     }

    },
    setOpportunityStatusValue: function (executionContext) {
	var formContext = executionContext.getFormContext();
	var impGRStatus = formContext.getAttribute(this.Attributes.ImpGRStatus).getValue();
	if (impGRStatus === 2) {
		formContext.getAttribute(this.Attributes.OnboardingStatus).setValue(2);
	}
},

    makeRegulatoryComplianceReviewDDReadOnly:async function (executionContext) {
		var formContext = executionContext.getFormContext();
		var isRegulatoryCompilanceSectionVisible = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).getVisible();
		if (isRegulatoryCompilanceSectionVisible) {
			var userId = Xrm.Utility.getGlobalContext().userSettings.userId;
			var teamName = "Regulatory Compliance";
			var isUserPartOfRegulatoryComplianceTeam =await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamName);
			if (isUserPartOfRegulatoryComplianceTeam) {
				formContext.getControl(this.Attributes.commentsOnPartnerWebsite).setDisabled(false);
				formContext.getControl(this.Attributes.objectionOnWebsite).setDisabled(false);
				formContext.getControl(this.Attributes.reasonForObjection).setDisabled(false);
				formContext.getControl(this.Attributes.commentsOnBackgroundCheckGDD).setDisabled(false);
			}
			else {
				formContext.getControl(this.Attributes.commentsOnPartnerWebsite).setDisabled(true);
				formContext.getControl(this.Attributes.objectionOnWebsite).setDisabled(true);
				formContext.getControl(this.Attributes.reasonForObjection).setDisabled(true);
				formContext.getControl(this.Attributes.commentsOnBackgroundCheckGDD).setDisabled(true);
			}
		}
	},
    ShowAndHideScreeningTab: async function(executionContext){
        var formContext = executionContext.getFormContext();
        var currentUser = Xrm.Utility.getGlobalContext().userSettings;
        var userId = currentUser.userId.replace("{", "").replace("}", "");
        var flag = false;
        var teams = [];
        teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
        teams.forEach(function(team){
            if(team.name === "BSA/AML" || team.name ==="General Due Diligence"){
                flag = true;
                
            }
            
        })
        if(flag){
            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Screening).setVisible(true);
        }   
        else{
            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Screening).setVisible(false);
        }

    },
    showandhideCOS: function (executionContext) {
	var formContext = executionContext.getFormContext();
	var crossriver = formContext.getAttribute(this.Attributes.crossriversystem).getValue();

	if (crossriver == 100000000 || crossriver == 100000002) {
		formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.COSsupportsection).setVisible(true);
		formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.COSaccountsetup).setVisible(true);
	}
	else {
		formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.COSsupportsection).setVisible(false);
		formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.COSaccountsetup).setVisible(false);
	}

    },
//   HideAndShowGLDepositAccountRequisition: function (executionContext) {
//		var formContext = executionContext.getFormContext();
//		var glDepositAccountRequisitionType = formContext.getAttribute(this.Attributes.gLDepositAccountRequisitionType).getValue();
//		if (glDepositAccountRequisitionType !== null && glDepositAccountRequisitionType === 100000000) {
//			formContext.getControl(this.Attributes.supportTicketURLGl).setVisible(true);
//			formContext.getControl(this.Attributes.ticketIDNumberGl).setVisible(true);
//			formContext.getControl(this.Attributes.dateOfTicketCreationGl).setVisible(true);
//			formContext.getControl(this.Attributes.statusGl).setVisible(true);
//			formContext.getControl(this.Attributes.dateOfTicketCompletionGl).setVisible(true);
//			formContext.getControl(this.Attributes.durationGl).setVisible(true);
//			formContext.getControl(this.Attributes.notesGl).setVisible(true);
//			formContext.getControl(this.Attributes.rollupGLAccount).setVisible(true);
//			formContext.getControl(this.Attributes.supportTicketURLProduct).setVisible(false);
//			formContext.getControl(this.Attributes.ticketIDNumberProduct).setVisible(false);
//			formContext.getControl(this.Attributes.dateOfTicketCreationProduct).setVisible(false);
//			formContext.getControl(this.Attributes.statusProduct).setVisible(false);
//			formContext.getControl(this.Attributes.dateOfTicketCompletionProduct).setVisible(false);
//			formContext.getControl(this.Attributes.durationProduct).setVisible(false);
//			formContext.getControl(this.Attributes.notesProduct).setVisible(false);
//            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.ImplementationTeam).sections.get(CRB.CRM.PJ.Onboarding.Section.GLDepositAccountRequisition).setLabel("GL Deposit Account Requisition");
//		}
//		else if (glDepositAccountRequisitionType !== null && glDepositAccountRequisitionType === 100000001) {
//			formContext.getControl(this.Attributes.supportTicketURLGl).setVisible(false);
//			formContext.getControl(this.Attributes.ticketIDNumberGl).setVisible(false);
//			formContext.getControl(this.Attributes.dateOfTicketCreationGl).setVisible(false);
//			formContext.getControl(this.Attributes.statusGl).setVisible(false);
//			formContext.getControl(this.Attributes.dateOfTicketCompletionGl).setVisible(false);
//			formContext.getControl(this.Attributes.durationGl).setVisible(false);
//			formContext.getControl(this.Attributes.notesGl).setVisible(false);
//			formContext.getControl(this.Attributes.rollupGLAccount).setVisible(false);
//			formContext.getControl(this.Attributes.supportTicketURLProduct).setVisible(true);
//			formContext.getControl(this.Attributes.ticketIDNumberProduct).setVisible(true);
//			formContext.getControl(this.Attributes.dateOfTicketCreationProduct).setVisible(true);
//			formContext.getControl(this.Attributes.statusProduct).setVisible(true);
//			formContext.getControl(this.Attributes.dateOfTicketCompletionProduct).setVisible(true);
//			formContext.getControl(this.Attributes.durationProduct).setVisible(true);
//			formContext.getControl(this.Attributes.notesProduct).setVisible(true);
//            formContext.ui.tabs.get(this.TabName.ImplementationTeam).sections.get(this.Section.GLDepositAccountRequisition).setLabel("Product Setup");
//		}
//		else (
//			formContext.ui.tabs.get(this.TabName.ImplementationTeam).sections.get(this.Section.GLDepositAccountRequisition).setVisible(false)
//		)
//	}, 
	showPleaseSpecifyICM: function (executionContext) {
		var formContext = executionContext.getFormContext();
		var InterestedICM = formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.InterestedICM).getValue();
		if (InterestedICM === 100000004) {
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.pleaseSpecifyICM).setVisible(true);
		}
		else {
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.pleaseSpecifyICM).setVisible(false);
		}
	},
	showPleaseSpecifyAM: function (executionContext) {
		var formContext = executionContext.getFormContext();
		var AccuralMethod = formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.accuralMethod).getValue();
		if (AccuralMethod === 100000003) {
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.pleaseSpecifyAm).setVisible(true);
		}
		else {
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.pleaseSpecifyAm).setVisible(false);
		}
	},
    CallTemplatePowerAutomate: function (primaryControl) {
    var formContext = primaryControl;
    debugger;
    //formContext.getAttribute(this.Attributes.generateTemplate1).setValue(1);
    formContext.getAttribute(this.Attributes.generateTemplate1).setValue(true);
    Xrm.Utility.showProgressIndicator("Generate Payment DD Memo Report in progress...");
    setTimeout(function () {
    Xrm.Utility.closeProgressIndicator();
    Xrm.Navigation.openAlertDialog("Generate Payment DD Memo Report Gerenated Successfully");
    formContext.data.save();
    }, 3000);
    },

    lockandunlockofsandboxfields: function (executionContext) {
	var formContext = executionContext.getFormContext();

	var notapplicable = formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.crbnotapplicable).getValue();

	if (notapplicable == true) {
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofproductionaccountapproval).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofsandboxaccountapprovalsandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofticketcompletionsandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofticketcreationsandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdurationsandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbnotessandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbstatussandbox).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbsupportticketlink).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbtestplanandresultsservicenowlink).setDisabled(true);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbticketidnumbersandbox).setDisabled(true);
	}
	else {
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofproductionaccountapproval).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofsandboxaccountapprovalsandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofticketcompletionsandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdateofticketcreationsandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbdurationsandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbnotessandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbstatussandbox).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbsupportticketlink).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbtestplanandresultsservicenowlink).setDisabled(false);
		formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.crbticketidnumbersandbox).setDisabled(false);
	}
    },
    hideAndShowPaymentDDMemoReport: async function () {
        var userName = Xrm.Utility.getGlobalContext().userSettings.userName;
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        let show = false;
        show = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "General Due Diligence,BSA/AML");
        return show;
    },
    	MakeFieldsNone: function (executionContext) {
		var formContext = executionContext.getFormContext();
            var Keys = ["crb_engagementid", "crb_crrmscore11", "crb_crrmscreeningdate", "crb_crrmscreeningdate1", "statecode", "crb_ticketidnumber", "crb_statuscos", "crb_impgrstatus", "crb_businessreviewoutcome",
                "crb_name1", "crb_attachsupplementaldocumentation", "crb_businessreviewsummaryandassessment", "crb_businessreviewassessmentcompletedate", "crb_wereanyconcernsidentifiedduringthereview",
                "crb_identifiedconcernsandmitigations", "crb_describetheregulatorycompliancereview", "crb_employeename", "crb_supplementaldiscussionregardingtheamlprogram", "crb_date", "crb_whatistheoutcomeofthelegalreview",
                "crb_legalreviewsummaryandassessment", "crb_legalreviewandassessmentcompletedate", "crb_outcomeofthecardpaymentopsreview", "crb_cardpaymentopsreviewsummaryandassessment", "crb_whatistheoutcomeofthecreditreview",
                "crb_whatadditionaldocumentationisrequired", "crb_creditofficerreviewsummaryandassessment", "crb_describe1", "crb_doescreditofficerrequireadditionalinfo", "crb_targetgolivedate", "crb_dddescribe", "crb_arethereanyconcerns",
                "crb_dateofcommitteereview", "crb_duediligenceriskreviewandassessment", "crb_hasentitybeenreviewedbyappropriatecommitt", "crb_rationale", "crb_ddreviewdescribe", "crb_summaryofcustomersprofileandassessment",
                "crb_wasentityapprovedordeniedatcommittee","crb_businessreviewoutcome","crb_summary","crb_finaldecision", "crb_partnerrisk", "crb_geographicrisk", "crb_productrisk", "crb_accounttype", "crb_redflags", "crb_scenariosselected", "crb_summary", "crb_subledgers", "crb_transactiontype", "crb_approvedby", "crb_asofdate","crb_istheentitysdesignationclassifiedcorrectly","crb_arethereturnratesauditreportssatisfactory","crb_reviewedrecordofauthorizationforseccodes","crb_function","crb_cardpymtsopsreviewassessmentcompletedate","crb_crb_describe1"
            ];
		for (i = 0; i < Keys.length; i++) {
			var attribute = formContext.getAttribute(Keys[i]);
			if (attribute !== null) {
				attribute.setRequiredLevel("none");
			}
		}
	},
    FieldsMandatoryOnTabChange: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var TabDueDiligence = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence);
        var TabImplementaion = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.ImplementationTeam);
        var TabPayment = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments);
        TabDueDiligence.addTabStateChange(CRB.CRM.PJ.Onboarding.DueDiligence);
        TabImplementaion.addTabStateChange(CRB.CRM.PJ.Onboarding.Implementation);
        TabPayment.addTabStateChange(CRB.CRM.PJ.Onboarding.Payments);
    },
    DueDiligence: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var Keys = ["crb_engagementid", "crb_crrmscore11", "crb_crrmscreeningdate", "crb_crrmscreeningdate1", "statecode"];
        for (i = 0; i < Keys.length; i++) {
            var attribute = formContext.getAttribute(Keys[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("required");
            }
        }
        var Keys1 = ["crb_ticketidnumber", "crb_statuscos", "crb_impgrstatus", "crb_businessreviewoutcome", "crb_name1", "crb_attachsupplementaldocumentation", "crb_businessreviewsummaryandassessment", "crb_businessreviewassessmentcompletedate", "crb_wereanyconcernsidentifiedduringthereview",
            "crb_identifiedconcernsandmitigations", "crb_describetheregulatorycompliancereview", "crb_employeename", "crb_supplementaldiscussionregardingtheamlprogram", "crb_date", "crb_whatistheoutcomeofthelegalreview",
            "crb_legalreviewsummaryandassessment", "crb_legalreviewandassessmentcompletedate", "crb_outcomeofthecardpaymentopsreview", "crb_cardpaymentopsreviewsummaryandassessment", "crb_whatistheoutcomeofthecreditreview",
            "crb_whatadditionaldocumentationisrequired", "crb_creditofficerreviewsummaryandassessment", "crb_describe1", "crb_doescreditofficerrequireadditionalinfo", "crb_targetgolivedate", "crb_dddescribe", "crb_arethereanyconcerns",
            "crb_dateofcommitteereview", "crb_duediligenceriskreviewandassessment", "crb_hasentitybeenreviewedbyappropriatecommitt", "crb_rationale", "crb_ddreviewdescribe", "crb_summaryofcustomersprofileandassessment",
            "crb_wasentityapprovedordeniedatcommittee", "crb_finaldecision", "crb_partnerrisk", "crb_geographicrisk", "crb_productrisk", "crb_accounttype", "crb_redflags", "crb_scenariosselected", "crb_summary", "crb_subledgers", "crb_transactiontype", "crb_approvedby",
            "crb_asofdate", "crb_istheentitysdesignationclassifiedcorrectly", "crb_arethereturnratesauditreportssatisfactory", "crb_reviewedrecordofauthorizationforseccodes", "crb_function", "crb_cardpymtsopsreviewassessmentcompletedate", "crb_crb_describe1",
            "crb_wireoperationsreviewsummaryandassessment", "crb_whatistheoutcomeofthewireoperation","crb_cosaccountopeningdocumentsubmitstatus"
        ];
        for (i = 0; i < Keys1.length; i++) {
            var attribute = formContext.getAttribute(Keys1[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("none");
            }
        }
    },
    Implementation: function (executionContext) {
        //alert("Tab State Changed - Implementation Team");
        var formContext = executionContext.getFormContext();
        var Keys = ["crb_ticketidnumber", "crb_statuscos", "crb_impgrstatus","crb_cosaccountopeningdocumentsubmitstatus"];
        for (i = 0; i < Keys.length; i++) {
            var attribute = formContext.getAttribute(Keys[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("required");
            }
        }
        var Keys1 = ["crb_engagementid", "crb_crrmscore11", "crb_crrmscreeningdate", "crb_crrmscreeningdate1", "statecode", "crb_businessreviewoutcome", "crb_name1", "crb_attachsupplementaldocumentation", "crb_businessreviewsummaryandassessment", "crb_businessreviewassessmentcompletedate", "crb_wereanyconcernsidentifiedduringthereview",
            "crb_identifiedconcernsandmitigations", "crb_describetheregulatorycompliancereview", "crb_employeename", "crb_supplementaldiscussionregardingtheamlprogram", "crb_date", "crb_whatistheoutcomeofthelegalreview",
            "crb_legalreviewsummaryandassessment", "crb_legalreviewandassessmentcompletedate", "crb_outcomeofthecardpaymentopsreview", "crb_cardpaymentopsreviewsummaryandassessment", "crb_whatistheoutcomeofthecreditreview",
            "crb_whatadditionaldocumentationisrequired", "crb_creditofficerreviewsummaryandassessment", "crb_describe1", "crb_doescreditofficerrequireadditionalinfo", "crb_targetgolivedate", "crb_dddescribe", "crb_arethereanyconcerns",
            "crb_dateofcommitteereview", "crb_duediligenceriskreviewandassessment", "crb_hasentitybeenreviewedbyappropriatecommitt", "crb_rationale", "crb_ddreviewdescribe", "crb_summaryofcustomersprofileandassessment",
            "crb_wasentityapprovedordeniedatcommittee", "crb_finaldecision", "crb_partnerrisk", "crb_geographicrisk", "crb_productrisk", "crb_accounttype", "crb_redflags", "crb_scenariosselected", "crb_summary", "crb_subledgers", "crb_transactiontype", "crb_approvedby",
            "crb_asofdate", "crb_istheentitysdesignationclassifiedcorrectly", "crb_arethereturnratesauditreportssatisfactory", "crb_reviewedrecordofauthorizationforseccodes", "crb_function", "crb_cardpymtsopsreviewassessmentcompletedate", "crb_crb_describe1",
            "crb_wireoperationsreviewsummaryandassessment", "crb_whatistheoutcomeofthewireoperation,"
        ];
        for (i = 0; i < Keys1.length; i++) {
            var attribute = formContext.getAttribute(Keys1[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("none");
            }
        }
    },
    enableanddisablenewbinorsharedbinfieldincardissuing: async function(executionContext){
	var formContext = executionContext.getFormContext();
	var currentUser = Xrm.Utility.getGlobalContext().userSettings;
	var userId = currentUser.userId.replace("{", "").replace("}", "");
    var flag = false;
    var teams = [];
    teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
    teams.forEach(function(team){
        if(team.name === "Implementation Team"){
            flag = true;
        }           
    })
	if(flag){
        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.newbinpartnerorsharedbinpartner).setDisabled(false);
        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.CreditNetwork).setDisabled(false);
        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setDisabled(false);
    }   
    else{
       formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.newbinpartnerorsharedbinpartner).setDisabled(true);
       formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.CreditNetwork).setDisabled(true);
        formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setDisabled(true);
    }

    },
    showandhidecardissuingsection: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
        var currentUser = Xrm.Utility.getGlobalContext().userSettings;
        var userId = currentUser.userId.replace("{", "").replace("}", "");
        var flag = false;
        var flag1 = false;
        var teams = [];
        teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
        teams.forEach(function(team){
        if(team.name === "Implementation Team" || team.name ==="Operation Team" || team.name ==="Business Development" || team.name ==="Relationship Management" || team.name ==="General Due Diligence"){
            flag = true;    
        }
        
    })
    
	await Xrm.WebApi.retrieveMultipleRecords("crb_onboarding", "?$select=crb_onboardingid,_crb_opportunity_value&$expand=crb_Opportunity($select=crb_listofproductswithintheopportunity)&$filter=crb_onboardingid eq '" + onboardingId + "'").then(
		function success(results) {
			console.log(results);
			for (var i = 0; i < results.entities.length; i++) {
				var result = results.entities[i];
				
				// Many To One Relationships
				if (result.hasOwnProperty("crb_Opportunity") && result["crb_Opportunity"] !== null) {
					var listofproduct = result["crb_Opportunity"]["crb_listofproductswithintheopportunity"]; // Multiline Text
				}
				if (listofproduct.includes("Credit Card") || listofproduct.includes("Charge Card")) {
					flag1 = true;
				}
				
			}
			if(flag == true && flag1 == true){
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.CardIssuing).setVisible(true);
			}
			else{
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.CardIssuing).setVisible(false);
			}
		},
		function (error) {
			console.log(error.message);
		}
	);

    },
    
    Payments: function (executionContext) {
        var formContext = executionContext.getFormContext();
        //alert("Tab State Changed - Payments");
        var Keys = ["crb_businessreviewoutcome", "crb_name1", "crb_attachsupplementaldocumentation", "crb_businessreviewsummaryandassessment", "crb_businessreviewassessmentcompletedate", "crb_wereanyconcernsidentifiedduringthereview",
            "crb_identifiedconcernsandmitigations", "crb_describetheregulatorycompliancereview", "crb_employeename", "crb_supplementaldiscussionregardingtheamlprogram", "crb_date", "crb_whatistheoutcomeofthelegalreview",
            "crb_legalreviewsummaryandassessment", "crb_legalreviewandassessmentcompletedate", "crb_outcomeofthecardpaymentopsreview", "crb_cardpaymentopsreviewsummaryandassessment", "crb_whatistheoutcomeofthecreditreview",
            "crb_whatadditionaldocumentationisrequired", "crb_creditofficerreviewsummaryandassessment", "crb_describe1", "crb_doescreditofficerrequireadditionalinfo", "crb_targetgolivedate", "crb_dddescribe", "crb_arethereanyconcerns",
            "crb_dateofcommitteereview", "crb_duediligenceriskreviewandassessment", "crb_hasentitybeenreviewedbyappropriatecommitt", "crb_rationale", "crb_ddreviewdescribe", "crb_summaryofcustomersprofileandassessment",
            "crb_wasentityapprovedordeniedatcommittee", "crb_finaldecision", "crb_partnerrisk", "crb_geographicrisk", "crb_productrisk", "crb_accounttype", "crb_redflags", "crb_scenariosselected", "crb_summary", "crb_subledgers", "crb_transactiontype",
            "crb_approvedby", "crb_asofdate", "crb_istheentitysdesignationclassifiedcorrectly", "crb_arethereturnratesauditreportssatisfactory", "crb_reviewedrecordofauthorizationforseccodes", "crb_function", "crb_cardpymtsopsreviewassessmentcompletedate", "crb_crb_describe1",
            "crb_wireoperationsreviewsummaryandassessment", "crb_whatistheoutcomeofthewireoperation","crb_whatistheoutcomeoftheachoperationsreview","crb_achoperationsreviewsummaryandassessment"
        ];
        for (i = 0; i < Keys.length; i++) {
            var attribute = formContext.getAttribute(Keys[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("required");
            }
        }
        var Keys1 = ["crb_engagementid", "crb_crrmscore11", "crb_crrmscreeningdate", "crb_crrmscreeningdate1", "statecode", "crb_ticketidnumber", "crb_statuscos", "crb_impgrstatus","crb_cosaccountopeningdocumentsubmitstatus"
        ];
        for (i = 0; i < Keys1.length; i++) {
            var attribute = formContext.getAttribute(Keys1[i]);
            if (attribute !== null) {
                attribute.setRequiredLevel("none");
            }
        }

    },
	FairLendingReviewCompleted: function (executionContext) {
	"use strict";
	var formContext = executionContext.getFormContext();
	var optionSetValue1 = formContext.getAttribute(this.Attributes.FairLendingDueDiligence).getValue();
	var optionSetValue2 = formContext.getAttribute(this.Attributes.FairLendingDataManagement).getValue();
	if (optionSetValue1 === true && optionSetValue2 === true) {
        formContext.getAttribute(this.Attributes.FairLendingReviewStatus).setValue(3);
	}
    else{
        formContext.getAttribute(this.Attributes.FairLendingReviewStatus).setValue(2);
        }
	},
    
     editFieldsAfterTaskApproved: async function (executionContext) 
    {
        var formContext = executionContext.getFormContext();
		var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
		var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
        var isUserBSAAMLAndTMMemeber = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, "BSA/AML,Transaction Monitoring");

		Xrm.WebApi.retrieveMultipleRecords("task", "?$select=crb_approvalstatus,crb_tasksubtype,crb_tasktypecode&$filter=_regardingobjectid_value eq '" + onboardingId + "'").then(
			function success(results) {
				//console.log(results);
                if(results.entities.length === 0)
				{
					formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SendToMRM).setDisabled(true);
					formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.MRMApproval).setDisabled(true);
					formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASApproval).setDisabled(true);
					formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASAML).setDisabled(true);
				}
                
				for (var i = 0; i < results.entities.length; i++) {
					var result = results.entities[i];
					// Columns
					var activityid = result["activityid"]; // Guid
					var approvalstatus = result["crb_approvalstatus"]; // Choice
					var crb_approvalstatus_formatted = result["crb_approvalstatus@OData.Community.Display.V1.FormattedValue"];
					var tasksubtype = result["crb_tasksubtype"]; // Choice
					var crb_tasksubtype_formatted = result["crb_tasksubtype@OData.Community.Display.V1.FormattedValue"];
					var tasktypecode = result["crb_tasktypecode"]; // Choice
					var crb_tasktypecode_formatted = result["crb_tasktypecode@OData.Community.Display.V1.FormattedValue"];

					if(tasktypecode === 3 && tasksubtype === 15 && approvalstatus === 3)
					{
						//flag = true;
						//break;
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SendToMRM).setDisabled(false);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.MRMApproval).setDisabled(false);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASApproval).setDisabled(false);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASAML).setDisabled(false);
					}

					else
					{
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SendToMRM).setDisabled(true);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.MRMApproval).setDisabled(true);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASApproval).setDisabled(true);
						formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.SentToSASAML).setDisabled(true);
					}
				}
			},
			function(error) {
				//console.log(error.message);
			}
		);   
    },
    hideFieldsInImplementationQuickView: async function (executionContext) {
		var formContext = executionContext.getFormContext();
		var onboardingID = formContext.data.entity.getId().replace("{", "").replace("}", "");
		var LOBList = await CRB.CRM.PJ.Common.getLinkedProductsLOBByOnboardingId(executionContext, onboardingID);

		var QuickViewObject = formContext.ui.quickForms.get(this.QuickViewForms.Opportuntiy_Implementation_QuickView);
		if (QuickViewObject.isLoaded()) {
			var QuickViewElements = QuickViewObject.getControl();
			for (let i = 0; i < QuickViewElements.length; i++) {
				if (QuickViewElements[i].getName() === this.QuickViewElements.preonboardingapprovalconcurrencedate && !LOBList.includes(this.lineOfBusiness.BaaSCards) && !LOBList.includes(this.lineOfBusiness.Payments)) {
					QuickViewElements[i].setVisible(false);
					break;
				}
			}
		}

	},
   showAndHideDebitandCreditNetworks: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var controls = (formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.MerchantAcquiring)).controls.get();
        var opportunity = formContext.getAttribute(this.Attributes.opportunity).getValue();
        var optyid = opportunity[0].id;
        var product1 =[];
        var feature;
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
        
        var isUserImplementationTeam = teams.some(team => team.name === "Implementation Team");
        var eligibleteamtoView = false;
    
        if (!isUserImplementationTeam) {
            eligibleteamtoView = teams.some(team => team.name === "Operation Team" || team.name === "Business Development" || team.name === "Relationship Management" || team.name === "General Due Diligence");
        }
        if (teams.some(team => team.name === "Network Team")){
            var isUserNetworkTeam = true;
        }
        var flag1 = false;
        var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
        await Xrm.WebApi.retrieveMultipleRecords("crb_onboarding", "?$select=crb_onboardingid,_crb_opportunity_value&$expand=crb_Opportunity($select=crb_listofproductswithintheopportunity)&$filter=crb_onboardingid eq '" + onboardingId + "'").then(
		function success(results) {
			console.log(results);
			for (var i = 0; i < results.entities.length; i++) {
				var result = results.entities[i];
				// Many To One Relationships
				if (result.hasOwnProperty("crb_Opportunity") && result["crb_Opportunity"] !== null) {
					var listofproduct = result["crb_Opportunity"]["crb_listofproductswithintheopportunity"]; // Multiline Text
				}
				if (listofproduct.includes("Credit Card") || listofproduct.includes("Charge Card")) {
					flag1 = true;
				}
			}
    })
        await Xrm.WebApi.retrieveRecord("opportunity", optyid, "?$select=opportunityid&$expand=crb_Opportunity_Opportunity_crb_product($select=_crb_productname_value,_crb_features_value)").then(
            function success(result) {
                //var opportunityid = result["opportunityid"];
                for (var j = 0; j < result.crb_Opportunity_Opportunity_crb_product.length; j++) {
                    feature = result.crb_Opportunity_Opportunity_crb_product[j]["_crb_features_value@OData.Community.Display.V1.FormattedValue"];
                    product1 = result.crb_Opportunity_Opportunity_crb_product[j]["_crb_productname_value@OData.Community.Display.V1.FormattedValue"];
                    for (var i in controls) {
                        var control = controls[i];
                        if (isUserImplementationTeam){
                            if ((feature === CRB.CRM.PJ.Onboarding.otherGroups.features.DebitCard) && ((product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerSavingsAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialSavingsAccount))) {
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4MerchAcq).setVisible(true);
                                if (flag1 == true ) {
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setVisible(true);
                                }
                            }
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setVisible(true);
                            formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setRequiredLevel("required");
                            control.setDisabled(false);
                        }
                        else if (eligibleteamtoView){
                            if ((feature === CRB.CRM.PJ.Onboarding.otherGroups.features.DebitCard) && ((product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerSavingsAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialSavingsAccount))) {
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4MerchAcq).setVisible(true);
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setVisible(true);
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setDisabled(true);
                            }
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setVisible(true);
                            formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setRequiredLevel("none");
                            control.setDisabled(true);
                        }
                        else if (isUserNetworkTeam){
                            if ((feature === CRB.CRM.PJ.Onboarding.otherGroups.features.DebitCard) && ((product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerSavingsAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.ConsumerCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialCheckingAccount) || (product1 === CRB.CRM.PJ.Onboarding.productNames.CommercialSavingsAccount))) {
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4MerchAcq).setVisible(true);
                                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setVisible(false);
                                //formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setDisabled(true);
                            }
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setVisible(true);
                            formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setRequiredLevel("none");
                            control.setDisabled(true);
                        }
                        else{
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4MerchAcq).setVisible(false);
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.DebitNetwork4CardIssuing).setVisible(false);
                            formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setVisible(false);
                            formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditNetwork4MerchAcq).setRequiredLevel("none");
                            formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.MerchantAcquiring).setVisible(false);
                        }
                    } 
                }
            }
        );
    },
    /*
    showAndHideSectionsForMastercard: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
        if (creditNetwork) {
                const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues
            if ((selectedCreditNetworkValues.includes(100000001)) && isThisNewBinPartner === 100000000) {
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ICARequestForm).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NetSettlementInformation).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ServerProviderRegistration).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.DebitAuthorizationLetter).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.TransferFundsThreshold).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.BillingForm).setVisible(true);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.APW).setVisible(true);
                 formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ProvisioningofServices).setVisible(true);
                
            }
            else {
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ICARequestForm).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NetSettlementInformation).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ServerProviderRegistration).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.DebitAuthorizationLetter).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.TransferFundsThreshold).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.BillingForm).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.APW).setVisible(false);
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ProvisioningofServices).setVisible(false);
               
            }
        }   
    }, */
    
    /*
    showAndHideImplemenatationCardIssungMastercardSharedBinPartner: async function (executionContext) {
	var formContext = executionContext.getFormContext();
	var isThisSharedBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
	var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();

	if (creditNetwork) {
			const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues
		if ((selectedCreditNetworkValues.includes(100000001)) && isThisSharedBinPartner === 100000001) {
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ServerProviderRegistration).setVisible(true);
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ProvisioningofServices).setVisible(true);
			
		}
		else {
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ServerProviderRegistration).setVisible(false);
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.ProvisioningofServices).setVisible(false);
		   
		}
	}   
}, */

   showHide_Implemenatation_CardIssungSection_Mastercard: async function (executionContext) {
	var formContext = executionContext.getFormContext();
	var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();

	if(creditNetwork === null)
	{
		formContext.getControl(this.SubGrid.CardIssuingVISA).setVisible(false);
		formContext.getControl(this.SubGrid.CardIssuingMasterCard).setVisible(false);
		formContext.getControl(this.SubGrid.CardIssuingAmericanExpress).setVisible(false);
	
	}
	else {
		const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues

		if ((selectedCreditNetworkValues.includes(100000000))) {
			formContext.getControl(this.SubGrid.CardIssuingVISA).setVisible(true);		
		}
		else {
			formContext.getControl(this.SubGrid.CardIssuingVISA).setVisible(false); 
		}
        
		if ((selectedCreditNetworkValues.includes(100000001))) {
			formContext.getControl(this.SubGrid.CardIssuingMasterCard).setVisible(true);		
		}
		else {
			formContext.getControl(this.SubGrid.CardIssuingMasterCard).setVisible(false); 
		}

		if ((selectedCreditNetworkValues.includes(100000002))) {
			formContext.getControl(this.SubGrid.CardIssuingAmericanExpress).setVisible(true);		
		}
		else {
			formContext.getControl(this.SubGrid.CardIssuingAmericanExpress).setVisible(false); 
		}
	}   
},
    
    
    showAndHideSectionsForAmericanExpress: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
        if (creditNetwork) {
                const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues
            if ((selectedCreditNetworkValues.includes(100000002)) && isThisNewBinPartner === 100000000 || isThisNewBinPartner === 100000001) {
                 formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.AmericanExpressTreasury).setVisible(true);
                
            }
            else {
                  formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.AmericanExpressTreasury).setVisible(false);
              
            }
        }   
    },

    showAndHideSectionsForVisaBinPartner: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
        if (creditNetwork !== null && creditNetwork !== undefined && isThisNewBinPartner !== null && isThisNewBinPartner !== undefined) {
                const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues
            if ((selectedCreditNetworkValues.includes(100000000)) && isThisNewBinPartner === 100000000) {
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerVisa).setVisible(true);
                //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.VROLRIDRequest).setVisible(true);
                
            }
            else {
                formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerVisa).setVisible(false);
                //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.VROLRIDRequest).setVisible(false);             
               
            }
			if ((selectedCreditNetworkValues.includes(100000001)) && isThisNewBinPartner === 100000000){
			    formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("NewBINpartnerMastercard").setVisible(true);
                console.log(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerMastercard);
			}
			else {
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("NewBINpartnerMastercard").setVisible(false);
			}
			if ((selectedCreditNetworkValues.includes(100000002)) && isThisNewBinPartner === 100000000){
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerAmericanExpress).setVisible(true);
                console.log("Hello");
			}
			else {
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerAmericanExpress).setVisible(false);
			}
			
			if ((selectedCreditNetworkValues.includes(100000000)) && isThisNewBinPartner === 100000001){
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerVisa").setVisible(true);
                
			
             
			}
			else{
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerVisa").setVisible(false);
           
			

			}
			
			if ((selectedCreditNetworkValues.includes(100000001)) && isThisNewBinPartner === 100000001){
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerMastercard").setVisible(true);
			}
			else{
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerMastercard").setVisible(false);
			}
			
			if ((selectedCreditNetworkValues.includes(100000002)) && isThisNewBinPartner === 100000001){
				formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.SharedBinPartnerAmericanExpress).setVisible(true);
			}
			else{
			formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.SharedBinPartnerAmericanExpress).setVisible(false);
			}
			
			
			
			
        }
        else {
              formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerVisa).setVisible(false);
              formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("NewBINpartnerMastercard").setVisible(false);
              formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.NewBinPartnerAmericanExpress).setVisible(false);
			  formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerVisa").setVisible(false);
			  formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get("SharedBINPartnerMastercard").setVisible(false);
		      formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.SharedBinPartnerAmericanExpress).setVisible(false);
			  //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.VROLRIDRequest).setVisible(false);
             
			

		}   
    },
     showAndHideSectionsForSharedVisa: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
        if (creditNetwork ) {
        
                const selectedCreditNetworkValues = creditNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues
                if ((selectedCreditNetworkValues.includes(100000000)) && isThisNewBinPartner === 100000001){
                   formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.VROLEnrollmentFormDisputes).setVisible(true);
                   formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.PPRMandTPARegistrations).setVisible(true);
                   
                     }
                     else{
                          formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.VROLEnrollmentFormDisputes).setVisible(false);
			              formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.PPRMandTPARegistrations).setVisible(false);
                     }

                 }
         },

       showAndHidefieldsForIcaBinSponsor: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var creditNetwork4MerchAcq = formContext.getAttribute(this.Attributes.creditNetwork4MerchAcq).getValue();
        if (creditNetwork4MerchAcq !== null && creditNetwork4MerchAcq !== undefined) {
                const selectedCreditNetworkValues = creditNetwork4MerchAcq; // Assign creditNetwork directly to selectedCreditNetworkValues
            if ((selectedCreditNetworkValues.includes(100000000))) {
			    formContext.getControl(this.Attributes.BINNumber).setVisible(true);
			}
			else{
			    formContext.getControl(this.Attributes.BINNumber).setVisible(false);
			}
		    if ((selectedCreditNetworkValues.includes(100000001))) {
			   formContext.getControl(this.Attributes.ICA).setVisible(true);

			}
			else{
		         formContext.getControl(this.Attributes.ICA).setVisible(false);
				 }
			if ((selectedCreditNetworkValues.includes(100000002))) {
			   formContext.getControl(this.Attributes.SponsorID).setVisible(true);

			}
			else{
			     formContext.getControl(this.Attributes.SponsorID).setVisible(false);

			}
         }
		 else{
		      formContext.getControl(this.Attributes.BINNumber).setVisible(false);
			  formContext.getControl(this.Attributes.ICA).setVisible(false);
			  formContext.getControl(this.Attributes.SponsorID).setVisible(false);
		 
		 
		 }
	},      

//    showAndHideBasedOnNotApplicable: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicable = formContext.getAttribute(this.Attributes.notApplicable).getValue();
//            if (notApplicable !== null && notApplicable !== undefined && notApplicable === true) {
//                //formContext.getControl(this.Attributes.documentUpload).setVisible(false);
//                //formContext.getControl(this.Attributes.ciqForm).setVisible(false);
//                //formContext.getControl(this.Attributes.completionDate).setVisible(false);
//            }
//            else {
//                //formContext.getControl(this.Attributes.documentUpload).setVisible(true);
//                //formContext.getControl(this.Attributes.ciqForm).setVisible(true);
//                //formContext.getControl(this.Attributes.completionDate).setVisible(true);
//                //			formContext.getAttribute(this.Attributes.completionDate).setRequiredLevel("required");
//                //			formContext.getAttribute(this.Attributes.documentUpload).setRequiredLevel("required");
//                //			formContext.getAttribute(this.Attributes.ciqForm).setRequiredLevel("required");
//            }
//        }
//    },
//    HideDocumentUpload: function (executionContext) {
//		var formContext = executionContext.getFormContext();
//		var ciqForm = formContext.getAttribute(this.Attributes.ciqForm).getValue();
//		if (ciqForm !== null ){
//			formContext.getControl("crb_documentupload").setVisible(false);
//		}
//		else {
//			formContext.getControl("crb_documentupload").setVisible(true);
//		}
//	},
//    showAndHideFieldsForSFTFormBasedOnNotApplicable: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicableForSFTForm = formContext.getAttribute(this.Attributes.notApplicableForSFTForm).getValue();
//            if (notApplicableForSFTForm !== null && notApplicableForSFTForm !== undefined && notApplicableForSFTForm === true) {
//                formContext.getControl(this.Attributes.documentUploadForSFTForm).setVisible(false);
//                formContext.getControl(this.Attributes.SFTForm).setVisible(false);
//                formContext.getControl(this.Attributes.completionDateForSFTForm).setVisible(false);
//            }
//            else {
//                formContext.getControl(this.Attributes.documentUploadForSFTForm).setVisible(true);
//                formContext.getControl(this.Attributes.SFTForm).setVisible(true);
//                formContext.getControl(this.Attributes.completionDateForSFTForm).setVisible(true);
//                //formContext.getAttribute(this.Attributes.completionDateForSFTForm).setRequiredLevel("required");
//                //formContext.getAttribute(this.Attributes.documentUploadForSFTForm).setRequiredLevel("required");
//                //formContext.getAttribute(this.Attributes.SFTForm).setRequiredLevel("required");
//            }
//        }
//    },
//    HideDocumentUploadForSFTForm: function (executionContext) {
//		var formContext = executionContext.getFormContext();
//		var SFTForm = formContext.getAttribute(this.Attributes.SFTForm).getValue();
//		if (SFTForm !== null ){
//			formContext.getControl(this.Attributes.documentUploadForSFTForm).setVisible(false);
//		}
//		else {
//			formContext.getControl(this.Attributes.documentUploadForSFTForm).setVisible(true);
//		}
//	},
      
//showAndHideFieldsForVISABillingBasedOnNotApplicable: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicableForVISABilling = formContext.getAttribute(this.Attributes.notApplicableForVISABilling).getValue();
//            if (notApplicableForVISABilling !== null && notApplicableForVISABilling !== undefined && notApplicableForVISABilling === true) {
//                formContext.getControl(this.Attributes.documentUploadForVISABilling).setVisible(false);
//                formContext.getControl(this.Attributes.VISABillingForm).setVisible(false);
//                formContext.getControl(this.Attributes.completionDateForVISABilling).setVisible(false);
//            }
//            else {
//                formContext.getControl(this.Attributes.documentUploadForVISABilling).setVisible(true);
//                formContext.getControl(this.Attributes.VISABillingForm).setVisible(true);
//                formContext.getControl(this.Attributes.completionDateForVISABilling).setVisible(true);
//                //	formContext.getAttribute(this.Attributes.completionDateForVISABilling).setRequiredLevel("required");
//                //	formContext.getAttribute(this.Attributes.documentUploadForVISABilling).setRequiredLevel("required");
//                //	formContext.getAttribute(this.Attributes.VISABillingForm).setRequiredLevel("required");
//            }
//        }
//    },
//    showAndHideFieldsForBINRequestBasedOnNotApplicable: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicableForBINRequest = formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.notApplicableForBINRequest).getValue();
//            if (notApplicableForBINRequest !== null && notApplicableForBINRequest !== undefined && notApplicableForBINRequest === true) {
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.documentUploadForBINRequest).setVisible(false);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.binRequestForm).setVisible(false);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.completionDateForBINRequest).setVisible(false);
//            }
//            //else if (formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.BinRequest).getVisible() === true) {
//            else {
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.documentUploadForBINRequest).setVisible(true);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.binRequestForm).setVisible(true);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.completionDateForBINRequest).setVisible(true);
//                //	formContext.getAttribute(this.Attributes.completionDateForBINRequest).setRequiredLevel("required");
//                //	formContext.getAttribute(this.Attributes.documentUploadForBINRequest).setRequiredLevel("required");
//                //	formContext.getAttribute(this.Attributes.BINRequestForm).setRequiredLevel("required");
//            }
//        }
//    },
//    
//    HideDocumentUploadForVBMSForm: function (executionContext) {
//		var formContext = executionContext.getFormContext();
//		var VBMSForm = formContext.getAttribute(this.Attributes.VISABillingForm).getValue();
//		if (VBMSForm !== null ){
//			formContext.getControl(this.Attributes.documentUploadForVISABilling).setVisible(false);
//		}
//		else {
//			formContext.getControl(this.Attributes.documentUploadForVISABilling).setVisible(true);
//		}
//	},
//    showAndHideFieldsofReportCIQsection: function (executionContext) {
//
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicableForCIQ = formContext.getAttribute(this.Attributes.notapplicablereportciq).getValue();
//            if (notApplicableForCIQ !== null && notApplicableForCIQ !== undefined && notApplicableForCIQ === true) {
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.documentuploadciqreport).setVisible(false);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.reportciqformciqreport).setVisible(false);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.completiondateciqreport).setVisible(false);
//            }
//            else {
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.documentuploadciqreport).setVisible(true);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.reportciqformciqreport).setVisible(true);
//                formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.completiondateciqreport).setVisible(true);
//                //formContext.getAttribute(this.Attributes.completiondateciqreport).setRequiredLevel("required");
//                //formContext.getAttribute(this.Attributes.documentuploadciqreport).setRequiredLevel("required");
//                //formContext.getAttribute(this.Attributes.reportciqformciqreport).setRequiredLevel("required");
//            }
//        }
//    },
//
//    HideDocumentUploadForReportCIQ: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var ReportCIQForm = formContext.getAttribute(this.Attributes.reportciqformciqreport).getValue();
//        if (ReportCIQForm !== null ){
//		formContext.getControl(this.Attributes.documentuploadciqreport).setVisible(false);
//        }
//        else {
//		formContext.getControl(this.Attributes.documentuploadciqreport).setVisible(true);
//        }
//    },
//    showAndHideFieldsForVROLRIDRequestBasedOnNotApplicable: function (executionContext) {
//        var formContext = executionContext.getFormContext();
//        var isThisNewBinPartner = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
//        var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
//        if (creditNetwork && (creditNetwork.includes(this.LOV.CreditNetwork.Visa)) && isThisNewBinPartner === this.LOV.IsThisANewBINPartnerOrSharedBINPartner.NewBINPartner) {
//            var notApplicableVlorRidRequest = formContext.getAttribute(this.Attributes.notApplicableVlorRidRequest).getValue();
//            if (!notApplicableVlorRidRequest) {
//
//                formContext.getControl(this.Attributes.vrolRidRequestForm).setVisible(true);
//                formContext.getControl(this.Attributes.vroldRidCompletionDate).setVisible(true);
//            }
//            else {
//                formContext.getControl(this.Attributes.vrolRidRequestForm).setVisible(false);
//                formContext.getControl(this.Attributes.vroldRidCompletionDate).setVisible(false);
//            }
//        }
//    },
    OnchangeOfCreditNetwork: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var onboardingId = formContext.data.entity.getId().substring(1, 37);
        var creditNetworkAfter = formContext.getAttribute(this.Attributes.creditnetworkMA).getValue();
        var creditNetworkBefore = [];
        var showAlert = true;
        var valueRemoved =  false;
        await Xrm.WebApi.retrieveRecord("crb_onboarding", onboardingId, "?$select=crb_creditnetworkformerchacq").then(
            function success(result) {
                console.log(result);
                // Columns
                var crb_onboardingid = result["crb_onboardingid"]; // Guid
                var crb_creditnetworkformerchacq = result["crb_creditnetworkformerchacq"]; // Choices
                //var crb_creditnetworkformerchacq_formatted = result["crb_creditnetworkformerchacq@OData.Community.Display.V1.FormattedValue"];
                if (crb_creditnetworkformerchacq === null) {
                    showAlert = false;
                }
                else if (!crb_creditnetworkformerchacq.includes(",")) {
                    creditNetworkBefore.push(crb_creditnetworkformerchacq);
                    showAlert = true;
                }
                else {
                    creditNetworkBefore = crb_creditnetworkformerchacq.split(",");
                    showAlert = true;
                }
            },
            function (error) {
                console.log(error.message);
            }
        );
        creditNetworkBefore = creditNetworkBefore.map(str => parseInt(str,10))
        creditNetworkBefore.forEach(function(item){
            if(!creditNetworkAfter.includes(item)){
              valueRemoved = true;
            }
        });
        if (showAlert === true && valueRemoved === true) {
            var confirmStrings = {
                text: "Associated forms subgird will be removed and records will be deleted, Do you want to continue ?",
                title: "Merchant Acquiring",
                confirmButtonLabel: "Ok",
                cancelButtonLabel: "Cancel"
            };
            var dialogOptions = {
                height: 200,
                width: 450
            };
            Xrm.Navigation.openConfirmDialog(confirmStrings, dialogOptions, null).then(
                function (success) {
                    if (success.confirmed) {
                        //formContext.getAttribute(CRB.CRM.PJ.IDD.Attributes.IDD.approvalRun).setValue(true);
                        CRB.CRM.PJ.Onboarding.HideAndShowSubgridCreditNetwork(executionContext);
                        formContext.data.save();
                    } else {
                        formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditnetworkMA).setValue(creditNetworkBefore);
                        CRB.CRM.PJ.Onboarding.HideAndShowSubgridCreditNetwork(executionContext);
                        //saveEvent.preventDefault();
                    }
                });
        }
        else{
            CRB.CRM.PJ.Onboarding.HideAndShowSubgridCreditNetwork(executionContext);
            }
    },    
    HideAndShowSubgridCreditNetwork: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var creditNetwork = formContext.getAttribute(this.Attributes.creditnetworkMA).getValue();
        if(creditNetwork !== null && creditNetwork !== undefined && creditNetwork.includes(100000000)) {
            formContext.getControl('Visa').setVisible(true);
        }
        else {
            formContext.getControl('Visa').setVisible(false);
        }
        if (creditNetwork !== null && creditNetwork !== undefined && creditNetwork.includes(100000001)) {
            formContext.getControl('MasterCard').setVisible(true);
        }
        else {
            formContext.getControl('MasterCard').setVisible(false);
        }
        if (creditNetwork !== null && creditNetwork !== undefined && creditNetwork.includes(100000002)) {
            formContext.getControl('Discover').setVisible(true);
        }
        else {
            formContext.getControl('Discover').setVisible(false);
        }
    },
    showHide_Implemenatation_MerchantAcquiringSection: async function(executionContext) {
    	var formContext = executionContext.getFormContext();
    	var teamNames = "General Due Diligence,Implementation Team,Operation Team,Network Team,Relationship Management Team,Business Development";
    	var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
    	var isMemberOfTeams = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamNames);
    	if (isMemberOfTeams) {
    		formContext.ui.tabs.get(this.TabName.Implementation).sections.get(this.Section.MerchantAcquiring).setVisible(true);
    		formContext.getControl('Visa').setVisible(true);
    		formContext.getControl('MasterCard').setVisible(true);
    		formContext.getControl('Discover').setVisible(true);
    	} else {
    		formContext.ui.tabs.get(this.TabName.Implementation).sections.get(this.Section.MerchantAcquiring).setVisible(false);
    		formContext.getControl('Visa').setVisible(false);
    		formContext.getControl('MasterCard').setVisible(false);
    		formContext.getControl('Discover').setVisible(false);
    	}
    },
    showHIdeFairLendingGoNoGoSection: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var currentUser = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var flag = false;
        var teams = [];
        teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(currentUser);
        teams.forEach(function (team) {
            if (team.name === "Fair Lending") {
                flag = true;
            }
        })
        if (flag) {
            formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo).setVisible(true);
        }
        else {
            formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo).setVisible(false);
        }
    },
    hideSubGrids: function(executionContext) {
        var formContext = executionContext.getFormContext();
        formContext.getControl(this.SubGrid.ACHOperationsReview).setVisible(false);
        formContext.getControl(this.SubGrid.FunctionalReviewConditions).setVisible(false);
        formContext.getControl(this.SubGrid.CreditRiskReview).setVisible(false);
        formContext.getControl(this.SubGrid.ITComplianceReview).setVisible(false);
        formContext.getControl(this.SubGrid.RegulatoryComplianceReview).setVisible(false);
        formContext.getControl(this.SubGrid.wireproductsReview).setVisible(false);
        formContext.getControl(this.SubGrid.BSAAMLReviews).setVisible(false);
        formContext.getControl(this.SubGrid.CardPaymentOperationsView).setVisible(false);
        formContext.getControl(this.SubGrid.DDReview).setVisible(false);
        formContext.getControl(this.SubGrid.rtpOperationsReview).setVisible(false);
    },
    updateFiarlendingDueDiligenceDate: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var fairLendingDueDiligence = formContext.getAttribute(this.Attributes.FairLendingDueDiligence).getValue();
        var currentDate = new Date();
        if(fairLendingDueDiligence){
            formContext.getAttribute(this.Attributes.FairlendingReviewDate).setValue(currentDate);
			formContext.getControl(this.Attributes.FairlendingReviewDate).setDisabled(true);

        }
        else{
            formContext.getAttribute(this.Attributes.FairlendingReviewDate).setValue(null);
        }
    },
	showFairLendingDueDiligenceDate: function (executionContext) {
		var formContext = executionContext.getFormContext();
        var fairLendingDueDiligence = formContext.getAttribute(this.Attributes.FairLendingDueDiligence).getValue();
        
        if(fairLendingDueDiligence){
            formContext.getControl(this.Attributes.FairlendingReviewDate).setVisible(true);
        }
        else{
            formContext.getControl(this.Attributes.FairlendingReviewDate).setVisible(false);
        }
	},
    updateFiarlendingDueDiligenceDataManagemet: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var fairLendingDueDiligenceDataManagent = formContext.getAttribute(this.Attributes.FairLendingDataManagement).getValue();
        var currentDate = new Date();
        if(fairLendingDueDiligenceDataManagent){
            formContext.getAttribute(this.Attributes.FairlendingDataManagementReviewdate).setValue(currentDate);
			formContext.getControl(this.Attributes.FairlendingDataManagementReviewdate).setDisabled(true);
        }
        else{
            formContext.getAttribute(this.Attributes.FairlendingDataManagementReviewdate).setValue(null);
        }
    },
	showFairLendingDueDiligenceDataManagementDate: function (executionContext) {
		var formContext = executionContext.getFormContext();
        var fairLendingDueDiligenceDataManagent = formContext.getAttribute(this.Attributes.FairLendingDataManagement).getValue();
        
        if(fairLendingDueDiligenceDataManagent){
            formContext.getControl(this.Attributes.FairlendingDataManagementReviewdate).setVisible(true);
        }
        else{
            formContext.getControl(this.Attributes.FairlendingDataManagementReviewdate).setVisible(false);
        }
	},
    OnchangeOfmerchACDebitNetwork: async function (executionContext) {
        
        var formContext = executionContext.getFormContext();
        var onboardingId = formContext.data.entity.getId().substring(1, 37);
        var debitNetworkAfter = formContext.getAttribute(this.Attributes.DebitNetwork4MerchAcq).getValue();
        var debitNetworkBefore ;
        await Xrm.WebApi.retrieveRecord("crb_onboarding", onboardingId, "?$select=crb_debitnetwork4merchacq").then(
			function success(result) {
				console.log(result);
				// Columns
				var crb_onboardingid = result["crb_onboardingid"]; // Guid
				debitNetworkBefore = result["crb_debitnetwork4merchacq"]; // Choice
				var crb_debitnetwork4merchacq_formatted = result["crb_debitnetwork4merchacq@OData.Community.Display.V1.FormattedValue"];
			},
			function(error) {
				console.log(error.message);
			}
		);
        
        if (debitNetworkBefore !== null) {
            var confirmStrings = {
                text: "The associated forms subgird will be removed and records will be deleted, Do you want to continue ?",
                title: "Merchant Acquiring",
                confirmButtonLabel: "Ok",
                cancelButtonLabel: "Cancel"
            };
            var dialogOptions = {
                height: 200,
                width: 450
            };
            Xrm.Navigation.openConfirmDialog(confirmStrings, dialogOptions, null).then(
                function (success) {
                    if (success.confirmed) {
                        //formContext.getAttribute(CRB.CRM.PJ.IDD.Attributes.IDD.approvalRun).setValue(true);
                        CRB.CRM.PJ.Onboarding.HideAndShowSubgridMercgACDebitNetwork(executionContext);
                        formContext.data.save();
                    } else {
                        formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.creditnetworkMA).setValue(debitNetworkBefore);
                        CRB.CRM.PJ.Onboarding.HideAndShowSubgridMercgACDebitNetwork(executionContext);
                        //saveEvent.preventDefault();
                    }
                });
        }
        else{
            CRB.CRM.PJ.Onboarding.HideAndShowSubgridMercgACDebitNetwork(executionContext);
            }
    },  
    HideAndShowSubgridMercgACDebitNetwork: function (executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        var debitNetwork = formContext.getAttribute(this.Attributes.DebitNetwork4MerchAcq).getValue();
        if(debitNetwork === 100000000 || debitNetwork === 100000001)  //100000000 is Existing and 100000001 is New
		{
            formContext.getControl(this.SubGrid.MerchantAcquiringDebitNetwork).setVisible(true);
        }
        else {
            formContext.getControl(this.SubGrid.MerchantAcquiringDebitNetwork).setVisible(false);
        }
        
    },
    EnableDisableIDInformation: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var teamsView = "General Due Diligence,Operation Team,Network Team,Relationship Management Team,Business Development";
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
        var teamedit = "Implementation Team";
        var isMemberOfTeamsedit = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamedit);

        if(isMemberOfTeamsView){
            formContext.getControl(this.Attributes.BINNumber).setDisabled(true);
            formContext.getControl(this.Attributes.ICA).setDisabled(true);
            formContext.getControl(this.Attributes.SponsorID).setDisabled(true);
        }
        else if(isMemberOfTeamsedit){
             formContext.getControl(this.Attributes.BINNumber).setDisabled(false);
             formContext.getControl(this.Attributes.ICA).setDisabled(false);
             formContext.getControl(this.Attributes.SponsorID).setDisabled(false);	
        }
        else{
            formContext.getControl(this.Attributes.BINNumber).setVisible(false);
            formContext.getControl(this.Attributes.ICA).setVisible(false);
            formContext.getControl(this.Attributes.SponsorID).setVisible(false);
        }
            
    }, 
        

    AlertMessageForFinanceApproval: async function (primaryControl){
    var formContext = primaryControl;
	var confirmStrings = {
            text: "Do you want to continue ?",
            title: "Send for Finance Approval",
            confirmButtonLabel: "OK",
            cancelButtonLabel: "Cancel"
        };
        var dialogOptions = {
            height: 200,
            width: 450
        };
				Xrm.Navigation.openConfirmDialog(confirmStrings, dialogOptions, null).then(
				async function (success) {
				if (success.confirmed) {
					console.log("Alert dialog closed");
					formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.FinanceApproval).setValue(1);
                    //CRB.CRM.PJ.Onboarding.lockUnlockSectionContractSetup(formContext);
					formContext.data.entity.save();
					Xrm.Navigation.openAlertDialog("Approval task created Sucessfully.");
					//CRB.CRM.PJ.Onboarding.makeFieldsReadOnly(primaryControl);
                    var tab = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract);
					var ContractApprovalSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractSetupAndApprovals);
                    var ContractCommentSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractComment);
                    var BillingSetupSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.BillingSetUp);
					ContractApprovalSection.controls.forEach((control)=>{control.setDisabled(true)});//Lock Section after creation of task
                    ContractCommentSection.controls.forEach((control)=>{control.setDisabled(true)});
                    BillingSetupSection.controls.forEach((control)=>{control.setDisabled(true)});
				}
				// Handle OK button action here
			},
			function (error) {
				console.log(error.message);
				Xrm.Navigation.openAlertDialog("Approval Task Failed." + error.message);
				// Handle Cancel button action here
			}
		);
	},
    lockUnlockSectionContractSetup: async function(formContext){
	//var formContext = executionContext.getFormContext();
	var onboardingId = formContext.data.entity.getId().replace("{", "").replace("}", "");
	var tab = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract);
	var ContractApprovalSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractSetupAndApprovals);
    var ContractCommentSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractComment);
	var BillingSetupSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.BillingSetUp);
					
	var flag = true;
    await Xrm.WebApi.retrieveMultipleRecords("task", "?$select=statecode,crb_approvalstatus,crb_approvaltype,_regardingobjectid_value,crb_tasktypecode&$filter=_regardingobjectid_value eq "+ onboardingId +" and (crb_approvaltype eq 1 or crb_approvaltype eq 2)").then(
	function success(results) {
		console.log(results);
		for (var i = 0; i < results.entities.length; i++) {
			var result = results.entities[i];
			// Columns
			var activityid = result["activityid"]; // Guid
			var crb_approvalstatus = result["crb_approvalstatus"]; // Choice
			var crb_approvalstatus_formatted = result["crb_approvalstatus@OData.Community.Display.V1.FormattedValue"];
			var crb_approvaltype = result["crb_approvaltype"]; // Choice
			var crb_approvaltype_formatted = result["crb_approvaltype@OData.Community.Display.V1.FormattedValue"];
			var regardingobjectid = result["_regardingobjectid_value"]; // Lookup
			var regardingobjectid_formatted = result["_regardingobjectid_value@OData.Community.Display.V1.FormattedValue"];
			var regardingobjectid_lookuplogicalname = result["_regardingobjectid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
			var crb_tasktypecode = result["crb_tasktypecode"]; // Choice
			var crb_tasktypecode_formatted = result["crb_tasktypecode@OData.Community.Display.V1.FormattedValue"];
            var statecode = result["statecode"];
            if(statecode !== 1){
                flag = false;
            }
		}
	},
	function(error) {
		console.log(error.message);
	}
);
if(!flag){
    ContractApprovalSection.controls.forEach((control)=>{control.setDisabled(true)});//Lock Section after creation of task
    ContractCommentSection.controls.forEach((control)=>{control.setDisabled(true)});
    BillingSetupSection.controls.forEach((control)=>{control.setDisabled(true)});
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.ContractApprovalSection).setDisabled(true);
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.ContractCommentSection).setDisabled(true);
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.BillingSetupSection).setDisabled(true);

}
else{
    ContractApprovalSection.controls.forEach((control)=>{control.setDisabled(false)});//UnLock Section after creation of task
    ContractCommentSection.controls.forEach((control)=>{control.setDisabled(false)});
    BillingSetupSection.controls.forEach((control)=>{control.setDisabled(false)});
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.ContractApprovalSection).setDisabled(false);
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.ContractCommentSection).setDisabled(false);
    //formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).sections.get(CRB.CRM.PJ.Onboarding.Section.BillingSetupSection).setDisabled(false);
}
},
    AlertMessageForSalesLeadApproval: async function (primaryControl){
    var formContext = primaryControl;
	var confirmStrings = {
            text: "Do you want to continue ?",
            title: "Send for Sales Lead Approval",
            confirmButtonLabel: "OK",
            cancelButtonLabel: "Cancel"
        };
        var dialogOptions = {
            height: 200,
            width: 450
        };
				Xrm.Navigation.openConfirmDialog(confirmStrings, dialogOptions, null).then(
				async function (success) {
				if (success.confirmed) {
					console.log("Alert dialog closed");
					formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.SalesLeadApproval).setValue(1);
					formContext.data.entity.save();
					Xrm.Navigation.openAlertDialog("Approval task created Sucessfully.");
                    //CRB.CRM.PJ.Onboarding.lockUnlockSectionContractSetup(formContext);
					//CRB.CRM.PJ.Onboarding.makeFieldsReadOnly(primaryControl);
                    var tab = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract);
					var section = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractSetupAndApprovals);
					var ContractApprovalSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractSetupAndApprovals);
                    var ContractCommentSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.ContractComment);
                    var BillingSetupSection = tab.sections.get(CRB.CRM.PJ.Onboarding.Section.BillingSetUp);
					ContractApprovalSection.controls.forEach((control)=>{control.setDisabled(true)});
                    ContractCommentSection.controls.forEach((control)=>{control.setDisabled(true)});
                    BillingSetupSection.controls.forEach((control)=>{control.setDisabled(true)});
				}
				// Handle OK button action here
			},
			function (error) {
				console.log(error.message);
				Xrm.Navigation.openAlertDialog("Approval Task Failed." + error.message);
				// Handle Cancel button action here
			}
		);
        
	},
    
    
   ShowHideFinanceApprovalButton: async function (primaryControl) {
        //var formContext = executionContext.getFormContext();
        var formContext = primaryControl;
        var teamsView = "Business Development";
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
        var contractInFocus = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).getDisplayState();

        if(isMemberOfTeamsView && contractInFocus==="expanded"){
            return true
        }
        else{
        return false
        }
            
    }, 

    RefreshRibbonOfOnboardingOnTabChange: function (executionContext){
        var formContext = executionContext.getFormContext();
        //var contractInFocus = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).getDisplayState();
        //if(contractInFocus==="expanded"){
        CRB.CRM.PJ.Onboarding.lockUnlockSectionContractSetup(formContext);
        formContext.ui.refreshRibbon();
        //}

    },
    setLabelbasedOnNetwork: function (executionContext) {
        var formContext = executionContext.getFormContext();
        if (formContext.getAttribute(this.Attributes.CreditNetwork).getValue() != null && formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue() != null) {
            var creditNetwork = formContext.getAttribute(this.Attributes.CreditNetwork).getValue();
            var binPartnerType = formContext.getAttribute(this.Attributes.newbinpartnerorsharedbinpartner).getValue();
            if (creditNetwork.includes(100000000) && binPartnerType === 100000000) {
                formContext.getControl(this.SubGrid.CardIssuingVISA).setLabel("Card Issuing - Visa - New Bin Partner");
            }
            if (creditNetwork.includes(100000000) && binPartnerType === 100000001) {
                formContext.getControl(this.SubGrid.CardIssuingVISA).setLabel("Card Issuing - Visa - Shared Bin Partner");
            }
            if (creditNetwork.includes(100000001) && binPartnerType === 100000000) {
                formContext.getControl(this.SubGrid.CardIssuingMasterCard).setLabel("Card Issuing - Mastercard - New Bin Partner");
            }
            if (creditNetwork.includes(100000001) && binPartnerType === 100000001) {
                formContext.getControl(this.SubGrid.CardIssuingMasterCard).setLabel("Card Issuing - Mastercard - Shared Bin Partner");
            }
            if (creditNetwork.includes(100000002) && binPartnerType === 100000000) {
                formContext.getControl(this.SubGrid.CardIssuingAmericanExpress).setLabel("Card Issuing - American Express - New Bin Partner");
            }
            if (creditNetwork.includes(100000002) && binPartnerType === 100000001) {
                formContext.getControl(this.SubGrid.CardIssuingAmericanExpress).setLabel("Card Issuing - American Express - Shared Bin Partner");
            }
        }
    },
    ShowAndHideContractSections: async function(executionContext){
        var formContext = executionContext.getFormContext();
        var currentUser = Xrm.Utility.getGlobalContext().userSettings;
        var userId = currentUser.userId.replace("{", "").replace("}", "");
        var flagCrb = false;
		var flagBD = false;
        var teams = [];
        teams = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
        teams.forEach(function(team){
            if(team.name === "CRB" ){
                flagCrb = true;
                
            }
			if(team.name ==="Business Development"){
				flagBD = true;
			}
            
        })
        if(flagCrb && flagBD){
            formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.ContractComment).setVisible(true);
			formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.ContractSetupAndApprovals).setVisible(true);
			formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.BillingSetUp).setVisible(true);
        }   
        else{
            formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.ContractComment).setVisible(false);
			formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.ContractSetupAndApprovals).setVisible(false);
			formContext.ui.tabs.get(this.TabName.Contract).sections.get(this.Section.BillingSetUp).setVisible(false);
        }

    },
    showHideSectionHighRiskApproval: async function(executionContext){
    var formContext = executionContext.getFormContext();
    var CRRMScore = formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue();
    if(CRRMScore !== null && CRRMScore == 100000000){
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.HighRiskApproval).setVisible(true);

    }
    else{
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).sections.get(CRB.CRM.PJ.Onboarding.Section.HighRiskApproval).setVisible(false);
    }


},

ShowHideCOSTestAccountRequestButton: async function (primaryControl) {
    //var formContext = executionContext.getFormContext();
    var formContext = primaryControl;
    var teamsView = "Implementation Team";
    var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
    var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
    var ImplementationInFocus = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).getDisplayState();
    if(ImplementationInFocus==="expanded" && isMemberOfTeamsView){
        return true
    }
    else{
    return false
    }
        
}, 

AlertMessageForCOSTestAccountRequestButton: async function (primaryControl){
    var formContext = primaryControl;
	var confirmStrings = {
            text: "Do you want to continue ?",
            title: "Send for Approval",
            confirmButtonLabel: "OK",
            cancelButtonLabel: "Cancel"
        };
        var dialogOptions = {
            height: 200,
            width: 450
        };
				Xrm.Navigation.openConfirmDialog(confirmStrings, dialogOptions, null).then(
				async function (success) {
				if (success.confirmed) {
					console.log("Alert dialog closed");
					formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.COSTestAccountRequest).setValue(1);
					formContext.data.entity.save();
            
				}
				// Handle OK button action here
			},
			function (error) {
				console.log(error.message);
				Xrm.Navigation.openAlertDialog("Approval Task Failed." + error.message);
				// Handle Cancel button action here
			}
		);
        
	},

EnableDisableHighSectionRiskApprovalOnRoles: async function (executionContext) {
    var formContext = executionContext.getFormContext();
    var teamsView = "General Due Diligence,Relationship Management,Business Development,Operation Team,Network Team";
    var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
    var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
    var teamedit = "Implementation Team";
    var isMemberOfTeamsedit = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamedit);

    if(isMemberOfTeamsView){
        formContext.getControl(this.Attributes.HighRiskApprovalStatus).setDisabled(true);
        formContext.ui.tabs.get(this.TabName.Implementation).sections.get(this.Section.HighRiskApproval).setVisible(true);
        
    }
    else if(isMemberOfTeamsedit){
         formContext.getControl(this.Attributes.HighRiskApprovalStatus).setDisabled(false);
         formContext.ui.tabs.get(this.TabName.Implementation).sections.get(this.Section.HighRiskApproval).setVisible(true);
         	
    }
    else{
        //formContext.getControl(this.Attributes.HighRiskApproval).setVisible(false);
        formContext.ui.tabs.get(this.TabName.Implementation).sections.get(this.Section.HighRiskApproval).setVisible(false);
       
    }
        
}, 

ShowHideHighRiskApprovalButton: async function (primaryControl) {
    //var formContext = executionContext.getFormContext();
    var formContext = primaryControl;
    var ImplementationInFocus = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Implementation).getDisplayState();
    var CRRMScore = formContext.getAttribute(this.Attributes.crrmscore_implementationTeam).getValue();
    if(ImplementationInFocus==="expanded" && CRRMScore == 100000000){
        return true
    }
    else{
    return false
    }
        
}, 
    checksectionstatusmandatoryfields: function(executionContext) {
    var formContext = executionContext.getFormContext();
    var impcossupportstatus= formContext.getAttribute(this.Attributes.impcossupportstatus).getValue();
    var bsaamlreviewstatus = formContext.getAttribute(this.Attributes.bsaamlreviewstatus).getValue();
    var functionalreviewstatus = formContext.getAttribute(this.Attributes.functionalreviewstatus).getValue();
    var achoperationreviewstatus = formContext.getAttribute(this.Attributes.achoperationreviewstatus).getValue();
    var regulatorycompliancereviewstatus = formContext.getAttribute(this.Attributes.regulatorycompliancereviewstatus).getValue();
    var ddbsaamlreviewstatus = formContext.getAttribute(this.Attributes.ddbsaamlreviewstatus).getValue();
    var rtpoperationreviewstatus = formContext.getAttribute(this.Attributes.rtpoperationreviewstatus).getValue();
    var wireoperationreviewstatus = formContext.getAttribute(this.Attributes.wireoperationreviewstatus).getValue();
    var legalreviewstatus = formContext.getAttribute(this.Attributes.legalreviewstatus).getValue();
    var cardpaymentstatus = formContext.getAttribute(this.Attributes.cardpaymentstatus).getValue();
    var creditriskstatus = formContext.getAttribute(this.Attributes.creditriskstatus).getValue();
    var ddstatus = formContext.getAttribute(this.Attributes.ddstatus).getValue();
    var appendixstatus = formContext.getAttribute(this.Attributes.appendixstatus).getValue();
    if(impcossupportstatus === 100000003){
       formContext.getAttribute(this.Attributes.TicketIDNumber).setRequiredLevel("required");
       }
       if(bsaamlreviewstatus === 3){
        formContext.getAttribute(this.Attributes. crrmscreeningdate1).setRequiredLevel("required");
        }
        if(functionalreviewstatus === 100000004){
        formContext.getAttribute(this.Attributes.functionalBusinessReview).setRequiredLevel("required");
        }
        if(achoperationreviewstatus === 100000004){
        formContext.getAttribute(this.Attributes.achBusinessReview).setRequiredLevel("required");
        formContext.getAttribute(this.Attributes.ACHOperationsReviewSummaryandAssessment).setRequiredLevel("required");
        formContext.getAttribute(this.Attributes.isentitydesignationclassifiedcorrectly).setRequiredLevel("required");
        formContext.getAttribute(this.Attributes.arethereturnratesauditreportssatisfactory).setRequiredLevel("required");
        formContext.getAttribute(this.Attributes.reviewedrecordofauthorizationforseccodes).setRequiredLevel("required");
        formContext.getAttribute(this.Attributes.attachsupplementfielach).setRequiredLevel("required");
        }
        if(regulatorycompliancereviewstatus === 100000004){
          formContext.getAttribute(this.Attributes.describetheregulatorycompliancereview).setRequiredLevel("required");
          formContext.getAttribute(this.Attributes.wereanyconcernsidentifiedduringthereview).setRequiredLevel("required");
          formContext.getAttribute(this.Attributes.identifiedconcernsandmigitations).setRequiredLevel("required");
          formContext.getAttribute(this.Attributes.regulatorycompliancename).setRequiredLevel("required");
           }
        if(ddbsaamlreviewstatus === 100000004 ){
          formContext.getAttribute(this.Attributes.employeename).setRequiredLevel("required");
           formContext.getAttribute(this.Attributes.bsaamlfunction).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.bsaamldate).setRequiredLevel("required");
             formContext.getAttribute(this.Attributes.supplementaldiscussionregardingamlprogram).setRequiredLevel("required");
             }
         if(rtpoperationreviewstatus === 100000004){
           formContext.getAttribute(this.Attributes.rtpoperationreviewsummaryandassessment).setRequiredLevel("required");
            formContext.getAttribute(this.Attributes.outcomeofrtpoperationreview).setRequiredLevel("required");
            }
          if(wireoperationreviewstatus === 100000004){
           formContext.getAttribute(this.Attributes.wireoperationreviewsummaryandassessment).setRequiredLevel("required");
           formContext.getAttribute(this.Attributes.outcomeofwireoperationreview).setRequiredLevel("required");
           }
          if(legalreviewstatus === 100000004){
            formContext.getAttribute(this.Attributes.legalreviewsummaryandassessment).setRequiredLevel("required");
             formContext.getAttribute(this.Attributes.outcomeoflegalreview).setRequiredLevel("required");
              formContext.getAttribute(this.Attribbutes.legalreviewassessmentcompletedate).setRequiredLevel("required");
              }
             if(cardpaymentstatus === 100000004){
              formContext.getAttribute(this.Attributes.cradpaymentopsreviewandsummary).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.outcomeofcradpaymentopsreview).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.cardpaymentopsreviewsummaryassessmentcompletiondate).setRequiredLevel("required");
              }
             if(creditriskstatus === 100000004){
              formContext.getAttribute(this.Attributes.creditofficerreviewsummaryandassessment).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.doescreditofficerrequireadditionalinfo).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.whatadditionaldocumentationisrequired).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.creditriskdescribe).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.outcomeofthecreditreview).setRequiredLevel("required");
              }
             if(ddstatus === 100000004){
              formContext.getAttribute(this.Attributes.summaryofcustomerprofileandassessment).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.arethereanyconcerns).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.ddreviewdescribe).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.duediligenceriskreviewassessmentcomplete).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.hasentitybeednreviewedbyappropriatecommittee).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.ddrationale).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.wasentityapprovedordeniedatcommittee).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.ddreviewdescribe2).setRequiredLevel("required");
              }
             if(appendixstatus === 100000004){
              formContext.getAttribute(this.Attributes.asofdate).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.approvedby).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.transactiontype).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.subledgers).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.appendixsummary).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.redflags).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.appendixaccounttype).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.productrisk).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.geographicrisk).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.partnerrisk).setRequiredLevel("required");
              formContext.getAttribute(this.Attributes.scenariosselected).setRequiredLevel("required");
              }
             
       },

  
    checkStatusFields: function(executionContext) {
	var formContext = executionContext.getFormContext();
	var onboardingstatus = formContext.getAttribute(this.Attributes.OnboardingStatus).getValue();


    var fieldToSectionMap = {
        "crb_gddstatus": "General Due Diligence",
        "crb_crstatus": "Credit Review",
        "crb_flrstatus": "Fair Lending Review",
        "crb_bsa_amlreviewstatus": "BSA/AML Review",
        "crb_tmrstatus": "Transaction Monitoring Review",
        "crb_frstatus": "Fraud Review",
        "crb_impcistatus": "Implementation Card Issuing",
        "crb_impmastatus": "Implementation - Merchant Acquiring",
        "crb_statuscos": "COS Support Section",
        "crb_statusgl": "GL Deposit Account Requisition",
        "crb_cosaccountopeningstatusdropdown": "COS Account Opening [Production Account]",
        "crb_statussandbox1": "Sandbox and Production Account Testing",
        "crb_highriskapprovalstatus": "Test To Live High Risk Approval",
        "crb_statusproduct": "Product Setup",
        "crb_impcosstatus": "Implementation - COS Account Setup and Approvals",
        "crb_bsaamlreviewstatus": "Payments - BSA/AMLReview",
        "crb_ddreviewstatus": "DD Review",
        "crb_appendixtransactionreviewstatus": "Appendix Transaction Monitoring Scenarios",
        "crb_functionalreviewstatus": "Functional Review",
        "crb_achreviewstatus": "ACH Operations Review",
        "crb_itcompliancestatus": "IT Compliance Review",
        "crb_regulatoryreviewstatus": "Regulatory Compliance Review",
        "crb_rtpreviewstatus": "RTP Operations Review",
        "crb_wirereviewstatus": "Wire Operations Review",
        "crb_legalreviewstatus": "Legal Review",
        "crb_cardpaymentreviewstatus": "Card Payment Operations Review",
        "crb_creditriskreviewstatus": "Credit Risk Review"
            
    };

    var incompleteFields = [];


	if (onboardingstatus == 3) {
		for (var fieldName in fieldToSectionMap) {
			if (fieldToSectionMap.hasOwnProperty(fieldName)) {
				var statusValue = formContext.getAttribute(fieldName).getValue();

				
				if (statusValue !== 3 && statusValue !== 100000003 && statusValue !== 100000002 && statusValue !== 100000004) { 
					var sectionName = fieldToSectionMap[fieldName];
					incompleteFields.push(sectionName);
				}
			}
		}
        if (incompleteFields.length > 0) {
            var alertStrings = { confirmButtonLabel: "Ok", text: "The following sections have incomplete status fields: " + incompleteFields.join(",\n"), title: "Alert" };
            var alertOptions = { height: 300, width: 260 };
            //executionContext.getEventArgs().preventDefault();
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
                function (success) {
                    formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.OnboardingStatus).setValue(2);
                    
                },
                function (error) {
                   // console.log(error.message);
                });
             
                 
        }
	}

        
},
    lockunlockonboardingstatus: async function (executionContext) {
        var formContext = executionContext.getFormContext();
        var teamsView = "General Due Diligence";
        var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
        if (isMemberOfTeamsView) {
            formContext.getControl("header_crb_tabstatus").setDisabled(false);
        }
        else {
            formContext.getControl("header_crb_tabstatus").setDisabled(true);
        }
    },
    SetWebsiteURLFromPartner: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var partner = formContext.getAttribute(this.Attributes.Partner).getValue();
        if (partner) {
            var partnerId = partner[0].id;
            Xrm.WebApi.retrieveRecord("account", partnerId, "?$select=websiteurl").then(
                function success(result) {
                    var websiteurl = result["websiteurl"];
                    formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.Website).setValue(websiteurl);
                },
                function (error) {
                    console.log(error.message);
                }
            );
        }
        else {
            formContext.getAttribute(CRB.CRM.PJ.Onboarding.Attributes.Website).setValue(null);
        }
    },
    getSubgridInfo: function(formContext,subgridName) {
        var gridControl = formContext.getControl(subgridName);
        if (gridControl) {
            var subgridName = gridControl.getName();
            var parentSection = gridControl.getParent();
            if (parentSection) {
                var sectionName = parentSection.getName();
                return { subgridName: subgridName, sectionName: sectionName };
            } else {
                
                return null;
            }
        } else {
            
            return null;
        }
    },
    onClickOfCustomNewConditionButton: function (primaryControl,selectedControl) {
        var formContext = primaryControl;
        var subGridName = selectedControl.getName();
        var sectionNameAndSubgridName = this.getSubgridInfo(formContext,subGridName);
        var sectionName = sectionNameAndSubgridName.sectionName;
        var parameters = {};
        parameters["creatingConditionParentSectionName"] = sectionName;
        var creatingEntity = {
            id: formContext.data.entity.getId(),
            entityType: formContext.data.entity.getEntityName()
        }

        Xrm.Utility.openQuickCreate("crb_condition", creatingEntity, parameters)
        .then((res)=>{

        })
        .catch((error)=>{
            let alertStrings = { confirmButtonLabel: 'Ok', text: 'Failed to Open Condition Quick Create Form' };
            let alertOptions = { height: 120, width: 260 };
            
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
        });
    },
    showHideEnableDisableSections: async function (executionContext) {
		var formContext = executionContext.getFormContext();
		var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
		var userTeamsData = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(userId);
        
		this.showHideEnableDisableSectionsOfDueDiligenceTab(executionContext,userTeamsData);
        this.showHideEnableDisableSectionsOfPaymentsTab(executionContext,userTeamsData);
	},
    showHideEnableDisableSectionsOfDueDiligenceTab: function (executionContext,userTeamsData){
		// this show hide enable disable sections of due diligence tab based on the team the logged in user is in
		var formContext = executionContext.getFormContext();
		
		var userTeamsList =[];
		for(var i = 0; i < userTeamsData.length; i++){
			userTeamsList.push(userTeamsData[i].name);
		}
		var teamsObject = {
			GDD: "General Due Diligence",
			BSAAMl: "BSA/AML",
			Operations: "Operation Team",
			Implementation: "Implementation Team",
			Network: "Network Team",
			Credit: "Credit Review Team",
			FairLending: "Fair Lending",
			TransactionMonitoring: "Transaction Monitoring",
			Fraud: "Fraud",
			RegulatoryCompliance: "Regulatory Compliance",
            FairLendingDataManagement:"Fair Lending Data Management",
			FairLendingDueDiligence:"Fair Lending Due Diligence",
		}

		//#region For GDD Section
		
		if(userTeamsList.includes(teamsObject.GDD)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.gdd).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.gdd);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.SubmittedDocuments).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.SubmittedDocuments);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.ArcherSetupAndEngagementInformation).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.ArcherSetupAndEngagementInformation);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.crrm).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.crrm);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.PreliminaryRiskAssessmentTemplate).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.PreliminaryRiskAssessmentTemplate);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.DDMemoSlide).setVisible(true);
			var sectionObject5 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.DDMemoSlide);
			this.enableDisableFieldsOfSection(executionContext, sectionObject5, false);
		}
		else if(userTeamsList.includes(teamsObject.BSAAMl) || userTeamsList.includes(teamsObject.Operations) || userTeamsList.includes(teamsObject.Implementation) || userTeamsList.includes(teamsObject.Network)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.gdd).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.gdd);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.SubmittedDocuments).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.SubmittedDocuments);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.ArcherSetupAndEngagementInformation).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.ArcherSetupAndEngagementInformation);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.crrm).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.crrm);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.PreliminaryRiskAssessmentTemplate).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.PreliminaryRiskAssessmentTemplate);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.DDMemoSlide).setVisible(true);
			var sectionObject5 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.DDMemoSlide);
			this.enableDisableFieldsOfSection(executionContext, sectionObject5,true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.gdd).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.SubmittedDocuments).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.ArcherSetupAndEngagementInformation).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.crrm).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.PreliminaryRiskAssessmentTemplate).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.DDMemoSlide).setVisible(false);
		}

		//#endregion
	
		//#region For Credit Review Section

		if(userTeamsList.includes(teamsObject.Credit)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReview).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewFinancialReview).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewFinancialReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewMoodysRiskCalculation).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewMoodysRiskCalculation);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewDetermineReserves).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewDetermineReserves);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewReportingandServicingTape).setVisible(true);
			var sectionObject5 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewReportingandServicingTape);
			this.enableDisableFieldsOfSection(executionContext, sectionObject5, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditBureauSetup).setVisible(true);
			var sectionObject6 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditBureauSetup);
			this.enableDisableFieldsOfSection(executionContext, sectionObject6, false);
		}
		else if(userTeamsList.includes(teamsObject.GDD)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReview).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewFinancialReview).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewFinancialReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewMoodysRiskCalculation).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewMoodysRiskCalculation);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewDetermineReserves).setVisible(true);
			var sectionObject4 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewDetermineReserves);
			this.enableDisableFieldsOfSection(executionContext, sectionObject4, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewReportingandServicingTape).setVisible(true);
			var sectionObject5 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewReportingandServicingTape);
			this.enableDisableFieldsOfSection(executionContext, sectionObject5, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditBureauSetup).setVisible(true);
			var sectionObject6 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditBureauSetup);
			this.enableDisableFieldsOfSection(executionContext, sectionObject6, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReview).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewFinancialReview).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewMoodysRiskCalculation).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewDetermineReserves).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditReviewReportingandServicingTape).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.CreditBureauSetup).setVisible(false);
		}

		//#endregion
	
		//#region For Fair Lending Review Section
        
        var fieldsObj = this.Attributes;
		//var fieldThatMustBeReadOnlyAllTheTime = [fieldsObj.FairlendingReviewDate,fieldsObj.FairlendingDataManagementReviewdate];

		if(userTeamsList.includes(teamsObject.FairLending) || userTeamsList.includes(teamsObject.FairLendingDataManagement) || userTeamsList.includes(teamsObject.FairLendingDueDiligence)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fairLending).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fairLending);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingReview).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, false);
            
            //for(var i = 0; i < fieldThatMustBeReadOnlyAllTheTime.length; i++){
			//	formContext.getControl(fieldThatMustBeReadOnlyAllTheTime[i]).setDisabled(true);
			//}
		}
		else if(userTeamsList.includes(teamsObject.GDD)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fairLending).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fairLending);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingReview).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingReview);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fairLending).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingReview).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.FairLendingGoNoGo).setVisible(false);
		}

		//#endregion
	
		//#region For BSA/AMl Review Section

		if(userTeamsList.includes(teamsObject.BSAAMl)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.bsaaml).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.bsaaml);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);
		}
		else if(userTeamsList.includes(teamsObject.GDD)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.bsaaml).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.bsaaml);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.bsaaml).setVisible(false);
		}

		//#endregion
	
		//#region Transaction Monitoring Review Section

		if(userTeamsList.includes(teamsObject.TransactionMonitoring) || userTeamsList.includes(teamsObject.BSAAMl)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.transactionMontoring).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.transactionMontoring);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);
		}
		else if(userTeamsList.includes(teamsObject.GDD)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.transactionMontoring).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.transactionMontoring);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.transactionMontoring).setVisible(false);
		}

		//#endregion
	
		//#region Fraud Review Section

		if(userTeamsList.includes(teamsObject.Fraud)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fraud).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fraud);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);
		}
		else if(userTeamsList.includes(teamsObject.GDD) || userTeamsList.includes(teamsObject.BSAAMl) || userTeamsList.includes(teamsObject.TransactionMonitoring)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fraud).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fraud);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.fraud).setVisible(false);
		}

		//#endregion
	
		//#region Regulatory Compliance Review Section

		if(userTeamsList.includes(teamsObject.RegulatoryCompliance)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.APRValidationInterestCalculationAccrualMethod).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.APRValidationInterestCalculationAccrualMethod);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.regulatoryComplianceReview2).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.regulatoryComplianceReview2);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, false);
		}
		else if(userTeamsList.includes(teamsObject.GDD) || userTeamsList.includes(teamsObject.BSAAMl)){
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).setVisible(true);
			var sectionObject = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD);
			this.enableDisableFieldsOfSection(executionContext, sectionObject, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.APRValidationInterestCalculationAccrualMethod).setVisible(true);
			var sectionObject2 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.APRValidationInterestCalculationAccrualMethod);
			this.enableDisableFieldsOfSection(executionContext, sectionObject2, true);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.regulatoryComplianceReview2).setVisible(true);
			var sectionObject3 = formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.regulatoryComplianceReview2);
			this.enableDisableFieldsOfSection(executionContext, sectionObject3, true);
		}
		else{
			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.RegulatoryComplianceReviewDD).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.APRValidationInterestCalculationAccrualMethod).setVisible(false);

			formContext.ui.tabs.get(this.TabName.DueDiligence).sections.get(this.Section.regulatoryComplianceReview2).setVisible(false);
		}

		//#endregion
        this.editableFairLendingDueDiligience(executionContext,userTeamsData);
        this.updateFiarlendingDueDiligenceDate(executionContext);
        this.updateFiarlendingDueDiligenceDataManagemet(executionContext);
       
	},
	enableDisableFieldsOfSection: function (executionContext, sectionObject, disable){
		var formContext = executionContext.getFormContext();
		var controls = sectionObject.controls.get();
		for (var i = 0; i < controls.length; i++) {
			controls[i].setDisabled(disable);
		}
	},
    
    ShowAllSectionsOnPaymentTab: function(executionContext){
    var formContext = executionContext.getFormContext();
	var PaymentDDTab = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments);
    if(PaymentDDTab != null){
    
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.achReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.itcompliancereview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.regulatoryComplianceReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.bsaamlReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.rtpOperationsReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.wireOpsReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.legalReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.cardPaymentOperationReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.creditRiskReviewsec).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.ddReviewSec).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.transactionMonitoringReview).setVisible(true);
        formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Payments).sections.get(CRB.CRM.PJ.Onboarding.Section.FinalDecision).setVisible(true);
        CRB.CRM.PJ.Onboarding.DisablePaymentsTabFields(executionContext);
    }
    
    showHideEnableDisableSectionsOfPaymentsTab: function (executionContext,userTeamsData){
	// this show hide enable disable sections of payments tab based on the team the logged in user is in
	var formContext = executionContext.getFormContext();
	
	var userTeamsList =[];
	for(var i = 0; i < userTeamsData.length; i++){
		userTeamsList.push(userTeamsData[i].name);
	}
	var teamsObject = {
		ACHOperations: "ACH Operations",
		ITCompliance: "IT Compliance",
		RegulatoryCompliance: "Regulatory Compliance",
		BSAAMl: "BSA/AML",
		RTPOperations: "RTP Operations",
		WireOperations: "Wire Operations",
		LegalTeam: "Legal Team",
		CardPaymentOperations: "Card Payment Operations",
		CreditReviewTeam: "Credit Review Team",
		GDD: "General Due Diligence",
	}	
        
        if(userTeamsList.includes(teamsObject.ACHOperations)){
	    //formContext.ui.tabs.get(this.TabName.Payments).sections.get(this.Section.achReview).setVisible(true);
		var sectionObject = formContext.ui.tabs.get(this.TabName.Payments).sections.get(this.Section.achReview);
		this.enableDisableFieldsOfSection(executionContext, sectionObject, true);
		}
        
        else if(userTeamsList.includes(teamsObject.ITCompliance)){
	    //formContext.ui.tabs.get(this.TabName.Payments).sections.get(this.Section.achReview).setVisible(true);
		var sectionObject = formContext.ui.tabs.get(this.TabName.Payments).sections.get(this.Section.itcompliancereview);
		this.enableDisableFieldsOfSection(executionContext, sectionObject, true);
		}

	}
	
},

    /*hideSubgridButtonsInOnboarding: function (primaryControl,secondaryControl) {
		var enityName = primaryControl.data.entity.getEntityName();
		if(enityName == "crb_onboarding"){
			return false;
		}
	},*/
    editableFairLendingDueDiligience: function (executionContext,fairLendingDueDiligenceteam) {
        var formContext = executionContext.getFormContext();
        var currentUser = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
        var flag = false;
		var flag1 = false;
        //var fairLendingDueDiligenceteam = [];
		//var FairLendingDataManagementteam = [];
        //fairLendingDueDiligenceteam = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(currentUser);
        fairLendingDueDiligenceteam.forEach(function (teams) {
            if (teams.name === "Fair Lending Due Diligence") {
                flag = true;
            }
            if (teams.name === "Fair Lending Data Management") {
                flag1 = true;
            }
        })
		//FairLendingDataManagementteam = await CRB.CRM.PJ.Common.getTeamsbasedonUserId(currentUser);
        //FairLendingDataManagementteam.forEach(function (FairLendingDataManagementteam) {
			//if (FairLendingDataManagementteam.name === "Fair Lending Data Management") {
             //   flag1 = true;
           // }
		//})
        if (flag) {
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDueDiligence).setDisabled(false);
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDataManagement).setDisabled(true);
        }
        if(flag1){
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDueDiligence).setDisabled(true);
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDataManagement).setDisabled(false);
		}
        if(flag && flag1){
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDueDiligence).setDisabled(false);
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDataManagement).setDisabled(false);
		}
		if(!flag && !flag1){
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDueDiligence).setDisabled(true);
			formContext.getControl(CRB.CRM.PJ.Onboarding.Attributes.FairLendingDataManagement).setDisabled(true);
		}
    },
    showandhidedocreviewbutton: async function (PrimaryControl) {

	var teamsView = "General Due Diligence";
	var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{", "").replace("}", "");
	var isMemberOfTeamsView = await CRB.CRM.PJ.Common.checkIfUserIdIsPartOfTeams(userId, teamsView);
	//var contractInFocus = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.Contract).getDisplayState();
	//var selectedcontrolcount = SelectedControlSelectedItemIds.length;
	if (isMemberOfTeamsView) {
		return true
	}
	else {
		return false
	}
  },
  
  DisableDDTabFields : function (executionContext) {
    var formContext = executionContext.getFormContext();
    var summaryObj = formContext.ui.tabs.get(CRB.CRM.PJ.Onboarding.TabName.DueDiligence);
    var summarySections = summaryObj.sections.get()
    for (var i = 0; i < summarySections.length; i  ) {
        var sectionFields = summarySections[i].controls.get();
        for (var j = 0; j < sectionFields.length; j  ) {
            sectionFields[j].setDisabled(true);
        }
    }
},
  
  showHide_Implemenatation_Debit: async function (executionContext){
	var formContext = executionContext.getFormContext();
	var debitNetwork = formContext.getAttribute(this.Attributes.DebitNetwork).getValue();

	if(debitNetwork === null)
	{
      formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(false);
	}
	else{
		const DebitValues = debitNetwork; // Assign creditNetwork directly to selectedCreditNetworkValues

		if (debitNetwork === 100000000) {
			formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(true);		
		}
		else
			formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(false);
		}

		if (debitNetwork === 100000001) {
			formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(true);		
		}
		else {
			formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(false);
		}

		if (debitNetwork === 100000002) {
			formContext.getControl(this.SubGrid.CardIssingDebitNetwork).setVisible(false);		
		}
		
}
  
  
}
