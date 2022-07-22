require 'rails_helper'

describe Queries::PetitionQuery, type: :graphql do
  let(:user) { FactoryBot.create(:user) }
  let(:petition) { FactoryBot.create(:petition, user: user) }
  let(:media_file) { FactoryBot.create(:petition_media_file, petition: petition) }
  let(:vote) { FactoryBot.create(:vote, user: user, petition: petition) }
  let(:query) do
    <<~GRAPHQL
      query{
        petitions {
          id
          title
          description
          numberOfVotes
          mediaFiles {
            id
          }
        }
      }
    GRAPHQL
  end

  before do
    user
    petition
    vote
    media_file
  end

  context "getting petitions" do
    let(:request) do
      ApplicationSchema.execute(
        query,
        variables: {},
        context: { current_user: user }
      )
    end

    let(:returned_petitions) { request["data"]["petitions"] }

    it "returns all petitions" do
      expect(returned_petitions[0]).to match(hash_including({
                                                              "title" => petition.title,
                                                              "description" => petition.description,
                                                              "numberOfVotes" => 1,
                                                            }))
    end

    it "has media file" do
      expect(returned_petitions[0]["mediaFiles"][0]).to match(hash_including({
                                                                               "id" => media_file.id
                                                                           }))
    end
  end
end
