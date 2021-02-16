require "rails_helper"

RSpec.describe Api::V1::ImagesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/images").to route_to("api/v1/images#index")
    end

    it "routes to #new" do
      expect(get: "/api/v1/images/new").to route_to("api/v1/images#new")
    end

    it "routes to #show" do
      expect(get: "/api/v1/images/1").to route_to("api/v1/images#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/api/v1/images/1/edit").to route_to("api/v1/images#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/api/v1/images").to route_to("api/v1/images#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/api/v1/images/1").to route_to("api/v1/images#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/api/v1/images/1").to route_to("api/v1/images#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/api/v1/images/1").to route_to("api/v1/images#destroy", id: "1")
    end
  end
end
