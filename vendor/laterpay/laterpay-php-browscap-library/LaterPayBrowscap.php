<?php

/**
 * LaterPay browser helper.
 *
 * Plugin Name: LaterPay
 * Plugin URI: https://github.com/laterpay/laterpay-php-browscap-library
 * Author URI: https://laterpay.net/
 */
class LaterPayBrowscap extends Browscap
{
    /**
     * Return array of all browser infos.
     *
     * @return array
     */
    public function getBrowserInfo()
    {
        return $this->getBrowser(NULL, TRUE);
    }

    /**
     * Conditional to test for cookie support.
     *
     * @return bool
     */
    public function isBrowserSupportsCookies()
    {
        $browserInfo = $this->getBrowserInfo();

        if (empty($browserInfo)) {
            return TRUE;
        }

        if (isset($browserInfo['Cookies'])) {
            if ($browserInfo['Cookies'] == 1 || $browserInfo['Cookies'] == 'true') {
                return TRUE;
            }
        }

        return FALSE;
    }

    /**
     * Conditional to test for crawler.
     *
     * @param string $version Specific browser version
     *
     * @return bool
     */
    public function isCrawler($version = '')
    {
        $browserInfo = $this->getBrowserInfo();

        if (empty($browserInfo)) {
            return FALSE;
        }

        if (isset($browserInfo['Crawler']) && ($browserInfo['Crawler'] == 1 || $browserInfo['Crawler'] == 'true')) {
            if ($version == '') {
                return TRUE;
            } elseif ($browserInfo['MajorVer'] == $version) {
                return TRUE;
            } else {
                return FALSE;
            }
        } else {
            return FALSE;
        }
    }

}
