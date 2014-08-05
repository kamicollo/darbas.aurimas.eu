<?php

define('SETTINGS_LOCATION', '/home/aurimas/domains/opendata.lt/settings/settings.ini');

try {
	/* initialize all stuff */
	require_once(dirname(__FILE__) . '/shared/XInitializator.php');
	XInitializator::initialise(SETTINGS_LOCATION);		
	XInitializator::registerClass('DB', dirname(__FILE__) . '/shared/DB.php');;
	XInitializator::registerClass('PLogger', dirname(__FILE__) . '/shared/PLogger.php');
	XInitializator::registerClass('PLoggerScreenStore', dirname(__FILE__) . '/shared/PLogger.php');
	XInitializator::registerClass('PLoggerFileStore', dirname(__FILE__) . '/shared/PLogger.php');
	XInitializator::registerClass('WorkData', dirname(__FILE__) . '/WorkData.php');
	XInitializator::registerClass('Response', dirname(__FILE__) . '/Response.php');
	/* start working */
	date_default_timezone_set('Europe/Helsinki');
	PLogger::initialize(new PLoggerScreenStore(), PLogger::E_NOTICE, false);
}
catch (Exception $e) {
	if (class_exists('Plogger', false)) {
        PLogger::logError('Uncought exception', $e->__toString());
    }
	else echo '<pre>' . $e->__toString() . '</pre>';
}
