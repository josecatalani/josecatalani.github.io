<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class AbstractController extends CI_Controller
{
	var $_data;
	private $_template;

	function __construct()
	{
		parent::__construct();
                
		$this->_data['page_title'] = DEFAULT_TITLE;
		$this->_data['page_description'] = DEFAULT_DESCRIPTION;
                
                /* Open Graph Meta tags */
		$this->_data['page_og_url'] = "";
		$this->_data['page_og_description'] = "";
		$this->_data['page_og_images'] = "";
                
                /* Common Medias*/
		$this->_data['page_javascript'] = array();
		$this->_data['page_stylesheet'] = array();
                
		$this->addJavaScript('third-party/jquery.min.js');
		$this->addJavaScript('third-party/jquery.unevent.js');
		$this->addJavaScript('third-party/snap.svg-min.js');
		$this->addJavaScript('third-party/jquery.isotope.min.js');
		$this->addJavaScript('third-party/jquery.imagesloaded.min.js');
		/*$this->addJavaScript('third-party/jquery.address.min.js');*/
		$this->addJavaScript('third-party/jquery.velocity.min.js');
                
                /* Loading Commom Classes */
                $this->load->library('user_agent');
                
                /* Loading Commom JavaScripts */
		$this->addStylesheet('style.css');
                
		$this->addJavaScript('main.js');
		$this->addJavaScript('functions.js');  
	}
	
	function index()
	{
		$this->_data['page_contents'] = $this->load->view($this->_template, $this->_data, true);
                
		$this->load->view('master/master_view', $this->_data);
	}
        
	protected final function addJavaScript($url)
	{
		$domain = filter_var($url, FILTER_VALIDATE_URL) ? "" : base_url() . 'library/js/'; 
                
		array_push($this->_data['page_javascript'], $domain . $url);
	}
	
	protected final function addStylesheet($url)
	{
		$domain = filter_var($url, FILTER_VALIDATE_URL) ? "" : base_url() . 'library/css/'; 
                
		array_push($this->_data['page_stylesheet'], $domain . $url);
	}
	
	protected final function setPageTitle($title, $page_url = false)
	{
                if($page_url == true)
                {
                    $this->_data['page_title'] = $title . ' | ' . DEFAULT_TITLE;
                }
                else
                {
                    $this->_data['page_title'] = $title;
                }
	}
	
	protected final function setPageDescription($description)
	{
		$this->_data['page_description'] = $description;
	}
        
	/* Open Graph Tags */
	protected final function setOpenGraphUrl($image)
	{
		$this->_data['page_og_url'] = $image;
	}
	
	protected final function setOpenGraphDescription($image)
	{
		$this->_data['page_og_description'] = $image;
	}
	
	protected final function setOpenGraphImage($image)
	{
		$this->_data['page_og_image'] = $image;
	}
	
	protected final function setTemplate($template)
	{
		$this->_template = $template;
	}
}