class ApiConstraints
  def initialize(options)
    @version = options[:version]
    @default = options[:default] || false
  end

  def matches?(request)
    check_headers(request.headers) || @default
  end

  private 
  
  def check_headers(headers)
    accept = headers[:accept]
    accept && accept.include?("application/vnd.onemobchallenge.v#{@version}+json")
  end
end