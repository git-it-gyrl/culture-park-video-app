class ProfileController < ApplicationController
    def index
        @profiles = Profile.all 

        render json: @profiles, status: :ok
    end
    
    def create
        profile = Profile.new(profile_params)

        @profile.save
        render json: @profile, status: :created  
    end

    def destroy
        @profile = Profile.where(id:params[:id]),first
            if @profile.destroy
                head(:ok)
            else 
                head(:unprocessable_entity)
            end 
    end



    private

    def profile_params
        params.require(:profile).permit(:name)
    end


end
